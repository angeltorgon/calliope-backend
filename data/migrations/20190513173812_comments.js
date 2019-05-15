
exports.up = function (knex, Promise) {
    return knex.schema.createTable('comment', table => {
        table.increments();
        table.text('comment').notNullable();
        table.integer('likes').notNullable().defaultsTo(0);
        table.string('poem_id').notNullable().references('id').inTable('poem').onDelete('CASCADE');
        table.integer('user_id', 255).notNullable().references('id').inTable('users').onDelete('CASCADE').index();
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('comment');
};
