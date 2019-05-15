
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {firstName: 'Rick', lastName: 'Sanchez', username: 'ricksanchez', email: 'ricksanchez@gmail.com', password:'ricksanchez'},
        {firstName: 'Beth', lastName: 'Sanchez', username: 'bethsanchez', email: 'bethsanchez@gmail.com', password:'bethsanchez'},
        {firstName: 'John', lastName: 'Snow', username: 'johnsnow', email: 'johnsnow@gmail.com', password:'johnsnow'},
        {firstName: 'Bruce', lastName: 'Wayne', username: 'brucewayne', email: 'brucewayne@gmail.com', password:'brucewayne'},
        {firstName: 'Steve', lastName: 'Rogers', username: 'steverogers', email: 'steverogers@gmail.com', password:'steverogers'},
        {firstName: 'Selena', lastName: 'Gomez', username: 'selenagomez', email: 'selenagomez@gmail.com', password:'selenagomez'},
        {firstName: 'Jerry', lastName: 'Smith', username: 'jerrysmith', email: 'jerrysmith@gmail.com', password:'jerrysmith'},
      ]);
    });
};
