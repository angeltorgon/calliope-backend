
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('firstName', 255).notNullable();
    table.string('lastName', 255).notNullable();
    table.string('username', 255).unique().notNullable();
    table.email('email', 255).unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
