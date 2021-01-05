<template>
  <div>
    <h2>Edit {{ task.name }}</h2>
    <form class="form-inline" @submit.prevent="updateTask(task)">
      <input
        class="form-control w-75"
        type="text"
        v-model="$v.task.name.$model"
      />
      <button
        class="btn btn-primary ml-2"
        type="submit"
        :disabled="$v.$invalid"
      >
        Save
      </button>
    </form>
    <small class="text-danger d-block" v-if="!$v.task.name.required"
      >This is field is required</small
    >
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "Edit",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTask(this.id);
  },
  methods: {
    ...mapActions(["getTask", "updateTask"]),
  },
  computed: {
    ...mapState(["task"]),
  },
  validations: {
    task: {
      name: { required },
    },
  },
};
</script>
