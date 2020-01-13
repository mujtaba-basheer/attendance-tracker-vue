<template>
    <div>
        <table>
            <tr class="tbl-head">
                <td>Sl No</td>
                <td>Subject Name</td>
                <td>Total Classes</td>
                <td>Classes Attended</td>
                <td>Percentage</td>
            </tr>
            <tr v-for="(subject, index) in subjects" :key="index" class="tbl-body">
                <td class="stats-main">{{ index + 1 }}</td>
                <td class="stats-main">{{ subject.subject }}</td>
                <td class="stats-main">{{ subject.details.total }}</td>
                <td class="stats-main">{{ subject.details.attended }}</td>
                <td class="stats-main" :class="{ isLow: subject.details.percent < 60 }">
                    {{ subject.details.percent }} %
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            subjects: [],
        }
    },
    created () {
        axios.get('http://127.0.0.1:5000/api/getSubs')
        .then(res => {
            this.subjects = res.data.docs;
        })
        .catch(err => console.error(err));
    },
    methods: {
        getPercent: function (total, attended) {
            console.log(typeof total)
            return (attended / total * 100).toPrecision(2);
        }
    }
}
</script>