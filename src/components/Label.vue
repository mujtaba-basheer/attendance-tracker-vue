<template>
    <div class="date-label">
        {{ date }}
    </div>
</template>

<style scoped>
    .date-label {
        padding: 3 px;
        background-color: aquamarine;
    }
</style>
    
<script>

const moment = require('moment');

export default {
    data () {
        return {
            date: '',
            dateFormat: 'dddd, MMMM Do YYYY',
        }
    },
    created () {
        this.date = moment().format(this.dateFormat);
        setInterval(() => {
            this.date = moment().format(this.dateFormat);
        }, 1000);
    }
}
</script>