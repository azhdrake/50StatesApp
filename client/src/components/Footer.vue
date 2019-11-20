<template>
  <div class="footer">
    <div class="m-2">
      <span class="p-3">
        <router-link to="/">Home</router-link>
      </span>
      <span class="p-3">
        <router-link to="/about">
          About
        </router-link>
      </span>
    </div>
    <p class="text-left p-2">
      Header image by <a href="https://unsplash.com/photos/NwGMe-NuDm0">Joey Csunyo on Unsplash</a>
    <br/>
      <a href="https://icons8.com/icon/43632/map">Map icon by Icons8</a>
    </p>
  </div>
</template>

<script>
  export default {
    name:"Footer"
  }
</script>

<style scoped>

</style>