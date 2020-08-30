<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>Username: {{ this.user.username }}</h2>
    <p>Email: {{ this.user.email }}</p>
    <div v-for="session in this.user.sessions">
      <p>State: {{ session.state }}</p>
      <p>County: {{ session.county }}</p>
      <span>{{moment(session.created_at).format('MMMM Do YYYY, h:mm a')}}</span>
      <p><a v-bind:href="'/sessions/' + session.id">View Birds</a></p>
      <hr>
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