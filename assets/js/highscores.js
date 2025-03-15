/**
 * Event listener triggers function when 'high scores' button is clicked, making the high scores container appear in the centre of the screen
 */
document.getElementById("highscores").addEventListener("click", function() {
    const highScoresContainer = document.getElementById("highscores-container");

// Remove the hidden class to make quiz container visible
highScoresContainer.classList.remove("hidden");

// Styles for quiz container
highScoresContainer.style.width = "85vw";
highScoresContainer.style.height = "85vh";
highScoresContainer.style.backgroundColor = "grey";
highScoresContainer.style.color = "white";
highScoresContainer.style.position = "fixed";
});