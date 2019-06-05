'use strict'

/**
 * Dependencies
 */

const express = require('express')
const helmet = require('helmet')

/**
 * Constants
 */

const port = process.env.PORT || 8080

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(helmet())
app.use(express.json())

/**
 * Routes
 */

app.use('/', require('./routes/root_router'))
app.use('/roles', require('./routes/roles_router'))

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () =>
    console.log(`Express running on ${port}`)
  )
}

/**
 * Export app
 */

module.exports = app
