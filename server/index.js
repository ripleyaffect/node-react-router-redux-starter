const express = require('express')

const { PORT } = require('./config')

// Create the app
const app = express()

// Apply static middleware
app.use('/', express.static('/public'))

// Apply router middlewares
app.use('/', require('./routers/root'))
app.use('/api', require('./routers/api'))

// Start the app
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
