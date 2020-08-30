<template>
  <div class="home">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div v-for="user in users" class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <!-- <span class="section-heading-upper">Our Promise</span> -->
                <span class="section-heading-lower">{{ user.username }}</span>
              </h2>
              <!-- <p class="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p> -->
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" v-bind:href="'/users/' + user.id">View Sessions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div v-for="user in users">
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p><a v-bind:href="'/users/' + user.id">View Sessions</a></p>
      <hr>
    </div> -->
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