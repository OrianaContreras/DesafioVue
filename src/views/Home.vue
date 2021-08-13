<template>
  <div >
    <h1 class="titleCenter"></h1>
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

</style>