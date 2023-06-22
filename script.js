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
  console.log('Hello');

  const answer1 = (event) => {
    var clickedValue = event.target.textContent;
    //console.log(clickedValue);
    if (clickedValue == '1. push()') {
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

  question1.addEventListener('click', answer1);
});

var clear = setTimeout(() => {
  result.classList.add('disappear');
}, 2000);
