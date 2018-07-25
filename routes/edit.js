const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Population = require('../models/delhiPopulation')

router.put('/edit/:id', (req, res) => {
    Population.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then((data) => {
        res.send(data)
    })
})

module.exports = router;