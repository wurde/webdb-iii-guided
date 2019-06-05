'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Role = require('../models/Role')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /roles
 */

router.route('')
  .get(async (req, res) => {
    try {
      const roles = await Role.all()
      res.status(200).json(roles)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .post(async (req, res) => {
    try {
      const [id] = await Role.create(req.body)

      const role = await Role.find(id)

      res.status(201).json(role)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET,PUT,DELETE /roles/:id
 */

router.route('/:id')
  .get(async (req, res) => {
    try {
      const role = await Role.find(req.params.id)
      res.status(200).json(role)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .put(async (req, res) => {
    try {
      const count = await Role.update(req.params.id, req.body)

      if (count > 0) {
        const role = await Role.find(req.params.id)

        res.status(200).json(role)
      } else {
        res.status(404).json({ message: 'Records not found' })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .delete(async (req, res) => {
    try {
      const count = await Role.remove(req.params.id)

      if (count > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message: 'Records not found' })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Export router
 */

module.exports = router
