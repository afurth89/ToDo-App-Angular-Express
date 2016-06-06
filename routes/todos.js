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
    knex('todos').insert(req.body.todo)
      .returning('*')
      .then(function(todo) {
        res.format({
          json: function() {
            res.send({todo});
          }
        })
      })
      .catch(function(err) {
        console.log("THE ERROR IS...", err)
      })
  });

module.exports = router;