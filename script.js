var introPage = document.querySelector('.main');
var startBtn = document.querySelector('.start-button');
var questionPage = document.querySelector('.questions');
var donPage = document.querySelector('.done-page');
var highScorePage = document.querySelector('.high-score');
var timer = document.querySelector('.time');
var question1 = document.querySelector('.question1');
var question2 = document.querySelector('.question2');
var question3 = document.querySelector('.question3');
var question4 = document.querySelector('.question4');
var question5 = document.querySelector('.question5');
var question6 = document.querySelector('.question6');
var question7 = document.querySelector('.question7');
var question8 = document.querySelector('.question8');
var question9 = document.querySelector('.question9');
var question10 = document.querySelector('.question10');
var result = document.querySelector('.result');
var message = document.querySelector('.message');
var lastMessage = document.querySelector('.last-message');
var lastResult = document.querySelector('.last-result');
var allDoneBtn = document.querySelector('.done-page-button');
var returnHomeBtn = document.querySelector('.go-back-button');
var clearScoreBtn = document.querySelector('.clear-score');
var score = document.querySelector('.score');
var input = document.querySelector('.initials');
var finalScore = document.querySelector('.final-score');
var viewHighScore = document.querySelector('.view-score');
var quizCount = 0;

startBtn.addEventListener('click', function () {
  var totalScore = 0;
  var sec = 100;
  input.value = '';
  /*Timer function, counts down from a hundred seconds 
  when seconds are equal to or less than 0, it takes the points the user has
  ,exits the quiz and goes to the All Done page else it updates the countdown
  every second on the page*/
  function countdown() {
    var countdownInterval = setInterval(function () {
      if (sec <= 0) {
        clearInterval(countdownInterval);
        console.log('Countdown complete!');

        question1.classList.add('disappear');
        question2.classList.add('disappear');
        question3.classList.add('disappear');
        question4.classList.add('disappear');
        question5.classList.add('disappear');
        question6.classList.add('disappear');
        question7.classList.add('disappear');
        question8.classList.add('disappear');
        question9.classList.add('disappear');
        question10.classList.add('disappear');
        result.classList.add('disappear');
        donPage.classList.remove('disappear');

        finalScore.textContent = 'Your final score is: ' + totalScore;
        sec = 0;
        timer.textContent = 'Time: ' + sec;
      } else {
        timer.textContent = 'Time: ' + sec;

        sec--;
      }
    }, 1000);
  }
  countdown();
  console.log('totalScore at the start of the quiz: ' + totalScore);
  introPage.classList.add('disappear');
  question1.classList.remove('disappear');

  /*All answer# functions reveal the question, take the users choice, 
  increase their score by 1 if right and reveal correct, else decreases
  the time by 5seconds and reveals wrong. Both scenarios reveals the next page*/
  const answer1 = (event) => {
    quizCount++;
    let firstAns = event.target.textContent;
    score.classList.remove('disappear');
    if (firstAns.trim() == '1. push()') {
      question1.classList.add('disappear');
      question2.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      firstAns.trim() == '2. pop()' ||
      firstAns.trim() == '3. shift()' ||
      firstAns.trim() == '4. unshift()'
    ) {
      sec = sec - 5;
      question1.classList.add('disappear');
      question2.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer2 = (event) => {
    let secondAns = event.target.textContent;
    if (
      secondAns.trim() == '4. It depends on the context in which it is used'
    ) {
      question2.classList.add('disappear');
      question3.classList.remove('disappear');
      result.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      secondAns.trim() == '2. The global object' ||
      secondAns.trim() == '3. The parent object of the current object' ||
      secondAns.trim() == '1. The current function being executed'
    ) {
      sec = sec - 5;
      question2.classList.add('disappear');
      question3.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer3 = (event) => {
    var thirdAns = event.target.textContent;
    if (thirdAns.trim() == '4. int a = 20;') {
      question3.classList.add('disappear');
      question4.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      thirdAns.trim() == '1. var x = 5;' ||
      thirdAns.trim() == '2. let y = 10;' ||
      thirdAns.trim() == '3. cont z = 15;'
    ) {
      sec = sec - 5;
      question3.classList.add('disappear');
      question4.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer4 = (event) => {
    var fourthAns = event.target.textContent;
    if (fourthAns.trim() == '3. Equality operator (strict comparison)') {
      question4.classList.add('disappear');
      question5.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      fourthAns.trim() == '1. Assignment operator' ||
      fourthAns.trim() == '2. Logical AND operator' ||
      fourthAns.trim() == '4. Addition operator'
    ) {
      sec = sec - 5;
      question4.classList.add('disappear');
      question5.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer5 = (event) => {
    var fithAns = event.target.textContent;
    if (fithAns.trim() == '1. "Not a Number"') {
      question5.classList.add('disappear');
      question6.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      fithAns.trim() == '2. "Null and Notation"' ||
      fithAns.trim() == '3. "No Approximate Number"' ||
      fithAns.trim() == '4. "Negligible Arithmetic Notion"'
    ) {
      sec = sec - 5;
      question5.classList.add('disappear');
      question6.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer6 = (event) => {
    var sixthAns = event.target.textContent;
    if (sixthAns.trim() == '1. "52"') {
      question6.classList.add('disappear');
      question7.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      sixthAns.trim() == '2. 7' ||
      sixthAns.trim() == '3. "7"' ||
      sixthAns.trim() == '4. Error'
    ) {
      sec = sec - 5;
      question6.classList.add('disappear');
      question7.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer7 = (event) => {
    var sevethAns = event.target.textContent;
    if (sevethAns.trim() == '2. It determines the type of a variable') {
      question7.classList.add('disappear');
      question8.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      sevethAns.trim() == '1. It checks if a variable is defined' ||
      sevethAns.trim() == '3. It converts a value to a string' ||
      sevethAns.trim() == '4. It performs mathematical calculations'
    ) {
      sec = sec - 5;
      question7.classList.add('disappear');
      question8.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer8 = (event) => {
    var eigthAns = event.target.textContent;
    if (eigthAns.trim() == '2. break') {
      question8.classList.add('disappear');
      question9.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      eigthAns.trim() == '1. continue' ||
      eigthAns.trim() == '3. return' ||
      eigthAns.trim() == '4. exit'
    ) {
      sec = sec - 5;
      question8.classList.add('disappear');
      question9.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer9 = (event) => {
    var sevethAns = event.target.textContent;
    if (sevethAns.trim() == '3. concat()') {
      question9.classList.add('disappear');
      question10.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else if (
      sevethAns.trim() == '1. join()' ||
      sevethAns.trim() == '2. push()' ||
      sevethAns.trim() == '4. merge()'
    ) {
      sec = sec - 5;
      question9.classList.add('disappear');
      question10.classList.remove('disappear');
      result.classList.remove('disappear');
      message.textContent = 'Wrong!';
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    }
  };

  const answer10 = (event) => {
    var tenthAns = event.target.textContent;
    lastResult.classList.add('disappear');
    if (
      tenthAns.trim() == '3. To control the visibility and scope of variables'
    ) {
      question10.classList.add('disappear');
      donPage.classList.remove('disappear');
      lastResult.classList.remove('disappear');
      lastMessage.textContent = 'Correct!';
      totalScore++;
      setTimeout(() => {
        lastResult.classList.add('disappear');
      }, 1000);
    } else if (
      tenthAns.trim() == '1. To prevent the execution of certain code' ||
      tenthAns.trim() == '2. To secure and encrypt data' ||
      tenthAns.trim() == '4. None of the above'
    ) {
      sec = sec - 5;
      question10.classList.add('disappear');
      donPage.classList.remove('disappear');
      lastResult.classList.remove('disappear');
      lastMessage.textContent = 'Wrong!';
      setTimeout(() => {
        lastResult.classList.add('disappear');
      }, 1000);
    }

    finalScore.textContent = 'Your final score is: ' + totalScore;
    sec = 0;
  };

  /*The submit function takes the user to the All Done page, creates a 
  local storage that will store the users higest score(includes first), then resets the 
  score for another attempt. Also places user high score on high score page*/
  const submit = (event) => {
    donPage.classList.add('disappear');
    highScorePage.classList.remove('disappear');
    returnHomeBtn.addEventListener('click', home);
    var storedScore = localStorage.getItem('userScore');
    var currentScore = totalScore;

    if (!storedScore || currentScore > parseInt(storedScore)) {
      localStorage.setItem('userScore', currentScore);
      score.textContent = input.value + ' ' + currentScore;
    } else {
      currentScore = parseInt(storedScore);
    }

    totalScore = 0;
  };

  const home = (event) => {
    highScorePage.classList.add('disappear');
    introPage.classList.remove('disappear');
  };

  const clearScore = (event) => {
    score.classList.add('disappear');
    localStorage.clear();
  };

  question1.addEventListener('click', answer1);
  question2.addEventListener('click', answer2);
  question3.addEventListener('click', answer3);
  question4.addEventListener('click', answer4);
  question5.addEventListener('click', answer5);
  question6.addEventListener('click', answer6);
  question7.addEventListener('click', answer7);
  question8.addEventListener('click', answer8);
  question9.addEventListener('click', answer9);
  question10.addEventListener('click', answer10);
  allDoneBtn.addEventListener('click', submit);
  returnHomeBtn.addEventListener('click', home);
  clearScoreBtn.addEventListener('click', clearScore);
});

/*viewHighScore allows the user to view the high score only after they
have attempted the quiz*/
viewHighScore.addEventListener('click', function () {
  if (quizCount <= 0) {
    alert('You must have one attempt of the quiz before seeing a highscore.');
  } else {
    introPage.classList.add('disappear');
    highScorePage.classList.remove('disappear');
    question1.classList.add('disappear');
    question2.classList.add('disappear');
    question3.classList.add('disappear');
    question4.classList.add('disappear');
    question5.classList.add('disappear');
    question6.classList.add('disappear');
    question7.classList.add('disappear');
    question8.classList.add('disappear');
    question9.classList.add('disappear');
    question10.classList.add('disappear');
    result.classList.add('disappear');
    donPage.classList.add('disappear');
  }
});
