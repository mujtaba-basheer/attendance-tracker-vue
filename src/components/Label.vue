<template>
  <div class="date-stamp" align="center">
    {{ date }}
  </div>
</template>

<script>
const moment = require("moment");

export default {
  data() {
    return {
      date: "",
      dateFormat: "dddd, MMMM Do YYYY"
    };
  },
  created() {
    this.date = moment().format(this.dateFormat);
    setInterval(() => {
      this.date = moment().format(this.dateFormat);
    }, 1000);
  }
};
</script>
