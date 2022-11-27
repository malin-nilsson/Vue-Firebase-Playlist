<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div id="content">
    <router-view />
  </div>
</template>

<style lang="scss">
#content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
