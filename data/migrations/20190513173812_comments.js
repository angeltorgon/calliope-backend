
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', table => {
        table.increments();
        table.string('username', 255).notNullable().references('username').inTable('users').onDelete('CASCADE');
        table.string('poemID').notNullable().references('id').inTable('poems').onDelete('CASCADE');
        table.string('comment').notNullable();
        table.integer('likes');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments');
};
