const express = require("express");
const router = express.Router();

// different model routers
router.use('/sauces', require('./items.js'));

module.exports = router;
