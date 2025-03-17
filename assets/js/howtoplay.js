/**
 * Event listener triggers function when 'how to play' button is clicked, making the how to play container appear in the centre of the screen
 */
const howToPlayButton = document.getElementById("howtoplay");
const howToPlayModal = document.getElementById("howToPlayModal");
const closeHowToPlayButton = howToPlayModal.querySelector(
  "[data-close-button]"
);
const overlayHowToPlay = document.getElementById("overlay");

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
  howToPlayButton.style.backgroundColor = "rgba(88, 101, 61, 0.6)";
});
