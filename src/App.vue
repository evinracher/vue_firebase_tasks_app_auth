<template>
  <div id="app">
    <button class="btn btn-dark" @click="logOutUser" v-if="loggedUser">Log out</button>
    <router-view />
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