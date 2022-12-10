<script lang="ts">
import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";

export default {
  setup() {
    const { user } = getUser();
    const { documents: playlists } = getCollection("playlists", [
      "userId",
      "==",
      user.value.uid,
    ]);

    console.log(playlists);
    return { playlists };
  },
};
</script>

<template>
  <div class="user-playlists">
    <h2>My playlists</h2>
  </div>
</template>

<style>
</style>