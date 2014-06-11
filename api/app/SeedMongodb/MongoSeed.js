var Seed = require('seed')
  , MongoStore = require('seed-mongodb')
  , store = new MongoStore({
      db: 'hitchhikersguide'
     , host: 'localhost'
      , port: 3000
    });

  var wizardQuestion = Seed.Model.extend('Question', {
  store: store
});

var Question1 = new wizardQuestion {

	 id: 1,
    title: 'Question1',
    tip: 'q_tip',
    answers:[
        {
            id : 1,
            title : 'answer1',
            tip : 'a_tip',
            next_question : 2,
            id_checklist : -1
        }]

    ,answers:[
        {
            id : 2,
            title : 'answer2',
            tip : 'a_tip',
            next_question : 3,
            id_checklist : -1
        }]
    ,answers:[
    {
    	id : 3,
    	title :  'answer3',
    	tip : 'a_tip',
    	next_question : 4,
    	id_checklist : -1
    }
    ]

    ,answers:[
    {
    	id : 4,
    	title :  'answer4',
    	tip : 'a_tip',
    	next_question : 5,
    	id_checklist : -1
    }
    ]


}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question1 has been saved!');
});

var Question2 = new wizardQuestion {
	id 2,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 5,
    	title :  'answer5',
    	tip : 'a_tip',
    	next_question : 6,
    	id_checklist : -1
    }
    ]
}

Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question2 has been saved!');
});

var Question3 = new wizardQuestion {
	id 3,
	title: 'Question2'
	tip: 'a_tip2',

	answers:[
    {
    	id : 6,
    	title :  'answer6',
    	tip : 'a_tip',
    	next_question : 8,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question3 has been saved!');
});

var Question4 = new wizardQuestion {
	id 4,
	title: 'Question2'
	tip: 'a_tip2',

	answers:[
    {
    	id : 7,
    	title :  'answer7',
    	tip : 'a_tip',
    	next_question : 7,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question4 has been saved!');
});

var Question5 = new wizardQuestion {
	id 5,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 8,
    	title :  'answer8',
    	tip : 'a_tip',
    	next_question : 9,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question5 has been saved!');
});

var Question6 = new wizardQuestion {
	id 6,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 9,
    	title :  'answer9',
    	tip : 'a_tip',
    	next_question : 10,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question6 has been saved!');
});

var Question7 = new wizardQuestion {
	id 7,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 10,
    	title :  'answer10',
    	tip : 'a_tip',
    	next_question : 12,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question7 has been saved!');
});

var Question8 = new wizardQuestion {
	id 8,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 11,
    	title :  'answer11',
    	tip : 'a_tip',
    	next_question : 11,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question8 has been saved!');
});

var Question9 = new wizardQuestion {
	id 9,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 12,
    	title :  'answer12',
    	tip : 'a_tip',
    	next_question : 13,
    	id_checklist : -1
    }
    ]



}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question9 has been saved!');
});

var Question10 = new wizardQuestion {
	id 10,
	title: 'Question2'
	tip: 'a_tip2',

	answers:[
    {
    	id : 13,
    	title :  'answer13',
    	tip : 'a_tip',
    	next_question : 14,
    	id_checklist : -1
    }
    ]


}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question10 has been saved!');
});

var Question11 = new wizardQuestion {
	id 11,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 14,
    	title :  'answer14',
    	tip : 'a_tip',
    	next_question : 15,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question11 has been saved!');
});

var Question12 = new wizardQuestion {
	id 12,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 15,
    	title :  'answer15',
    	tip : 'a_tip',
    	next_question : 16,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question12 has been saved!');
});

var Question13 = new wizardQuestion {
	id 13,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 16,
    	title :  'answer16',
    	tip : 'a_tip',
    	next_question : 17,
    	id_checklist : -1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question13 has been saved!');
});

var Question14 = new wizardQuestion {
	id 14,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 17,
    	title :  'answer17',
    	tip : 'a_tip',
    	next_question : -1,
    	id_checklist : 1
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question14 has been saved!');
});

var Question15 = new wizardQuestion {
	id 15,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 18,
    	title :  'answer18',
    	tip : 'a_tip',
    	next_question : -1,
    	id_checklist : 2
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question15 has been saved!');
});

var Question16 = new wizardQuestion {
	id 16,
	title: 'Question2'
	tip: 'a_tip2',
	answers:[
    {
    	id : 19,
    	title :  'answer19',
    	tip : 'a_tip',
    	next_question : -1,
    	id_checklist : 3
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question16 has been saved!');
});

var Question17 = new wizardQuestion {
	id 17,
	title: 'Question2'
	tip: 'a_tip2',

	answers:[
    {
    	id : 20,
    	title :  'answer20',
    	tip : 'a_tip',
    	next_question : -1,
    	id_checklist : 4
    }
    ]

}
Question1.save(function (err) {
  if (err) return console.error(err);
  console.log('Question17 has been saved!');
});











