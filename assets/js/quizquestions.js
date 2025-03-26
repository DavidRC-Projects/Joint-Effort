// List of quiz questions
const questions = [
    {
        question: "How many bones are there in the spine?",
        answers: [
            { text: "40", correct: false },
            { text: "41", correct: false },
            { text: "34", correct: false },
            { text: "33", correct: true }
        ]
    },
    {
        question: "What is the largest bone in the human body?",
        answers: [
            { text: "Femur", correct: true },
            { text: "Tibia", correct: false },
            { text: "Fibula", correct: false },
            { text: "Humerus", correct: false }
        ]
    },
    {
        question: "How many bones are in the adult human body?",
        answers: [
            { text: "206", correct: true },
            { text: "210", correct: false },
            { text: "216", correct: false },
            { text: "200", correct: false }
        ]
    }
];

const questionElement = document.getElementById("questioncontainer");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbutton");
const scoreElement = document.getElementById("score"); // To get score display
const form = document.getElementById("usernameForm");
const messagemodal = document.getElementById("messagemodal");
const highScoreButton = document.getElementById("highscorebtn");

let currentQuestionIndex = 0;
let score = 0;
let sec = 60;
let timer;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    nextButton.innerHTML = "Next";
    showQuestions();
    startTimer();
}

function showQuestions(){
    resetState(); // resets the previous questions and answers
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz

function startTimer() {
    const timerElement = document.getElementById("timer");
    
    clearInterval(timer);

    timer = setInterval(function () {
        timerElement.innerHTML = sec + " sec left";

        if (sec === 10) {
            timerElement.innerHTML += " - Hurry! Only 10 seconds left!";
        }

        if (sec === 0) {
            clearInterval(timer);
            showScore();
        } else {
            sec--;
        }
    }, 1000);
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; //increase the score by 1 when answer is correct
        scoreElement.textContent = `Score: ${score}`; // This updates the score display
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// https://stackoverflow.com/questions/47817325/storing-my-game-score-in-local-storage
//https://www.youtube.com/watch?v=rsWhJ2XviE4 
function saveHighScore(username, score) {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const newScore = { name: username, score: score };
    
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log("High Scores Updated:", highScores);
}

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    form.style.display = "block";
    messagemodal.style.display = "block";
    highScoreButton.style.display = "block";
    localStorage.setItem("score", score);

form.addEventListener("submit", function (e) {
e.preventDefault();

const userInput = form.username.value.trim();

if (userInput === "") {
   messagemodal.innerText =
   "Please enter your username before ending the quiz!";
   } else {
    saveHighScore(userInput, score);
    messagemodal.innerText = `Thank you ${userInput}, please click play again or highcores to see where you rank`; 
    form.style.display = "none";
}
        });

    validateForm();
    resetState();
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    } else {
        clearInterval(timer);
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

highScoreButton.addEventListener("click", ()=>{
    openHighScoresModal();
} )

startQuiz();

