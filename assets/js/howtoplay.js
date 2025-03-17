/**
 * Event listener triggers function when 'how to play' button is clicked, making the how to play container appear in the centre of the screen
 */
const howToPlayButton = document.getElementById("howtoplay");
const howToPlayModal = document.getElementById("howToPlayModal");
const closeHowToPlayButton = howToPlayModal.querySelector("[data-close-button]");
const overlay = document.getElementById("overlay");

howToPlayButton.addEventListener("click", openHowToPlayModal);
closeHowToPlayButton.addEventListener("click", closeHowToPlayModal);
overlay.addEventListener("click", closeHowToPlayModal);

// Function to open modal
function openHowToPlayModal() {
  howToPlayModal.classList.add("active");
  overlay.classList.add("active");
}

// Function to close modal
function closeHowToPlayModal() {
  howToPlayModal.classList.remove("active");
  overlay.classList.remove("active");
}

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
 * Function to change style of button when hovered over and event listener on click to return to homepage
 */
const howToPlayButtonHome = document.getElementById("howtoplay");
howToPlayButtonHome.addEventListener("mouseover", function () {
  howToPlayButtonHome.style.backgroundColor = "#ffffff";
  howToPlayButtonHome.style.color = "#000000";
});

howToPlayButtonHome.addEventListener("mouseout", function () {
  howToPlayButtonHome.style.backgroundColor = "#000000";
  howToPlayButtonHome.style.color = "#ffffff";
});
