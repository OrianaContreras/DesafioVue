<template>
    <div class="itemCenter">
        <form class="searchBar" >
            <input class="searchBar"   type="text" placeholder="Busque las películas que desee:
            "  v-model="$store.state.query">
            <button @click.prevent="searchMovies()"> Buscar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {

data(){
    return{
        
    }
},
computed:{
...mapState(["searchBarIsEmpty"]),
},

methods: {
...mapActions(["searchMovies"]),






},

}
</script>

<style>
    .searchBar{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75vw;
    }

    input{
        width: 75vw;
        padding: 10px;
        margin: 1rem;
    }

    .itemCenter {
        display: flex;
        justify-content: center;
        align-items: center; 
    }

</style>