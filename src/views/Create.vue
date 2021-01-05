<template>
  <div>
    <h1>Add task</h1>
    <form class="form-inline" @submit.prevent="createTask(name)">
      <input class="form-control w-75" type="text" v-model="$v.name.$model" />
      <button
        class="btn btn-primary ml-2"
        type="submit"
        :disabled="$v.$invalid || loading"
      >
        Add
      </button>
    </form>
    <small class="text-danger d-block" v-if="!$v.name.required">
      This field is required.
    </small>
    <small class="text-danger d-block" v-if="!$v.name.minLength">
      Name must have at least {{ $v.name.$params.minLength.min }} letters.
    </small>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Create",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(["createTask"]),
  },
  validations: {
    name: {
      required,
      minLength: minLength(5),
    },
  },
  computed: {
    ...mapState(["loading"]),
  },
};
</script>