import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    MovieList:[],
    // urlBaseApi: "https://api.themoviedb.org/3/" ,
    // apiKey: "api_key=9a3003aa1aa06eceab7137fe6fd5db8b",
    dataMovies:[],
    query: "",
    movieSelected: ""

  },
  mutations: {

    loadMovies(state, posts) {
      
      state.MovieList = posts;
    },

    foundMovies(state, posts) {
      
      state.MovieList = posts
    },
    

  },
  actions: {

    displayMovies: async function(context) {
      const urlBaseApi = "https://api.themoviedb.org/3/";
      const apiKey = "api_key=9a3003aa1aa06eceab7137fe6fd5db8b";
      const urlApi = urlBaseApi + "trending/movie/day?" + apiKey ;
      const posts = await axios.get(urlApi).then((result) => {
        console.log(result.data);
        return result.data;
      })
      
      this.dataMovies = posts.results.map((options) => {
          return {
              title: options.original_title,
              description: options.overview,
              poster: options.poster_path,
              vote: options.vote_average,
              releaseDate: options.release_date,
              genre: options.genre_ids
          };
      });
      console.log(this.dataMovies);
      context.commit("loadMovies", this.dataMovies);
    },

    searchMovies: async function(context) {
      const urlBaseApi = "https://api.themoviedb.org/3/";
      const apiKey = "api_key=9a3003aa1aa06eceab7137fe6fd5db8b";
      const urlApiSearch = urlBaseApi +  "search/movie?"+ apiKey + '&language=es-MX&query='+ this.state.query;

      if(this.state.query != '' ){ 
        const posts = await axios.get(urlApiSearch).then((result) => { 
          return result.data;
        })
      
        this.dataMovies = posts.results.map((options) => {
          return {
              title: options.original_title,
              description: options.overview,
              poster: options.poster_path,
              vote: options.vote_average,
              releaseDate: options.release_date,
              genre: options.genre_ids
          };
        });
        context.commit("foundMovies", this.dataMovies);
      }
      console.log(this.state.MovieList);
    }

},
  modules: {},
});
