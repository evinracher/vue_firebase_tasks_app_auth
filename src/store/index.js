import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    tasks: [],
    task: { name: '', id: '' },
    error: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setTasks(state, payload) {
      state.tasks = payload
    },
    setTask(state, payload) {
      state.task = payload
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(task => task.id !== payload)
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user)
    },
    registerUser({ commit }, user) {
      auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res)
          const { uid, email } = res.user

          db.collection(email).add({
            name: 'example task'
          })
            .catch(console.log)

          commit('setUser', { uid, email })
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    logInUser({ commit }, user) {
      auth.signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const { uid, email } = res.user
          commit('setUser', { uid, email })
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    logOutUser({ commit }) {
      auth.signOut().catch(error => console.log(error))
      // commit('setUser', null)
      router.push('/login')
    },
    getTasks({ commit, state }) {
      const tasks = []
      db.collection(state.user.email).get()
        .then(res => {
          res.forEach(doc => {
            let task = { ...doc.data(), id: doc.id }
            tasks.push(task)
          })
          commit('setTasks', tasks)
        })
    },
    getTask({ commit, state }, id) {
      db.collection(state.user.email).doc(id).get()
        .then(doc => {
          commit('setTask', { ...doc.data(), id: doc.id })
        })
    },
    updateTask({ commit, state }, task) {
      db.collection(state.user.email).doc(task.id).update({
        name: task.name
      })
        .then(() => {
          router.push('/')
        })
    },
    createTask({ commit, state }, name) {
      db.collection(state.user.email).add({ name })
        .then(doc => {
          console.log(doc.id)
          router.push('/')
        })
    },
    deleteTask({ commit, state, dispatch }, id) {
      db.collection(state.user.email).doc(id).delete()
        .then(() => {
          // dispatch('getTasks') Alternative to avoid commit a mutation
          commit('deleteTask', id)
        })
    }
  },
  getters: {
    loggedUser: state => {
      return state.user ? true : false;
    }
  },
  modules: {
  }
})
