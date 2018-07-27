const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Population = require('../models/delhiPopulation')

// Update the value in the database

router.put('/edit/:id', (req, res) => {
    Population.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: false }).then((data) => {
        console.log(req.body)
        res.send(data)
    })
})

module.exports = router;