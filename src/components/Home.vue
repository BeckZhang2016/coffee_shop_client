<template>
  <div id="app">
    {{$store.state.MY_STATE}}
    <br>
    {{$store.state.route.path}}
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    methods: {
      myState: function() {
        return this.$store.state.MY_STATE
      },
      myrouter: function() {
        return this.$store.state.route.path
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
