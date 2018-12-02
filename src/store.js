import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 1,
    beers: [],
    favorites: [],
    activeCrate1: true,
    activeCrate2: false,
    activeCrate3: false,
    crate1: [],
    crate2: [],
    crate3: [],
    crateCount1: 0,
    crateCount2: 0,
    crateCount3: 0,
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
    },
    ADD_TO_CRATE: (state, payload) => {
      state.favorites.find(favorite => favorite.data === payload);
      // Check if the crate is filled with more than 20 beers
      if (state.crate1.length >= 20 || state.crate2.length >= 20 || state.crate3.length >= 20) {
        return;
      }
        // Determine which crate is active
        if (state.activeCrate1 == true) {
          state.crate1.push(payload)
          state.crateCount1 += 1;
          state.activeCrate2 = false;
          state.activeCrate3 = false;
        } else if (state.activeCrate2 == true) {
          state.crate2.push(payload)
          state.crateCount2 += 1;
          state.activeCrate1 = false;
          state.activeCrate3 = false;
        } else {
          state.crate3.push(payload)
          state.crateCount3 += 1;
          state.activeCrate1 = false;
          state.activeCrate2 = false;
        }       
    },
    SET_ACTIVE_CRATE: (state) => {
      if (state.activeCrate2 === false && state.activeCrate1 === true && state.activeCrate3 === false) {
        state.activeCrate2 = true
        state.activeCrate1 = false;
        state.activeCrate3 = false; 
      } else if (state.activeCrate3 === false && state.activeCrate2 === true && state.activeCrate1 === false) {
        state.activeCrate3 = true;
        state.activeCrate1 = false;
        state.activeCrate2 = false;
      } else {
        state.activeCrate1 = true
        state.activeCrate2 = false;
        state.activeCrate3 = false;
      }
    },
    // Ordering used in Sort Component
    ORDER_BY_NAME: (state) => {
      state.beers = _.orderBy(state.beers, 'name', 'asc');
    },
    ORDER_BY_IBU: (state) => {
      state.beers = _.orderBy(state.beers, 'ibu', 'desc');
    },
    ORDER_BY_ABV: (state) => {
      state.beers = _.orderBy(state.beers, 'abv', 'desc');
    }
  },
  actions: {
    loadBeers({ commit }) {
      axios
      .get(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=20&ibu_gt=30`)
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
    },
    addToCrate: (context, payload) => {
      context.commit("ADD_TO_CRATE", payload);
    },
    activeCrate: (context, payload) => {
      context.commit("SET_ACTIVE_CRATE", payload);
    },
    orderByName: (context, payload) => {
      context.commit("ORDER_BY_NAME", payload);
    },
    orderByIbu: (context, payload) => {
      context.commit("ORDER_BY_IBU", payload);
    },
    orderByAbv: (context, payload) => {
      context.commit("ORDER_BY_ABV", payload);
    }
  }
})
