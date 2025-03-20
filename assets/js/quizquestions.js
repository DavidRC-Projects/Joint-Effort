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

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
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
    } else {
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();

