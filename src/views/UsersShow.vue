<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>Username: {{ this.user.username }}</h2>
    <p>Email: {{ this.user.email }}</p>
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
  methods: {
    usersShow: function () {
      console.log("showing users");
      console.log(this.$route.params.id);
      axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>