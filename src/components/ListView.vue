<script lang="ts">
import { IPlaylist } from "@/models/IPlaylist";

export default {
  props: ["playlists"],

  setup() {},
};
</script>

<template>
  <div>
    <div v-for="playlist in playlists" :key="playlist.id">
      <router-link
        :to="{ name: 'PlaylistDetails', params: { id: playlist.id } }"
      >
        <div class="single">
          <div class="thumbnail">
            <img :src="playlist.coverUrl" />
          </div>
          <div class="info">
            <h3>{{ playlist.title }}</h3>
            <p>Created by {{ playlist.userName }}</p>
          </div>
          <div class="song-num">
            <p>{{ playlist.songs?.length }} songs</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins";
.single {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 10px;
  background: #fff;
  margin: 0 0 1rem;
  transition: all ease 0.2s;

  @include tablet-and-up {
    flex-direction: row;
    align-items: center;
    gap: unset;
  }

  @include desktop-and-up {
    margin: 1rem 0;
  }
}
.single:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  background: var(--lt-grey);
  transition: all ease 0.2s;
}
.thumbnail {
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 10px;
}
img {
  max-width: 150%;
  max-height: 150%;
  display: block;
}
.info {
  @include tablet-and-up {
    margin: 0 30px;
  }
}
.song-num {
  @include tablet-and-up {
    margin-left: auto;
  }
}
</style>