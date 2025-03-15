/**
 * Event listener triggers function when 'how to play' button is clicked, making the how to play container appear in the centre of the screen
 */
const howToPlayButton = document.getElementById("howtoplay");
const howToPlayContainer = document.getElementById("howtoplay-container");

howToPlayButton.addEventListener("click", function() {
    
// Remove the hidden class to make container visible
howToPlayContainer.classList.remove("hidden");

// Styles for quiz container
howToPlayContainer.style.width = "85vw";
howToPlayContainer.style.height = "85vh";
howToPlayContainer.style.backgroundColor = "grey";
howToPlayContainer.style.color = "white";
howToPlayContainer.style.position = "fixed";
});