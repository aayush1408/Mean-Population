const express = require('express')
const mongoose = require('mongoose')

// Instances of the module
const config = require('./config/index')
const app = express()
const Population = require('./models/delhiPopulation')

mongoose.connect(config.mongoURI)
mongoose.connection.once('open', () => {
    console.log('Connected to db');
})

const displayRoute = require('./routes/display')
const deleteRoute = require('./routes/delete')
const editRoute = require('./routes/edit')
const addRoute = require('./routes/add')

app.use('/api', addRoute)
app.use('/api', displayRoute)
app.use('/api', deleteRoute)
app.use('/api', editRoute)

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

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

