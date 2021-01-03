<template>
  <div>
    <h1>Add task</h1>
    <form class="form-inline" @submit.prevent="createTask(name)">
      <input class="form-control w-75" type="text" v-model="name" />
      <button class="btn btn-primary ml-2" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
};
</script>