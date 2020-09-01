<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Birding!",
    };
  },
  created: function () {
    this.redirect();
  },
  methods: {
    redirect: function () {
      this.$router.push("/login");
    },
  },
};
</script>