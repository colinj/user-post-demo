<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #aaa;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
