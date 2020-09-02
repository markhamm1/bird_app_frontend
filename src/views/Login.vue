

<template>
  <div class="login">
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="/img/intro.jpg" alt="">
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Adventure Awaits</span>
              <span class="section-heading-lower">Login</span>
            </h2>
            <div class="mb-3">
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group">
                  <label>Password:</label>
                  <input type="password" class="form-control" v-model="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Submit">
              </form>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" href="/users/new">Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/logins", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/sessions/new");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
