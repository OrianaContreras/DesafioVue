<template>
  <div class="detail">
    <div :items="MovieList" class="element" v-for= "MovieList, index in array" :key="'A'+index">
      <img class="img" :src="`https://image.tmdb.org/t/p/w500${MovieList.poster}`" alt="Poster de la película `${MovieList.title}`">
      <h2>{{MovieList.title}}</h2>
      <h3>{{MovieList.releaseDate}}</h3>
      <h2>{{MovieList.genre}}</h2>
      <p>{{MovieList.description}}</p>


      <button class="buttonDetail" id="buttonDetail">
          Ver más
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailMovie",
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
