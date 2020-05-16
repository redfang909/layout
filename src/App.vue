<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about/profile">Profile</router-link>
    </div> -->
    <router-view/>
    <!-- <Main /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Main from './components/Main.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Main
  }
}
</script>
