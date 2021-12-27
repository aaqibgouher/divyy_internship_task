import DashboardHelper from "../../helpers/DashboardHelper";
import { router } from "../../router/index";
import Utilities from "../../Utilities";

const state = {
  detail: false,
};

const getters = {
  get_detail(state) {
    if (state.detail) return state.detail;
    else if (localStorage.detail) return JSON.parse(localStorage.detail);
    else return false;
  }
};

const mutations = {
  set_detail(state, payload) {
    state.detail = payload;
    localStorage.detail = JSON.stringify(payload);
  }
};

const actions = {
   async detail({ commit }, payload) {
        console.log(payload);
        console.log(1)
        const response = await DashboardHelper.detail_api(payload.formdata);
        console.log(2)
        commit("set_detail", response.data);    
  },
  async edit({ commit }, payload) {
        console.log(payload);
        console.log(1)
        const response = await DashboardHelper.edit_api(payload.formdata);
        console.log(2)
        commit("set_detail", response.data); 
        router.push({ name: "dashboard" });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
