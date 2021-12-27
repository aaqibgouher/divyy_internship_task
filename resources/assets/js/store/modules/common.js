// import CommonHelper from "../../helpers/CommonHelper";
// import Constants from '../../Constants';
import { router } from '../../router/index';

const state = () => ({
    alert: false,
    spinner: false,
    drawer: true,
    frontend_drawer: false,
    delete_modal: false,
    page_type: false
});

const getters = {
    get_spinner(state){
        return state.spinner
    },
    get_drawer(state){
        return state.drawer
    },
    get_delete_modal(state){
        return state.delete_modal
    },
    get_page_type(state){
        return state.page_type
    },
    get_frontend_drawer(state) {
        return state.frontend_drawer;
    },
};

const mutations = {
    set_alert(state, payload){
        state.alert = payload
    },
    set_spinner(state, payload){
        state.spinner = payload
    },
    set_drawer(state, payload){
        state.drawer = payload
    },
    set_delete_modal(state, payload){
        state.delete_modal = payload
    },
    set_page_type(state, payload){
        state.page_type = payload
    },
    set_frontend_drawer(state, payload) {
        state.frontend_drawer = payload;
    },
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}