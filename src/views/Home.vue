<script lang="ts" setup>
import getCollection from "@/composables/getCollection";

const { error, documents } = getCollection("playlists");
</script>

<template>
  <div class="home">Homepage</div>
  <div v-if="error" class="error">Could not find any playlists.</div>
  <div v-if="documents">
    <div v-for="doc in documents" :key="doc.id">
      <p>{{ doc.title }}</p>
    </div>
  </div>
</template>
