
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          firstName: 'rick',
          lastName: 'sanchez',
          username: 'ricksanchez',
          email: 'ricksanchez@gmail.com',
          password: 'ricksanchez',
          avatar: `https://api.adorable.io/avatars/200/ricksanchez@gmail.com`
        },
        {
          firstName: 'beth',
          lastName: 'sanchez',
          username: 'bethsanchez',
          email: 'bethsanchez@gmail.com',
          password: 'bethsanchez',
          avatar: `https://api.adorable.io/avatars/200/bethsanchez@gmail.com`
        },
        { 
          firstName: 'john', 
          lastName: 'snow', 
          username: 'johnsnow', 
          email: 'johnsnow@gmail.com', 
          password: 'johnsnow',
          avatar: `https://api.adorable.io/avatars/200/johnsnow@gmail.com` 
        },
        { 
          firstName: 'bruce', 
          lastName: 'wayne', 
          username: 'brucewayne', 
          email: 'brucewayne@gmail.com', 
          password: 'brucewayne',
          avatar: `https://api.adorable.io/avatars/200/brucewayne@gmail.com`  
        },
        { 
          firstName: 'steve', 
          lastName: 'rogers', 
          username: 'steverogers', 
          email: 'steverogers@gmail.com', 
          password: 'steverogers',
          avatar: `https://api.adorable.io/avatars/200/steverogers@gmail.com`  
        },
        { 
          firstName: 'selena', 
          lastName: 'gomez', 
          username: 'selenagomez', 
          email: 'selenagomez@gmail.com', 
          password: 'selenagomez',
          avatar: `https://api.adorable.io/avatars/200/selenagomez@gmail.com`  
        },
        { 
          firstName: 'jerry', 
          lastName: 'smith', 
          username: 'jerrysmith', 
          email: 'jerrysmith@gmail.com', 
          password: 'jerrysmith', 
          avatar: `https://api.adorable.io/avatars/200/jerrysmith@gmail.com` 
        },
      ]);
    });
};
