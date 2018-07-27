const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/index')
const app = express()
const Population = require('./models/delhiPopulation')

mongoose.connect(config.mongoURI)
mongoose.connection.once('open', () => {
    console.log('Connected to db');
})

const csvFilePath = './assets/DelhiPopulationData.csv'
const csv = require('csvtojson')

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