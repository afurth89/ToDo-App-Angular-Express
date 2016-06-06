'use strict'

require("locus");

var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

// shorthand for '/todos' - see app.js
router.route('/')
  // .get((req, res) => {
    // res.send("hello")
  // })
  .post((req, res) => {
    res.send("hello")
  });

module.exports = router;