/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    burgers: [
      {
        name: 'Eco Burger',
        patty: 'Vegan',
        topping: ['Lettuce', 'Tomato'],
        sauce: ['Sriracha'],
        visible: true,
      },
      {
        name: 'Greener Burger',
        patty: 'Vegan',
        topping: ['Lettuce', 'Mushroom'],
        sauce: ['Salsa', 'Sriracha'],
        visible: true,
      },
      {
        name: 'Sustainable Burger',
        patty: 'Vegan',
        topping: ['Lettuce'],
        sauce: ['Salsa'],
        visible: true,
      },
      {
        name: 'Life Burger',
        patty: 'Vegetarian',
        topping: ['Tomato', 'Mushroom', 'Lettuce'],
        sauce: ['Mayonnaise', 'Salsa'],
        visible: true,
      },
      {
        name: 'Peace Burger',
        patty: 'Vegetarian',
        topping: ['Tomato', 'Cheese'],
        sauce: ['Ketchup'],
        visible: true,
      },
      {
        name: 'Green Burger',
        patty: 'Vegetarian',
        topping: ['Lettuce', 'Tomato'],
        sauce: ['Ketchup', 'Mustard'],
        visible: true,
      },
      {
        name: 'Bessie Burger',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Tomato', 'Cheese'],
        sauce: ['Ketchup', 'Mustard'],
        visible: true,
      },
      {
        name: 'Wilbur Burger',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Bacon'],
        sauce: ['Ketchup'],
        visible: true,
      },
      {
        name: 'Multispecies Grease Burger',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Cheese', 'Bacon', 'Mushroom'],
        sauce: ['Mayonnaise', 'Sriracha'],
        visible: true,
      },
    ],
    answers: [],
  },
  getters: {},
  mutations: {
    setBurgerVisibility(state) {
      state.burgers.forEach(function (burger, index, array) {
        array[index].visible = true;
      });
    },
  },
  actions: {},
});

export default store;
