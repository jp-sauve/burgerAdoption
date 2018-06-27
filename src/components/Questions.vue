<template>
  <div id="outer" class="tile is-ancestor">
    <div class="tile is-parent is-vertical is-4">
      <div class="tile is-child box"></div>
      <div class="tile is-child box"></div>
    </div>

    <div v-for="(q, q_index) in questions" :key="q.text">
      <div v-if="q_index === currentQuestion">
        <div class="tile is-parent is-8">
          <div class="tile is-child box">
            <p class="title">{{ q.text }}</p>
            <ul>
              <transition name="slide-fade">
              <div v-if="q.type == 'checkbox'">
                <li v-for="(r, ch_index) in q.resp"
                    :key="r.text">
                  <input type="checkbox"
                         :id="ch_index"
                         :value="r.text"
                         v-model="answers[q_index]">
                  {{ ch_index }}: {{ r.text }}
                </li>
              </div>
              </transition>
              <transition name="slide-fade" mode="out-in">
              <div v-if="q.type == 'radio'">
                <li v-for="(r, r_index) in q.resp" :key="r.text">
                  <input type="radio"
                         :id="r_index"
                         :value="r.text"
                         v-model="answers[q_index]">
                  <label :for="r.text">{{ r_index }}: {{ r.text }}</label>
                </li>
              </div>
              </transition>
            </ul>
            {{ currentQuestion + 1 }} / {{ questionCount }}
            <button class="button is-dark" v-if="currentQuestion > 0" v-on:click="previousQuestion">
              Back</button>
            <button class="button is-dark"
                    v-if="currentQuestion + 1 < questionCount"
                    v-on:click="nextQuestion">Next</button>
            <button class="button is-success" v-if="currentQuestion + 1 === questionCount"
                    v-on:click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const questions = [
  {
    text: 'What kind of patty?',
    type: 'radio',
    resp: [
      { text: 'Vegan' },
      { text: 'Vegetarian' },
      { text: 'Carnivore' },
    ],
    answer: '',
  },
  {
    text: 'What cosmetics should your ideal burger wear?',
    type: 'checkbox',
    resp: [
      { text: 'Tomato' },
      { text: 'Cheese' },
      { text: 'Lettuce' },
      { text: 'Bacon' },
      { text: 'Mushroom' },
    ],
    answer: [],

  },
  {
    text: 'Many burgers come wet with lotions. Which lotions are the good lotions?',
    type: 'checkbox',
    resp: [
      { text: 'Ketchup' },
      { text: 'Mustard' },
      { text: 'Mayonnaise' },
      { text: 'Sriracha' },
      { text: 'Salsa' },
    ],
    answer: [],

  },
];
export default {
  name: 'Questions',
  data() {
    return {
      msg: Date(),
      totalBurgers: 5,
      yourName: '',
      questions,
      currentQuestion: 0,
      answers: Array(questions.length).fill([]),
    };
  },
  methods: {
    nextQuestion() {
      this.currentQuestion += 1;
    },
    previousQuestion() {
      this.currentQuestion -= 1;
    },
    submit() {
      this.$store.commit('submitAnswers', this.answers);
      this.$store.commit('updateBurgerVisibility');
      // eslint-disable-next-line
      this.$router.push({ path: '/hamburgers' });
    },
  },
  computed: {
    questionCount() {
      return questions.length;
    },
  },
};
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
