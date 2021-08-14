<template>
  <div class="detail">
    <div :items="movieSelected" class="element" v-for= "movieSelected, index in array" :key="'A'+index">
      <img class="img" :src="`https://image.tmdb.org/t/p/w500${movieSelected.poster}`" alt="Poster de la película `${movieSelected.title}`">
      <h2>{{movieSelected.title}}</h2>
      <h3>{{movieSelected.releaseDate}}</h3>
      <h2>{{movieSelected.genre}}</h2>
      <p>{{movieSelected.description}}</p>


      <button class="buttonDetail" id="buttonDetail">
          Ver más
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailMovie",
  data(){
    return{

    }
  },
  
  computed:{
    ...mapState(["movieSelected"])
  },

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
