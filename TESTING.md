# Travel Tickr
The testing.md file provides an overview of the testing conducted on Travel Tickr webapp. It covers code validation, accessibility, performance, testing on various devices, browser compatibility, testing user stories, and user feedback and improvements. Each section describes the tools used, the issues found (if any), and the corresponding test results.

## Table of Content

1. [Code Validation](#html-validation)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [Python Validation](#python-validation)
    4. [JavaScript]()
2. [Accessibility](#accessibility)
3. [Performance](#performance)
    1. [Desktop Performance](#desktop-performance)
    2. [Mobile Performance](#mobile-performance)
4. [Performing tests on various devices](#performing-tests-on-various-devices)
5. [Browser compability](#browser-compability)
6. [Manual Testing](#manual-testing)
    1. [Testing user stories](#testing-user-stories)
    2. [User Experience and Improvements](#user-experience-and-improvements)
    3. [Full testing](#full-testing)
8. [Summary](#summary)


## Code Validation

### HTML Validation
[W3C Markup Validation](https://validator.w3.org/) is a service provided by the W3C that allows you to validate your HTML code against the official specifications. It checks for syntax errors, improper tag usage, and other issues that may affect the structure and semantics of your web pages. Validating your HTML code with W3C Markup Validation helps ensure that your pages are well-formed and adhere to web standards.

The html passed through the validation and the code was pasted in and I used a filter to remove issues related to the React system. <details><summary>See filter</summary>![Result](/docs/testing/html-filter.png)</details>

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|index| No errors | <details><summary>Screenshot of result</summary>![Result](/docs/testing/html.png)</details>| :white_check_mark:


### CSS Validation
[W3C Jigsaw](https://jigsaw.w3.org/css-validator/) is a tool provided by the World Wide Web Consortium (W3C) that allows you to validate and check the correctness of your CSS code. It helps ensure that your web pages comply with the standards set by the W3C, promoting interoperability and accessibility. I have tested by adding each page to the validator.

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|Landingpage/Home| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Login| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Flogin&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Sign up| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Fsignup&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Create Memory| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Fposts%2Fcreate&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Post detail| No errors|[Result](https://travel-tickr-03d04732f340.herokuapp.com/posts/5)| :white_check_mark:
|Following/Bucketlist| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Ffeed&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Traveler Profile| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Ftravelers%2F1&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Edit traveler| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Ftravelers%2F1%2Fedit&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Edit username| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Ftravelers%2F1%2Fedit%2Fusername&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:
|Edit password| No errors|[Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-tickr-03d04732f340.herokuapp.com%2Ftravelers%2F1%2Fedit%2Fpassword&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)| :white_check_mark:

Although the validator returned some error messages, these are due to external libraries and frameworks that are known to be reliable and widely used. The custom code written for this project has been thoroughly checked and does not contain any important errors or issues.

### Python Validation 
[PEP 8](https://pep8ci.herokuapp.com/) is a style guide for writing Python code to ensure consistency and readability. It provides guidelines on how to format code, naming conventions for variables and functions, and other best practices. Following PEP 8 helps to improve code quality, readability, and maintainability.



Note: The specific details and validation results for each file can be viewed by expanding the corresponding sections.

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
| settings | One URL was too long, while the other lines that exceeded the recommended length were automatically generated by Django. | ![Result](/docs/validation/pep8/settings.png) | :white_check_mark:


[Back to the top](#table-of-content)

<br>

## Accessibility
[The WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) was used to assess the accessibility of the website. WAVE helps identify potential accessibility issues and provides guidance on how to improve the accessibility of web content.

During the evaluation, the following issues were identified:



[Back to the top](#table-of-content)

<br>

## Performance 
Travel Tickr website was tested using [Google Lighthouse in Google Chrome Developer Tools](https://developer.chrome.com/docs/lighthouse/). The performance scores were evaluated for both desktop and mobile devices. Here are the summarized results:

### Desktop Performance
- Average performance score: 92/100
- The majority of pages received scores above 90/100, indicating excellent performance.
- The Logout page received a score of 85/100 due to preventing back/forward cache restoration, which is intentional to maintain security.

| **Tested** | **Performance Score** | **View Result** | **Pass** |
--- | --- | --- | :---:
|page| score | <details><summary>Screenshot of result</summary>![Result]()</details> | :white_check_mark:


### Mobile Performance
- Average performance score: 77/100
- The pages showed slightly lower performance compared to desktop, but still maintained a satisfactory score.
- The Logout page received a score of 71/100 due to preventing back/forward cache restoration, which is intentional to maintain security.

| **Tested** | **Performance** | **View Result** | **Pass** |
--- | --- | --- | :---:
|page| score | <details><summary>Screenshot of result</summary>![Result]()</details> | :white_check_mark:


Overall, Travel Tickr webapps performed well in terms of performance, providing a smooth user experience on both desktop and mobile devices.

[Back to the top](#table-of-content)

<br>

## Performing tests on various devices 
The website was tested on the following devices:
- Samsung Galaxy Note S20 ultra
- Samsung Galaxy Note S22 ultra
- Apple iPhone 12
- OnePlus 8

In addition, the website was tested using Google Chrome Developer Tools Device Toggeling option for all available device options.

[Back to the top](#table-of-content)

<br>

## Browser compability
The website was tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Egde

[Back to the top](#table-of-content)

<br>

## Manual testing
### Testing user stories UPDATE

#### As a first-time user...
| **User Story** | **Action** | **Expected Result** | **Pass** |
--- | --- | --- | :---:


#### As a returning user...
| **User Story** | **Action** | **Expected Result** | **Pass** |
--- | --- | --- | :---:


#### As a site owner...
| **User Story** | **Action** | **Expected Result** | **Pass** |
--- | --- | --- | :---:


[Back to the top](#table-of-content)

<br>

### User Experience and improvements
I conducted user testing with 10 individuals to gather feedback on their experience using the website. I asked them to perform the following tasks and provide feedback on their experience:

- Create an account
- Update the profile
- Add memory (1 or more)
- Update a memory
- Delete a memory
- Like/unlike a memory
- Add a memory to the bucketlist
- Comment on a memory
- Like/unlike a comment
- Test links

Each participant was encouraged to provide feedback and report any issues or improvements they encountered during the testing process. Below is the feedback/issues reported. 

| **Feature** | **Feedback** | **Result** | **Pass** |
|--- | --- | --- | :---:


### Full testing Unauthorized user

#### Navbar 
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Logo|Redirects to index.page|Clicked on logo|index page loads|:white_check_mark:
|Login|Redirects to the login page|clicked on link "Login"|loads the login page and form|:white_check_mark:
|Sign up|Redirects to to the signup page and form|clicked on the link "Sign up"|loads the sign up page and form|:white_check_mark:

#### Posts list
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Search|Search result should only contain the post with the specified title|Try to search for a post by a specific title and verify that the search result only includes that post|:white_check_mark:
|Like a post|The functionality should prompt the user to log in before they can like the post|Like a post and verify that a popup comes with text to login.|:white_check_mark:
|Comment on a Post|The functionality should prompt the user to log in before they can comment.|Varify that I can not make a comment and be prompted to login. |:white_check_mark:
|Like a comment|The functionality should prompt the user to log in before they can like the comment|Like a comment and verify that a popup comes with text to login.|:white_check_mark:
|Add to bucketlist|The functionality should prompt the user to log in before they can add post to the bucketlist|Add a post to bucketlist and verify that a popup comes with text to login.|:white_check_mark:

#### Create an account
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No match passwords|The account creation should fail, and an error message should be displayed indicating password mismatch.|Provide different passwords.|:white_check_mark:
|No username|The account creation should fail, and an error message should be displayed indicating a missing username.|Submit the form without entering a username.|:white_check_mark:
|Submit valid data|The account should be successfully created, and the user should be redirected to the home page.|Submit the form with a valid username and matching passwords.|:white_check_mark:

#### Log in
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No/wrong username|The login should fail, and an error message should be displayed indicating a missing username.|Attempt to log in without entering a username and then the wrong username.|:white_check_mark:
|No/wrong password|The login should fail, and an error message should be displayed indicating a missing password.|Attempt to log in without entering a password and then the wrong password.|:white_check_mark:
|Valid username and password|The login should be successful, and the user should be redirected to the home page.|Log in with a valid username and password.|:white_check_mark:

### Authorized user
#### Navbar
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Logo|Redirects to index.page|Clicked on logo|index page loads|:white_check_mark:
|Add Memory|Redirect to the create a post page|Press the + icon with the text Memory|:white_check_mark:
|Home|The user should remain on the home page or go there if on another page.|Click on the "Home" link in the navbar.|:white_check_mark:
|Following|The user should be navigated to the feed page, where only posts from travelers they follow are displayed.|Click on the "Following" link in the navbar.|:white_check_mark:
|Bucketlist |The user should be navigated to the bucketlist page, where their added posts are displayed.|"Bucketlist" link in the navbar.|:white_check_mark:
|Avatar|The user should be navigated to the profile page of the logged-in traveler.|Click on the avatar in the navbar.|:white_check_mark:
|Logout |The user should be logged out and redirected to the home page.|Click on the "Logout" link in the navbar.|:white_check_mark:

#### Memory (post):
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No image|The memory creation should fail, and an error message should be displayed indicating a missing image.|Try to add a memory without an image.|:white_check_mark:
|No title|The memory creation should fail, and an error message should be displayed indicating a missing title.|Try to add a memory without a title.|:white_check_mark:
|No text content|The memory creation should fail, and an error message should be displayed indicating a missing text.|Try to add a memory without a text content.|:white_check_mark:
|Cancel button|The memory creation process should be canceled, and the user should be returned to the previous page.|Press the cancel button while adding a memory.|:white_check_mark:
|Add a memory|The memory should be successfully created, and it should be displayed on the home page.|Fill in all the fields and press the save button while adding a memory.|:white_check_mark:
|Update a memory|A valid post update should be saved.|Update one of your own posts by accessing the memory detail view, going to the menu, and selecting the update option. Cancel the update process and successfully update a post.|:white_check_mark:
|Cance update|Canceling should exit the update process|Cancel the update process by pressing the cancel button|:white_check_mark:
||The user should first see an alert about deleting, then if pressing the post should be successfully deleted.|Delete one of your own posts by accessing the memory detail view, going to the menu, and selecting the delete option.|:white_check_mark:

#### Comments
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Add a comment to another user's post|The comment should be successfully added to the post and the comments counter should increase.|Scroll to the comments field, add a comment, and save it.|:white_check_mark:
|Update comment|A valid comment update should be saved.|Update one of your own comments on another user's post by accessing the memory detail view, scrolling to the comments field, accessing the menu for your comment, and selecting the update option.|:white_check_mark:
|Cancel update|Canceling should exit the update process,|Cancel the update process |:white_check_mark:
|Delete a Comment|First a warning alert should be visible and if the user continues to click the comment should be successfully deleted.|Delete one of your own comments by accessing the comment, accessing the menu, and selecting the delete option.|:white_check_mark:
|Like a Comment|The comment should be successfully liked and the counter should increase|Like another user's comment by accessing the comment and pressing the thumbs-up icon.|:white_check_mark:
|Unlike a Comment|The comment should be successfully unliked and the counter should decrease.|Press the thumbs icon again to unlike the comment.|:white_check_mark:


#### Home Page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Search|The search functionality should return relevant posts based on the search query.|Search for a post.|:white_check_mark:
|Like post|The post should be successfully liked, and the like count should increment.|Like a post.|:white_check_mark:
|Add to bucketlist|The post should be successfully added to bucketlist, and the like count should increment.|Like a post.|:white_check_mark:
|Infinity scroll|The home page should load more posts as the user scrolls down, demonstrating infinite scrolling.|Scroll through the home page.|:white_check_mark:

#### Following page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No followers|Page should display the appropriate icon and text to prompt you to follow another traveler.|Go to the following feed page by clicking the link in the navbar|:white_check_mark:
|Follow|The user should be successfully followed, their posts should appear in the "Following" page, the users followers count should increase with 1 as will the followers follower count.|Click the follow button on a user.|:white_check_mark:
|Unfollow|The user should be successfully unfollowed, their posts should not appear in the "Following" feed anymore. Users followers count should go down by one|Click the follow button on a user.|:white_check_mark:

#### Bucketlist page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No bucketlist items|Page should display the appropriate icon and text to prompt you to add posts to the bucketlist.|Go to the bucketlist page by clicking the link in the navbar|:white_check_mark:
|Add to bucketlist|The post should be successfully added and the counter for that posts bucketlists should increase by one.|Click the bucket on a post.|:white_check_mark:
|Remove post|The post should be successfully removed from the bucketlist and the counter should go down with one.|Click the bucket on a post.|:white_check_mark:

#### Travelers profile page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Go to profile|Users profile page should be displayed.|Click on your avatar to navigate to your profile.|:white_check_mark:
|Menu|Dropdown list with options to update profile, change username and password will appear.|Click the 3 dots in the upper right corner and go to the "Update Profile" option.|:white_check_mark:
|Update profile|The profile should be successfully updated, and the changes should be reflected on the profile page.|Update your profile information and press the save button.|:white_check_mark:
|Cancel update|The profile update process should be canceled, and the user should be returned to the profile page.|Press the cancel button while updating the profile.|:white_check_mark:
|Change username|The username should be successfully changed, and the updated username should be displayed on the profile page.|Change the username and press the save button.|:white_check_mark:
|Cancel update|The username change process should be canceled, and the user should be returned to the profile page.|Press the cancel button while changing the username.|:white_check_mark:
|Change password|The password should be successfully changed, and the user should be prompted to log in again with the new password.|Change the password and press the save button.|:white_check_mark:
|Cancel update|The password change process should be canceled, and the user should be returned to the profile page.|Press the cancel button while changing the password.|:white_check_mark:

[Back to the top](#table-of-content)

## Summary
... 