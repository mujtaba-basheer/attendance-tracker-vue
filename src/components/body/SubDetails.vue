<template>
  <div>
    <div class="sub-label">
      <h2 class="sub-label-inner" align="center">{{ subject.subject }}</h2>
    </div>
    <hr />
    <div>
      <table class="det-tbl">
        <tr>
          <td class="sub-dtl-el">Total Classes</td>
          <td class="sub-dtl-el">:</td>
          <td class="sub-dtl-el">{{ subject.details.total }}</td>
        </tr>
        <tr>
          <td class="sub-dtl-el">Classes Attended</td>
          <td class="sub-dtl-el">:</td>
          <td class="sub-dtl-el">{{ subject.details.attended }}</td>
        </tr>
        <tr>
          <td class="sub-dtl-el">Classes Absent</td>
          <td class="sub-dtl-el">:</td>
          <td class="sub-dtl-el">
            {{ subject.details.total - subject.details.attended }}
          </td>
        </tr>
        <tr>
          <td class="sub-dtl-el">Attendance Percent</td>
          <td class="sub-dtl-el">:</td>
          <td
            class="sub-dtl-el"
            :class="{ isLow: subject.details.percent < 60 }"
          >
            {{ subject.details.percent }} %
          </td>
        </tr>
        <tr>
          <td class="sub-dtl-el">Recent Classes</td>
          <td class="sub-dtl-el">:</td>
          <td class="sub-dtl-el">
            <span class="rec-dtl" v-for="rec in last7" :key="rec">
              &#60;{{ rec ? "P" : "A" }}/>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <hr />
    <button class="s-view" @click="simView">{{ s_text }} Simulator</button>
    <simulator
      v-if="showSim"
      :total="subject.details.total"
      :present="subject.details.attended"
      align="center"
    />
  </div>
</template>

<script>
import axios from "axios";
import Simulator from "./Simulator";

export default {
  data() {
    return {
      subject: {},
      last7: [],
      s_text: "Show",
      showSim: false
    };
  },
  computed: {},
  created() {
    const subId = this.$route.params.id;
    axios
      .get("https://fierce-falls-54022.herokuapp.com/api/getSub/" + `${subId}`)
      .then(res => {
        this.subject = res.data.doc;
        this.last7 = res.data.doc.details.last7.reverse();
      })
      .catch(err => console.error(err));
  },
  components: {
    simulator: Simulator
  },
  methods: {
    simView: function() {
      this.s_text = this.showSim ? "Show" : "Hide";
      this.showSim = !this.showSim;
    }
  }
};
</script>
