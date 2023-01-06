<template>
  <section v-if="block" class="card-preview">
    <h1>this is block preview</h1>
    <div>
      {{ block.id }}
      {{ block.value }}
    </div>
    <div class="btn-card btn" @click="viewblockDetails(block)">View block!</div>
  </section>
</template>
    
    <script>
export default {
  props: {
    block: Object,
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    viewblockDetails(block) {
      this.$router.push(`block/${block.id}`);
    },
  },
  created() {},
};
</script>
    
    <style>
</style>