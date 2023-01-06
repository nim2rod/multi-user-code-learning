<template>
  <section class="list-app">
    <div v-for="block in blocks" :key="block">
      <preview-block v-if="block" :block="block"></preview-block>
    </div>
  </section>
</template>
  
  <script>
import previewBlock from "./preview-block.vue";
export default {
  props: {
    blocks: Array,
  },
  components: { previewBlock },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
  
  <style>
</style>