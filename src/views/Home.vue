<template>
  <div>
    <h1>Tasks App</h1>
    <router-link to="/create">
      <button class="btn btn-success w-100">Add new task</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="task in tasks" :key="task.id">
        {{ task.id }} - {{ task.name }}
        <div class="float-right">
          <router-link
            :to="{ name: 'Edit', params: { id: task.id } }"
            class="btn btn-warning btn-sm mr-2"
          >
            Edit
          </router-link>
          <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["user", "tasks"]),
  },
  methods: {
    ...mapActions(["getTasks", "deleteTask"]),
  },
  created() {
    this.getTasks();
  },
};
</script>

<style>
</style>