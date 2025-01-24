// const router = require('express').Router()

// const { getMedia } = require('../../controllers/mediaControllers.js')

// router.route('/').get(getMedia)

// module.exports = router

const router = require("express").Router()
const { getMedia } = require("../../controllers/mediaControllers")

router.route('/').get(getMedia)

module.exports = router