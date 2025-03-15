/**
 * Event listener triggers function when 'high scores' button is clicked, making the high scores container appear in the centre of the screen
 */
const highscoresButton = document.getElementById("highscores");
const highScoresContainer = document.getElementById("highscores-container");

highscoresButton.addEventListener("click", function() {

// Remove the hidden class to make container visible
highScoresContainer.classList.remove("hidden");

// Styles for quiz container
highScoresContainer.style.width = "85vw";
highScoresContainer.style.height = "85vh";
highScoresContainer.style.backgroundColor = "grey";
highScoresContainer.style.color = "white";
highScoresContainer.style.position = "fixed";
});

/**
 * Function to change style of 'Play Now' button when hovered over
 */
highscoresButton.addEventListener("mouseover", function() {
highscoresButton.style.backgroundColor = "#000000";
});
    
highscoresButton.addEventListener("mouseout", function() {
highscoresButton.style.backgroundColor = "#58653d";
});