<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Where Will You Be Spotting Birds Today?</h3>
    <input type="text" v-model="searchTerm">
    <div v-for="state in orderBy(filterBy(states, searchTerm, 'name'))">
      <a v-on:click="regionIndex(state)">{{ state.name }}</a>
    </div>
    <div v-for="region in orderBy(filterBy(regions, searchTerm, 'name'))">
      <a v-on:click="birdsIndex(region)">{{ region.name }}</a>
    </div>
    <div v-if="birds.length > 0">
      <button v-on:click="submit">Submit</button>
    </div>
    <div v-for="bird in orderBy(filterBy(birds, searchTerm, 'name'))">
      <a>{{ bird.name }}</a>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      message: "Start a new session!",
      states: [],
      regions: [],
      regionType: "",
      regionCode: "",
      birds: [],
      searchTerm: "",
      sortBy: "",
    };
  },
  created: function () {
    this.statesIndex();
  },
  methods: {
    statesIndex: function () {
      console.log("states");
      axios.get("/api/states").then((response) => {
        console.log(response);
        this.states = response.data;
      });
    },
    regionIndex: function (state) {
      this.states = [];
      this.searchTerm = "";
      console.log(state.code);
      axios.get("/api/regions?name=" + state.code).then((response) => {
        console.log(response);
        this.regions = response.data;
      });
    },
    // get this part done below. birdsIndex needs to call all the birds in the region
    birdsIndex: function (region) {
      this.regions = [];
      this.searchTerm = "";
      console.log("the birds are coming...");
      axios.get("/api/birds?name=" + region.code).then((response) => {
        console.log(response);
        this.birds = response.data;
      });
    },
    submit: function () {
      console.log("submitting birds...");
    },
  },
  mixins: [Vue2Filters.mixin],
};
</script>