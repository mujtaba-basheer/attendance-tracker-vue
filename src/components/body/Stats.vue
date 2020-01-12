<template>
    <div>
        <table>
            <tr>
                <td>Sl No</td>
                <td>Subject Name</td>
                <td>Total Classes</td>
                <td>Classes Attended</td>
                <td>Percentage</td>
            </tr>
            <tr v-for="(subject, index) in subjects" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ subject.subject }}</td>
                <td>{{ subject.details.total }}</td>
                <td>{{ subject.details.attended }}</td>
                <td>{{ subject.details.percent }} %</td>
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
        console.log('here')
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