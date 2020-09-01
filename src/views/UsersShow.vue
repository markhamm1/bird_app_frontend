<template>
  <div class="home">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-lower">{{ this.user.username }}'s Sessions</span>
                <hr>
                <div v-for="session in this.user.sessions">
                  <span class="section-heading-upper">{{moment(session.created_at).format('MMMM Do YYYY, h:mm a')}}</span>
                  <span class="section-heading-lower">State: {{ session.state }}</span>
                  <span class="section-heading-lower">County: {{ session.county }}</span>
                  <div class="intro-button mx-auto">
                    <a class="btn btn-primary btn-xl" v-bind:href="'/sessions/' + session.id">View Birds</a>
                  </div>
                  <hr>
                </div>
              </h2>
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

export default {
  data: function () {
    return {
      message: "Users Show!",
      user: {},
    };
  },
  created: function () {
    this.usersShow();
  },
  mounted: function () {
    this.showSessions();
  },
  methods: {
    usersShow: function () {
      console.log("showing users");
      console.log(this.$route.params.id);
      axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
        // console.log(response.data);
        this.user = response.data;
      });
    },
    showSessions: function () {
      console.log("showing sessions");
      console.log(this.$route.params.id);
      axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
        console.log(response);
        this.sessions = response.data;
      });
    },
  },
};
</script>