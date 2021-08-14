<template>
  <div class="central">
    <div class="ticket">
      <h1 class="titleCenter">MOVIE SEARCH</h1>
    </div>
    <div class="searchBar">
      <SearchBar/>
    </div>
    <div>
      <Movie :array="MovieList"/>
    </div>
  </div>

</template>

<script>

import Movie from '../components/Movie.vue';
import SearchBar from '../components/SearchBar.vue';
import { mapState } from "vuex";
export default {
  components: { Movie, SearchBar },
  computed:{
...mapState(["MovieList"])


},

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap'); 

  .searchBar {
          padding-left: 3%;
      }

  .titleCenter {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3em;
    margin-top: 3%;
    border:8px;
    border-style: dashed none dashed;
    padding: 15px;
    margin-bottom: 1%;
    max-width: 25%;
    max-height: 85px;
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }

  div.ticket {
    display: flex;
    justify-content: center;
  }

  
  



</style>