import { openHighScoresModal } from './highscores.js';
import { questions } from "./questionlist.js";

const questionElement = document.getElementById("questioncontainer");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbutton");
const scoreElement = document.getElementById("score"); 
const form = document.getElementById("usernameForm");  
const highScoreButton = document.getElementById("highscorebtn");


export let currentQuestionIndex = 0;
export let score = 0;
export let timer;
let sec = 60;
let selectedQuestions = [];


const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length); // This will generate a random index between 0 and length of the array.

/**
 * This function generates a random index and checks if the index has already been selected.
 * When index has already been used it will call getRandomObject again and if not used will add to selectedQuestions.
 * When 15 questions have been selected the selectedQuestions will reset.
 * Edited code from https://stackoverflow.com/questions/72341389/how-do-i-generate-a-random-question-using-javascript-for-my-quiz-app-which-doesn.
*/
const getRandomObject = (arr) => {
    const randomIndex = getRandomIndex(arr);
    if (selectedQuestions.includes(randomIndex)) {
        return getRandomObject(arr);
      }
      selectedQuestions.push(randomIndex);
      if (selectedQuestions.length >= 14) {
        selectedQuestions = [];
      }
  return arr[randomIndex];
};

/**
 * This function resets the quiz before the next question is displayed to make sure only the current questions are showing.
 * It uses the method removeChild to remove the child elements from the parent.
*/
function clearQuestions(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * This function starts by reseting the score, index and timer when the quiz starts.
 * After reseting the functions of clearQuestions, show question and startTimer are called.
 * A next button appears after clicking on an answer button.
 * The form and highscores button are hidden at the start of the quiz.
*/
export function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    sec = 60;
    scoreElement.textContent = `Score: ${score}`;
    nextButton.innerHTML = "Next";
    
    clearQuestions();
    showQuestions();
    startTimer();

    form.style.display = "none";
    highScoreButton.style.display = "none";
}

/**
 * This function resets the quiz before the next question is displayed to make sure only the current questions are showing.
 * It uses the method removeChild to remove the child elements from the parent.
 * Edited code from https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz.
*/
function startTimer() {
    const timerElement = document.getElementById("timer");
    
    clearInterval(timer); // Clear any existing timer before starting a new one
    sec = 60; // Reset seconds
    timerElement.innerHTML = `${sec} sec left`;

    timer = setInterval(function () {
        timerElement.innerHTML = sec + " sec left";

        if (sec === 10 || sec === 9 || sec === 8) {
            timerElement.innerHTML += " - Hurry! you don't have much time left!";
        }
        if (sec === 0) {
            clearInterval(timer);
            showScore();
        } else {
            sec--;
        }
    }, 1000);
};


/**
 * This function will display a new question question and answer choices.
 * It uses the currentQuestion variable to store the selected question. This will set the question number and adds the current question.
 * The foreach method is used go through each answer item in the array and will create a button.
 * When an answer is correct a data attribute is added to the button.
 * An event listener is added to each button to respond when clicked.
 * Edited code from https://www.youtube.com/watch?v=PBcqGxrr9g8.
*/

function showQuestions(){
    clearQuestions();

    const currentQuestion = getRandomObject(questions);
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", answerSelect);
    });
}

/**
 * This function handles the user's answer selection during the quiz.
 * It retrieves the button that was clicked and checks if the selected answer is correct by reading 'dataset.correct.
 * When the button is correct it will be styled green and then increase the score by 1.
 * When the button is incorrect it will turn red and the correct answer will turn green using a forEach method.
 * All buttons are disabled after selecting an answer and the next button will appear.
*/
function answerSelect(e){
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

/**
 * This function saves the user's high score to local storage and reads them as an array. If no score exists then it will have an empty array.
 * This creates an object containing the player's name and score and the new score is added to the highscore array.
 * The array methods .sort and .splice sorts the array in descending order and allows only 10 highscores.
 * Each highscore is saved to the local storage using the JSON stringify to convert the array to a string.
 * Edited from https://www.youtube.com/watch?v=rsWhJ2XviE4.
*/
function saveHighScore(username, score) {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const newScore = { name: username, score: score };
    
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

/**
 * This function displays the user's final score and resets the quiz state.
 * Resets previous questions and current question index and then displays a final score.
 * Saves the score to the local storage.
 * The form will appear with an event listener to click submit. This checks if the user has entered a name and shows an alert if empty. If characters are entered, it will thank the user and save to highscores.
 * The form is hidden after submission.
*/
function showScore() {
    clearQuestions();
    questionElement.innerHTML = `You scored ${score} out of 15`;
    form.style.display = "block";
    localStorage.setItem("score", score);
    currentQuestionIndex = 0;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const userInput = form.username.value.trim();

        if (userInput === "") {
            Swal.fire({
                title: "Error",
                text: "Please enter your username before ending the quiz!",
                icon: "error"
              });
        } else {
            saveHighScore(userInput, score);
            Swal.fire({
                title: "congratulations",
                text: (`Thank you ${userInput}, please click "Play Again" or "High Scores" to see where you rank.`),
                icon: "success"
            });
            form.style.display = "none";
            nextButton.style.display = "block";
            nextButton.innerHTML = "Play Again";
            highScoreButton.style.display = "block";
        }
    });
};

/**
 * This function handles the next and play again button.
 * It increments 'currentQuestionIndex' to move to the next question when clicked.
 * When current question reaches 15 it calls 'showQuestions'. At this point the timer will stop and 'showScore' is called to display the final score. 
*/
function NextPlayButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < 15) {
        showQuestions();
    } else {
        clearInterval(timer);
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (nextButton.innerHTML === "Play Again") {
        startQuiz();
    } else {
        NextPlayButton();
    }
});

highScoreButton.addEventListener("click", ()=>{
    openHighScoresModal();
} )

startQuiz();
