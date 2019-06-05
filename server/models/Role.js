'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Role {
  static async all() {
    return await db_client('roles')
  }

  static async find(id) {
    return db_client('roles').where({ id }).first()
  }

  static async create(role) {
    return await db_client('roles').insert(role)
  }

  static async update(id, role) {
    return db_client('roles')
      .where({ id }).first()
      .update(role)
  }

  static async remove(id) {
    return await db_client('roles')
      .where({ id: req.params.id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Role
