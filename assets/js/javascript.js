/**
 * Event listener triggers function when 'Play Now' button is clicked, making the quiz container appear in the centre of the screen
 */
const playNowButton = document.getElementById("playnow");
const playNowModal = document.getElementById("modal");
const closePlayNowButton = playNowModal.querySelector("[data-close-button]");
const overlay = document.getElementById("overlay");

playNowButton.addEventListener("click", openPlayNowModal);
closePlayNowButton.addEventListener("click", closePlayNowModal);
overlay.addEventListener("click", closePlayNowModal);

// Function to open modal
function openPlayNowModal() {
  playNowModal.classList.add("active");
  overlay.classList.add("active");
}

// Function to close modal
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

//CloseContainer function - see how to play section for button

//ScoreFunction

//highscoresFunction

//Quizpage within quiz container

// EndGame Function

// IncreaseScore Function

// NextQuestion Function

// Checkanswer Function

// GetAnswer Function

// WrongAnswer function to offer another container to give the uer and option to practice wrong answers
