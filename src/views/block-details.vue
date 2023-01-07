<template >
  <section class="main-app" v-if="block">
    <h1 class="details-headline">{{ block.topic }}</h1>
    <div class="permission" v-if="!isMentor">Student</div>
    <div class="permission" v-if="isMentor">Mentor</div>
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
    socketService.on("userNum", this.setUserNumInTopic);
  },
  methods: {
    goBack() {
      socketService.emit("on-leave-topic", this.block.topic);
      this.$router.push(`/`);
    },
    onChange() {
      if (this.isMentor) return;
      console.log("this.userNumInTopic", this.userNumInTopic);
      socketService.emit("student-change-code", this.blockRes);
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