/**
 * Event listener triggers function when 'Play Now' button is clicked, making the quiz container appear in the centre of the screen
 */
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal);

// Styles for quiz modal
modal.style.width = "80vw";
modal.style.height = "80vh";
modal.style.backgroundColor = "#58653d";
modal.style.color = "white";
modal.style.position = "fixed";
modal.style.borderRadius = "5px";
});
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
    });

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
};

// Remove the hidden class to make quiz container visible
//modal.classList.remove("hidden");

/**
 * Function to change style of 'Play Now' button when hovered over
 */
//playNowButton.addEventListener("mouseover", function() {
//playNowButton.style.backgroundColor = "#000000";
//});

//playNowButton.addEventListener("mouseout", function() {
//playNowButton.style.backgroundColor = "#58653d";
//});

//CloseContainer function - see how to play section for button

//ScoreFunction

//highscoresFunction

//Quizpage within quiz container

// EndGame Function

// IncreaseScore Function

// NextQuestion Function

// Checkanswer Function

// GetAnswer Function

// WrongAnswer function to offer another container to give the uer and option to practice wrong answers