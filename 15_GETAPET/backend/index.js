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
const petRoutes = require('./routes/PetRoutes')
// Routes
app.use('/users', userRoutes)
app.use('/pets', petRoutes)

app.listen(3311)