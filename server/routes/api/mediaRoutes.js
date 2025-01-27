// const router = require('express').Router()

// const { getMedia } = require('../../controllers/mediaControllers.js')

// router.route('/').get(getMedia)

// module.exports = router

const router = require("express").Router()
const { searchByArtist } = require("../../controllers/mediaControllers")
const { searchByMediaType } = require("../../controllers/mediaControllers")


router.route('/artist').get(searchByArtist)
router.route('/type').get(searchByMediaType)

// router.route('/').get(getMedia)

module.exports = router