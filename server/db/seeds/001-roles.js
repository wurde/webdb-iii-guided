'use strict'

/**
 * Dependencies
 */

const knex = require('knex')

/**
 * Define seed
 */

function seed() {
  return knex('roles')
    .truncate()
    .then(() => {
      return knex('roles').insert([
        { name: 'Student' },
        { name: 'TA' },
        { name: 'PM' },
      ])
    })
}

/**
 * Export seed
 */

module.exports = { seed }
