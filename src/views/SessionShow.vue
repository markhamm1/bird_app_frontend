<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>State: {{ session.state }}</p>
    <p>County: {{ session.county }}</p>
    <span>{{moment(session.created_at).format('MMMM Do YYYY, h:mm a')}}</span>
    <div v-for="bird in session.birds">
      <p>{{ bird.bird}}</p>
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