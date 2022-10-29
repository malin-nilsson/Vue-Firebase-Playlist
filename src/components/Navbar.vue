<script lang="ts" setup>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

const { logout, error } = useLogout();
const { user } = getUser();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  if (!error.value) {
    console.log("user logged out");
    router.push({ name: "Login" });
  }
};
</script>

<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'Home' }">Vue Playlist</router-link></h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #fff;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  h1 a {
    margin-left: 20px;
    font-size: 1.5rem;
  }

  .links {
    margin-left: auto;
  }

  .links a,
  button {
    margin-left: 16px;
    font-size: 14px;
  }
}
</style>