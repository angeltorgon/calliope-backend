
exports.up = function(knex, Promise) {
  return knex.schema.createTable('poems', table => {
    table.increments();
    table.string('poemTitle', 255).notNullable();
    table.text('poem').notNullable();
    table.string('user_id', 255).notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('likes');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('poems');
};
