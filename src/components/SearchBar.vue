<template>
    <div class="itemCenter">
        <form class="searchBar" >
            <input class="searchBar"   type="text" placeholder="Buscar:
            "  v-model="$store.state.query">
            <button  class="buttonSearch" @click.prevent="searchMovies()"> <img class="iconSearch" src="../assets/iconSearchW.png" alt="ícono de lupa color blanco"></button>
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
        width: 90vw;
    }

    input{
        width: 95vw;
        padding: 15px;
        margin: 1rem;
    }

    .itemCenter {
        display: flex;
        justify-content: center;
        align-items: center; 
    }

    .buttonSearch {
        margin-right: 3%;
        margin: 1rem;
        background-color: #61b6e7;
        border-radius: 5px;
    }

    .iconSearch {
        width: 2.6rem;
        background-color: #61b6e7;
    }

    

</style>