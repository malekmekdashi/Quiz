// GIVEN I am taking a code quiz
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
var btn = document.querySelector(".btn");
var restartButton = document.querySelector(".restart-button");
var saveButton = document.querySelector(".save-button");
var timer
var timerCount;
var questionCount = 0;

// - Need timer to start when clicking "start quiz"
//      - var for timer
//      - set the interval to decrease timer by 1sec or 1000ms
//      - once the user clicks "start quiz", the first question should show
//      - function to start quiz

let questions = [
    {
        
        question: "9 + 10 =",
        answer: "19",
        options: [
            "19",
            "21",
            "1",
            "100"
        ]
    },
    {
    
        question: "(100/x) + 20 = ",
        answer: "x = -5",
        options: [
            "x = 5",
            "x = 10",
            "x = -5",
            "x = -10"
        ]
    },
    {
        
        quetion: "16 - 2x = 5x + 9. solve for x",
        answer: "x = 1",
        options: [
            "x = 1",
            "x = 2",
            "x = 3",
            "x = 4"
        ]
    },
    {
       
        quetion: "if m + n = -2, then the value of m^3+n^3 - 6mn ",
        answer: "-8",
        options: [
            "8",
            "4",
            "-8",
            "4"
        ]
    },
    {
    
        quetion: "6 = 2(x + 2)",
        answer: "x = 1",
        options: [
            "x = 4",
            "x = 12",
            "x = 2",
            "x = 1"
        ]
    },
];


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
    btn.disabled = true;
    startTimer();
}


btn.addEventListener("click", startQuiz);
