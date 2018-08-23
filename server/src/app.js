const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 8081
// eslint-disable-next-line
const Oils = require('../models/oilModel')

mongoose.connect('mongodb://admin:adminpass1@ds123852.mlab.com:23852/mes_huiles_db', {useNewUrlParser: true})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const routes = require('../routes/oilRoutes')
routes(app)

app.listen(port)

console.log('Oil RESTful API server started on: ' + port)
