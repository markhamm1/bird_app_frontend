<template>
  <div class="home">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span v-if="this.sessions.length === null" class="section-heading-lower">You have not started a birding session yet</span>
                <span v-if="this.sessions.length >= 1" class="section-heading-lower">You have {{ this.sessions.length }} birding sessions</span>
              </h2>
            </div>
            <div class="cta-inner text-center rounded" >
              <div id="map" style="width: 700px; height: 500px;" class="cta-inner text-center rounded" ></div>
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
#map {
  position: relative;
  top: 5px;
  bottom: 0;
  /* left: 4px;
  right: 2000px; */
  width: 100%;
}
</style>

<script>
import axios from "axios";
import moment from "moment";
// import mapboxgl from "mapbox-gl-vue";

export default {
  data: function () {
    return {
      message: "My Sessions!",
      sessions: [],
      map: "",
      coordinates: {},
      lng: "",
      lat: "",
    };
  },
  created: function () {},
  mounted: function () {
    this.sessionIndex();
  },

  methods: {
    sessionIndex: function () {
      axios.get("/api/sessions").then((response) => {
        this.sessions = response.data;
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_KEY;
        var map = new mapboxgl.Map({
          container: "map", // container id
          style: "mapbox://styles/mapbox/outdoors-v10", // style URL
          center: [-98.5795, 39.8283],
          zoom: 2.9,
        });
        this.sessions.forEach(function (session) {
          axios
            .get(
              "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
                session.county +
                "%20county%20" +
                session.state +
                ".json?access_token=" +
                process.env.VUE_APP_MAPBOX_KEY
            )
            .then((response) => {
              var lng = response.data.features[0].center[0];
              var lat = response.data.features[0].center[1];
              var marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
            });
        });
      });
    },
  },
};
</script>