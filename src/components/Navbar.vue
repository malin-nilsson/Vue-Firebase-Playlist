<script lang="ts">
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
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

    return {
      handleLogout,
      user,
      logout,
      error,
    };
  },
});
</script>

<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <img src="@/assets/logo.png" />
        <h1><router-link :to="{ name: 'Home' }">Playlistr</router-link></h1>
      </div>
      <div class="links">
        <div v-if="user" class="logged-in-links">
          <router-link :to="{ name: 'UserPlaylists' }"
            >My playlists</router-link
          >
          <router-link :to="{ name: 'Home' }">All playlists</router-link>
          <router-link :to="{ name: 'CreatePlaylist' }"
            >Create playlist</router-link
          >
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else class="links">
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
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  .logo {
    display: flex;
    align-items: center;
  }

  img {
    max-height: 35px;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 10px;
  }

  h1 a {
    margin-left: 20px;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .links {
    display: flex;
    flex-direction: row;

    .logged-in-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;

      h2 {
        display: inline;
      }
    }
  }

  .links a,
  button {
    margin-left: 16px;
    font-size: 1rem;
  }
}
</style>