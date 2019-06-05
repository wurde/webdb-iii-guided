'use strict'

/**
 * Dependencies
 */

const express = require('express')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.route('')
  .get((req, res) => {
    res.redirect('/roles')
  })

/**
 * Export router
 */

module.exports = router
