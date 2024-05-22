'use strict'
let secretNum = Math.trunc(Math.random() * 20) + 1;
let check = document.querySelector('#bttn2');
let num = document.querySelector('.guess');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let body = document.querySelector('body');
let again = document.querySelector('#bttn');
let score2 = 20;
check.onclick = function () {
  if (score2 > 0) {
    if (num.value == secretNum) {
      document.querySelector('.number').innerHTML = num.value;
      highScore.innerHTML = score2;
      message.innerHTML = 'correct number!';
      body.style.background = 'green';
      const score3 = score2;
      console.log(score3);
    } else if (num.value > secretNum) {
      message.innerHTML = 'too high!';
      score2--;
      score.innerHTML = score2;
    } else if (num.value < secretNum) {
      message.innerHTML = 'too low !';
      score2--;
      score.innerHTML = score2;
    }
  } else {
    message.innerHTML = 'you lost the game';
  }
};
again.onclick = function () {
  location.reload();
};