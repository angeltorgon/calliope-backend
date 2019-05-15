
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {dscolName: 'rowValue1'},
      ]);
    });
};
