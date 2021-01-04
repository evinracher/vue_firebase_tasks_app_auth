<template>
  <div class="pb-5" id="app">
    <div class="navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Tasks App</router-link>
      <div class="d-flex">
        <router-link to="/" class="btn btn-dark" v-if="loggedUser">
          Home
        </router-link>
        <router-link to="/login" class="btn btn-dark" v-if="!loggedUser">
          Log in
        </router-link>
        <router-link to="/register" class="btn btn-dark" v-if="!loggedUser">
          Sign Up
        </router-link>
        <button class="btn btn-dark" @click="logOutUser" v-if="loggedUser">
          Log out
        </button>
      </div>
    </div>
    <div class="container mt-2">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["logOutUser"]),
  },
  computed: {
    ...mapGetters(["loggedUser"]),
  },
};
</script>