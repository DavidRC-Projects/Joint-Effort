# Joint Effort

## Introduction

The joint effort quiz is to be designed for physiotherapy students and anyone interested in testing and expanding their knowledge of human anatomy. This quiz focuses on bone anatomy, making it a fun and engaging way to reinforce understanding of the bones in the human body. The aim is to create a learning tool that helps the user improve their anatomical knowledge and keeps the learners on their toes as they work against the clock to beat the highscores.The aim is to offer a user-friendly platform for interactive learning.

Add image of reseponsive mock up.

![wireframehomepage](/assets/images/responsivemockup.png)

Link to [responsive Mockup] https://ui.dev/amiresponsive?url=https://davidrc-projects.github.io/Joint-Effort/

## CONTENTS
* [User Experience](#user-experience)
* [User Stories](#user-stories)

## Design
* [Colour Scheme](#colour-scheme)
* [Typography](#typography)
* [Wireframes](#wireframes)

## Features
* [Existing Features](#existing-features)
* [Accessibility](#accessibility)
* [Future Implementation](#future-implementations)

## Testing
* [Testing](#testing)

## Deployment and Local Deployment
* [Deployment & Local Development](#deployment-and-local-development)
* [Deployment](#deployment)
* [Local Development](#local-development)
* [How to Fork](#how-to-fork)
* [How to Clone](#how-to-clone)

## Technologies Used
* [Technologies Used](#technologies-used)
* [Languages Used](#languages-used)
* [Programs and Sites Used](#programs-used)

## Credits and Acknowledgements
* [Credits](#credits)
* [Acknowledgments](#acknowledgments)

### User Experience (UX)

#### User Stories

##### First Time Visitor Goals
• I am a physiotherapy student looking for an engaging way to test and improve my anatomy knowledge.
• I want the quiz to challange my anatomy knowledge
• The site should be user-friendly, well-structured, and fully responsive across different devices.
• I want to see how many questions i answered correctly and view my total score at the end.
• Before starting the quiz, I would like clear instructions on how to play.

##### Returning Visitor Goals
• I want to replay the quiz to see if i can improve my score.
• I would like to track my best score and aim to beat my previous results.
• I would like the quiz to be easy to navigate so i can check the highscores.

##### Frequant Visitor Goals
• I would like to earn trophies for achieving a top 3 score.
• I want to practice a variety of questions to improve my anatomy knowledge.

##### Owner Goals
• I want to create an interactive quiz that helps physiotherapy students and any anatomy enthusiasts that can improve or refresh their anatomy knowledge.
• I want to develop a responsive interface so users can easily navigate the quiz and check high scores to see their performance.
• I want to ensure that the quiz provides immediate feedback when a user selects an incorrect answer by displaying the correct answer.

### Colour Scheme

I have used the following hex colors taken from the background image on the homepage:

![colourscheme](/assets/images/colourpicker.png)

### Typography

I have used google fonts to import all fonts on the site.

The Merriweather font was used as the primary font, with Poppins as the secondary font. Both are sans-serif fonts that improve readability and gives an academic feel.

### Wireframes

I created wireframes for mobile, tablet and desktop using figma.


Used for redirect
https://stackoverflow.com/questions/9276817/301-redirect-for-site-hosted-at-github

### Existing Features

The website has been designed with a homepage and a custom 404 error page. No additional pages were created instead, modals are used throughout to create a more streamlined and user-friendly experience.

Homepage: 
This is the main landing page where users interested in learning anatomy can get an overview of the quiz. It provides options to start the quiz, view instructions on how to play, and check the high scores.

404 Error Page: 
If a user mistypes the URL, they are automatically redirected back to the homepage after 3 seconds. The page also provides feedback to inform the user that they are being redirected, helping maintain a smooth user experience.

Favicon and Title:
A favicon appears in the browser tab for easy recognition.

The site title is displayed at the top of the page and also acts as a clickable link that navigates back to the homepage. The footer is at the bottom of the page and mainstains a consistent deisgn that is resposnive to mobile, tablet and desktop devices.

Welcome Message:
Introduces the user to the quiz, giving them a clear understanding of the topic they will be tested on.

Play Now Modal:
This modal allows users to begin the quiz. It presents the questions, multiple-choice answers, score, and a countdown timer within the quiz interface.

Question Display - Shows one question at a time with multiple-choice answers.

Score and Timer display - Displays the current score and remaining time. When the timer reaches 10 seconds, a warning message appears encouraging the user to hurry. The quiz ends after 60 seconds, at which point the user’s score is shown along with a username input form. The score increases in increments of 1 when an answer is correct.

Next Button - Appears after a user answers a question, allowing them to proceed to the next one.

Username Form - Appears at the end of the quiz. If no username is submitted, an error message is displayed. When a username is entered, the user receives a confirmation message and is advised to check the high scores or play again.

Play Again Button - Appears once a valid username has been entered, allowing the user to restart the quiz.

Highscores Button - Also appears after a username has been submitted and opens the High Scores modal.

How to Play Modal:
This modal provides clear instructions on how to play the quiz. Key information is highlighted using <span> elements to draw the user's attention to important details.

Highscores Modal:
This modal displays the top scores submitted by users who have completed the quiz. An ordered list shows usernames and their corresponding scores. High scores can be accessed both before starting the quiz and after it is completed.

Close Button - Each modal includes a close button that allows users to exit the modal and return to the main interface.

## Accessibility

### General Site Strucutre

The homepage includes a favicon, the site title "Joint Effort", and a heading (<h1>) with an accompanying paragraph. It also features three clearly labeled buttons that open modals for playing the quiz, viewing instructions, and checking high scores.

### Buttons

The buttons on the homepage (Play Now, How to Play, and High Scores) maintain a consistent and accessible design. They are fully responsive across all screen sizes. JavaScript is used to provide visual feedback such as background and text colour changes when a user hovers over a button.

### Modals

Each modal opens with a smooth transition effect. An overlay appears behind the modal, dimming the background to help users focus on the active content. Users can close the modal by either clicking the close button or clicking anywhere outside the modal area on the overlay.

### Hover effects
The Close, Play Now, and High Scores buttons include CSS hover effects that change both the background and text color to provide visual feedback to users.

### Answer Buttons
When a user selects an incorrect answer, the selected button turns red to indicate the mistake, while the correct answer is highlighted in green. This provides immediate feedback, showing which answer was correct and which was not. If the user selects the correct answer, only the green highlighted button is displayed. Once an answer is chosen, all other answer buttons are disabled to prevent further changes. A "Next" button then appears, allowing the user to proceed to the following question. The user's score increases by 1 for each correct answer.