
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comment', table => {
        table.increments();
        table.integer('user_id', 255).notNullable().references('id').inTable('users').onDelete('CASCADE').index();
        table.string('poemID').notNullable().references('id').inTable('poems').onDelete('CASCADE');
        table.string('comment').notNullable();
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comment');
};
