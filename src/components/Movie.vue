<template>
    <div class="roll">
        <div :items="trendingMovieList" class="element" v-for= "trendingMovieList, index in array" :key="'A'+index">
            
            <h1>{{trendingMovieList.title}}</h1>
            <img class="img" :src="`https://image.tmdb.org/t/p/w500${trendingMovieList.poster}`" alt="Poster de la película `${trendingMovieList.title}`">
            <button>
                Ver más
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "Movie",
    props:{
        array: Array
    },
data(){
    return{

    }

},
computed:{
...mapState(["trendingMovieList"])


},

methods: {
...mapActions(["displayMovies"])
},

mounted() {
    this.displayMovies();

}

}
</script>

<style>
    .element{
        height: 400px;
        padding: 3%;
        box-shadow: 2px 2px 5px rgb(255, 255, 255);
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin: 1rem;
        width: 200px;
        background-color:  #C4CDC1;

    }
    .roll{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    }

    .img{
        height: 300px;
    }
</style>