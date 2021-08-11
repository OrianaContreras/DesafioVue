<template>
    <div>
      
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Movie",
    props:{
        
    },
data(){
    return{

    }

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

</style>