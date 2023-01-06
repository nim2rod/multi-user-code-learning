<template >
  <section class="main-app" v-if="block">
    <h1 class="details-headline">{{ block.topic }}</h1>
    <section class="block-details">
      <pre>
        {{ block.value }}
      </pre>
      <textarea
        class="text-area"
        name=""
        id=""
        @input="onChange"
        v-model="blockRes"
      ></textarea>
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
      blockRes: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    await blockService.getById(id).then((currBlock) => {
      this.block = currBlock;
      this.blockRes = currBlock.value;
    });

    // this.blockRes = block.value;
  },
  methods: {
    goBack() {
      this.$router.push(`/`);
    },
    onChange() {
      console.log(this.blockRes);
    },
  },
};
</script>
  
  <style>
</style>