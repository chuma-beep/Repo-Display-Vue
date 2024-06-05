<script setup>
import RepoList from './views/RepoList.vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavBar />
  <header>
    <div class="wrapper"></div>
  </header>

  <RouterView />

  <RepoList />

  <FooterComponent />
</template>
