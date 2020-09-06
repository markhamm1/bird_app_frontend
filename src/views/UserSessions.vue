<template>
  <div class="home">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div id="app">
              
            </div>
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span v-if="this.sessions.length === null" class="section-heading-lower">You have not started a birding session yet</span>
                <span v-if="this.sessions.length >= 1" class="section-heading-lower">You have {{ this.sessions.length }} birding sessions</span>
              </h2>
            </div>
            <div v-for="session in sessions" class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">{{moment(session.created_at).format('MMMM Do YYYY, h:mm a')}}</span>
                <span class="section-heading-lower">State: {{ session.state }}</span>
                <span class="section-heading-lower">County: {{ session.county }}</span>
              </h2>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" v-bind:href="'/sessions/' + session.id">View Sessions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import moment from "moment";
import mapboxgl from "mapbox-gl";

export default {
  data: function () {
    return {
      message: "My Sessions!",
      sessions: [],
      // accessToken: ACCESS_TOKEN,
      // mapStyle: MAP_STYLE,
    };
  },
  created: function () {
    this.sessionIndex();
    // this.mapbox = Mapbox;
  },
  methods: {
    sessionIndex: function () {
      console.log("indexing sessions");
      axios.get("/api/sessions").then((response) => {
        console.log(response);
        this.sessions = response.data;
      });
    },
  },
};
</script>