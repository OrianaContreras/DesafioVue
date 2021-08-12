<template>
    <div class="roll">
        <div  :items="trendingMovieList" class="element" v-for= "trendingMovieList, index in array" :key="'A'+index">
            <h1>{{trendingMovieList.title}}</h1>
            <img src="$trendingMovieList.poster" alt="Poster de la Película">
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
        height: 500px;
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
</style>