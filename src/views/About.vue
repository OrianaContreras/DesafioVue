<template>
  <div>
    <h1 class="titleCenter"></h1>
    <div class="searchBar">
      <SearchBar/>
    </div>
    <div>
      <Movie/>
    </div>
  </div>

</template>

<script>


import Movie from '../components/Movie.vue';
import SearchBar from '../components/SearchBar.vue';
export default {
  components: { Movie, SearchBar },

  

}
</script>

<style>
.searchBar{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: aliceblue;
  border-radius: 50px;
}
</style>