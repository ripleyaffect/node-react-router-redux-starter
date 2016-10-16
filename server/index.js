const express = require('express')

const { PORT } = require('./config')

// Create the app
const app = express()

// Apply static middleware
app.use('/static', express.static(__dirname + '/public'))

// Apply routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// Apply router middleware
app.use('/api', require('./routers/api'))

// Start the app
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
