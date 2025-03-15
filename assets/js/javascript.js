/**
 * Event listener triggers function when 'Play Now' button is clicked, making the quiz container appear in the centre of the screen
 */
const playNowButton = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");

playNowButton.addEventListener("click", function() {

// Remove the hidden class to make quiz container visible
quizContainer.classList.remove("hidden");

// Styles for quiz container
quizContainer.style.width = "85vw";
quizContainer.style.height = "85vh";
quizContainer.style.backgroundColor = "grey";
quizContainer.style.color = "white";
quizContainer.style.position = "fixed";
});

/**
 * Function to change style of 'Play Now' button when hovered over
 */
playNowButton.addEventListener("mouseover", function() {
playNowButton.style.backgroundColor = "#000000";
});

playNowButton.addEventListener("mouseout", function() {
playNowButton.style.backgroundColor = "#58653d";
});

//CloseContainer function

//ScoreFunction

//highscoresFunction

//Quizpage within quiz container

// EndGame Function

// IncreaseScore Function

// NextQuestion Function

// Checkanswer Function

// GetAnswer Function

// WrongAnswer function to offer another container to give the uer and option to practice wrong answers