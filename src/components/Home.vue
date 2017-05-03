<template>
  <div id="app">
    {{pageVar}}
    <br>
    {{MY_STATE}}
    <br>
    {{MY_NUM}}
    <br>
    <input type="text">
    <input type="button" value="add" placeholder="asdfas" v-bind:click="changeTextJoin">
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: 'app',
    data: function () {
      return {
        pageVar: 20
      }
    },
    computed: {
      ...mapGetters({
        changeTextJoin: 'changeTextJoin'
      }),
      ...mapState({
        MY_STATE: function () {
          return this.$store.state.MY_STATE
        },
        MY_NUM: function () {
          return this.$store.state.MY_NUM
        }
      })
    },
    methods: {/*
      ...mapActions({}),
      ...mapMutations({})*/
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
