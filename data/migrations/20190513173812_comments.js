
exports.up = function (knex, Promise) {
    return knex.schema.createTable('comment', table => {
        table.increments();
        table.text('comment').notNullable();
        table.integer('likes').notNullable().defaultsTo(0);
        table.string('username', 255).notNullable().references('username').inTable('user').onDelete('CASCADE').index();
        table.integer('user_id').notNullable().references('id').inTable('user').onDelete('CASCADE').index();
        table.integer('poem_id').notNullable().references('id').inTable('poem').onDelete('CASCADE');
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('comment');
};
