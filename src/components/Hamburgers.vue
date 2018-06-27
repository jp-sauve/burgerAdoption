<template>
  <div class="container">
    <p>Here is our list of Hamburgers.
    Incompatible burgers are hidden if you've just done the quiz.
    <button class="button alert" @click="showAll">Clear</button></p>
        <hamburger v-bind:burgers='burgers'></hamburger>
    </div>
</template>

<script>
import Hamburger from './Hamburger';

export default {
  name: 'Hamburgers',
  computed: {
    burgers: {
      get() { return this.$store.getters.burgers; },
    },
  },
  methods: {
    showAll() {
      this.$store.commit('setAllBurgersVisible');
    },
  },
  components: {
    hamburger: Hamburger,
  },
};
</script>

<style scoped>
  .griddy-enter-active, .griddy-leave-active {
    transition: all 1s;
  }
  .griddy-enter, .griddy-leave-to {
    opacity: 0;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
  }
</style>
