<template>
  <div class="home">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">{{moment(session.created_at).format('MMMM Do YYYY, h:mm a')}}</span>
                <span class="section-heading-lower">State: {{ session.state }}</span>
                <span class="section-heading-lower">County: {{ session.county }}</span>
              </h2>
              <div v-for="bird in session.birds">
                <p class="mb-0">{{ bird.bird}}</p>
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

export default {
  data: function () {
    return {
      message: "My Sessions Show!",
      session: [],
    };
  },
  created: function () {
    this.sessionShow();
  },
  methods: {
    sessionShow: function () {
      console.log("showing session");
      axios.get(`/api/sessions/${this.$route.params.id}`).then((response) => {
        console.log(response);
        this.session = response.data;
      });
    },
  },
};
</script>