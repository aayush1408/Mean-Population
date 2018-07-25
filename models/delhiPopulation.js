const mongoose = require('mongoose');
const { Schema } = mongoose;
const populationSchema = new Schema({
    year: String,
    population: String,
    growth: String,
    rate: String
});
module.exports = mongoose.model('Population', populationSchema);