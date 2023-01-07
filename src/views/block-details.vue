<template >
  <section class="main-app" v-if="block">
    <h1 class="details-headline">{{ block.topic }}</h1>
    <section class="block-details">
      <div>
        {{ block.value }}
      </div>
      <!-- <pre>
        {{ block.value }}
      </pre> -->
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
import { socketService } from "../services/socket.service";
import { blockService } from "../services/block-service";
export default {
  name: "block-details",
  data() {
    return {
      block: null,
      blockRes: null,
      isMentor: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    await blockService.getById(id).then((currBlock) => {
      this.block = currBlock;
      this.blockRes = currBlock.value;
    });
    // Sockets:
    socketService.emit("set-topic-socket", this.block.topic);
    socketService.on("student-change-code", this.renderStudentChange);
    socketService.on("mentor", this.isMentorFunc);
  },
  methods: {
    goBack() {
      this.$router.push(`/`);
    },
    onChange() {
      console.log("this.isMentor", this.isMentor);
      if (this.isMentor) return;
      socketService.emit("student-change-code", this.blockRes);
    },
    renderStudentChange(data) {
      console.log("student-change-code");
      console.log("data:", data);
      this.blockRes = data;
    },
    isMentorFunc(value) {
      if (!this.isMentor) this.isMentor = value;
      console.log("this.isMentor", this.isMentor);
    },
  },
};
</script>
  
  <style>
</style>