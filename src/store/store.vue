import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	burgers: [
	{
	name: "Eco Burger",
	patty: "Vegan",
	topping: ["Lettuce", "Tomato"],
	sauce: ["salsa"],
	},
	{
	name: "Greener Burger",
	patty: "Vegan",
	topping: ["Lettuce", "Mushroom"],
	sauce: [],
	},
	{
	name: "Sustainable Burger",
	patty: "Vegan",
	topping: [],
	sauce: [],
	},
	{
	name: "Peace Burger",
	patty: "Vegetarian",
	topping: [],
	sauce: [],
	},
	{
	name: "Life Burger",
	patty: "Vegetarian",
	topping: [],
	sauce: [],
	},
	{
	name: "Green Burger",
	patty: "Vegetarian",
	topping: [],
	sauce: [],
	},
	{
	name: "Bessie Burger",
	patty: "Carnivore",
	topping: [],
	sauce: [],
	},
	{
	name: "Wilbur Burger",
	patty: "Carnivore",
	topping: [],
	sauce: [],
	},
	{
	name: "Multispecies Grease Burger",
	patty: "Carnivore",
	topping: [],
	sauce: ["Mayonnaise"],
	},
	],
}

export default new Vuex.Store({ state });