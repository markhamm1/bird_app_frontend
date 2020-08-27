<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Where Will You Be Spotting Birds Today?</h3>
    <div v-for="region in regions">
      <div this.regionCode = region.code></div>
      <a v-on:click="regionIndex(region)">{{ region.name }}</a>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Start a new session!",
      regions: [],
      regionType: "",
      regionCode: "",
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
        this.regions = response.data;
      });
    },
    regionIndex: function (region) {
      console.log(region.code);
      axios.get("/api/regions?name=" + region.code).then((response) => {
        console.log(response);
        this.regions = response.data;
      });
    },
    // get this part done below. birdsIndex needs to call all the birds in the region
    birdsIndex: function (region) {
      console.log(region.code);
      axios.get("/api/regions?name=" + region.code).then((response) => {
        console.log(response);
        this.regions = response.data;
      });
    },
  },
};
</script>