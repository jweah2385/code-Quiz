var introPage = document.querySelector('.main');
var startBtn = document.querySelector('.start-button');
var questionPage = document.querySelector('.questions');
var donPage = document.querySelector('.done-page');
var highScorePage = document.querySelector('.high-score');
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
var result2 = document.querySelector('.result2');

startBtn.addEventListener('click', function () {
  introPage.classList.add('disappear');
  question1.classList.remove('disappear');

  const answer1 = (event) => {
    let clickedValue = event.target.textContent;
    //console.log(clickedValue);
    if (clickedValue.trim() == '1. push()') {
      question1.classList.add('disappear');
      question2.classList.remove('disappear');
      result.classList.remove('disappear');
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else {
      question1.classList.add('disappear');
      question2.classList.remove('disappear');
      result2.classList.remove('disappear');
      setTimeout(() => {
        result2.classList.add('disappear');
      }, 1000);
    }
  };

  const answer2 = (event) => {
    let secondAns = event.target.textContent;
    console.log(secondAns);
    if (
      secondAns.trim() == '4. It depends on the context in which it is used'
    ) {
      question2.classList.add('disappear');
      question3.classList.remove('disappear');
      result.classList.remove('disappear');
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else {
      question2.classList.add('disappear');
      question3.classList.remove('disappear');
      result2.classList.remove('disappear');
      setTimeout(() => {
        result2.classList.add('disappear');
      }, 1000);
    }
  };

  const answer3 = (event) => {
    var thirdAns = event.target.textContent;
    console.log(thirdAns);
    if (thirdAns.trim() == '4. int a = 20;') {
      question3.classList.add('disappear');
      question4.classList.remove('disappear');
      result.classList.remove('disappear');
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else {
      question3.classList.add('disappear');
      question4.classList.remove('disappear');
      result2.classList.remove('disappear');
      setTimeout(() => {
        result2.classList.add('disappear');
      }, 1000);
    }
  };

  const answer4 = (event) => {
    var fourthAns = event.target.textContent;
    console.log(fourthAns);
    if (fourthAns.trim() == '1. push()') {
      question4.classList.add('disappear');
      question5.classList.remove('disappear');
      result.classList.remove('disappear');
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else {
      question4.classList.add('disappear');
      question5.classList.remove('disappear');
      result2.classList.remove('disappear');
      setTimeout(() => {
        result2.classList.add('disappear');
      }, 1000);
    }
  };

  const answer5 = (event) => {
    var fithAns = event.target.textContent;
    if (fithAns.trim() == '1. "Not a Number"') {
      question5.classList.add('disappear');
      question6.classList.remove('disappear');
      result.classList.remove('disappear');
      setTimeout(() => {
        result.classList.add('disappear');
      }, 1000);
    } else {
      question5.classList.add('disappear');
      question6.classList.remove('disappear');
      result2.classList.remove('disappear');
      setTimeout(() => {
        result2.classList.add('disappear');
      }, 1000);
    }
  };

  question1.addEventListener('click', answer1);
  question2.addEventListener('click', answer2);
  question3.addEventListener('click', answer3);
  question4.addEventListener('click', answer4);
  question5.addEventListener('click', answer5);
  question5.addEventListener('click', answer6);
  question5.addEventListener('click', answer7);
  question5.addEventListener('click', answer8);
  question5.addEventListener('click', answer9);
  question5.addEventListener('click', answer10);
});

var clear = setTimeout(() => {
  result.classList.add('disappear');
}, 2000);
