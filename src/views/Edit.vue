<template>
  <div>
    <h2>Edit {{ task.name }}</h2>
    <form class="form-inline" @submit.prevent="updateTask(task)">
      <input class="form-control w-75" type="text" v-model="task.name" />
      <button class="btn btn-primary ml-2" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
};
</script>

<style>
</style>