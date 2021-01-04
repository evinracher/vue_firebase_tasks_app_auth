<template>
  <div>
    <h1>Registration form</h1>
    <div class="alert alert-danger" v-if="error">
      {{ error.message }}
    </div>
    <form @submit.prevent="registerUser({ email, password })">
      <input
        class="form-control mb-2"
        type="email"
        placeholder="email"
        v-model.trim="email"
      />
      <input
        class="form-control mb-2"
        type="password"
        placeholder="password"
        v-model.trim="password"
      />
      <input
        class="form-control mb-2"
        type="password"
        placeholder="confirm password"
        v-model.trim="confirm_password"
      />
      <button
        class="btn btn-primary"
        type="submit"
        :disabled="isSubmitDisabled"
      >
        Register
      </button>
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
      confirm_password: "",
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
  },
  computed: {
    ...mapState(["error"]),
    isSubmitDisabled() {
      return (
        this.email === "" ||
        this.password.length < 6 ||
        this.password === "" ||
        this.password !== this.confirm_password
      );
    },
  },
};
</script>

<style>
</style>