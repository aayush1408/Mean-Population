const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Population = require('../models/delhiPopulation')

// Add to the database

router.post('/add', (req, res) => {
    console.log(req.body)
    let newData = new Population(req.body)
    newData.save((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

module.exports = router;