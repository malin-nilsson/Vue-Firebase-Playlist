<script lang="ts">
import ListView from "../components/ListView.vue";
import getCollection from "../composables/getCollection";

export default {
  name: "Home",
  components: { ListView },
  setup() {
    const { error, documents } = getCollection("playlists");
    return { error, documents };
  },
};
</script>

<template>
  <div v-if="error" class="error">Could not find any playlists.</div>
  <div v-if="documents">
    <ListView :playlists="documents" />
  </div>
</template>
