//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var restartButton = document.querySelector(".restart-button");
var saveButton = document.querySelector(".save-button");
var timer;
var timerCount;
var questionCount = 0;

// - Need timer to start when clicking "start quiz"
//      - var for timer
//      - set the interval to decrease timer by 1sec or 1000ms
//      - once the user clicks "start quiz", the first question should show
//      - function to start quiz

function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount
        if (timerCount <= 0 || questionCount === questions.length) {
            clearInterval(timer);
        }
    }, 1000)
}



function startQuiz() {
    timerCount = 60;
    startButton.disabled = true;
    startTimer();
}


startButton.addEventListener("click", startQuiz);
