<template>
  <div class="container is-desktop">
    <p>Here is our list of Hamburgers.
    Incompatible burgers are hidden if you've just done the quiz.
      Push the button to see all of them.</p>
        <hamburger v-bind:burgers='burgers'></hamburger>
      </div>
</template>

<script>
import Hamburger from './Hamburger';

export default {
  name: 'Hamburgers',
  data() {
    return {
      burgers: this.$store.state.burgers,
    };
  },
  components: {
    hamburger: Hamburger,
  },
};
</script>

<style scoped>

</style>
