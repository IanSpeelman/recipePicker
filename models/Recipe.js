const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	cuisine: {
		type: String,
		required: true,
	},
	servings: {
		type: Number,
		required: true,
	},
	prep_time: {
		type: Number,
		required: true,
	},
	cook_time: {
		type: Number,
		required: true,
	},
	ingredients: {
		type: Array,
		required: true,
	},
	instructions: {
		type: Array,
		required: true,
	},
	image: {
		type: String,
		required: true
	}
});
const Recipe = model("Recipe", recipeSchema)
module.exports = Recipe