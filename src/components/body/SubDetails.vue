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

<style>

#app {
    width: 90%;
    border: 5px solid black;
    float: auto;
    padding: 10px;
    background-color: #ffffff;
    margin: auto;
    margin-top: 25px;
  }

.date-label {
  padding: 5px;
  background-color: black;
}

.date-stamp {
  padding: 15px;
  background-color: #ffffff;
  font-family: "Roboto Mono", monospace;
  font-size: 25px;
  color: black;
}

.spa-body {
  padding: 5px;
  background-color: #ffff;
  margin: 15px;
}

.nav-btns {
  padding: 5px;
  margin-left: 175px;
  margin-bottom: 25px;
  font-family: "Teko", sans-serif;
  font-size: 40px;
}

.main-content {
  padding: 5px;
  margin: 3px;
  border: 5px solid black;
}

.select-day {
  padding: 5px;
  margin: 5px;
}

.subs-track {
  padding: 5px;
  margin: 5px;
}

table {
  padding: 3px;
  border-spacing: 0px;
  max-width: 1000px;
  margin: auto;
}

tr {
  padding: 3px;
}

.tbl-body {
  padding: 3px;
  font-family: "Jaldi", sans-serif;
}

.record-btn, .drop-down {
  background-color: white; /* Green */
  border: 2px solid black;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 35px;
  font-family: "Bree Serif", serif;
}

.drop-down {
  padding: 15px 15px;
}

.tbl-head {
  font-family: "Bitter", serif;
  color: #ffff;
  background-color: black;
  font-size: 27.5px;
  margin: 7px;
}

td {
  border: 2px solid black;
}

.nav-link {
  margin: 10px;
  border: 3px solid black;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 7px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: 65px;
  font-size: 50px;
}

.nav-link:hover {
    color: white;
    background-color: black;
}

.record-tbl {
  font-size: 35px;
  font-family: "Roboto Mono", monospace;
  padding-left: 20px;
  padding-right: 20px;
}

.record-btn {
  padding: 3px 3px;
  border-radius: 15px;
  font-size: 35px;
  margin: 5px;
}

.drop-down:hover,
.record-btn:hover {
  background-color: black;
  color: #ffff;
}

.drop-down:focus,
.record-btn:focus {
  outline: none;
}

.dd-content .opt:hover {
    background-color: white;
    color: black;
    border: 3px solid black;
}

.stats-main {
    font-family: "Roboto Mono", monospace;
    font-size: 25px;
    padding-left: 25px;
    padding-right: 15px;;
}

.isLow {
    color: red;
}

input {
  font-size: 25px;
  margin-top: 20px;
  margin-left: 250px;
  padding: 10px;
  border: 4px solid black;
}

input:focus {
  outline: none;
}

.tick {
  margin-left: 100px;
  padding: 0px;
  font-family: monospace;
  font-size: 25px; 
}

.sub-label {
  font-family: "Bree Serif", serif;
  font-size: 25px;
  padding: 0px;
  margin: auto;
  width: 25%;
}

.sub-label-inner {
  padding: 3px;
  border: 3px solid black;
  background-color: black;
  color: #ffffff
}

.detail:hover {
  text-decoration: underline;
}

.det-tbl {
  max-width: 100%;
  font-size: 25px;
  font-family: "Roboto Mono", monospace;
  border: 2px solid white;
}

.rec-dtl {
  font-family: "Bree Serif", serif;
  padding: 3px;
  margin: 3px;
  font-size: 20px;
  box-sizing: content-box;
}

.sub-dtl-el {
  padding: 10px;
  border: none;
}
</style>
