<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="user in users">
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
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
      message: "Users Index!",
      users: [],
    };
  },
  created: function () {
    this.usersIndex();
  },
  methods: {
    usersIndex: function () {
      console.log("indexing users");
      axios.get("/api/users").then((response) => {
        console.log(response);
        this.users = response.data;
      });
    },
  },
};
</script>