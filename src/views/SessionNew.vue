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
                <p><input type="text" v-model="searchTerm"></p>
                
                <div v-for="state in orderBy(filterBy(states, searchTerm, 'name'))">
                  <a v-on:click="regionIndex(state)">{{ state.name }}</a>
                </div>
                <div v-for="region in orderBy(filterBy(regions, searchTerm, 'name'))">
                  <a v-on:click="birdsIndex(region)">{{ region.name }}</a>
                </div>
                <div v-if="birds.length > 0">
                  <p><button v-on:click="submit" class="btn btn-primary">Submit</button></p>
                  <hr>
                </div>
                <div v-for="bird in orderBy(filterBy(birds, searchTerm, 'name'))">
                  <input type="checkbox" id="birdName" v-bind:value=bird.name v-model="checkedBirds">
                  <label for="birdName">{{ bird.name }}</label>
                  <!-- <p><a href="/bird" target="_blank" class="btn btn-primary">View Bird</a></p> -->
                  <p><button v-on:click="viewBird(bird.name)" class="btn btn-primary">Show Bird</button></p>
                  <dialog id="bird-details">
                    <form method="dialog">
                      <span class="section-heading-lower">{{ currentBird.name }}</span>
                      <hr>
                      <!-- <p>{{currentBird.image_url}}</p> -->
                      <p><img v-bind:src="currentBird.image_url" style="width:600px;"></p>
                      <br>
                      <button class="btn btn-primary">Close</button>
                    </form>
                  </dialog>
                  <hr>
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
      currentBird: {},
    };
  },
  created: function () {
    this.statesIndex();
  },
  methods: {
    statesIndex: function () {
      axios.get("/api/states").then((response) => {
        this.states = response.data;
      });
    },
    regionIndex: function (state) {
      this.states = [];
      this.searchTerm = "";
      this.sessionState = state.name;
      axios.get("/api/regions?name=" + state.code).then((response) => {
        this.regions = response.data;
      });
    },
    birdsIndex: function (region) {
      this.regions = [];
      this.searchTerm = "";
      this.sessionCounty = region.name;
      axios.get("/api/birds?name=" + region.code).then((response) => {
        this.birds = response.data;
      });
    },
    submit: function () {
      var params = {
        birds: this.checkedBirds,
        state: this.sessionState,
        county: this.sessionCounty,
      };
      axios.post("/api/sessions", params).then((response) => {
        this.$router.push("/sessions");
      });
    },
    viewBird: function (name) {
      axios.get("/api/pictures?name=" + name).then((response) => {
        this.currentBird = response.data;
        this.currentBird["name"] = name;
      });
      document.querySelector("#bird-details").showModal();
    },
  },
  mixins: [Vue2Filters.mixin],
};
</script>