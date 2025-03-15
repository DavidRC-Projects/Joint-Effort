/**
 * Event listener triggers function when 'how to play' button is clicked, making the how to play container appear in the centre of the screen
 */
document.getElementById("howtoplay").addEventListener("click", function() {
    const howToPlayContainer = document.getElementById("howtoplay-container");

// Remove the hidden class to make quiz container visible
howToPlayContainer.classList.remove("hidden");

// Styles for quiz container
howToPlayContainer.style.width = "85vw";
howToPlayContainer.style.height = "85vh";
howToPlayContainer.style.backgroundColor = "grey";
howToPlayContainer.style.color = "white";
howToPlayContainer.style.position = "fixed";
});