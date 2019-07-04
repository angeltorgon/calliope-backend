
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('poem').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('poem').insert([
        {
        poemTitle:"For Annie", 
        line_1:"Thank Heaven! the crisis",
        line_2:"The danger is past,",
        line_3:"And the lingering illness",
        line_4:"Is over at last",
        line_5:"And the fever called 'Living'",
        line_6:"Is conquered at last.",
        line_7:"",
        line_8:"Sadly, I know",
        line_9:"I am shorn of my strength,",
        line_10:"And no muscle I move",
        line_11:"As I lie at full length",
        line_12:"But no matter! -- I feel",
        line_13:"I am better at length.",
        line_14:"",
        line_15:"And I rest so composedly,",
        line_16:"Now, in my bed,",
        line_17:"That any beholder",
        line_18:"Might fancy me dead --",
        line_19:"Might start at beholding me,",
        line_20:"Lorem ipsum dolor sit",
        username: 'Thinking me dead.',
        user_id:1,
        likes:95,
        },
        {
        poemTitle:"Love", 
        line_1:"Lorem ipsum dolor sit",
        line_2:"Lorem ipsum dolor sit",
        line_3:"Lorem ipsum dolor sit",
        line_4:"Lorem ipsum dolor sit",
        line_5:"",
        line_6:"Lorem ipsum dolor sit",
        line_7:"Lorem ipsum dolor sit",
        line_8:"Lorem ipsum dolor sit",
        line_9:"Lorem ipsum dolor sit",
        line_10:"",
        line_11:"Lorem ipsum dolor sit",
        line_12:"Lorem ipsum dolor sit",
        line_13:"Lorem ipsum dolor sit",
        line_14:"Lorem ipsum dolor sit",
        line_15:"",
        line_16:"Lorem ipsum dolor sit",
        line_17:"Lorem ipsum dolor sit",
        line_18:"Lorem ipsum dolor sit",
        line_19:"Lorem ipsum dolor sit",
        line_20:"Lorem ipsum dolor sit",
        username: 'bethsanchez',
        user_id:2,
        likes:95,
        },
        {
        poemTitle:"The Other Day", 
        line_1:"Lorem ipsum dolor sit",
        line_2:"Lorem ipsum dolor sit",
        line_3:"Lorem ipsum dolor sit",
        line_4:"Lorem ipsum dolor sit",
        line_5:"",
        line_6:"Lorem ipsum dolor sit",
        line_7:"Lorem ipsum dolor sit",
        line_8:"Lorem ipsum dolor sit",
        line_9:"Lorem ipsum dolor sit",
        line_10:"",
        line_11:"Lorem ipsum dolor sit",
        line_12:"Lorem ipsum dolor sit",
        line_13:"Lorem ipsum dolor sit",
        line_14:"Lorem ipsum dolor sit",
        line_15:"",
        line_16:"Lorem ipsum dolor sit",
        line_17:"Lorem ipsum dolor sit",
        line_18:"Lorem ipsum dolor sit",
        line_19:"Lorem ipsum dolor sit",
        line_20:"Lorem ipsum dolor sit",
        username: 'brucewayne',
        user_id:4, 
        likes:955,
        },
        {
        poemTitle:"Solemn Day", 
        line_1:"Lorem ipsum dolor sit",
        line_2:"Lorem ipsum dolor sit",
        line_3:"Lorem ipsum dolor sit",
        line_4:"Lorem ipsum dolor sit",
        line_5:"",
        line_6:"Lorem ipsum dolor sit",
        line_7:"Lorem ipsum dolor sit",
        line_8:"Lorem ipsum dolor sit",
        line_9:"Lorem ipsum dolor sit",
        line_10:"",
        line_11:"Lorem ipsum dolor sit",
        line_12:"Lorem ipsum dolor sit",
        line_13:"Lorem ipsum dolor sit",
        line_14:"Lorem ipsum dolor sit",
        line_15:"",
        line_16:"Lorem ipsum dolor sit",
        line_17:"Lorem ipsum dolor sit",
        line_18:"Lorem ipsum dolor sit",
        line_19:"Lorem ipsum dolor sit",
        line_20:"Lorem ipsum dolor sit",
        username: 'steverogers',
        user_id:5, 
        likes:545,
        },
        {
        poemTitle:"Crazy Words", 
        line_1:"Lorem ipsum dolor sit",
        line_2:"Lorem ipsum dolor sit",
        line_3:"Lorem ipsum dolor sit",
        line_4:"Lorem ipsum dolor sit",
        line_5:"",
        line_6:"Lorem ipsum dolor sit",
        line_7:"Lorem ipsum dolor sit",
        line_8:"Lorem ipsum dolor sit",
        line_9:"Lorem ipsum dolor sit",
        line_10:"",
        line_11:"Lorem ipsum dolor sit",
        line_12:"Lorem ipsum dolor sit",
        line_13:"Lorem ipsum dolor sit",
        line_14:"Lorem ipsum dolor sit",
        line_15:"",
        line_16:"Lorem ipsum dolor sit",
        line_17:"Lorem ipsum dolor sit",
        line_18:"Lorem ipsum dolor sit",
        line_19:"Lorem ipsum dolor sit",
        line_20:"Lorem ipsum dolor sit",
        username: 'johnsnow',
        user_id:3, 
        likes:595,
        },
        {
        poemTitle:"Hello, Goodbye", 
        line_1:"Lorem ipsum dolor sit",
        line_2:"Lorem ipsum dolor sit",
        line_3:"Lorem ipsum dolor sit",
        line_4:"Lorem ipsum dolor sit",
        line_5:"",
        line_6:"Lorem ipsum dolor sit",
        line_7:"Lorem ipsum dolor sit",
        line_8:"Lorem ipsum dolor sit",
        line_9:"Lorem ipsum dolor sit",
        line_10:"",
        line_11:"Lorem ipsum dolor sit",
        line_12:"Lorem ipsum dolor sit",
        line_13:"Lorem ipsum dolor sit",
        line_14:"Lorem ipsum dolor sit",
        line_15:"",
        line_16:"Lorem ipsum dolor sit",
        line_17:"Lorem ipsum dolor sit",
        line_18:"Lorem ipsum dolor sit",
        line_20:"Lorem ipsum dolor sit",
        username: 'jerrysmith',
        user_id:7, 
        likes:295,
        }
    ]);
    // });
};
