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
        active: true,
      },
      {
        name: 'Greener Burger',
        patty: 'Vegan',
        topping: ['Lettuce', 'Mushroom'],
        sauce: ['Salsa', 'Sriracha'],
        active: true,
      },
      {
        name: 'Sustainable Burger',
        patty: 'Vegan',
        topping: ['Lettuce'],
        sauce: ['Salsa'],
        active: true,
      },
      {
        name: 'Life Burger',
        patty: 'Vegetarian',
        topping: ['Tomato', 'Mushroom', 'Lettuce'],
        sauce: ['Mayonnaise', 'Salsa'],
        active: true,
      },
      {
        name: 'Peace Burger',
        patty: 'Vegetarian',
        topping: ['Tomato', 'Cheese'],
        sauce: ['Ketchup'],
        active: true,
      },
      {
        name: 'Green Burger',
        patty: 'Vegetarian',
        topping: ['Lettuce', 'Tomato'],
        sauce: ['Ketchup', 'Mustard'],
        active: true,
      },
      {
        name: 'Bessie Burger',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Tomato', 'Cheese'],
        sauce: ['Ketchup', 'Mustard'],
        active: true,
      },
      {
        name: 'Wilbur Burger',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Bacon'],
        sauce: ['Ketchup'],
        active: true,
      },
      {
        name: 'Multispecies Grease Burger',
        patty: 'Carnivore',
        topping: ['Lettuce', 'Cheese', 'Bacon', 'Mushroom'],
        sauce: ['Mayonnaise', 'Sriracha'],
        active: true,
      },
    ] },
  mutations: {
    setBurgerVisibility(state) {
      state.burgers.forEach(function(burger,index,array) {
        array[index].active = true;
      });
    },
  },
});

export default store;
