<template>
  <div id="app">
    <h1 class="site-heading text-center text-white d-none d-lg-block">
      <span class="site-heading-upper text-primary mb-3">Adventure Awaits</span>
      <span class="site-heading-lower">Bird Spotting</span>
    </h1>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="/login">Bird Spotting</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto">
            <li :class="[currentPage.includes('users') ? activeClass : '', 'nav-item px-lg-4']">
              <a class="nav-link text-uppercase text-expanded" href="/users">Users
              </a>
            </li>
            <li :class="[currentPage.includes('sessions') ? activeClass : '', 'nav-item px-lg-4']">
              <a class="nav-link text-uppercase text-expanded" href="/sessions">My Sessions</a>
            </li>
            <li :class="[currentPage.includes('new') ? activeClass : '', 'nav-item px-lg-4']">
              <a class="nav-link text-uppercase text-expanded" href="/new">New Session</a>
            </li>
            <li v-if="!isLoggedIn()" :class="[currentPage.includes('login') ? activeClass : '', 'nav-item px-lg-4']">
              <a class="nav-link text-uppercase text-expanded" href="/login">Login</a>
            </li>
            <li v-if="isLoggedIn()" :class="[currentPage.includes('logout') ? activeClass : '', 'nav-item px-lg-4']">
              <a class="nav-link text-uppercase text-expanded" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <p class="m-0 small">Copyright &copy; birdspotting.com 2020</p>
      </div>
    </footer>   
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      activeClass: "active",
      jwt: localStorage.getItem("jwt"),
    };
  },

  computed: {
    currentPage() {
      return this.$route.path;
    },
  },

  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>