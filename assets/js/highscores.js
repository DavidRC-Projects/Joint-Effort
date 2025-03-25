/**
 * Event listener triggers function when 'high scores' button is clicked, making the high scores container appear in the centre of the screen
 */
const highScoresButton = document.getElementById("highscores");
const highScoresModal = document.getElementById("highScoresModal");
const closeHighScoresButton = highScoresModal.querySelector("[data-close-button]");
const overlayHighScores = document.getElementById("overlay");
const highScoresList = document.getElementById('highscorelist');

highScoresButton.addEventListener("click", openHighScoresModal);
closeHighScoresButton.addEventListener("click", closeHighScoresModal);
overlay.addEventListener("click", closeHighScoresModal);

// Function to open modal
function openHighScoresModal() {
  highScoresModal.classList.add("active");
  overlay.classList.add("active");
  displayHighScores();
}

function displayHighScores() {
  highScoresList.innerHTML = "";
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.forEach(scoreEntry => {
    const listItem = document.createElement("li");
    listItem.textContent = `${scoreEntry.name}: ${scoreEntry.score}`;
    highScoresList.appendChild(listItem);
  });

  console.log("Displayed High Scores:", highScores);
}

// Function to close modal
function closeHighScoresModal() {
  highScoresModal.classList.remove("active");
  overlay.classList.remove("active");
}

/**
 * Function to change style of 'How to Play' button when hovered over
 */
highScoresButton.addEventListener("mouseover", function () {
  highScoresButton.style.backgroundColor = "#000000";
});

highScoresButton.addEventListener("mouseout", function () {
  highScoresButton.style.backgroundColor = "rgba(88, 101, 61, 0.6)";
});
