<template>
  <div class="header">
    <router-link class="link name" to="/" exact>Zehua Chen</router-link>
    <router-link class="link" active-class="active" to="/" exact>Portfolio</router-link>
    <router-link class="link" active-class="active" to="/About" exact>About Me</router-link>
    <router-link class="link" active-class="active" to="/CV" exact>CV</router-link>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.header {
  //border: 1px solid;
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .link {
    padding: 10px;
    text-align: left;
    font-size: 1.5em;
    text-decoration: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.507);
    }
  }

  .name {
    font-weight: bold;
    color: rgba(61, 61, 61, 0.748);
  }

  .active {
    padding: 10px 20px;
  }
}
</style>
