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
    },
    {
        question: "Which of these is not a part of the axial skeleton?",
        answers: [
            { text: "Skull", correct: false },
            { text: "Ribs", correct: false },
            { text: "Spine", correct: false },
            { text: "Femur", correct: true }
        ]
    },
    {
        question: "Which bone is located in the upper arm?",
        answers: [
            { text: "Humerus", correct: true },
            { text: "Radius", correct: false },
            { text: "Ulna", correct: false },
            { text: "Clavicle", correct: false }
        ]
    },
    {
        question: "What is the name of the bone that forms the base of the skull?",
        answers: [
            { text: "Occipital bone", correct: true },
            { text: "Temporal bone", correct: false },
            { text: "Frontal bone", correct: false },
            { text: "Parietal bone", correct: false }
        ]
    },
    {
        question: "Which bone is commonly known as the collarbone?",
        answers: [
            { text: "Clavicle", correct: true },
            { text: "Scapula", correct: false },
            { text: "Sternum", correct: false },
            { text: "Rib", correct: false }
        ]
    },
    {
        question: "The patella is commonly known as the:",
        answers: [
            { text: "Knee cap", correct: true },
            { text: "Elbow joint", correct: false },
            { text: "Ankle bone", correct: false },
            { text: "Wrist bone", correct: false }
        ]
    },
    {
        question: "Which part of the body contains the most bones?",
        answers: [
            { text: "Hands", correct: true },
            { text: "Feet", correct: false },
            { text: "Arms", correct: false },
            { text: "Legs", correct: false }
        ]
    },
    {
        question: "Which bone is the most proximal in the arm?",
        answers: [
            { text: "Humerus", correct: true },
            { text: "Radius", correct: false },
            { text: "Ulna", correct: false },
            { text: "Scapula", correct: false }
        ]
    },
    {
        question: "What is the name of the bony structure that protects the brain?",
        answers: [
            { text: "Skull", correct: true },
            { text: "Ribs", correct: false },
            { text: "Pelvis", correct: false },
            { text: "Vertebrae", correct: false }
        ]
    },
    {
        question: "Which bone forms the lower part of the spine?",
        answers: [
            { text: "Sacrum", correct: true },
            { text: "Coccyx", correct: false },
            { text: "Lumbar", correct: false },
            { text: "Thoracic", correct: false }
        ]
    },
    {
        question: "Which bone forms the back portion of the pelvis?",
        answers: [
            { text: "Ilium", correct: false },
            { text: "Ischium", correct: true },
            { text: "Pubis", correct: false },
            { text: "Sacrum", correct: false }
        ]
    },
    {
        question: "Which bone is primarily responsible for bearing weight in the lower leg?",
        answers: [
            { text: "Fibula", correct: false },
            { text: "Femur", correct: false },
            { text: "Tibia", correct: true },
            { text: "Patella", correct: false }
        ]
    },
    {
        question: "What is the name of the first cervical vertebra that supports the skull?",
        answers: [
            { text: "Axis", correct: false },
            { text: "Cervical 3", correct: false },
            { text: "Odontoid", correct: false },
            { text: "Atlas", correct: true }
        ]
    }
];

const questionElement = document.getElementById("questioncontainer");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbutton");
const scoreElement = document.getElementById("score"); // To get score display
const form = document.getElementById("usernameForm");
const highScoreButton = document.getElementById("highscorebtn");

let currentQuestionIndex = 0;
let score = 0;
let sec = 60;
let timer;

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    sec = 60;
    scoreElement.textContent = `Score: ${score}`;
    nextButton.innerHTML = "Next";
    resetState();
    showQuestions();
    startTimer();

    // Hides the form and highscores button when quiz starts
    form.style.display = "none";
    highScoreButton.style.display = "none";
    form.style.display = "none";
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    
    clearInterval(timer); // Clear any existing timer before starting a new one
    sec = 60; // Reset seconds
    timerElement.innerHTML = `${sec} sec left`;

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

function showQuestions(){
    resetState();
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
};

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
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    form.style.display = "block";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    highScoreButton.style.display = "block";
    localStorage.setItem("score", score);
    currentQuestionIndex = 0;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const userInput = form.username.value.trim();

        if (userInput === "") {
            alert("Please enter your username before ending the quiz!");
        } else {
            saveHighScore(userInput, score);
            alert(`Thank you ${userInput}, please click "Play Again" or "High Scores" to see where you rank.`);
            form.style.display = "none";
        }
    });
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
    if (nextButton.innerHTML === "Play Again") {
        startQuiz();  // Restart the quiz if "Play Again" is displayed
    } else {
        handleNextButton();
    }
});

highScoreButton.addEventListener("click", ()=>{
    openHighScoresModal();
} )

startQuiz();
