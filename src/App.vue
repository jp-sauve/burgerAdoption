<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div role="button" class="navbar-burger" data-target="mainMenu"
             v-on:click="toggleMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div class="navbar-menu" id="mainMenu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/survey" class="navbar-item">Survey</router-link>
          <router-link to="/hamburgers" class="navbar-item">Hamburgers</router-link>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleMenu(evt) {
      // eslint-disable-next-line
      alert(evt);
    },
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.navbar {
  padding: 30px;
}

.navbar a {
  font-weight: bold;
  color: #2c3e50;
}

.navbar a.router-link-exact-active {
  color: #42b983;
}
.navbar-burger {
  background-color: #F00;
}
</style>
