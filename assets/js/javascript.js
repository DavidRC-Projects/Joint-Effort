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

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = form.username.value.trim();
    
    if (userInput === "") {
      messagemodal.innerText = "Please enter your username before starting the quiz!";
    } else {

      // create a new modal with welcome message
      const welcomeModal = document.createElement("div");
      welcomeModal.id = "welcomeModal";
      welcomeModal.classList.add("modal");
      welcomeModal.classList.add = "active";

      const message = document.createElement("p");
      message.innerText = `Welcome, ${userInput}! You are now ready to start the quiz.`

      const closeButton = document.createElement("button");
      closeButton.innerText = "Close";

      // Close the welcome message modal
      closeButton.addEventListener("click", function() {
        welcomeModal.style.display = "none";
      });

      welcomeModal.appendChild(message);
      welcomeModal.appendChild(closeButton);

      document.body.appendChild(welcomeModal);
    }
  });
};

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
