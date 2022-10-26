<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
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
