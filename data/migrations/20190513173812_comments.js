
exports.up = function (knex, Promise) {
    return knex.schema.createTable('comment', table => {
        table.increments();
        table.integer('user_id', 255).notNullable().references('id').inTable('users').onDelete('CASCADE').index();
        table.string('poem_id').notNullable().references('id').inTable('poem').onDelete('CASCADE');
        table.text('comment').notNullable();
        table.integer('likes').notNullable().defaultsTo(0);
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('comment');
};
