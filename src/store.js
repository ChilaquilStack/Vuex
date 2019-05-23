import Vue from 'vue'
import Vuex from 'vuex'
import User from './models/User';

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {

    users: [],
    user: new User()
   
  },

  mutations: {
    saveMutation(state, user) {
      state.user = new User();
      state.users.push(user);
    }
  },
  
  actions: {
    saveAction({commit}, user){
      commit('saveMutation', user)
    }
  },
  
  getters: {
   

  }

})
