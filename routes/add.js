const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Population = require('../models/delhiPopulation')

router.post('/add', (req, res) => {
    let newData = new Population(req.body)
    newData.save((err) => {
        if (err) throw err;
        res.send('Saved')
    })
})

module.exports = router;