
exports.up = function(knex, Promise) {
  return knex.schema.createTable('poem', table => {
    table.increments();
    table.string('poemTitle', 255).notNullable();
    table.text('poem').notNullable();
    table.string('username', 255).notNullable().references('username').inTable('user').onDelete('CASCADE').index();
    table.integer('user_id').notNullable().references('id').inTable('user').onDelete('CASCADE').index();
    table.integer('likes').notNullable().defaultsTo(0);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('poem');
};
