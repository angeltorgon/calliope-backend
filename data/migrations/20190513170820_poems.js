
exports.up = function(knex, Promise) {
  return knex.schema.createTable('poems', table => {
    table.increments();
    table.string('poemTitle', 255).notNullable();
    table.string('poem').notNullable();
    table.string('username', 255).notNullable();
    table.integer('likes');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('poems');
};
