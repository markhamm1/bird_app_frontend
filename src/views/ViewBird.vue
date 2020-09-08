

<template>
  <div class="login">
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt="">
          <div class="intro-text left-1 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Maybe Something</span>
              <span class="section-heading-lower">Bird Name</span>
            </h2>
            <div class="mb-3">
              <div class="intro-button mx-auto">
                <a class="btn btn-primary btn-xl" href="#">Close</a>
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
  created: function () {
    this.showBird();
  },
  methods: {
    showBird: function () {},
  },
};
</script>
