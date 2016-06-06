exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', function(table) {
    table.text('test_column');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('test');
};
