
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment.",
          username: 'bethsanchez',
          likes: 645,
          poem_id: 2,
          user_id: 2
        },
        {
          comment: "Upon billions upon billions upon billions.",
          username: 'brucewayne',          
          likes: 976,
          poem_id: 2,
          user_id: 4
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away?",
          username: 'steverogers',
          likes: 586,
          poem_id: 2,
          user_id: 5
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishmen.",
          username: 'bethsanchez',
          likes: 677,
          poem_id: 3,
          user_id: 2
        },
        {
          comment: "Death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          username: 'jerrysmith',
          likes: 467,
          poem_id: 3,
          user_id: 7
        },
        {
          comment: "Billions upon billions upon billions upon billions.",
          username: 'ricksanchez',
          likes: 470,
          poem_id: 4,
          user_id: 1
        },
        {
          comment: "Hourage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          username: 'brucewayne',
          likes: 447,
          poem_id: 4,
          user_id: 4
        },
        {
          comment: "Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          username: 'steverogers',
          likes: 775,
          poem_id: 4,
          user_id: 5
        },
        {
          comment: "Courage of our questions at the edge of forever paroxysm of global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions?.",
          username: 'johnsnow',
          likes: 67,
          poem_id: 4,
          user_id: 3
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring!!",
          username: 'bethsanchez',
          likes: 97,
          poem_id: 5,
          user_id: 2
        },
        {
          comment: "Apollonius of Perga how far away? Take root and flourish permanence of the stars stirred by starlight across the centuries another!?",
          username: 'steverogers',
          likes: 47,
          poem_id: 5,
          user_id: 5
        },
        {
          comment: "Billions upon billions upon billions upon billions.",
          username: 'brucewayne',
          likes: 747,
          poem_id: 6,
          user_id: 4
        },
        {
          comment: "Global death Orion's sword are creatures of the cosmos are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          username: 'johnsnow',
          likes: 647,
          poem_id: 2,
          user_id: 3
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish!!",
          username: 'bethsanchez',
          likes: 470,
          poem_id: 1,
          user_id: 2
        },
        {
          comment: "Aillions upon billions upon billions upon billions upon billions.",
          username: 'bethsanchez',
          likes: 417,
          poem_id: 3,
          user_id: 2
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring.",
          username: 'bethsanchez',
          likes: 347,
          poem_id: 4,
          user_id: 2
        },
        {
          comment: "Creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          username: 'ricksanchez',
          likes: 471,
          poem_id: 2,
          user_id: 1
        },
        {
          comment: "Hydrogen atoms dream of the mind's eye from which we spring astonishment Apollonius of Perga how far away? Take root and flourish.",
          username: 'brucewayne',
          likes: 497,
          poem_id: 3,
          user_id: 4
        },
        {
          comment: "Hhello ydrogen atoms dream of the mind's eye from which we spring a.",
          username: 'steverogers',
          likes: 107,
          poem_id: 3,
          user_id: 5
        },
        {
          comment: "Venture star stuff harvesting star light at the edge of forever muse about globular star cluster a mote of dust suspended in a sunbeam.",
          username: 'bethsanchez',
          likes: 787,
          poem_id: 3,
          user_id: 2
        },
      ]);
    });
};
