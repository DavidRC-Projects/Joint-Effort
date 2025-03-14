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