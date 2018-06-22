<template>
  <div>
  <div class="hero is-primary">
    <div class="hero-body image">
      <img src="../assets/hero.png" alt="">
      <div id="hero-title">
  <h1 class="title is-size-1-desktop is-size-3-mobile">Hamburger Adoption Agency</h1>
  <h2 class="subtitle is-size-5-desktop is-size-7-mobile">est. {{ msg }}</h2>
      </div>
    </div>
  </div>
    <section class="section">
      <p>Welcome to the one and only Hamburger adoption Agency!
        We currently have {{ totalBurgers }} burgers ready to take home!</p>
      <p><b-field>
        <b-input type="text" placeholder="Enter your name to begin..."
                 v-model="yourName" @keyup.native.enter="startSurvey"></b-input>
      </b-field></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: Date(),
      totalBurgers: 5,
      yourName: '',
    };
  },
  methods: {
    startSurvey() {
      const name = (this.yourName && this.yourName.trim()) || null;
      if (!name) {
        return;
      }
      this.$router.push({ name: 'Survey', params: { name } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-body {
background-size: cover;
  position: relative;
}
#hero-title {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -150%);
}
</style>
