<template>
<div id="app">
  <div id="nav">
    <Navbar></Navbar>
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 25px;
  padding-bottom: 25px;
  /*
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

  }*/
  #logo{
    font-weight: bold;
  }
}
</style>
