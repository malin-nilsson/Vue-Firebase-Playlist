<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div id="content">
    <Navbar />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/styles/mixins";

#content {
  width: 100%;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: #fafafa;

  @include tablet-and-up {
    border-radius: unset;
    box-shadow: unset;
    padding: 0 0 2rem;
  }
}
</style>
