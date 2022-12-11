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
          <span>Hi, {{ user.displayName }}</span>
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
@import "@/styles/mixins";

.navbar {
  margin-bottom: 4rem;
  background: #fff;
  box-shadow: 2px 3px 6px rgba(180, 179, 182, 0.1);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;

  @include tablet-and-up {
    padding: 0.2rem 1rem;
  }
  @include desktop-and-up {
    padding: 0.2rem 1.5rem;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  img {
    max-height: 30px;
    border: 1px solid #bc61dd;
    border-radius: 50%;
    padding: 10px;

    @include desktop-and-up {
      max-height: 35px;
    }
  }

  h1 a {
    margin-left: 0.9rem;
    font-size: 1.3rem;
    text-transform: uppercase;

    @include tablet-and-up {
      margin-left: 1rem;
    }
    @include desktop-and-up {
      font-size: 1.5rem;
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem 0;

    .logged-in-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;

      a {
        font-size: 0.9rem;

        @include desktop-and-up {
          font-size: 1rem;
        }
      }

      a:hover {
        text-decoration: underline;
      }

      h2 {
        display: inline;
      }
    }
  }

  .links {
    gap: 1rem;

    button {
      margin-left: 16px;
      font-size: 0.9rem;

      @include desktop-and-up {
        font-size: 1rem;
      }
    }

    span {
      font-size: 0.9rem;
      display: inline-block;
      padding-left: 1rem;
      border-left: 1px solid #eee;
      font-weight: 600;

      @include desktop-and-up {
        font-size: 1rem;
      }
    }
  }
}
</style>