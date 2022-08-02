var startBtn = document.querySelector("#start_button");
var questionsPage = document.querySelector("#questions_page");
var btn = document.querySelector(".btn");

var askQuestions = document.querySelector("#ask_questions");
var restartButton = document.querySelector(".restart-button");

var choices = document.querySelector(".choices");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var answers = document.querySelector("#answers");
var submitPage = document.querySelector("#submit_page");
var finish = document.querySelector("#finish");
var saveButton = document.querySelector("#save-button");


//      - var for timer
//      - set the interval to decrease timer by 1sec or 1000ms
//      - once the user clicks "start quiz", the first question should show
//      - function to start quiz

var questions = [
    {  
        question: "9 + 10 =",
        answer: "a",
        options: [
            "a. 19",
            "b. 21",
            "c. 1",
            "d. 100"
        ]
    },
    {
        question: "(100/x) + 20 = ",
        answer: "c",
        choices: [
            "a. x = 5",
            "b. x = 10",
            "c. x = -5",
            "d. x = -10"
        ]
    },
    {
        quetion: "16 - 2x = 5x + 9. solve for x",
        answer: "a",
        choices: [
            "a. x = 1",
            "b. x = 2",
            "c. x = 3",
            "d. x = 4"
        ]
    },
    {
        quetion: "if m + n = -2, then the value of m^3+n^3 - 6mn ",
        answer: "c",
        choices: [
            "a. 8",
            "b. 4",
            "c. -8",
            "d. 4"
        ]
    },
    {
        quetion: "6 = 2(x + 2)",
        answer: "d",
        choices: [
            "a. x = 4",
            "b. x = 12",
            "c. x = 2",
            "d. x = 1"
        ]
    },
];
var timerElement = document.querySelector(".timer-count");
var timerCount;
var currentQuestion = 0;
let score = 0;
var questionCount = 1;
timerCount = 60;

function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = `${timerCount} seconds remaing`
        if (timerCount <= 0) {
            clearInterval(timer);
            quizOver ();
        } else if (timerCount === 0) {
            timerElement.textContent = `${timerCount} second remaining`;
            clearInterval(timer);
            quizOver();
        }
    }, 1000)
}

function startQuiz() {
    btn.disabled = true;
    currentQuestion = 0;
    startTimer();
    showQuestions(currentQuestion)
}

function showQuestions(n) {
askQuestions.textContent = questions[n].question;
answer1.textContent = questions[n].choices[0];
answer2.textContent = questions[n].choices[1];
answer3.textContent = questions[n].choices[2];
answer4.textContent = questions[n].choices[3];
currentQuestion = n;
}

function checkAnswer(event) {
    event.preventDefualt();
    answers.style.display = "block";
    setTimeout(function(){
        answers.style.display = 'none';
    }, 1000);

    if (questions[currentQuestion].answer == event.target.value) {
        answers.textContent = "right";
        score = score + 1;
    } else {
        timerCount = timerCount - 15
        answers.textContent = "wrong"
    }
    if (currentQuestion < questions.length -1) {
        showQuestions(currentQuestion +1)
    } else {
        gameOver();
    }
    questionCount++;
};

function quizOver() {
    questionsPage.style.display = "none";
    score.textContent = "Your final score:" + score + "/5";
}

btn.addEventListener("click", startQuiz);
answers.addEventListener("click", checkAnswer);




