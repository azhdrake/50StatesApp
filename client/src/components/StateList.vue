<template>
  <div id="state-list">

    <Summary
             v-bind:total="totalVisited"
             v-bind:visitedAll="visitedAll">
    </Summary>

    <div class="d-flex flex-wrap justify-content-around">
      <!-- Goes through every state in the state array, sends each individual state to state.vue, listens for isVisited -->
      <div class="p-2" v-for="state in states" v-bind:key="state.name">
        <State 
               v-bind:state="state"
               v-on:isVisited="updateVisited"></State>
      </div>
    </div>
  </div>
</template>

<script>
  import State from "@/components/State"
  import Summary from "@/components/Summary"

  export default {
    name: "StateList",
    components: {
      State,
      Summary
    },
    data() {
      return {
        states: []
      }
    },
    mounted() {
      this.getAll()
    },
    methods: {
      getAll() {
        //Calls upon stateServices get all method to get all the states. Saves them to states array.
        this.$stateServices.getAll().then(data => {
          this.states = data
        })
      },
      updateVisited(stateName, stateVisited) {
        //sends statesServices the visited status so it can update the database. Then it getAll to ensure that everything's up to date.
        this.$stateServices.setVisited(stateName, stateVisited).then(data => {
          this.getAll()
        })
      }
    },
    computed: {
      totalVisited() {
        //makes an array of all the states that you have visited and counts how long that array is.
        let visited = this.states.filter(function (state) {
          return state.visited
        })
        return visited.length
      },
      visitedAll() {
        //makes an array of all the states that you have visited and checks its length against the length of the states array.
        let visited = this.states.filter(function (state) {
          return state.visited
        })
        return visited.length == this.states.length
      }
    }
  }

</script>

<style>

</style>