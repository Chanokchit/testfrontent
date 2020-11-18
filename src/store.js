import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    account: [],
    token_and_email_table: {},
    serverIp: {
      createToken: 'http://172.16.112.202:8002/createToken',
      getToken: 'http://172.16.112.202:8002/getToken',
      login: 'http://172.16.112.202:8002/login',
      createNew: 'http://172.16.112.202:8002/createNew',
      deleteAcc: 'http://172.16.112.202:8002/deleteAccount',
      sendPic: 'http://172.16.112.202:8002/picDoe',
      sendMoreInfo: 'http://172.16.112.202:8002/moreInfo',
    },
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  actions: {

  },
})
