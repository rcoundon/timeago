<template>
  <div id="app">
    <timeago />
  </div>
</template>

<script>
import Timeago from "./components/Timeago.vue";

export default {
  name: "App",
  components: {
    Timeago,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
