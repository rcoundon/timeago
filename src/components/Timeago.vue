<template>
  <div>{{ msg }}</div>
</template>

<script>
import formatDistance from "../dateFnsWrappers/formatDistance";

export default {
  props: {
    start: {
      type: Date,
      default: () => new Date(),
    },
    interval: {
      type: Number,
      default: 60000,
    },
  },
  data() {
    return {
      msg: "",
    };
  },
  async created() {
    this.msg = formatDistance(this.start, new Date());
    setInterval(() => {
      this.msg = formatDistance(this.start, new Date());
    }, this.interval);
  },
};
</script>

<style>

</style>
