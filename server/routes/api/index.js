const router = require("express").Router()
const mediaRoutes = require("./mediaRoutes")

router.use('/media', mediaRoutes)

module.exports = router