<template>
  <div>
    <div class="select-day">
      <select v-model="selDay" @change="selectDay()" class="drop-down">
        <option v-for="(day, index) in days" :value="index" :key="index">
          {{ day }}
        </option>
      </select>
      <span class="tick" v-if="recorded">
        <img src="tick.png" alt="tick-logo" />
        <span>Marked {{ attStatus }}</span>
      </span>
    </div>

    <div class="subs-track">
      <table>
        <tr v-for="(sub, index) in subs" :key="index">
          <td class="record-tbl">{{ index + 1 }}</td>
          <td class="record-tbl">{{ sub.sub }}</td>
          <td class="record-tbl">
            <span
              ><button class="record-btn" @click="Record(sub.subId, 'present')">
                Present
              </button></span
            >
          </td>
          <td class="record-tbl">
            <span
              ><button class="record-btn" @click="Record(sub.subId, 'absent')">
                Absent
              </button></span
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      subs: [],
      day: "",
      selSub: "",
      key: "",
      attStatus: '',
      recorded: false,
      selDay:
        Number(moment().isoWeekday()) - 1 >= 4
          ? 4
          : Number(moment().isoWeekday()) - 1
    };
  },
  created() {
    this.loadSubs();
  },
  methods: {
    selectDay: function() {
      this.loadSubs();
    },
    Record: function(id, attType) {
      this.attStatus = (attType == 'present') ? 'Present' : 'Absent';
      // axios
      //   .post("https://fierce-falls-54022.herokuapp.com/api/recordAttendance/" + `${id}`, {
      //     attType
      //   })
      //   .then(res => {
          
      //     console.log(res.data);
      //   })
      //   .catch(err => console.error(err));
      this.recorded = true;
      setTimeout(() => {
        this.recorded = false;
      }, 500);
    },
    loadSubs: function() {
      let day = this.days[this.selDay].substring(0, 3);
      axios
        .get("https://fierce-falls-54022.herokuapp.com/api/getSubsByDay/" + `${day}`)
        .then(res => {
          this.subs = res.data.doc.subs;
        })
        .catch(err => console.error(err));
    }
  },
  computed: {
    setDay: function() {
      let dayNo = moment().day();
      return 2;
    }
  }
};
</script>
