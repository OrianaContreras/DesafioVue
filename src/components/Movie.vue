<template>
    <div class="roll">
        <div :items="MovieList" class="element" v-for= "MovieList, index in array" :key="'A'+index">
            
            <h2 class="title" >{{MovieList.title}}</h2>
            <img class="img" :src="`https://image.tmdb.org/t/p/w500${MovieList.poster}`" :alt=" `Poster de la película ${MovieList.title}`">
            <button :value="`${MovieList.id}`" class="buttonDetail">
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
...mapState(["MovieList"])


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
        padding: 16px;
        box-shadow: 2px 2px 5px rgb(255, 255, 255);
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin: 1rem;
        width: 200px;
        background-color:  #61b6e7;
        padding-bottom: 5%;
        padding-top: 2%;

    }

    div.roll{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1200px;
        margin:0 auto;

    }

    .img{
        height: 300px;
    }

    .buttonDetail{
        margin-top: 25px;
        padding: 5%;
        width: 55%;
        border-radius: 5px;
    }

    .title {
        font-size: 1.1rem;
        
    }

</style>