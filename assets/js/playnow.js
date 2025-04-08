import { currentQuestionIndex, score, timer, startQuiz } from './quizfunctions.js';
const playNowButton = document.getElementById("playnow");
const playNowModal = document.getElementById("modal");
const closePlayNowButton = playNowModal.querySelector("[data-close-button]");

//Event listener triggers function when play now button is clicked, making the quiz modal appear in the centre of the screen.
playNowButton.addEventListener("click", openPlayNowModal);
closePlayNowButton.addEventListener("click", closePlayNowModal);

/**
 * This function opens playnow modal when event listener is triggered by click.
 * Adds 'active' class for model to appear and overlay to make the modal more visible for user experience.
 * Calls startQuiz() to reset quiz and timer.
 */
function openPlayNowModal() {
  playNowModal.classList.add("active");
  
  // Call startQuiz() to reset questions and timer
  if (typeof startQuiz === 'function') {
    // Force reset of all quiz state
    currentQuestionIndex = 0;
    console.log("After startQuiz:", currentQuestionIndex);
    score = 0;
    
    // Clear any existing timer
    if (typeof timer !== 'undefined') {
      clearInterval(timer);
    }
    
    startQuiz();
  }
}

/**
 * This functions closes the play now modal.
 * The modal and overlay is removed when close button is clicked.
 */
function closePlayNowModal() {
  playNowModal.classList.remove("active");
}

// Event listeners created to change style of 'PlayNow' button when hovered over.
playNowButton.addEventListener("mouseover", function () {
  playNowButton.style.backgroundColor = "#000000";
});

playNowButton.addEventListener("mouseout", function () {
  playNowButton.style.backgroundColor = "rgba(88, 101, 61, 0.6)";
});
