<template>
  <div id="app">
    <div class="date-label">
      <date-label />
    </div>
    <div>
      <div>
        <input
          type="password"
          v-model="password"
          v-if="!isAuth"
          placeholder="Enter Password"
        />
      </div>
      <view-body v-if="isAuth" />
    </div>
  </div>
</template>

<script>
import Label from "./components/Label";
import Body from "./components/Body";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isAuth: false,
      password: ""
    };
  },
  components: {
    dateLabel: Label,
    viewBody: Body
  },
  watch: {
    password: function() {
      if (this.password === "6858222") {
        this.isAuth = true;
      }
    }
  },
  created() {
    if (this.$route.path.split("/")[1] === "detail") {
      this.isAuth = true;
    }
  }
};
</script>
