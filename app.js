const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

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

app.use(express.static(path.join(__dirname, 'client')));
app.get('*', function (req, res, next) {
    res.sendFile(__dirname + '/client/index.html');
});

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

