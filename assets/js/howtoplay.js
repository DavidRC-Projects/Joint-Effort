/**
 * Event listener triggers function when 'how to play' button is clicked, making the how to play container appear in the centre of the screen
 */
const howToPlayButton = document.getElementById("howtoplay");
const howToPlayContainer = document.getElementById("howtoplay-container");

howToPlayButton.addEventListener("click", function () {
  // Remove the hidden class to make container visible
  howToPlayContainer.classList.remove("hidden");

  // Styles for quiz container
  howToPlayContainer.style.width = "80vw";
  howToPlayContainer.style.height = "80vh";
  howToPlayContainer.style.backgroundColor = "#58653d";
  howToPlayContainer.style.color = "white";
  howToPlayContainer.style.position = "fixed";
  howToPlayContainer.style.borderRadius = "5px";
});

/**
 * Function to change style of 'How to Play' button when hovered over
 */
howToPlayButton.addEventListener("mouseover", function () {
  howToPlayButton.style.backgroundColor = "#000000";
});

howToPlayButton.addEventListener("mouseout", function () {
  howToPlayButton.style.backgroundColor = "#58653d";
});

/**
 * Function to change style of 'Back to homepage' button when hovered over and event listener on click to return to homepage
 */
const howToPlayButtonHome = document.getElementById("btnhowtoplay");
howToPlayButtonHome.addEventListener("mouseover", function () {
  howToPlayButtonHome.style.backgroundColor = "#ffffff";
  howToPlayButtonHome.style.color = "#000000";
});

howToPlayButtonHome.addEventListener("mouseout", function () {
  howToPlayButtonHome.style.backgroundColor = "#000000";
  howToPlayButtonHome.style.color = "#ffffff";
});

howToPlayButtonHome.addEventListener("click", function () {
    window.location.href = "index.html";
});
