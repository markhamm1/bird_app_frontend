<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1> -->
    <h2>Create a New Account</h2>
    <ul>
      <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="form-group">
      <label>Email Address: </label>
      <input type="text" class="form-control" v-model="email">
    </div>
    <div class="form-group">
      <label>Username: </label>
      <input type="text" class="form-control" v-model="username">
    </div>
    <div class="form-group">
      <label>Password: </label>
      <input type="text" class="form-control" v-model="password">
    </div>
    <button v-on:click="submit">Submit</button>
    <!-- <input type="submit" class="btn btn-primary" value="Submit"> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Users New",
      email: "",
      username: "",
      password: "",
      errors: [],
      status: "",
    };
  },
  created: function () {},
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        username: this.username,
        password: this.password,
      };
      console.log(params);
      axios
        .post("api/users", params)
        .then((repsonse) => {
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.response);
          this.status = error.response.request.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
