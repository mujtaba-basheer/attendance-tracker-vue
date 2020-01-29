<template>
  <div>
    <table>
      <tr class="tbl-head">
        <td class="stats-head" align="center">Sl No</td>
        <td class="stats-head" align="center">Subject Name</td>
        <td class="stats-head" align="center">Percentage</td>
        <td class="stats-head" align="center">Info</td>
      </tr>
      <tr v-for="(subject, index) in subjects" :key="index" class="tbl-body">
        <td class="stats-main">{{ index + 1 }}</td>
        <td class="stats-main">{{ subject.subject }}</td>
        <td class="stats-main" :class="{ isLow: subject.details.percent < 60 }">
          {{ subject.details.percent }} %
        </td>
        <td class="stats-main">
          <span @click="setSubDetails(subjects[index])">
            <img src="info.png" alt="info-logo">
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      subjects: []
    };
  },
  created() {
    axios
      .get("https://fierce-falls-54022.herokuapp.com/api/getSubs")
      .then(res => {
        this.subjects = res.data.docs;
      })
      .catch(err => console.error(err));
  },
  methods: {
      setSubDetails: function (subId) {
          const route = `/${subId._id}`;
          window.location.href = route;
      }
  }
};
</script>
