<template>
    <transition-group class="columns is-multiline" name="list" tag="div">
<div v-for="burger in visibleBurgers(burgers)"
     :key="burger.name"
     class="column is-6-tablet is-4-desktop is-3-fullhd">
  <div class="card">
<div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{burger.name}}</p>
        <p class="subtitle is-6">A {{ burger.patty }} burger</p>
      </div>
    </div>
    <div class="content">
{{ burger.description }}
    </div>
  </div>
</div>
  </div>
    </transition-group>

</template>

<script>
export default {
  name: 'Hamburger',
  props: ['burgers'],
  methods: {
    visibleBurgers(burgers) {
      return burgers.filter(burger => burger.visible);
    },
  },
};
</script>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
  }
</style>
