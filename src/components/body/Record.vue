<template>
  <div>
    <div>
      <select v-model="selDay" @click="selectDay()" >
        <option v-for="(day, index) in days" :value="index" :key="index">
          {{ day }}
        </option>
      </select>
    </div>

    <div>
      <table>
        <tr v-for="(sub, index) in subs" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ sub.sub }}</td>
          <td>
            <span><button @click="Record(sub.subId, 'present')">Present</button></span>
            <span><button @click="Record(sub.subId, 'absent')">Absent</button></span>
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
      selSub: '',
      key: "",
      selDay: (Number((moment().isoWeekday())) - 1 >= 4 ? 4 : Number((moment().isoWeekday())) - 1),
    };
  },
  created() {
      let day = this.days[this.selDay].substring(0, 3);
    axios
      .get("http://127.0.0.1:5000/api/getSubsByDay/" + `${day}`)
      .then(res => {
        this.subs = res.data.doc.subs;
      })
      .catch(err => console.error(err));
  },
  methods: {
    selectDay: function() {
    let day = this.days[this.selDay].substring(0, 3);
    axios.get("http://127.0.0.1:5000/api/getSubsByDay/" + `${day}`)
    .then(res => {
        this.subs = res.data.doc.subs;
    })
    .catch(err => console.error(err));
    },
    Record: function (id, attType) {
        console.log(id);
        console.log(attType);
        axios.post(
          "http://127.0.0.1:5000/api/recordAttendance/" + `${id}`,
          { attType }
        )
        .then(res => {
          console.log(res.data);
          alert('Attendence recorded!')
        })
        .catch(err => console.error(err));
    },
  },
  computed: {
      setDay: function () {
        let dayNo = moment().day();
        return 2;
      }
  }
};
</script>
