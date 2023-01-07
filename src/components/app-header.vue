<template>
  <header class="app-header">
    <div>The App!</div>
    <nav>
      <router-link @click="checkIfLeaveBlock" class="link" to="/"
        >Home</router-link
      >
      <router-link @click="checkIfLeaveBlock" class="link" to="/about"
        >About</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    checkIfLeaveBlock() {
      const url = this.$route.fullPath;
      const res = url.includes("block");
      if (res) socketService.emit("on-leave-topic", null);
    },
  },
  created() {},
};
</script>

<style>
</style>