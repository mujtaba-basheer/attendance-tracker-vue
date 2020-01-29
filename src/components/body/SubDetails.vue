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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      subject: {},
      last7: []
    };
  },
  computed: {},
  mounted() {
    const subId = this.$route.params.id;
    console.log(this.$route.path.split('/')[1]);
    axios
      .get("https://fierce-falls-54022.herokuapp.com/api/getSub/" + `${subId}`)
      .then(res => {
        this.subject = res.data.doc;
        this.last7 = res.data.doc.details.last7.reverse();
      })
      .catch(err => console.error(err));
  }
};
</script>
