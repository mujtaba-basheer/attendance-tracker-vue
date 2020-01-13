<template>
  <div id="app">
    <div class="date-label">
      <date-label />
    </div>
    <div>
      <view-body />
    </div>
  </div>
</template>

<script>

import Label from './components/Label';
import Body from './components/Body';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    dateLabel: Label,
    viewBody: Body,
  }
}
</script>

<style lang="scss">
  
</style>
