<template>
  <div>
    <h2 class="s-heading">SIMULATOR</h2>
    <div>
      <h3 class="s-score">
        <span class="s-board">P : {{ P }}</span>
        <span class="s-board">A : {{ T - P }}</span>
      </h3>
      <div class="s-panel">
        <button class="s-button" @click="addPresent">&nbsp;+&nbsp;</button>
        P
        <button class="s-button" @click="subPresent">&nbsp;-&nbsp;</button>
        <span class="s-percent" :class="{ 'isLow': percent < 60 }">
            {{ percent }} %
        </span>
        <button class="s-button" @click="addAbsent">&nbsp;+&nbsp;</button>
        A
        <button class="s-button" @click="subAbsent">&nbsp;-&nbsp;</button>
      </div>
      <div>
        <button class="s-reset" @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["total", "present"],
  computed: {
    percent: function() {
      return Number(
        (((this.P + this.present) / (this.T + this.total)) * 100).toFixed(2)
      );
    }
  },
  methods: {
    addPresent: function() {
      this.T++;
      this.P++;
    },
    addAbsent: function() {
      this.T++;
    },
    subPresent: function() {
      if (this.P != 0) {
        this.P--;
        this.T--;
      }
    },
    subAbsent: function() {
      if (this.T - this.P != 0) {
        this.T--;
      }
    },
    reset: function() {
      this.P = 0;
      this.T = 0;
    }
  },
  data() {
    return {
      P: 0,
      T: 0
    };
  },
  mounted() {
    console.log(this.$data);
  }
};
</script>
