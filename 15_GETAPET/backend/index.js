const express = require('express')
const cors = require('cors')

const app = express()

// config JSON responde
app.use(express.json())

// solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))

// public folder for images
app.use(express.static('public'))

const userRoutes = require('./routes/UserRoutes')
// Routes
app.use('/Users', userRoutes)

app.listen(3311)