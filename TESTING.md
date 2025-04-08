# Joint Effort

![wireframehomepage](/assets/images/responsivemockup.png)

## Contents

### Automated testing
* [Lighthouse](#results-from-lighthouse-testing)
* [W3C HTML and CSS Validator](#results_w3c_html_and_css_validator)
* [Jshint validator testing](#jshint_validator_testing)
* [Manual Testing](#manual-testing)

### Results from Lighthouse testing

#### Home page (desktop)
![lighthousetesting](assets/images/lighthousehome.png)

#### Home page (mobile)
![lighthousetesting](assets/images/lighthousehomemobile.png)

#### 404 Error Page (Desktop)
![lighthousetesting](assets/images/lighthouse404.png)

#### 404 Error Page (Desktop) After Bug Fixes
![lighthousetesting](assets/images/lighthouse404edit.png)

#### 404 Error Page (Mobile)
![lighthousetesting](assets/images/lighthouse404mobile.png)

#### 404 Error Page (Mobile) After Bug Fixes
![lighthousetesting](assets/images/lighthouse404mobedit.png)

#### Identified Issues on Lighthouse and Fixes

No bug fixes were required for the homepage after performing Lighthouse checks on both desktop and mobile views.

For the 404 error page (desktop), the accessibility rating was initially reduced due to the use of a meta refresh, and the SEO rating was affected by missing meta tags. After removing the meta refresh and adding appropriate meta tags, both the accessibility and SEO scores improved to 100.

For the 404 error page (mobile), the performance score was initially lower due to the size of the background image. I used an image resizer to reduce the image size by half, which improved the performance score to 89, which is a reasonable result without losing quality of the image.

[Back to Top](#contents)

### Results_W3C_HTML_and_CSS_validator

#### Homepage - W3C Validation Check

There were 3 errors identified, which were corrected as follows:

1. Replaced inner main element with section element as only 1 main tag should be used per page.
2. Removed a stray div tag.

After the above changes the validation passed. Please see homepage validation errors below:

![wc3checkindex](assets/images/htmlvalidationhomepage.png)

#### 404 page - W3C Validation Check

There was 1 error identified, which was corrected as follows:

1. There was a button inside an anchor tag, which invalidated the html. Fixed by using just an a tag with the button class.

After the above changes the validation passed. Please see homepage validation errors below:

![wc3checkindex](assets/images/htmlvalidation404.png)

#### CSS validaton check

No errors were found with the css code on validation checks.

[Back to Top](#contents)

#### Jshint validaton check

#### highscores.js

JSHint validation found 2 errors in the highscores.js file. These were resolved as follows:

1. Unnecessary Semicolon: Removed an unnecessary semicolon to improve code clarity and follow JavaScript best practices.

2. Undefined Variable (overlay): Initially resolved by correctly declaring the overlay variable in place of overlayHighScores. However, after testing, I found that the overlay had no functional impact on the high scores modal. As a result, I removed the variable and its associated code to keep the script clean and efficient.

After the above changes this file passed valiadation. Please see metrics below:

![jshintcheck](assets/images/jshintcheckhighscores.png)

#### howtoplay.js

![jshintcheck](assets/images/jshintcheckhowtoplay.png)

#### playnow.js

JSHint validation found 1 error in the highscores.js file. These were resolved as follows:

1. Undefined variables: Four variables — timer, score, currentQuestionIndex, and the startQuiz function were flagged as undefined. This was resolved by exporting them from the quizfunctions.js file and importing them into playnow.js using ES6 module syntax.

![jshintcheck](assets/images/jshintcheckplaynow.png)

#### questionlist.js

#### quizfunctions.js

![jshintcheck](assets/images/jshintcheckquizfunctions.png)

#### redirect.js

![jshintcheck](assets/images/jshintcheckredirect.png)

