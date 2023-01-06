<template >
  <section class="main-app" v-if="block">
    <h1 class="details-headline">{{ block.topic }}</h1>
    <section class="block-details">
      <pre>
        {{ block.value }}
      </pre>
      <textarea class="text-area" name="" id=""> {{ block.value }} </textarea>
      <button @click="goBack()">go back</button>
    </section>
  </section>
</template>
  
  <script>
import { blockService } from "../services/block-service";
export default {
  name: "block-details",
  data() {
    return {
      block: null,
    };
  },
  created() {
    const { id } = this.$route.params;
    console.log("id:", id);
    blockService.getById(id).then((currBlock) => {
      console.log("block", currBlock);
      this.block = currBlock;
    });
  },
  methods: {
    goBack() {
      this.$router.push(`/`);
    },
  },
};
</script>
  
  <style>
</style>