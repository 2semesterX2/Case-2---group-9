$(document).ready(function () {
  //Define current question, score and all questions
  let currQ = 1;
  let score = 0;
  let wrong = 0;
  let questions = [{
      id: 1,
      question: '1. Best known by his surname, he was a foundation for the treatment of the sick. What was dr. Agerley’s full name?',
      correctAnswer: 1,
      answers: [
        'Kim Jensen Agerley',
        'Mathias Jensen Agerley',
        'Christian Jensen Agerley',
        'Casper Jensen Agerley'
      ],
      img: './images/1.JPG'
    },
    {
      id: 2,
      question: '2. He is a well know figure in Danish history of medicine. What nationality Mathias Jensen Agerley was?',
      correctAnswer: 0,
      answers: [
        'German',
        'Danish',
        'Swedish',
        'Dutchman'
      ],
      img: './images/2.JPG'
    },
    {
      id: 3,
      question: '3. From which university dr Agerley graduated in 1909?',
      correctAnswer: 2,
      answers: [
        'University of Berlin',
        'University of Bonn',
        'University of Kiel',
        'University of Munich'
      ],
      img: './images/3.JPG'
    },
    {
      id: 4,
      question: '4. During the first World War dr Agerley served as a doctor in the German army. In which city was his Besitzzeugnis diploma sign?',
      correctAnswer: 0,
      answers: [
        'Berlin',
        'Munich',
        'Hamburg',
        'Stuttgart'
      ],
      img: './images/4.JPG'
    },
    {
      id: 5,
      question: '5. Dr Agerley’s clinic remained almost the same as when opened, throughout his whole practice. Which year does the calendar on his desk come from?',
      correctAnswer: 3,
      answers: [
        '1930',
        '1935',
        '1940',
        '1927'
      ],
      img: './images/5.JPG'
    },
    {
      id: 6,
      question: '6. You are about to further explore the replica of dr Agerley’s clinic. When was the original one closed?',
      correctAnswer: 1,
      answers: [
        '1974',
        '1978',
        '1972',
        '1976'
      ],
      img: './images/6.JPG'
    },
    {
      id: 7,
      question: '7. Dr Agerley was using lamps to treat, among the others, patients with rheumatism. How many volts do light-bulbs in them have, according to their prüfkarte?',
      correctAnswer: 2,
      answers: [
        '240',
        '200',
        '220',
        '180'
      ],
      img: './images/7.JPG'
    },
    {
      id: 8,
      question: '8. In his clinic, dr Agerley had a collection of many medical books on various topics. Who was the author of the Lehrbuch der Psychiatrie?',
      correctAnswer: 0,
      answers: [
        'Gustav Fischer Jena',
        'Henry Adams',
        'Kate Chopin',
        'Stephen Crane'
      ],
      img: './images/8.JPG'
    },
    {
      id: 9,
      question: '9. What is the date written on the letter lying on dr Agerley’s desk?',
      correctAnswer: 3,
      answers: [
        '7/11/1941',
        '11/7/1941',
        '10/7/1941',
        '7/10/1941'
      ],
      img: './images/9.JPG'
    },
    {
      id: 10,
      question: '10. Cupboards in the room are filled with various medicine and equipment. How many of this small glass bottles are visible in the first layer?',
      correctAnswer: 0,
      answers: [
        '24',
        '21',
        '27',
        '18'
      ],
      img: './images/10.JPG'
    },
    {
      id: 11,
      question: '11. Which city is mentioned on the packaging of Hæmaporin?',
      correctAnswer: 0,
      answers: [
        'København / Copenhagen',
        'Berlin / Berlin',
        'Munich / München',
        'Hamburg / Hamburg'
      ],
      img: './images/11.JPG'
    },
    {
      id: 12,
      question: '12.	How many teeth are left in the skull guarding dr Agerley’s clinic?',
      correctAnswer: 1,
      answers: [
        '15',
        '17',
        '19',
        '20'
      ],
      img: './images/12.JPG'
    },
    {
      id: 13,
      question: '13.	How many small glass bottles are lying in the red satin box?',
      correctAnswer: 3,
      answers: [
        '5',
        '8',
        '6',
        '7'
      ],
      img: './images/13.JPG'
    },
    {
      id: 14,
      question: '14.	What are the last six letters used on the sheet for vision examination?',
      correctAnswer: 1,
      answers: [
        'A E O B C N',
        'A C E O B N',
        'A C O E N B',
        'E O B C N A'
      ],
      img: './images/14.JPG'
    },
    {
      id: 15,
      question: '15.	How many bottles of medicine can you find on the shelf above the Ichthopaste?',
      correctAnswer: 2,
      answers: [
        '7',
        '4',
        '6',
        '5'
      ],
      img: './images/15.JPG'
    },
    {
      id: 16,
      question: '16.	Devoted to his responsibilities, dr Agerley was treating patients to very end of his life. How old was he when he died',
      correctAnswer: 0,
      answers: [
        '95',
        '91',
        '93',
        '97'
      ],
      img: './images/16.JPG'
    }
  ];

  //Define the text field and the button in the first page
  let inputField = $('#index input');
  let startButton = $('#index .btn');

  // Disable the button if the text field is empty, if not, enable it. 
  startButton.css('pointer-events', 'none')
  inputField.keyup(function () {
    if (inputField.val() != '') {
      startButton.css('pointer-events', '');
    } else {
      startButton.css('pointer-events', 'none').click(function () {})
    }
  });

  // Changing the content for every question after clicking Continue
  // Put the items that will get changed in variables
  let continueBtn = $('#questionPage .btn');
  let correctAnswers = $('#questionPage #result #correct');
  let wrongAnswers = $('#questionPage #result #wrong');
  let currentNumberQuestion = $('#questionPage #result #number');
  let currImage = $('#questionPage img');
  let currentQuestion = $('#questionPage #question');
  let currentAnswers = $('#questionPage #answers .answer');
  // Put the first question content
  correctAnswers.text(score);
  wrongAnswers.text(wrong);
  currentNumberQuestion.text(`${currQ}/16`);
  currImage.attr('src', questions[0].img);
  currentQuestion.text(questions[0].question);
  continueBtn.css('pointer-events', 'none')
  for (let i = 0; i < questions[0].answers.length; i++) {
    $(currentAnswers[i]).text(questions[0].answers[i]);
  }

  // Add the content for all questions after the first
  continueBtn.on('click', function () {
    continueBtn.css('pointer-events', 'none')
    correctAnswers.text(score);
    wrongAnswers.text(wrong);
    currentNumberQuestion.text(`${currQ}/16`);
    currImage.attr('src', questions[currQ].img);
    currentQuestion.text(questions[currQ].question);
    for (let i = 0; i < questions[currQ].answers.length; i++) {
      $(currentAnswers[i]).text(questions[currQ].answers[i]);
    }
    // Set the score in the local storage to be equal to the variable score
    localStorage.setItem('finalScore', score);

    // Change answers color to default (blue) and enable answer buttons
    currentAnswers.css('background-color', '#1e5eff')
    currentAnswers.css('pointer-events', '');

    // Change the text and direction of the Continue button on the last question
    if (questions[currQ].id <= 15) {
      currQ++;
    } else {
      continueBtn.text('Result').html('<a id="resultBtn" href="result.html">Result</a>')
    }
  });

  // Check if answer is correct or wrong
  currentAnswers.on('click', function () {
    currentAnswers.css('pointer-events', 'none');
    $(currentAnswers[questions[currQ - 1].correctAnswer]).css('background-color', '#50E3C2')
    if (this != currentAnswers[questions[currQ - 1].correctAnswer]) {
      $(this).css('background-color', '#EF6C6C')
      wrong++;
    } else {
      score++;
      // Update the score in the local storage
      localStorage.setItem('finalScore', score);
    }
    // Update the score points
    correctAnswers.text(score);
    wrongAnswers.text(wrong);
    // enable continue
    continueBtn.css('pointer-events', '');
    // console.log(this)
  })

  // changing the image and the text in the last page with the score
  // Put the needed items in variables
  let resultImg = $('#resultPage img');
  let message = $('#resultPage #message');

  // Put the content for the result page
  $('#resultPage #correctAnswers').text(`${localStorage.getItem('finalScore')}/16 Answers correct`)
  if (localStorage.getItem('finalScore') > 12) {
    message.text('Excellent!');
    resultImg.attr('src', './images/5stars.svg')
  } else if (localStorage.getItem('finalScore') > 9) {
    message.text('Very well!');
    resultImg.attr('src', './images/3stars.svg')
  } else if (localStorage.getItem('finalScore') > 4) {
    message.text('Not bad!');
    resultImg.attr('src', './images/1star.svg')
  } else {
    message.text('Better next time!');
    resultImg.attr('src', './images/0stars.svg')
  }
  // Close the document ready function
});