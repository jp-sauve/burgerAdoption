<template>
  <div id="outer" class="tile is-ancestor">
    <div class="tile is-parent is-vertical is-4">
    <div class="tile is-child box"></div>
    <div class="tile is-child box"></div>
    </div>

  <div v-for="(q, index) in questions" :key="q.text">
    <div v-if="index === currentQuestion">
      <div class="tile is-parent is-8">
        <div class="tile is-child box">
    <p class="title">{{ q.text }}</p>
    <ul>
      <div v-if="q.type == 'checkbox'">
        <b-checkbox-group>
      <li v-for="(r, index) in q.resp" :key="r.text">
        <b-checkbox :id="index" :native-value="r.text" :v-model="this.$store.state.answer"></b-checkbox>
        <input type="checkbox" :id="index" :value="r.text" v-model="q.answer">
          {{ index }}: {{ r.text }}

      </li>
        </b-checkbox-group>
      </div>
      <div v-if="q.type == 'radio'">
        <li v-for="(r, index) in q.resp" :key="r.text">
            <input type="radio" :id="index" :value="r.text" v-model="q.answer">
          <label :for="r.text">{{ index }}: {{ r.text }}</label>
        </li>
      </div>
    </ul>
      {{ currentQuestion + 1 }} / {{ questionCount }}
    <button class="button is-dark" v-if="currentQuestion > 0" v-on:click="previousQuestion">
      Back</button>
    <button class="button is-dark" v-if="currentQuestion + 1 < questionCount"
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

</style>
