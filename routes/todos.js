'use strict'

require("locus");

var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

// shorthand for '/todos' - see app.js
router.route('/')
  // Display all todos
  .get((req, res) => {
    knex('todos').select()
      .then((todos) => {
        res.format({
          json: function() {
            res.send( {todos} )  // Uses object literal notation -> {todos: [{todo1}, {todo2}, etc]}
            // res.send( todos )  // Just sends back an array of data -> [{todo1}, {todo2}, etc]
          }
        })
      })
      .catch(function(err) {
        console.log("The GET ERROR IS...", err)
      })

  })
  // Create a todo
  .post((req, res) => {
    knex('todos').insert(req.body.todo)
      // .returning('*')
      .then(function() {
        knex('todos').select()
          .then((todos) => {
            res.format({
              json: function() {
                res.send( {todos} )  // Uses object literal notation -> {todos: [{todo1}, {todo2}, etc]}
                // res.send( todos )  // Just sends back an array of data -> [{todo1}, {todo2}, etc]
              }
            })
          })
        // res.format({
        //   json: function() {
        //     res.send({todo});
        //   }
        // })
      })
      .catch(function(err) {
        console.log("The POST ERROR IS...", err)
      })
  });

router.route('/:id')
  .put((req, res) => {
    knex('todos').where('id', +req.params.id)
      .update({content: req.body.todo.content, completed: req.body.todo.completed}) 
      .returning('*')
      .then(function() {
        knex('todos').select()
          .then((todos) => {
            res.format({
              json: function() {
                res.send( {todos} )  // Uses object literal notation -> {todos: [{todo1}, {todo2}, etc]}
                // res.send( todos )  // Just sends back an array of data -> [{todo1}, {todo2}, etc]
              }
            })
          })
      })
      .catch(function(err) {
        console.log("The PATCH ERROR IS...", err)
      })
  })
  .delete((req, res) => {
    knex('todos')
      .delete() 
      .where('id', +req.params.id)
      .then(function() {
        knex('todos').select()
          .then((todos) => {
            res.format({
              json: function() {
                res.send( {todos} )  // Uses object literal notation -> {todos: [{todo1}, {todo2}, etc]}
                // res.send( todos )  // Just sends back an array of data -> [{todo1}, {todo2}, etc]
              }
            })
          })
      })
      .catch(function(err) {
        console.log("The DELETE ERROR IS...", err)
      })
  })

module.exports = router;