<template>
    <div class="itemCenter">
        <form class="searchBar">
            <input class="searchBar" type="text" placeholder="Busque las películas que desee:
            " id="searchBar">
        </form>
    </div>
</template>

<script>
export default {

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