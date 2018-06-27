/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    burgers: [
      {
        name: 'Eco Burger',
        description: 'Organic vegetables on the most eco-friendly patty available.',
        patty: 'Vegan',
        topping: ['Lettuce', 'Tomato'],
        sauce: ['Sriracha'],
        visible: true,
      },
      {
        name: 'Greener Burger',
        description: 'Pretty nice greens atop our pure vegan patty.',
        patty: 'Vegan',
        topping: ['Lettuce', 'Mushroom'],
        sauce: ['Salsa', 'Sriracha'],
        visible: true,
      },
      {
        name: 'Sustainy Burger',
        description: 'Flavourless lettuce atop a patty made of twigs.',
        patty: 'Vegan',
        topping: ['Lettuce'],
        sauce: ['Salsa'],
        visible: true,
      },
      {
        name: 'Life Burger',
        description: 'Freshest vegetables on a meat flavoured tofu slab.',
        patty: 'Vegetarian',
        topping: ['Tomato', 'Mushroom', 'Lettuce'],
        sauce: ['Mayonnaise', 'Salsa'],
        visible: true,
      },
      {
        name: 'Peace Burger',
        description: 'For those darned kids, a tofu slab with cheese and tomatoes.',
        patty: 'Vegetarian',
        topping: ['Tomato', 'Cheese'],
        sauce: ['Ketchup'],
        visible: true,
      },
      {
        name: 'Green Burger',
        description: 'The sauciest of vegetarian burgers, this tofu brick tastes just like your childhood.',
        patty: 'Vegetarian',
        topping: ['Lettuce', 'Tomato'],
        sauce: ['Ketchup', 'Mustard'],
        visible: true,
      },
      {
        name: 'Bessie Burger',
        description: 'So tasty you might forget how bad beef farms are!',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Tomato', 'Cheese'],
        sauce: ['Ketchup', 'Mustard'],
        visible: true,
      },
      {
        name: 'Wilbur Burger',
        description: 'Why stop at one species! Add bacon for more fun.',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Bacon'],
        sauce: ['Ketchup'],
        visible: true,
      },
      {
        name: 'Multispecies Grease Burger',
        description: 'You will probably have a heart attack, but it will be the best heart attack ever!',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Cheese', 'Bacon', 'Mushroom'],
        sauce: ['Mayonnaise', 'Sriracha'],
        visible: true,
      },
    ],
    answers: [],
  },
  getters: {
    answers: state => {
      return state.answers;
    },
    burgers: state => state.burgers,
  },
  mutations: {
    setAllBurgersVisible(state) {
      state.burgers.forEach(function (burger, index, array) {
        burger.visible = true;
      });
    },
    updateBurgerVisibility(state) {
      state.burgers.forEach(function( burger, index, array) {
        switch (true) {
          case (burger.patty === state.answers[0]):
            burger.visible = true;
            break;
          default:
            burger.visible = false;
        }


      });
    },
    submitAnswers(state, payload) {
      state.answers = payload;
    },
  },
  actions: {
    showAll: function() {
      this.setAllBurgersVisible(state);
    },
  },
});

export default store;
