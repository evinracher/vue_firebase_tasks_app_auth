<template>
  <div>
    <h1>Login</h1>
    <div class="alert alert-danger" v-if="error">
      {{ error }}
    </div>
    <form
      @submit.prevent="
        logInUser({ email: $v.email.$model, password: $v.password.$model })
      "
    >
      <div class="pb-3">
        <input
          class="form-control my-2"
          type="email"
          placeholder="email"
          v-model="$v.email.$model"
        />
        <small class="text-danger" v-if="!$v.email.required">
          This field is required.
        </small>
        <small class="text-danger" v-if="!$v.email.email">
          Invalid email
        </small>
        <input
          class="form-control my-2"
          type="password"
          placeholder="password"
          v-model="password"
        />
        <small class="text-danger d-block" v-if="!$v.password.required">
          This field is required.
        </small>
      </div>
      <button class="btn btn-primary" :disabled="$v.$invalid">Log in</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";

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
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
};
</script>

<style>
</style>