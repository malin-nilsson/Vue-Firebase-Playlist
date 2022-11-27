<script lang="ts" setup>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
import { useRouter } from "vue-router";

const { filePath, url, uploadImage } = useStorage();
const { error, addDoc } = useCollection("playlists");
const { user } = getUser();
const title = ref("");
const description = ref("");
const file = ref(<File | null>null);
const fileError = ref("");
const isPending = ref(false);
const router = useRouter();

const handleSubmit = async () => {
  if (file.value) {
    isPending.value = true;
    await uploadImage(file.value);
    const res = await addDoc({
      title: title.value,
      description: description.value,
      userId: user.value.uid,
      userName: user.value.displayName,
      coverUrl: url.value,
      filePath: filePath.value,
      songs: [],
      createdAt: timestamp(),
    });
    isPending.value = false;
    if (!error.value) {
      router.push({ name: "PlaylistDetails", params: { id: res.id } });
    }
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
    <button v-if="!isPending">Create</button>
    <button v-else disabled>Saving...</button>
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
</style>