<template >
  <section class="main-app" v-if="block">
    <h1 class="details-headline">{{ block.topic }}</h1>

    <div class="permission" v-if="!isMentor">Student</div>
    <div class="permission" v-if="isMentor">Mentor</div>

    <div v-if="this.sucscess" class="success-icon">👏🏻</div>

    <section class="block-details">
      <pre>
        {{ block.value }}
      </pre>
      <textarea
        class="text-area"
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
      sucscess: null,
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
    socketService.on("userNum", this.setUserNumInTopic);
  },
  methods: {
    goBack() {
      socketService.emit("on-leave-topic", this.block.topic);
      this.$router.push(`/`);
    },
    onChange() {
      if (this.isMentor) return;
      socketService.emit("student-change-code", this.blockRes);

      if (
        this.blockRes.replaceAll(" ", "") ===
        this.block.result.replaceAll(" ", "")
      )
        this.sucscess = true;
    },
    renderStudentChange(data) {
      this.blockRes = data;
    },
    setUserNumInTopic(num) {
      if (num === 0) this.isMentor = true;
      console.log("num", num);
    },
  },
};
</script>
  
  <style>
</style>