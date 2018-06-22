 <template>
   <div>
    <div class="section">
      <h1>Hamburger Adoption Survey</h1>
      <p>Dear {{ $route.params.name || 'unknown user' }},
      </p>
      <p>It's very important that we only allow the adoption of our burgers by compatible clients.
      </p>

      <div v-if="hasName">
        Please complete the short quiz to see whether we have one that fits your lifestyle.
        <div v-if="visible">
          <button id="startQuiz" class="button is-success" @click="startQuiz">Start Quiz</button>
        </div>
      </div>
      <div v-else>
        <b-message title="I know there's a link but..." type="is-danger" has-icon>
          Please go to the home page and enter your name at the bottom of the page.
        </b-message></div>
    </div>
     <div class="section">
       <router-view/>
     </div>
   </div>
  </template>

<script>
const visible = true;
export default {
  name: 'Survey',
  data() {
    return {
      visible,
    };
  },
  methods: {
    startQuiz() {
      this.visible = !this.visible;
      this.$router.push({ path: this.$route.path + '/questions' });
    },
  },
  computed: {
    hasName() {
      return (this.$route.params.name != null);
    },
  },
};
</script>

<style scoped>

</style>
