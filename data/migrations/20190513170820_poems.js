
exports.up = function(knex, Promise) {
  return knex.schema.createTable('poem', table => {
    table.increments();
    table.string('poemTitle', 255).notNullable();
    table.string('username', 255).notNullable().references('username').inTable('user').onDelete('CASCADE').index();
    table.integer('user_id').notNullable().references('id').inTable('user').onDelete('CASCADE').index();
    table.integer('likes').notNullable().defaultsTo(0);
    table.timestamps(true, true);
    table.string('line_1');
    table.string('line_2');
    table.string('line_3');
    table.string('line_4');
    table.string('line_5');
    table.string('line_6');
    table.string('line_7');
    table.string('line_8');
    table.string('line_9');
    table.string('line_10');
    table.string('line_11');
    table.string('line_12');
    table.string('line_13');
    table.string('line_14');
    table.string('line_15');
    table.string('line_16');
    table.string('line_17');
    table.string('line_18');
    table.string('line_19');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('poem');
};
