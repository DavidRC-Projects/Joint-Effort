//Event listener triggers function when highscores button is clicked, making the high scores container appear in the centre of the screen.

const highScoresButton = document.getElementById("highscores");
const highScoresModal = document.getElementById("highScoresModal");
const closeHighScoresButton = highScoresModal.querySelector("[data-close-button]");
const highScoresList = document.getElementById('highscorelist');

highScoresButton.addEventListener("click", openHighScoresModal);
closeHighScoresButton.addEventListener("click", closeHighScoresModal);

/**
 * This function opens highscores modal when event listener is triggered by click.
 */
function openHighScoresModal() {
  highScoresModal.classList.add("active");
  displayHighScores();
}

/**
 * Populates the high score list from localStorage.
 */
function displayHighScores() {
  highScoresList.innerHTML = "";
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  if (highScores.length === 0) {
    highScoresList.innerHTML = "<li>No highscores</li>";
   } else {
    highScores.forEach(scoreEntry => {
    let listItem = document.createElement("li");
    listItem.textContent = `${scoreEntry.name}: ${scoreEntry.score}`;
    highScoresList.appendChild(listItem);
  });
   }
   
  console.log("Displayed High Scores:", highScores);
}

/**
 * This functions closes the highscores modal.
 */
function closeHighScoresModal() {
  highScoresModal.classList.remove("active");
}

// Event listeners created to change style of 'highScoresButton' button when hovered over.
highScoresButton.addEventListener("mouseover", function () {
  highScoresButton.style.backgroundColor = "#000000";
});

highScoresButton.addEventListener("mouseout", function () {
  highScoresButton.style.backgroundColor = "rgba(88, 101, 61, 0.6)";
});
