<template>
  <div id="app">
    <div>
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
  #app {
    width: 50%;
    border: 1px solid red;
    float: auto;
  }
</style>
