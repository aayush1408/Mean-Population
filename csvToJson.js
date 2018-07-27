const express = require('express')
const csv = require('csvtojson')
const mongoose = require('mongoose')
const config = require('./config/index')
const app = express()
const Population = require('./models/delhiPopulation')

// Connect to the database
mongoose.connect(config.mongoURI)
mongoose.connection.once('open', () => {
    console.log('Connected to db');
})

// Handle the .csv file 
const csvFilePath = './assets/DelhiPopulationData.csv'

// Convert the csv data to json and add to the database
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        jsonObj.map((i) => {
            let newData = new Population({
                year: i.Year,
                population: i.Population,
                growth: i.Growth,
                rate: i.Growth_Rate
            })
            newData.save((err) => {
                if (err) throw err;
                console.log('Saved')
            })
        })
    })

// Run the server at the desired port
const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})