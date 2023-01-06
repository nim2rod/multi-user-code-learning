<template>
  <section v-if="block" class="card-preview">
    <h1>{{ block.topic }}</h1>
    <div>
      {{ block.value }}
    </div>
    <div class="btn-card btn" @click="viewblockDetails(block)">
      Solve block!
    </div>
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