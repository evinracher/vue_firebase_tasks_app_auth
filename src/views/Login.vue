<template>
  <div>
    <h1>Login</h1>
    <div class="alert alert-danger" v-if="error">
      {{ error.message }}
    </div>
    <form @submit.prevent="logInUser({ email, password })">
      <input
        class="form-control mb-2"
        type="email"
        placeholder="email"
        v-model="email"
      />
      <input
        class="form-control mb-2"
        type="password"
        placeholder="password"
        v-model="password"
      />
      <button class="btn btn-primary">Log in</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["logInUser"]),
  },
  computed: {
    ...mapState(["error"]),
  },
};
</script>

<style>
</style>