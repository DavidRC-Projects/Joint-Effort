/**
 * Event listener triggers function when 'Play Now' button is clicked, making the quiz container appear in the centre of the screen
 */
document.getElementById("start-quiz").addEventListener("click", function() {
    const quizContainer = document.getElementById("quiz-container");

// Remove the hidden class to make quiz container visible
quizContainer.classList.remove("hidden");

// Styles for quiz container
quizContainer.style.width = "85vw";
quizContainer.style.height = "85vh";
quizContainer.style.backgroundColor = "grey";
quizContainer.style.color = "white";
quizContainer.style.position = "fixed";
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