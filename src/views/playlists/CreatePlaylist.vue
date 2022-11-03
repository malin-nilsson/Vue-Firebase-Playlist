<script lang="ts">
import { ref } from "vue";
import useStorage from "@/composables/useStorage";

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage();

    const title = ref("");
    const description = ref("");
    const file = ref(<File | null>null);
    const fileError = ref("");

    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value);
        console.log("image uploaded, url: ", url.value);
      }
    };

    // allowed file types
    const types = ["image/png", "image/jpeg"];

    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const selected = (target.files as FileList)[0];

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = "";
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png or jpg).";
      }
    };

    return { handleChange, handleSubmit, fileError, description, title };
  },
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
    <input @change="handleChange" type="file" />
    <div class="error">{{ fileError }}</div>
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