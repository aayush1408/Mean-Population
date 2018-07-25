const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Population = require('../models/delhiPopulation')

router.get('/display', (req, res) => {
    Population.find({}, (err, data) => {
        if (err) {
            res.send(`Something went worng ${res.statusCode}`)
        }
        else {
            res.send(data)
        }
    })
})

module.exports = router;