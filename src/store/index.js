import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    MovieList:[],
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

    movieDetail(state, posts) {
      
      state.movieSelected = posts
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
      
      this.MovieList = posts.results.map((options) => {
          return {
              title: options.original_title,
              description: options.overview,
              poster: options.poster_path,
              vote: options.vote_average,
              releaseDate: options.release_date,
              genre: options.genre_ids
          };
      });
      console.log(this.MovieList);
      context.commit("loadMovies", this.MovieList);
    },

    searchMovies: async function(context) {
      const urlBaseApi = "https://api.themoviedb.org/3/";
      const apiKey = "api_key=9a3003aa1aa06eceab7137fe6fd5db8b";
      const urlApiSearch = urlBaseApi +  "search/movie?"+ apiKey + '&language=es-MX&query='+ this.state.query;

      if(this.state.query != '' ){ 
        const posts = await axios.get(urlApiSearch).then((result) => { 
          return result.data;
        })
      
        this.MovieList = posts.results.map((options) => {
          return {
              id: options.id,
              title: options.original_title,
              description: options.overview,
              poster: options.poster_path,
              vote: options.vote_average,
              releaseDate: options.release_date,
              genre: options.genre_ids
          };
        });
        context.commit("foundMovies", this.MovieList);
      }
      console.log(this.state.MovieList);
    },

    pushArrayMovie: async function(context) {
      const urlBaseApi = "https://api.themoviedb.org/3/";
      const apiKey = "api_key=9a3003aa1aa06eceab7137fe6fd5db8b";
      const urlApi = urlBaseApi + "movie/" +this.state.MovieList.id + apiKey ;
      const posts = await axios.get(urlApi).then((result) => {
        console.log(result.data);
        return result.data;
      })
      
      this.movieSelected = posts.results.map((options) => {
          return {
              title: options.title,
              description: options.overview,
              poster: options.poster_path,
              vote: options.vote_average,
              releaseDate: options.release_date,
              genre: options.genres.name
          };
      });
      console.log(this.movieSelected);
      context.commit("movieDetail", this.movieSelected);
    },

},
  modules: {},
});
