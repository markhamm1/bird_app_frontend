<template>
  <div class="home">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">Where Will You Be Spotting Birds Today?</span>
                <span class="section-heading-lower">Search and Choose</span>
              </h2>
              <div class="mb-0">
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
                  <input type="checkbox" id="birdName" v-bind:value=bird.name v-model="checkedBirds">
                  <label for="birdName">{{ bird.name }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <span> {{ checkedBirds }}</span> -->
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
      checkedBirds: [],
      sessionState: "",
      sessionCounty: "",
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
      this.sessionState = state.name;
      console.log(state.code);
      axios.get("/api/regions?name=" + state.code).then((response) => {
        console.log(response);
        this.regions = response.data;
      });
    },
    birdsIndex: function (region) {
      this.regions = [];
      this.searchTerm = "";
      this.sessionCounty = region.name;
      console.log("the birds are coming...");
      axios.get("/api/birds?name=" + region.code).then((response) => {
        console.log(response);
        this.birds = response.data;
      });
    },
    submit: function () {
      var params = {
        birds: this.checkedBirds,
        state: this.sessionState,
        county: this.sessionCounty,
      };
      console.log(params);
      axios.post("/api/sessions", params).then((response) => {
        console.log(response);
        this.$router.push("/sessions");
      });
    },
  },
  mixins: [Vue2Filters.mixin],
};
</script>