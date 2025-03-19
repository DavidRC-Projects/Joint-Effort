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
 */
function openPlayNowModal() {
  playNowModal.classList.add("active");
  overlay.classList.add("active");
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

// Function for form validation
function validateForm() {
  const form = document.getElementById("usernameForm");
  const messagemodal = document.getElementById('messagemodal');
  const startQuizBtn = document.getElementById("startquizbtn");

  startQuizBtn.style.display = "none";
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = form.username.value;
    
    if (userInput === "") {
      messagemodal.innerText = "Please enter your username before starting the quiz!";
    } else {
      messagemodal.innerText = `Thank you ${userInput}, please click next to start the quiz`;
      startQuizBtn.style.display = "block";

      startQuizBtn.addEventListener("click", openStartQuiz);
      }
  });
};

/**
 * Function to remove all welcome page elements when start button is clicked
 * Adds all elements for the quiz
 */
function openStartQuiz () {
const imgRemove = document.querySelector("main img");
const quizIntroRemove = document.querySelector("#quiz-intro");
const formRemove = document.querySelector("#usernameForm");
const startBtnRemove = document.querySelector("#startquizbtn");
const messageModalRemove = document.querySelector("#messagemodal");

const scoreAdd = document.querySelector("#score");
const answerOneAdd = document.querySelector("#answerone");
const answertwoAdd = document.querySelector("#answertwo");
const answerThreeAdd = document.querySelector("#answerthree");
const answerFourAdd = document.querySelector("#answerfour");
const questionAdd = document.querySelector("#question");

// All elements that have been selected to be removed 
imgRemove.style.display = "none";
quizIntroRemove.style.display = "none";
formRemove.style.display = "none";
startBtnRemove.style.display = "none";
messageModalRemove.style.display = "none";

// All elements that have been selected to be added
answerOneAdd.style.display = "block"; 
answertwoAdd.style.display = "block"; 
answerThreeAdd.style.display = "block"; 
answerFourAdd.style.display = "block"; 
questionAdd.style.display = "block";
scoreAdd.style.display = "block";
}

// Call the validation function
validateForm();



//ScoreFunction

//highscoresFunction

//Quizpage within quiz container

// EndGame Function

// IncreaseScore Function

// NextQuestion Function

// Checkanswer Function

// GetAnswer Function

// WrongAnswer function to offer another container to give the uer and option to practice wrong answers
