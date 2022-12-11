<script lang="ts">
import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";
import ListView from "@/components/ListView.vue";

export default {
  components: { ListView },
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
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
    <div class="empty-playlist" v-if="playlists.length <= 0">
      You don't have any playlists yet...
    </div>

    <router-link :to="{ name: 'CreatePlaylist' }" class="btn"
      >Create a new playlist</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins";

.user-playlists {
  padding: 1rem;
  @include tablet-and-up {
    padding: 2rem;
  }
}

.empty-playlist {
  margin: 0 0 1rem;
}
h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
</style>