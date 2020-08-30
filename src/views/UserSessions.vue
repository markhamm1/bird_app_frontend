<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="session in sessions">
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
      message: "My Sessions!",
      sessions: [],
    };
  },
  created: function () {
    this.sessionIndex();
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