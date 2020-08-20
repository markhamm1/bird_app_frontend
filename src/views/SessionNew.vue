<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Choose Which State You'll Be Spotting Birds</h3>
    <div v-for="region in regions">
      <p>{{ region.name }}</p>
      <!-- <p>Code: {{ region.code }}</p> -->
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
      regionType: "subnational1",
      regionCode: "US",
    };
  },
  created: function () {
    this.regionIndex();
  },
  methods: {
    regionIndex: function () {
      var params = {
        subnational: this.regionType,
        region: this.regionCode,
      };
      console.log("all the regions...");
      console.log(params);
      axios.get("/api/regions", params).then((response) => {
        console.log(response);
        this.regions = response.data;
      });
    },
  },
};
</script>