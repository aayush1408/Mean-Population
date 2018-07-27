const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create the schema
const populationSchema = new Schema({
    year: String,
    population: String,
    growth: String,
    rate: String
});

// Export the model
module.exports = mongoose.model('Population', populationSchema);