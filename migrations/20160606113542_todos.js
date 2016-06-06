exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function(table) {
    // increments
    table.increments().primary();
    // content
    table.text('content').notNullable();
    // completed
    table.boolean('completed').defaultTo(false);
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};

