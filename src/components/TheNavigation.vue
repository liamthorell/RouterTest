<template>
  <nav id="nav">
    <p class="logo">Liam Resebyrå</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.id" class="links">
        <router-link :to="{ name: 'DestinationDetails', params: {slug: destination.slug} }"> {{ destination.name }}</router-link>
      </li>
      <li class="links">
        <router-link :to="{ name: 'user' }">Dashboard</router-link>
      </li>
    </ul>
    </nav>
</template>

<script>
import store from "@/store.js"
export default {
  data() {
    return {
      destinations: store.destinations,
    }
  },
  
}
</script>

<style scoped>
    #nav {
        display: flex;
    }

    #nav a {
      color: #2c3e50;
      text-decoration: none;
      font-weight: bold;
    }

    #nav a.router-link-exact-active {
    color: #8d42b9;
    }
    .nav-links {
      display: flex;
    }
    .links {
      padding-right: 20px;
      list-style: none;
    }
    .links:hover {
      text-decoration: underline;
    }
    .logo {
      font-size: 20px;
      color: purple;
      font-weight: bold;
      margin: auto 0;
    }
</style>