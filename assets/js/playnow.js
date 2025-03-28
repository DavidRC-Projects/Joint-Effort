const playNowButton = document.getElementById("playnow");
const playNowModal = document.getElementById("modal");
const closePlayNowButton = playNowModal.querySelector("[data-close-button]");
const overlay = document.getElementById("overlay");

/**
 * Event listener triggers function when 'Play Now' button is clicked, making the quiz modal appear in the centre of the screen
 */
playNowButton.addEventListener("click", openPlayNowModal);
closePlayNowButton.addEventListener("click", closePlayNowModal);
overlay.addEventListener("click", closePlayNowModal);

/**
 * Open modal function so that modal appears after the click from the event listener
 * Also calls startQuiz() to reset questions and timer
 */
function openPlayNowModal() {
  playNowModal.classList.add("active");
  overlay.classList.add("active");
  
  // Call startQuiz() to reset questions and timer
  if (typeof startQuiz === 'function') {
    // Force reset of all quiz state
    currentQuestionIndex = 0;
    score = 0;
    
    // Clear any existing timer
    if (typeof timer !== 'undefined') {
      clearInterval(timer);
    }
    
    startQuiz();
  }
}

/**
 * Close modal function so that modal closes
 */
function closePlayNowModal() {
  playNowModal.classList.remove("active");
  overlay.classList.remove("active");
}

/**
 * Function to change style of 'How to Play' button when hovered over
 */
playNowButton.addEventListener("mouseover", function () {
  playNowButton.style.backgroundColor = "#000000";
});

playNowButton.addEventListener("mouseout", function () {
  playNowButton.style.backgroundColor = "rgba(88, 101, 61, 0.6)";
});





/**
 * Function to load questions and answers
 */

  //const questionElement = document.getElementById("question");
  
  // To get the current question
  //const question = questions[currentQuestionIndex];

  // Remove the existing question div

  // Update question text

// Checkanswer Function

// GetAnswer Function

// IncreaseScore Function

// NextQuestion Function

//ScoreFunction

//highscoresFunction

// EndGame Function

// WrongAnswer function to offer another container to give the uer and option to practice wrong answers


// Function for form validation
//function validateForm() {
  //const form = document.getElementById("usernameForm");
  //const messagemodal = document.getElementById("messagemodal");
  //const startQuizBtn = document.getElementById("startquizbtn");

  //startQuizBtn.style.display = "none";

  //form.addEventListener("submit", function (e) {
    //e.preventDefault();

    //const userInput = form.username.value;

   // if (userInput === "") {
      //messagemodal.innerText =
        //"Please enter your username before starting the quiz!";
   // } else {
     // messagemodal.innerText = `Thank you ${userInput}, please click next to start the quiz`;
      //startQuizBtn.style.display = "block";

      //startQuizBtn.addEventListener("click", openStartQuiz);
   /// }
  ///});
//}

/**
 * Function to remove all welcome page elements when start button is clicked
 * Adds all elements for the quiz
 */
//function openStartQuiz() {
 // const imgRemove = document.querySelector("main img");
  //const quizIntroRemove = document.querySelector("#quiz-intro");
  //const formRemove = document.querySelector("#usernameForm");
  //const startBtnRemove = document.querySelector("#startquizbtn");
 // const messageModalRemove = document.querySelector("#messagemodal");

  // All welcome elements that have been selected to be removed
 // imgRemove.style.display = "none";
 // quizIntroRemove.style.display = "none";
 // formRemove.style.display = "none";
  //startBtnRemove.style.display = "none";
  //messageModalRemove.style.display = "none";
//}

// Call the validation function
//validateForm();
