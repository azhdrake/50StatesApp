<template>
  <div class="header">
    <div class="jumbotron">
      <h1 class="display-4" id="title">
        <!-- It's the header. It goes at the top of every page. -->
        Have You Visited Every State?
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .jumbotron{
    background-image: url("../assets/mapHeader.jpg");
    background-position: center;
    background-size: cover;
  }
  #title{
    font-weight: 500;
    color: rosybrown;
    /*shadow added because it's really hard to read without it.*/
    text-shadow: 0 0 5px black;
  }
</style>