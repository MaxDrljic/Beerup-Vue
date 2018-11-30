import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 1,
    beers: [],
    favorites: [],
  },
  getters: {
    IS_FAVORITE: state => {
      return id => {
        state.favorites.filter(favorite => {
          return favorite.id === id
        });
      }
    }
  },
  mutations: {
    SET_BEERS: (state, beers) => {
      state.beers = beers
      state.page += 1;
    },
    SET_FAVORITES: (state, favorites) => {
      state.favorites = favorites
    },
    TOGGLE_FAVORITE: (state, payload) => {
      state.beers.find(beer => beer.data === payload);
      state.favorites.push(payload)
    },
    REMOVE_FAVORITE: (state, payload) => {
      let index = state.favorites.findIndex(favorite => favorite.id === payload);
      state.favorites.splice(index, 1);
    }
  },
  actions: {
    loadBeers({ commit }) {
      axios
      .get(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=15&ibu_gt=30`)
      .then(response => response.data)
      .then(beers => {
        commit('SET_BEERS', beers)
      })
    },
    setFavorites({ commit, payload }) {
      commit('SET_FAVORITES', payload)
    },
    toggleFavorite: (context, payload) => {
      context.commit("TOGGLE_FAVORITE", payload);
    },
    removeFavorite: (context, payload) => {
      context.commit("REMOVE_FAVORITE", payload)
    } 
  }
})
