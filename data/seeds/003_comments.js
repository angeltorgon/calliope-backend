
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('comment').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring.",
          username: 'bethsanchez',
          likes: 645,
          poem_id: 2,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we.",
          username: 'brucewayne',          
          likes: 976,
          poem_id: 2,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's.",
          username: 'steverogers',
          likes: 586,
          poem_id: 2,
          user_id: 5
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away?",
          username: 'bethsanchez',
          likes: 677,
          poem_id: 3,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye.",
          username: 'jerrysmith',
          likes: 467,
          poem_id: 3,
          user_id: 7
        },
        {
          comment: "Hydrogen atoms dream?",
          username: 'ricksanchez',
          likes: 470,
          poem_id: 4,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment!",
          username: 'brucewayne',
          likes: 447,
          poem_id: 4,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye.",
          username: 'steverogers',
          likes: 775,
          poem_id: 4,
          user_id: 5
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment!",
          username: 'johnsnow',
          likes: 67,
          poem_id: 4,
          user_id: 3
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment.",
          username: 'bethsanchez',
          likes: 97,
          poem_id: 5,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment?",
          username: 'steverogers',
          likes: 47,
          poem_id: 5,
          user_id: 5
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye.",
          username: 'brucewayne',
          likes: 747,
          poem_id: 6,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment!",
          username: 'johnsnow',
          likes: 647,
          poem_id: 2,
          user_id: 3
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye?",
          username: 'bethsanchez',
          likes: 470,
          poem_id: 1,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away?",
          username: 'bethsanchez',
          likes: 417,
          poem_id: 3,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment.",
          username: 'bethsanchez',
          likes: 347,
          poem_id: 4,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment!",
          username: 'ricksanchez',
          likes: 471,
          poem_id: 2,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye.",
          username: 'brucewayne',
          likes: 497,
          poem_id: 3,
          user_id: 4
        },
        {
          comment: "Upon billions upon billions upon billions upon billions upon billions.",
          username: 'steverogers',
          likes: 107,
          poem_id: 3,
          user_id: 5
        },
        {
          comment: "Tre creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          username: 'bethsanchez',
          likes: 787,
          poem_id: 3,
          user_id: 2
        },
      ]);
    // });
};
