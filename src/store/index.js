import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trendingMovieList:[]

  },
  mutations: {

    loadMovies(state, posts) {
      
      state.trendingMovieList = posts
    },

  },
  actions: {

    displayMovies: async function(context) {
      const urlBaseApi = 'https://api.themoviedb.org/3/' ;
      const apiKey = 'api_key=9a3003aa1aa06eceab7137fe6fd5db8b';
      const urlApi = urlBaseApi + 'trending/all/day?' + apiKey ;
      console.log(urlApi)
      const posts = await axios.get(urlApi).then((result) => {
        console.log(result.data);
      })

      const dataMovies = posts.data.results.map((options) => {
          return {
              title: options.name,
              text: options.name,
              value: options.name,
          };
      });
      console.log(dataMovies);
      context.commit("loadMovies", dataMovies);
  }
  },
  modules: {},
});
