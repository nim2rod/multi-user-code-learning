<template>
  <section class="main-app">
    <app-header></app-header>
    <router-view />
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue";
export default {
  name: "app",
  created() {
    this.$store.dispatch({ type: "loadBlocks" }).then((blocks) => {});
  },
  components: {
    appHeader,
  },
};
</script>


<style>
</style>
