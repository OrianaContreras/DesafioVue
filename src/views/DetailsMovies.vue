<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DetailMovie />
  </div>
</template>

<script>
// @ is an alias to /src
import DetailMovie from "@/components/DetailMovie.vue";

export default {
  name: "DetailsMovies",
  components: {
    DetailMovie,
  },
};
</script>
