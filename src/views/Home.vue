<script lang="ts" setup>
import ListView from "@/components/ListView.vue";
import getCollection from "@/composables/getCollection";

const { error, documents } = getCollection("playlists");
</script>

<template>
  <div v-if="error" class="error">Could not find any playlists.</div>
  <div v-if="documents">
    <ListView :playlists="documents" />
  </div>
</template>
