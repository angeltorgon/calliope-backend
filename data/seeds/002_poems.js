
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('poem').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('poem').insert([
        {
        poemTitle:"Oh Beautiful", 
        poem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt auctor viverra. Aenean eu orci in dolor pellentesque porta. Vestibulum posuere, mauris lobortis finibus feugiat, lectus est tincidunt tortor, nec luctus sem est ut elit. Proin eu ex et velit rutrum commodo. Nunc varius, lorem id efficitur eleifend, ex eros suscipit leo, sit amet bibendum magna lectus non ante. Mauris dictum urna maximus diam congue ullamcorper. In at dolor non libero fermentum ullamcorper in vel sapien. Etiam dignissim auctor nisl, at accumsan enim facilisis dictum. Curabitur dictum dui lobortis volutpat venenatis. Vivamus fermentum dolor ac varius pretium. Praesent mollis ultrices purus vitae interdum.",
        username: 'bethsanchez',
        user_id:2,
        likes:95,
        },
        {
        poemTitle:"Reckless Love", 
        poem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt auctor viverra. Aenean eu orci in dolor pellentesque porta. Vestibulum posuere, mauris lobortis finibus feugiat, lectus est tincidunt tortor, nec luctus sem est ut elit. Proin eu ex et velit rutrum commodo. Nunc varius, lorem id efficitur eleifend, ex eros suscipit leo, sit amet bibendum magna lectus non ante. Mauris dictum urna maximus diam congue ullamcorper. In at dolor non libero fermentum ullamcorper in vel sapien. Etiam dignissim auctor nisl, at accumsan enim facilisis dictum. Curabitur dictum dui lobortis volutpat venenatis. Vivamus fermentum dolor ac varius pretium. Praesent mollis ultrices purus vitae interdum.",
        username: 'bethsanchez',
        user_id:2,
        likes:95,
        },
        {
        poemTitle:"The Other Day", 
        poem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt auctor viverra. Aenean eu orci in dolor pellentesque porta. Vestibulum posuere, mauris lobortis finibus feugiat, lectus est tincidunt tortor, nec luctus sem est ut elit. Proin eu ex et velit rutrum commodo. Nunc varius, lorem id efficitur eleifend, ex eros suscipit leo, sit amet bibendum magna lectus non ante. Mauris dictum urna maximus diam congue ullamcorper. In at dolor non libero fermentum ullamcorper in vel sapien. Etiam dignissim auctor nisl, at accumsan enim facilisis dictum. Curabitur dictum dui lobortis volutpat venenatis. Vivamus fermentum dolor ac varius pretium. Praesent mollis ultrices purus vitae interdum.",
        username: 'brucewayne',
        user_id:4, 
        likes:955,
        },
        {
        poemTitle:"Solemn Day", 
        poem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt auctor viverra. Aenean eu orci in dolor pellentesque porta. Vestibulum posuere, mauris lobortis finibus feugiat, lectus est tincidunt tortor, nec luctus sem est ut elit. Proin eu ex et velit rutrum commodo. Nunc varius, lorem id efficitur eleifend, ex eros suscipit leo, sit amet bibendum magna lectus non ante. Mauris dictum urna maximus diam congue ullamcorper. In at dolor non libero fermentum ullamcorper in vel sapien. Etiam dignissim auctor nisl, at accumsan enim facilisis dictum. Curabitur dictum dui lobortis volutpat venenatis. Vivamus fermentum dolor ac varius pretium. Praesent mollis ultrices purus vitae interdum.",
        username: 'steverogers',
        user_id:5, 
        likes:545,
        },
        {
        poemTitle:"Crazy Words", 
        poem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt auctor viverra. Aenean eu orci in dolor pellentesque porta. Vestibulum posuere, mauris lobortis finibus feugiat, lectus est tincidunt tortor, nec luctus sem est ut elit. Proin eu ex et velit rutrum commodo. Nunc varius, lorem id efficitur eleifend, ex eros suscipit leo, sit amet bibendum magna lectus non ante. Mauris dictum urna maximus diam congue ullamcorper. In at dolor non libero fermentum ullamcorper in vel sapien. Etiam dignissim auctor nisl, at accumsan enim facilisis dictum. Curabitur dictum dui lobortis volutpat venenatis. Vivamus fermentum dolor ac varius pretium. Praesent mollis ultrices purus vitae interdum.",
        username: 'johnsnow',
        user_id:3, 
        likes:595,
        },
        {
        poemTitle:"Hello, Goodbye", 
        poem:"Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. Maecenas tincidunt auctor viverra. Aenean eu orci in dolor \n pellentesque porta. Vestibulum posuere, mauris lobortis finibus feugiat, lectus est tincidunt tortor, nec luctus sem est ut elit. Proin eu ex et velit rutrum commodo. Nunc varius, lorem id efficitur eleifend, ex eros suscipit leo, sit amet bibendum magna lectus non ante. Mauris dictum urna maximus diam congue ullamcorper. In at dolor non libero fermentum ullamcorper in vel sapien. Etiam dignissim auctor nisl, at accumsan enim facilisis dictum. Curabitur dictum dui lobortis volutpat venenatis. Vivamus fermentum dolor ac varius pretium. Praesent mollis ultrices purus vitae interdum.",
        username: 'jerrysmith',
        user_id:7, 
        likes:295,
        }
    ]);
    });
};
