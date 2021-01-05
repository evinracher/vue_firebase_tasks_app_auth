<template>
  <div>
    <h3>Tasks</h3>
    <router-link to="/create">
      <button class="btn btn-success w-100">Add new task</button>
    </router-link>
    <form class="mt-5" @submit.prevent="search(text)">
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        v-model="text"
        v-on:keyup="search(text)"
      />
    </form>
    <div class="mt-5" v-if="loading">
      <h4 class="text-center">Loading...</h4>
      <ScaleLoader />
    </div>
    <ul class="list-group mt-3">
      <li class="list-group-item" v-for="task in filteredTasks" :key="task.id">
        {{ task.name }}
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
import { mapActions, mapGetters, mapState } from "vuex";
import ScaleLoader from "vue-spinner/src/ScaleLoader";
export default {
  name: "Home",
  components: {
    ScaleLoader,
  },
  computed: {
    ...mapState(["user", "tasks", "loading"]),
    ...mapGetters(["filteredTasks"]),
  },
  methods: {
    ...mapActions(["getTasks", "deleteTask", "search"]),
  },
  created() {
    this.getTasks();
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
</style>