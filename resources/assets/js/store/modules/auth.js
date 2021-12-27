import AuthHelper from "../../helpers/AuthHelper";
// import Constants from "../../Constants";
import { router } from "../../router/index";
import Utilities from "../../Utilities";

const state = {
  token: "",
  user: false,
  // detail: false,
  // user_customer: 0,
  // user_agency: 1,
  // avatar: '',
  permissions: false,
};

const getters = {
  get_token(state) {
    if (state.token) return state.token;
    else if (localStorage.token) return localStorage.token;
    else return false;
  },
  get_user(state) {
    if (state.user) return state.user;
    else if (localStorage.user) return JSON.parse(localStorage.user);
    else return false;
  },
  // get_detail(state) {
  //   if (state.detail) return state.detail;
  //   else if (localStorage.detail) return JSON.parse(localStorage.detail);
  //   else return false;
  // }
};

const mutations = {
  set_token(state, payload) {
    state.token = payload;
    localStorage.token = payload;
  },
  set_user(state, payload) {
    state.user = payload;
    localStorage.user = JSON.stringify(payload);
  },
  // set_detail(state, payload) {
  //   state.detail = payload;
  //   localStorage.detail = JSON.stringify(payload);
  // }
};

const actions = {
  async login({ commit }, payload) {
    console.log(payload);
    const response = await AuthHelper.login_api(payload.formdata);
    console.log(response);
    if (response.status == 200) {
      console.log(1)
      commit("set_token", response.data.token);
      console.log(2)
      commit("set_user", Utilities.get_user_object_for_local(response.data.id, response.data.name, response.data.email));
      console.log(3)
      router.push({ name: "dashboard" });
    }
  },
   async logout({ commit }, payload) {
    const response = await AuthHelper.logout_api();
    commit("set_token", false);
    commit("set_user", false);
    router.push({ name: "main" });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
