<script lang="ts" setup>
import { ref } from "vue";

const title = ref("");
const description = ref("");

const handleSubmit = () => {
  console.log(title.value, description.value);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" placeholder="Playlist title" v-model="title" required />
    <textarea
      required
      placeholder="Playlist description..."
      v-model="description"
    ></textarea>
    <!-- upload playlist image -->
    <label>Upload playlist cover image</label>
    <input type="file" />
    <div class="error"></div>
    <button>Create</button>
  </form>
</template>

<style lang="scss">
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 0.9rem;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>