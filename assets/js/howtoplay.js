//Event listener triggers function when how to play button is clicked, making the how to play container appear in the centre of the screen.
const howToPlayButton = document.getElementById("how-to-play");
const howToPlayModal = document.getElementById("how-to-play-modal");
const closeHowToPlayButton = howToPlayModal.querySelector("[data-close-button]");

howToPlayButton.addEventListener("click", openHowToPlayModal);
closeHowToPlayButton.addEventListener("click", closeHowToPlayModal);

/**
 * This function opens how to play modal when event listener is triggered by click.
 * Adds 'active' class for model to appear and overlay to make the modal more visible for user experience.
 */
function openHowToPlayModal() {
  howToPlayModal.classList.add("active");
}

/**
 * This functions closes the how to play modal.
 * The modal and overlay is removed when close button is clicked.
 */
function closeHowToPlayModal() {
  howToPlayModal.classList.remove("active");
}

// Event listeners created to change style of 'How to Play' button when hovered over.
howToPlayButton.addEventListener("mouseover", function () {
  howToPlayButton.style.backgroundColor = "#000000";
});

howToPlayButton.addEventListener("mouseout", function () {
  howToPlayButton.style.backgroundColor = "rgba(88, 101, 61, 0.6)";
});
