
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('poems').del()
    .then(function () {
      // Inserts seed entries
      return knex('poems').insert([
        {
          id: 1, 
          poemTitle: 'rowValue1'
        },
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
