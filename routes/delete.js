const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Population = require('../models/delhiPopulation')

router.delete('/remove/:id', (req, res) => {
    console.log('ok')
    Population.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.send(`Something went worng ${res.statusCode}`)
        }
        else {
            res.json(`Deleted data ${data}`)
        }
    })
})

module.exports = router;