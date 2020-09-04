<template>
  <div class="home">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div v-for="user in users" class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-lower">{{ user.username }}</span>
                <span v-if="user.session_count === null" class="section-heading-upper">No Sessions Yet</span>
                <span v-if="user.session_count >= 1" class="section-heading-upper">Number of Sessions: {{ user.session_count }}</span>
              </h2>
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" v-bind:href="'/users/' + user.id">View Sessions</a>
              </div>
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