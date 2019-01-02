<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    "app-header": Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

* {
  word-wrap: break-word;
  margin: 0;
  padding: 0;
  transition: 0.3s ease;
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
