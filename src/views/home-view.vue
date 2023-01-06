<template>
  <section class="main-app">
    <h1 class="main-headline">this is the main App</h1>
    <block-list v-if="blocks" :blocks="blocks"></block-list>
  </section>
</template>

<script>
import blockList from "../components/blocks-list.vue";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    blocks() {
      return this.$store.getters.blocksToDisplay;
    },
  },
  components: {
    blockList,
  },
};
</script>

<style>
</style>


