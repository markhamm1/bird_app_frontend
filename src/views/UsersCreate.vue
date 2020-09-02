<template>
  <div class="signup">     
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="/img/intro.jpg" alt="">
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Begin Your Adventure</span>
              <span class="section-heading-lower">Create Account</span>
            </h2>
            <div class="mb-3">
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <label>Username:</label> 
                  <input type="text" class="form-control" v-model="username">
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group">
                  <label>Password:</label>
                  <input type="password" class="form-control" v-model="password">
                </div>
                <div class="form-group">
                  <label>Password confirmation:</label>
                  <input type="password" class="form-control" v-model="passwordConfirmation">
                </div>
                <input type="submit" class="btn btn-primary" value="Submit">
              </form>
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
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
