# Joint Effort

## Introduction

The joint effort quiz is to be designed for physiotherapy students and anyone interested in testing and expanding their knowledge of human anatomy. This quiz focuses on bone anatomy, making it a fun and engaging way to reinforce understanding of the bones in the human body. The aim is to create a learning tool that helps the user improve their anatomical knowledge and keeps the learners on their toes as they work against the clock to beat the highscores. The aim is to offer a user-friendly platform for interactive learning.

![wireframehomepage](/assets/documents/responsivemockup.png)

Link to [Responsive mockup](https://ui.dev/amiresponsive?url=https://davidrc-projects.github.io/Joint-Effort/)

## CONTENTS
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
* [Testing](testing)

## Deployment and Local Deployment
* [Deployment](#deployment)
* [Local Development](#local-development)
* [How to Fork](#how-to-fork)
* [How to Clone](#how-to-clone)

## Technologies Used
* [Languages Used](#languages-used)
* [Programs and Sites Used](#programs-and-sites-used)

## Credits and Acknowledgements
* [Credits](#credits)
* [Acknowledgments](#acknowledgments)

## User Stories

### First Time Visitor Goals
* I am a physiotherapy student looking for an engaging way to test and improve my anatomy knowledge.
* I want the quiz to challange my anatomy knowledge.
* The site should be user-friendly, well-structured, and fully responsive across different devices.
* I want to see how many questions i answered correctly and view my total score at the end.
* Before starting the quiz, I would like clear instructions on how to play.

### Returning Visitor Goals
* I want to replay the quiz to see if i can improve my score.
* I would like to track my best score and aim to beat my previous results.
* I would like the quiz to be easy to navigate so i can check the highscores.

### Frequant Visitor Goals
* I would like to earn trophies for achieving a top 3 score.
* I want to practice a variety of questions to improve my anatomy knowledge.

### Owner Goals
* I want to create an interactive quiz that helps physiotherapy students and any anatomy enthusiasts that can improve or refresh their anatomy knowledge.
* I want to develop a responsive interface so users can easily navigate the quiz and check high scores to see their performance.
* I want to ensure that the quiz provides immediate feedback when a user selects an incorrect answer by displaying the correct answer.

## Design

### Colour Scheme

I have used the following hex colors taken from the background image on the homepage:

![colourscheme](/assets/documents/colourpicker.png)

### Typography

I have used google fonts to import all fonts on the site.

The Merriweather font was used as the primary font, with Poppins as the secondary font. Both are sans-serif fonts that improve readability and gives an academic feel.

### Wireframes

I created wireframes for mobile, tablet and desktop using figma.

#### Home page
![wireframe home page](/assets/documents/wireframehomepage.png)

#### Quiz page
![wireframe quiz page](/assets/documents/wireframequizpage.png)

#### How to play page
![wireframe how to play page](/assets/documents/wireframehowtoplaypage.png)

### Existing Features

The website has been designed with a homepage and a custom 404 error page. No additional pages were created instead, modals are used throughout to create a more streamlined and user-friendly experience.

#### Homepage: 
This is the main landing page where users interested in learning anatomy can get an overview of the quiz. It provides options to start the quiz, view instructions on how to play, and check the high scores.

Please see a screen shot of the desktop and mobile view of the home page:

![Desktop view of home page](/assets/documents/homepage.png)![Mobile view of home page](/assets/documents/homepagemobile.png)

#### 404 Error Page: 
If a user mistypes the URL, they are automatically redirected back to the homepage after 3 seconds. The page also provides feedback to inform the user that they are being redirected, helping maintain a smooth user experience.

Please see a screen shot of the desktop and mobile view of the 404 page:

![Desktop view of 404 page](/assets/documents/error404page.png)![Mobile view of 404 page](/assets/documents/mobile404errorpage.png)

#### Favicon and Title:
A favicon appears in the browser tab for easy recognition.

![Favicon](/assets/documents/faviconexample.png)

The site title is displayed at the top of the page and also acts as a clickable link that navigates back to the homepage. The footer is at the bottom of the page and mainstains a consistent deisgn that is responsive to mobile, tablet and desktop devices.

![Page title](/assets/documents/title.png)

Welcome Message:
Introduces the user to the quiz, giving them a clear understanding of the topic they will be tested on.

![Welcome message](/assets/documents/welcomemessage.png)

#### Play Now Modal:
This modal allows users to begin the quiz. It presents the questions, multiple-choice answers, score, and a countdown timer within the quiz interface.

Please see a screen shot of the desktop and mobile view of the play now modal:

![Play now modal](/assets/documents/playnowmodaldesktop.png)![Play now modal mobile](/assets/documents/playnowmodalmobile.png)

Question Display - Shows one question at a time with multiple-choice answers.

Score and Timer display - Displays the current score and remaining time. When the timer reaches 10 seconds, a warning message appears encouraging the user to hurry. The quiz ends after 60 seconds, at which point the user’s score is shown along with a username input form. The score increases in increments of 1 when an answer is correct.

Please see a screen shot of the question, score and timer:

![Question, score and timer](/assets/documents/questionscoreandtimer.png)

Next Button - Appears after a user answers a question, allowing them to proceed to the next one.

Please see a screen shot of the next button:

![Next button hidden](/assets/documents/nextbuttonhidden.png)![Next button](/assets/documents/nextbuttonappear.png)

Warning message when quiz has 10 seconds remaining – A warning message appears in place of the timer in the top left corner of the screen when only 10 seconds remain. This message stays visible for 3 seconds before disappearing.

![Warning message](/assets/documents/hurrymessage.png)

Username Form - Appears at the end of the quiz. If no username is submitted, an error message is displayed. When a username is entered, the user receives a confirmation message and is advised to check the high scores or play again.

Please see a screen shot of the form input:

![Form input](/assets/documents/forminput.png)

Alert message when the user has not filled in the username:

![Alert error message](/assets/documents/erroralert.png)

Alert message when the user has entered their username:

![Alert success message](/assets/documents/successalert.png)

Play Again Button - Appears once a valid username has been entered, allowing the user to restart the quiz.

Highscores Button - Appears after a username has been submitted and opens the High Scores modal.

Modal image - Also appears after the username has been submitted. This is resposinve to all screen sizes.

![Play again and highscores buttons](/assets/documents/playnowandhighscoreandimage.png)

How to Play Modal:
This modal provides clear instructions on how to play the quiz. Key information is highlighted using span elements to draw the user's attention to important details.

![How to play modal](/assets/documents/howtoplaymodal.png)

Highscores Modal:
This modal displays the top scores submitted by users who have completed the quiz. An ordered list shows usernames and their corresponding scores. High scores can be accessed both before starting the quiz and after it is completed.

![Highscores modal](/assets/documents/highscoresmodal.png)

Close Button - Each modal includes a close button that allows users to exit the modal and return to the main interface.

## Accessibility

### General Site Strucutre

The homepage includes a favicon, the site title "Joint Effort", and a heading h1 with an accompanying paragraph. It also features three clearly labeled buttons that open modals for playing the quiz, viewing instructions, and checking high scores.

### Buttons

The buttons on the homepage (Play Now, How to Play, and High Scores) maintain a consistent and accessible design. They are fully responsive across all screen sizes. JavaScript is used to provide visual feedback such as background and text colour changes when a user hovers over a button.

![Play now button hover](/assets/documents/playnowhover.png)![How to play button hover](/assets/documents/howtoplayhover.png)![Highscores button hover](/assets/documents/homehighscoreshover.png)

### Modals

Each modal opens with a smooth transition effect. Users can close the modal by either clicking the close button or clicking anywhere outside the modal area.

### Hover effects
The Close, Play Now, and High Scores buttons include CSS hover effects that change both the background and text color to provide visual feedback to users.

![Close button hover](/assets/documents/quizendclosehover.png)![Play again button hover](/assets/documents/playagainhover.png)![Highscores button hover](/assets/documents/highscoreshover.png)

### Answer Buttons
When a user selects an incorrect answer, the selected button turns red to indicate the mistake, while the correct answer is highlighted in green. This provides immediate feedback, showing which answer was correct and which was not. If the user selects the correct answer, only the green highlighted button is displayed. Once an answer is chosen, all other answer buttons are disabled to prevent further changes. A "Next" button then appears, allowing the user to proceed to the following question. The user's score increases by 1 for each correct answer.

![Correct answer button](/assets/documents/correctanswerbutton.png)![Incorrect answer button](/assets/documents/nextbuttonappear.png)

## Future Implementations

1. Keyboard Accessibility -
I plan to enhance the site’s accessibility by ensuring all interactive elements like modals, buttons, and quiz controls can be fully accessed and operated using the keyboard alone. Users will be able to open modals with keyboard shortcuts, navigate answer choices using arrow keys, and close modals with the Esc key.

2. Achievement Trophies for Top Scores -
I’d like to introduce a reward system that shows trophies or badges for the top three scores on the leaderboard. For example, gold, silver, and bronze icons could be displayed next to usernames to create a sense of accomplishment and encourage friendly competition.

3. Expanded Question Pool -
In the future, I plan to add more quiz questions to increase variety and keep the experience fresh for returning users. I may also organise questions by difficulty or topic—such as upper limb, lower limb, or axial skeleton—to allow users to target specific areas of anatomy.

4. Practice Mode for Incorrect Answers -
I’d like to implement a “Practice Mode” that stores questions users get wrong and allows them to revisit and practice those specific questions. This feature would help reinforce learning by focusing on areas that need improvement.

[Back to Contents](#contents)

## Testing

### Manual Testing

See [TESTING.md](TESTING.md) for more details of manual testing.

### Automated Testing

- Lighthouse in Google Chrome DevTools to analyse my website's performance, accessibility, best practices and SEO.

- [Pythontutor](https://pythontutor.com/javascript.html#mode=edit) to visually debug JavaScript code.

See [TESTING.md](TESTING.md) for more details of lighthouse testing and fixes.

### Validator Testing

- [W3C](https://validator.w3.org/#validate_by_input) to validate the HTML code.

- [W3C](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate my CSS code.

- [jshint](https://jshint.com/) to validate my javascript.

- [Autoprefixer CSS online](https://autoprefixer.github.io/). Used to make the website more accessable on different browsers.

See [TESTING.md](TESTING.md) for more details of validator testing and fixes.

[Back to Contents](#contents)

### Known Bugs
When play now is clicked the console using dev tools in Google Chrome reports 'Uncaught TypeError: Assignment to constant variable at HTMLButtonElement.openPlayNowModal (playnow.js:21:26)'. I investigated this bug and tried to see if i had used a const rather than a let variable for currentQuestionIndex. However, i could only identify a let variable and could not identify why this bug was occuring. Despite this the functionality of the quiz is not affected.

### Fixed Bugs
1. Hover effect on "How to Play" button: Noticed the hover effect was not working. Used console.log() to check if the mouseover event was being detected. An error appeared showing that the variable overlay had been declared twice. Renamed the variable in howtoplay.js to overlayHowToPlay. After the change the hover worked on "How to play" button.

2. Second modal implementation : Attempted to add a second modal. Encountered a bug with the second modal not displaying, and received the error: Uncaught SyntaxError: Function statements require a function name in javascript.js:41. I decided to change path and keep all content within a single modal rather than opening a modal in a modal. Used display: none to hide elements and reveal quiz elements upon clicking the start button with the username input at the end of the quiz. This resulted in a smooth transition and fixed this issue.

3. Question number increment: Observed that the question number increased by 2 each time the "Next" button was clicked. Investigated the issue and found that currentQuestionIndex was being incremented in both the showQuestion() function and handleNextButton(). Therefore, removed the increment from showQuestion() and retained it only in handleNextButton(). The question number now increases by 1 as expected.

4. Question 13/14 answers not displaying: During quiz testing, observed that at question 13 or 14, answer options stopped appearing. Used browser console to inspect and found the error: Uncaught RangeError: Maximum call stack size exceeded. Bug was caused by recursive calls in getRandomObject when all questions had been selected. Added condition to reset selectedQuestions and score once it reached 14:
if (selectedQuestions.length >= 14) { selectedQuestions = []; score = 0; }
This resolved the issue and the quiz now runs smoothly through all 15 questions.

5. Redirect issues with github: Attempted to implement a 301 redirect, but GitHub Pages does not support server-side redirects. Instead, created a custom 404 error page with JavaScript that automatically redirects the user back to the homepage after 3 seconds. When an invalid URL is visited, the 404 page displays briefly and then redirects to the homepage.

## Deployment and Local Deployment

### Deployment

The site is deployed using GitHub Pages - [Joint-Effort](https://davidrc-projects.github.io/Joint-Effort/).

To Deploy the site using GitHub Pages please follow steps below:

1. Login (or signup) to Github.
2. Go to the repository for this project, [DavidRC-Projects/Joint-Effort](https://davidrc-projects.github.io/Joint-Effort/).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [DavidRC-Projects/Joint-Effort](https://github.com/DavidRC-Projects/Joint-Effort).
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [DavidRC-Projects/Joint-Effort](https://github.com/DavidRC-Projects/Joint-Effort).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

[Back to Contents](#contents)

## Technologies Used

### Languages Used
JavaScript, HTML and CSS

### Programs and Sites Used
* Figma for wire frames [Figma Wireframes](https://www.figma.com/design/gDVoXeRKMzkqZGKgYgXfLV/Joint-Effort-project2?node-id=0-1&t=4speEeK8rEchNVnf-1).
* VS code - Intergrated Development Enviroment.
* Github - Version Control.
* Google developer tools - To test code.
* Google fonts [Google Fonts](https://fonts.google.com/)
* Font Awesome [Font Awesome](https://fontawesome.com/)
* Slack - For updates and communication.
* Am i Responsive [Am I Responsive?](http://ami.responsivedesign.is/) - To view website as mulitiple different devices.
* Tiny PNG [TinyPNG](https://tinypng.com/) - To compress images and convert them to png.
* Favicon.io [Favicon.io](https://favicon.io/) To create favicon.
* Image Resizer [Image Resizer](https://imageresizer.com/) to resize images.
* Color contrast checker [Color contrast checker](https://coolors.co/contrast-checker) - To calculate contrast ratio of text and background.
* Pexels [Pexels](https://www.pexels.com/) - To add additional free images to the website.
* Python Tutor [Pythontutor](https://pythontutor.com/javascript.html#mode=edit) - To help visually debug JavaScript.
* MDN Web Docs [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) - Support with features and understanding JavaScript.
* Sweetalert2 [Sweetalert2](https://sweetalert2.github.io/) - To make custom alerts.
* Youtube [Youtube](https://www.youtube.com/) - Watched video tutorials to support understanding of JavaScript.
* W3Schools [W3Schools](https://www.w3schools.com/) - Additional aid for coding with JavaScript, html and css.

[Back to Contents](#contents)

## Credits

### Media 
The background image for the homepage was taken from [Pexels](https://www.pexels.com/photo/selective-focus-photography-of-skeleton-1528375/).

### Features

Modal Styling:
Inspiration and guidance for creating modal styles were taken from Web Dev Simplified’s Vanilla JavaScript Modal example
[Vanilla-JavaScript-Modal](https://github.com/WebDevSimplified/Vanilla-JavaScript-Modal/blob/master/index.html).

Ordered List Display in Modal:
Used W3Schools to resolve an issue where numbered list items were not displaying correctly inside a modal
[W3Schools](https://www.w3schools.com/css/css_list.asp).

CSS Pseudo-classes:

Referred to MDN Web Docs for the :first-child selector
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child).

Also used MDN Web Docs for the :nth-child selector
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child).

Quiz Question Logic:
The quiz list structure and showQuestions() function were inspired by this YouTube tutorial: JavaScript Quiz Tutorial.
[Youtube tutorial](https://www.youtube.com/watch?v=PBcqGxrr9g8).

Random Question Selection:
Adapted a solution for generating random indexes without repetition from this Stack Overflow thread: 
Stack Overflow – Random Questions Without Repeating
[Stack Overflow](https://stackoverflow.com/questions/72341389/how-do-i-generate-a-random-question-using-javascript-for-my-quiz-app-which-doesn).

Start Timer Function:
Idea for implementing a quiz timer was based on this Stack Overflow post: 
Stack Overflow – JavaScript Timer for Quiz
[Stack Overflow](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz).

Saving High Scores:
Followed the approach shown in this tutorial for saving and displaying high scores: 
[Youtube Save High Scores](https://www.youtube.com/watch?v=rsWhJ2XviE4).

Redirect to Homepage Using JavaScript:
Used MDN Web Docs for guidance on the window.location.replace() method:
[MDN Web Docs-Location.replace()](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace).
### Acknowledgments

* I would like thank my mentor Jubril Akolade. Jubril gave advice lots of good advice and gave me tips like using sweetalert2 and adding highscores to my quiz game.
* I would like to thank my partner for all her support during this project.

[Back to Contents](#contents)