<template>
  <div>
    <h1>Registration form</h1>
    <div class="alert alert-danger" v-if="error">
      {{ error }}
    </div>
    <form
      @submit.prevent="
        registerUser({ email: $v.email.$model, password: $v.password.$model })
      "
    >
      <input
        class="form-control my-2"
        type="email"
        placeholder="email"
        v-model.trim="$v.email.$model"
      />
      <small class="text-danger" v-if="!$v.email.required">
        This field is required.
      </small>
      <small class="text-danger" v-if="!$v.email.email"> Invalid email </small>
      <input
        class="form-control my-2"
        type="password"
        placeholder="password"
        v-model.trim="$v.password.$model"
      />
      <small class="text-danger" v-if="!$v.password.required">
        This field is required.
      </small>
      <small class="text-danger" v-if="!$v.password.minLength">
        Password must have at least
        {{ $v.password.$params.minLength.min }} letters.
      </small>
      <input
        class="form-control my-2"
        type="password"
        placeholder="confirm password"
        v-model.trim="$v.confirm_password.$model"
      />
      <small class="text-danger d-block" v-if="!$v.confirm_password.sameAsPassword">
        Passwords must be identical.
      </small>
      <button
        class="btn btn-primary mt-2"
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
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

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
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirm_password: { sameAsPassword: sameAs("password") },
  },
};
</script>

<style>
</style>