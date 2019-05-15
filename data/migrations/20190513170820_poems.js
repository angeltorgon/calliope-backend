
exports.up = function(knex, Promise) {
  return knex.schema.createTable('poem', table => {
    table.increments();
    table.string('poemTitle', 255).notNullable();
    table.text('poem').notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('likes').notNullable().defaultsTo(0);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('poem');
};
