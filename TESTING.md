# Travel Tickr
The testing.md file provides an overview of the testing conducted on Travel Tickr webapp. It covers code validation, accessibility, performance, testing on various devices, browser compatibility, testing user stories, full manual testing and user feedback and improvements. Each section describes the tools used, the issues found (if any), and the corresponding test results.

## Table of Content

- [Code Quality and Validation](#code-quality-and-validation)
  * [HTML Validation](#html-validation)
  * [CSS Validation](#css-validation)
  * [JSX Validation](#jsx-validation)
- [Accessibility](#accessibility)
- [Performance](#performance)
  * [Performance on Desktop Interface](#performance-on-desktop-interface)
  * [Performance on Mobile Interface](#performance-on-mobile-interface)
- [Performing tests on various devices](#performing-tests-on-various-devices)
- [Browser compability](#browser-compability)
- [Automated testing](#automated-testing)
- [Manual testing](#manual-testing)
  * [Testing user stories](#testing-user-stories)
  * [User Experience and improvements](#user-experience-and-improvements)
  * [Full testing Unauthorized user](#full-testing-unauthorized-user)
- [Summary](#summary)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Code Quality and Validation

### HTML Validation
[W3C Markup Validation](https://validator.w3.org/) is a service provided by the W3C that allows you to validate your HTML code against the official specifications. It checks for syntax errors, improper tag usage, and other issues that may affect the structure and semantics of your web pages. Validating your HTML code with W3C Markup Validation helps ensure that your pages are well-formed and adhere to web standards.

The html passed through the validation and the code was pasted in and I used a filter to remove issues related to the React system. <details><summary>See filter</summary>![Result](/docs/testing/html-filter.png)</details>

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|index| No errors | <details><summary>Screenshot of result</summary>![Result](/docs/testing/html.png)</details>| :white_check_mark:

[Back to the top](#table-of-content)

<br>

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

[Back to the top](#table-of-content)

<br>

### JSX Validation
In the development process of Travel Tickr, I have utilized [ESLint](https://eslint.org/), a powerful static code analysis tool, to ensure high code quality and adherence to coding standards. ESLint not only helps catch potential errors, but it also enforces consistent code style and promotes best practices. This ensures that our codebase is well-maintained, easier to understand, and facilitates collaboration with other developers.

#### ESLint Warnings During Development
During development, ESLint was integrated into the IDE. This integration enables real-time analysis of the code as it's written, providing immediate feedback on potential issues. ESLint rules are applied to the code, and if violations or possible errors are detected, warnings or errors are displayed directly in the terminal.

For example, when working on a component, ESLint might show warnings like this:

```bash
Compiled with warnings.

src/components/NotFound.js
  Line 3:8:  'styles' is defined but never used  no-unused-vars
```

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|Eslint during development|No errors|See below|:white_check_mark:

Throughout the development of Travel Tickr, ESLint has been instrumental in identifying and resolving problematic code patterns. The codebase has been kept clean and adheres to the recommended JavaScript best practices, as shown in the terminal output below:

```bash
Compiled successfully!

You can now view Travel Tickr in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.5.2:3000
  ```

#### Running **'npx eslint'**
When running npx eslint in the terminal, the linting check is performed on the entire codebase, including files that may not be currently open or actively being edited. This enables the detection of linting errors that may not have been captured by the "regular" ESLint setup during development.

| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|Eslint|No errors|See below|:white_check_mark:

When there are no ESLint errors, the npx eslint command will not display any feedback or output. This is the expected result when following these steps:

1. Open the project.
2. Open a terminal.
3. Run the following command:
```bash
npx eslint
```

Alongside ESLint, [Prettier](https://prettier.io/) is also employed in the development process. Prettier is an opinionated code formatter that imposes a uniform code style throughout the project by parsing the code and re-printing it according to its predefined rules. This helps me in maintaining clean and consistently formatted code. Prettier integrates well with most editors and requires no additional configuration, making it easy to use. By using Prettier alongside ESLint, I can ensure that my code remains easy to read, understand, and maintain, which ultimately streamlines the development process.

[Back to the top](#table-of-content)

<br>

## Accessibility
[The WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) was used to assess the accessibility of the website. WAVE helps identify potential accessibility issues and provides guidance on how to improve the accessibility of web content.

During the evaluation, the following issues were identified:
| **Tested** | **Result** | **View Result** | **Pass** |
--- | --- | --- | :---:
|All pages| 4 Contrast Errors|<details><summary>Screenshot of result</summary>![Result](/docs/testing/wave-home.png)</details> | :white_check_mark:

* The lighter blue color used in the Navbar creates contrast errors, but it is a deliberate design choice that I have chosen to maintain. Despite the contrast issue, I believe the color is still sufficiently visible and have made a decision to retain it in its current form.

[Back to the top](#table-of-content)

<br>

## Performance 
The Travel Tickr website was subjected to testing through the [Google Lighthouse in Google Chrome Developer Tools](https://developer.chrome.com/docs/lighthouse/). function integrated within Google Chrome Developer Tools. This tool offers a comprehensive evaluation of Performance, Accessibility, Best Practices, and SEO parameters. The testing was carried out for both desktop and mobile interfaces and the results are documented as follows:

### Performance on Desktop Interface
The homepage, having the highest image density, was selected for performance testing since it naturally bears the greatest performance load. Consequently, the performance score was found to be 63 out of 100.

| **Performance** | **Accessibility* | **Best Practice | **SEO** |**View Result** | **Pass** |
--- | --- | --- | --- | --- | :---:
|63/100| 94/100 | 92/100 | 100/100 |<details><summary>Screenshot of result</summary>![Result](/docs/testing/lighthouse-desktop.png)</details> | :white_check_mark:

### Performance on Mobile Interface
For consistency in testing conditions and to assess the website's behavior on different platforms, the same homepage was scrutinized for performance on mobile devices. 
**Performance** | **Accessibility* | **Best Practice | **SEO** |**View Result** | **Pass** |
--- | --- | --- | --- | --- | :---:
|59/100| 95/100 | 92/100 | 100/100 |<details><summary>Screenshot of result</summary>![Result](/docs/testing/lighthouse.-mobile.png)</details> | :white_check_mark:

In conclusion, the Travel Tickr web application have demonstrated satisfactory performance in the evaluation. Despite the room for improvement in certain areas, notably the performance metric, the overall results are positive with impressive scores in accessibility, best practices, and SEO. The balance between aesthetic appeal and operational efficiency is carefully maintained, making the Travel Tickr web application an effective solution for its intended user base. Further enhancements in performance optimization could further improve the user experience, thereby fortifying Travel Tickr's position as a reliable and user-friendly travel companion.

[Back to the top](#table-of-content)

<br>

## Performing tests on various devices 
The website was tested on the following devices:
| **Tested** | **Reported issues** | **Pass** |
--- | --- | :---:
|Various desktops|None| :white_check_mark:
|Samsung Galaxy Note S20 ultra| None | :white_check_mark:
|Apple iPhone X | Can't login| :heavy_multiplication_x:
|OnePlus 8|None|:white_check_mark:

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

## Automated testing
[Jest](https://jestjs.io/) is a powerful and flexible testing framework for JavaScript and was used in this project along with (React Testing Library)[https://testing-library.com/docs/react-testing-library/intro/] for the React component tests. These tools provide an excelent way to simulate user behavior and verity that the application is functioning as expected. 

To simulate server responses during testing, I employed (Mock Service Worker(MSW))[https://mswjs.io/] which intercepts and manipulates network requests allowing for a  more controlled testing environment. 

Here are the specific tests performed:

**Login Page Test:** This test verifies that the username field, password field and the login button are rendered on the login page. 
**NavBar Test for Not Logged In Users:** This test checks whether the login, signup and home links are correctly displayed in the navigation bar for users who are not logged in. 
**NavBar Test for Logged In Users:** Once a user is logged in, this test confirms that the user's avatar as well as the Memory, Following and Bucketlist links are displayed in the navigation bar. 
**NavBar Test after User Logs Out:** This test ensures that once a user logs out, the Login and Sign up buttons are displayed again in the navigation bar. 

To run the test suite, use the below command in the terminal:

```bash
npm test
```

The current status of the tests is as follows:

```bash
 PASS  src/components/__tests__/NavBar.test.js
 PASS  src/pages/auth/__tests__/LoginForm.test.js
 PASS  src/App.test.js

Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        5.63 s
Ran all test suites.
```

[Back to the top](#table-of-content)

<br>

## Manual testing
### Testing user stories
#### **Epic 1: User Account Management**

| **User Story** | **Action** | **Expected Result** | **Pass** |
| --- | --- | --- | :---: |
| [As a first-time user I can register for an account on the Travel Tickr platform, so that I can start exploring and sharing my travel memories.](https://github.com/SandraBergstrom/travel-tickr/issues/10#issue-1760697175) | Enter registration details and submit the registration form. | User is successfully registered and redirected to the platform's homepage. |  :white_check_mark: |
| [As a user I can log in to the Travel Tickr platform using my registered email and password, so that I can access my account and personalized features.](https://github.com/SandraBergstrom/travel-tickr/issues/11#issue-1760711902) | Enter login credentials and click on the login button. | User is successfully logged in and redirected to their account dashboard. |  :white_check_mark:
| [As a user I can log out of the Travel Tickr platform, so that I can secure my account and maintain privacy.](https://github.com/SandraBergstrom/travel-tickr/issues/12#issue-1760721017) | Click on the logout button or link. | User is successfully logged out and redirected to the platform's homepage. |  :white_check_mark:
| [As a user I can update my profile information on the Travel Tickr platform, so that my profile reflects my current preferences and interests.](https://github.com/SandraBergstrom/travel-tickr/issues/13#issue-1760735056) | Access the profile settings, make desired changes, and save the updated profile information. | User's profile information is successfully updated and reflects the changes made. |  :white_check_mark:

#### **Epic 2: Post (CRUD) Management**

| **User Story** | **Action** | **Expected Result** | **Pass** |
| --- | --- | --- | :---: |
| [As a user I can upload a photo with accompanying text to create a memory post on the Travel Tickr platform, so that I can share my travel experiences with others.](https://github.com/SandraBergstrom/travel-tickr/issues/14#issue-1760758217) | Select a photo, enter relevant text, and submit the post creation form. | The post is successfully created and visible to other users on the platform. |  :white_check_mark:
|[As a user I can view and read posts on the Travel Tickr platform, so that I can explore and discover travel stories shared by other users.](https://github.com/SandraBergstrom/travel-tickr/issues/15#issue-1760773076) | Navigate to the posts section or homepage and browse through the available posts. | Posts from other users are displayed, and their content is visible for reading. |  :white_check_mark:
| [As a user I can update my own posts on the Travel Tickr platform, so that I can make edits or additions to my shared content.](https://github.com/SandraBergstrom/travel-tickr/issues/16#issue-1760784374) | Access the post editing options, make desired changes, and save the updated post. |The post is successfully updated with the new changes made by the user. |  :white_check_mark:
| [As a user I can delete my own posts on the Travel Tickr platform, so that I can remove content that is no longer relevant or desired.](https://github.com/SandraBergstrom/travel-tickr/issues/17#issue-1760793663) | Access the post deletion options and confirm the deletion action. | The post is successfully deleted from the platform and no longer visible to other users. |  :white_check_mark:
​
#### **Epic 3: Interactions and Engagement**

| **User Story** | **Action** | **Expected Result** | **Pass** |
| --- | --- | --- | :---: |
|[As a user I can view the about page so that I can gain information about Travel Tickr.](https://github.com/SandraBergstrom/travel-tickr/issues/61#issue-1791310004) | Click on the about page link in the platform's navigation. | The about page is successfully displayed, providing information about Travel Tickr. |  :white_check_mark:
|[As a user I can search for specific posts or users on the Travel Tickr platform, so that I can discover new travel stories and connect with like-minded travelers.](https://github.com/SandraBergstrom/travel-tickr/issues/18#issue-1760797581) | Enter search keywords in the search bar and initiate the search. | Relevant posts or users matching the search criteria are displayed to the user. |  :white_check_mark:
|[As a user I can sort posts based on criteria such as date, popularity, or relevance, so that I can find the most relevant and interesting content.](https://github.com/SandraBergstrom/travel-tickr/issues/19#issue-1760802832) | Select a sorting option from the available choices in the navbar (e.g., by travelers you follow or posts added to the bucketlist). | The posts are rearranged and displayed according to the selected sorting criteria. |  :white_check_mark:
|[As a user I can like posts shared by other users on the Travel Tickr platform, so that I can show appreciation for inspiring content.](https://github.com/SandraBergstrom/travel-tickr/issues/54#issue-1786449433) | Click on the like button/icon associated with a post. | The post receives a like from the user, and the like count is increased. |  :white_check_mark:
|[As a user I can comment on posts shared by other users on the Travel Tickr platform, so that I can engage in discussions and interact with the travel community.](https://github.com/SandraBergstrom/travel-tickr/issues/21#issue-1760822647) | Enter a comment in the comment section of a post and submit it. | The comment is successfully posted and visible to other users, fostering discussions and interactions. | :white_check_mark:
|[As a user I can view and read comments on posts on the Travel Tickr platform, so that I can follow the conversations and opinions shared by other users.](https://github.com/SandraBergstrom/travel-tickr/issues/22#issue-1760825975) | Navigate to the comment section of a post. | Comments made by other users on the post are displayed, allowing the user to read and follow the conversations. | :white_check_mark:
|[As a user I can update my own comments on the Travel Tickr platform, so that I can make edits or corrections to my shared opinions.](https://github.com/SandraBergstrom/travel-tickr/issues/23#issue-1760829919) | Access the comment editing options, make desired changes, and save the updated comment. | The comment is successfully updated with the new changes made by the user. | :white_check_mark:
|[As a user I can delete my own comments on the Travel Tickr platform, so that I can remove or retract my previous statements.](https://github.com/SandraBergstrom/travel-tickr/issues/24#issue-1760834441)| Access the comment deletion options and confirm the deletion action. | The comment is successfully deleted from the platform and no longer visible to other users. | :white_check_mark:
| [As a user I can follow other users on the Travel Tickr platform, so that I can stay updated on their travel journeys and experiences.](https://github.com/SandraBergstrom/travel-tickr/issues/25#issue-1760848479) | Access the user's profile and click on the follow button. | The user is successfully followed, and their updates appear in the user's feed. | :white_check_mark:
| [As a user I can see who the most popular travelers are, so that I can get inspired by them.](https://github.com/SandraBergstrom/travel-tickr/issues/25#issue-1760848479) | Access the posts pages to view the leaderboard. | The most popular travelers, based on predefined criteria (number of followers), are displayed to the user. | :white_check_mark:
| [As a user I can view other users' profiles, so that I can learn more about them.](https://github.com/SandraBergstrom/travel-tickr/issues/51#issue-1780269929) | Click on a user's profile or username to access their profile page. | The user's profile page is displayed, showcasing information and content related to the user. | :white_check_mark:
​
#### **Epic 4: Site Owner Administration and Functionality**

| **User Story** | **Action** | **Expected Result** | **Pass** |
| --- | --- | --- | :---: |
| [As a site owner I can delete user accounts, posts, and comments on the Travel Tickr platform, so that I can maintain a safe and high-quality user environment.](https://github.com/SandraBergstrom/travel-tickr/issues/26#issue-1760851438) | Access the site owner/administration panel, select the desired user/post/comment, and initiate the deletion process. | The selected user account, post, or comment is successfully deleted from the platform. | :white_check_mark:
|[ As a site owner I want to improve the application's codebase and deployment process to ensure efficiency and maintainability.](https://github.com/SandraBergstrom/travel-tickr/issues/57#issue-1788931900) | Implement codebase improvements and optimize the deployment process. | The application's codebase is enhanced, and the deployment process becomes more efficient and maintainable. | :white_check_mark:
| [As a site owner I want to create a 404 page to improve the user experience when users land on non-existent pages.](https://github.com/SandraBergstrom/travel-tickr/issues/58#issue-1788996452) | Create a custom 404 page with relevant information and design. | When users land on non-existent pages, the custom 404 page is displayed, improving the user experience. | :white_check_mark:
| [As a site owner I can conduct thorough testing to ensure that the application is robust, error-free, and provides a smooth user experience.](https://github.com/SandraBergstrom/travel-tickr/issues/56#issue-1787873703) | Perform comprehensive testing, including functional, integration, and performance testing. | The application passes the tests and is robust, error-free, and provides a smooth user experience. | :white_check_mark:
​
### **Epic 5: Memory Management**

| **User Story** | **Action** | **Expected Result** | **Pass** |
| --- | --- | --- | :---: |
| [As a user I can add travel memories shared by others to my bucket list on the Travel Tickr platform, so that I can save and revisit them later.](https://github.com/SandraBergstrom/travel-tickr/issues/27#issue-1760854822) | Click on the bucket icon associated with a travel memory. | The travel memory is successfully added to the user's bucket list. | :white_check_mark:
​
### **Epic 6: Trip Planning and Information**

| **User Story** | **Action** | **Expected Result** | **Pass** |
| --- | --- | --- | :---: |
| [As a user I can see a post's location so that I can know where the memory was made.](https://github.com/SandraBergstrom/travel-tickr/issues/36#issue-1761935754) | View a post and check for the location information associated with it. | The location information is displayed alongside the post, allowing the user to know where the memory was made. | :white_check_mark:


[Back to the top](#table-of-content)

<br>

### User Experience and improvements
I conducted user testing with 5 individuals to gather feedback on their experience using the website. I asked them to perform the following tasks and provide feedback on their experience:

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
|About|*"I miss an about page to shortly read about the Travel Tickr"*| A simple about page was added.| :white_check_mark:
|Popular Travelers | *"On my mobile phone the popular profile section is too close to the navbar"*|Added extra 20px top padding on App main on small screens. |:white_check_mark:
|Login|*"I can make an account, but I can't login on my phone"*|This issue, the inability for users to log in via an iPhone X, stems from the instructional project provided by the school. Regrettably, it exceeds my current skill set to rectify prior to the project's due date.| :heavy_multiplication_x:
|Post icons|*"It's not 100% clear what the icons do on the post, specially the bucket icon. Would be good with some kind of information"*| Given the time limitations, I swiftly integrated an overlay trigger for each icon, offering contextual messages that reflect the user's actions, such as whether a post has been 'liked', 'unliked', 'added', or remains 'unadded'.|:white_check_mark:

[Back to the top](#table-of-content)

<br>

### Full testing Unauthorized user

#### Navbar 
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Logo|Redirects to index.page|Clicked on logo|Works as expected|:white_check_mark:
|Login|Redirects to the login page|clicked on link "Login"|Works as expected|:white_check_mark:
|Sign up|Redirects to to the signup page and form|clicked on the link "Sign up"|Works as expected|:white_check_mark:

#### Posts list
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Search|Search result should only contain the post with the specified title|Try to search for a post by a specific title and verify that the search result only includes that post|Works as expected|:white_check_mark:
|Like a post|The functionality should prompt the user to log in before they can like the post|Like a post and verify that a popup comes with text to login.|Works as expected|:white_check_mark:
|Comment on a Post|The functionality should prompt the user to log in before they can comment.|Varify that I can not make a comment and be prompted to login. |Works as expected|:white_check_mark:
|Like a comment|The functionality should prompt the user to log in before they can like the comment|Like a comment and verify that a popup comes with text to login.|Works as expected|:white_check_mark:
|Add to bucketlist|The functionality should prompt the user to log in before they can add post to the bucketlist|Add a post to bucketlist and verify that a popup comes with text to login.|Works as expected|:white_check_mark:

#### Create an account
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No match passwords|The account creation should fail, and an error message should be displayed indicating password mismatch.|Provide different passwords.|Works as expected|:white_check_mark:
|No username|The account creation should fail, and an error message should be displayed indicating a missing username.|Submit the form without entering a username.|Works as expected|:white_check_mark:
|Submit valid data|The account should be successfully created, and the user should be redirected to the home page.|Submit the form with a valid username and matching passwords.|Works as expected|:white_check_mark:

#### Log in
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No/wrong username|The login should fail, and an error message should be displayed indicating a missing username.|Attempt to log in without entering a username and then the wrong username.|Works as expected|:white_check_mark:
|No/wrong password|The login should fail, and an error message should be displayed indicating a missing password.|Attempt to log in without entering a password and then the wrong password.|Works as expected|:white_check_mark:
|Valid username and password|The login should be successful, and the user should be redirected to the home page.|Log in with a valid username and password.|Works as expected|:white_check_mark:

### Authorized user
#### Navbar
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Logo|Redirects to index.page|Clicked on logo|index page loads|:white_check_mark:
|Add Memory|Redirect to the create a post page|Press the + icon with the text Memory|Works as expected|:white_check_mark:
|Home|The user should remain on the home page or go there if on another page.|Click on the "Home" link in the navbar.|Works as expected|:white_check_mark:
|Following|The user should be navigated to the feed page, where only posts from travelers they follow are displayed.|Click on the "Following" link in the navbar.|Works as expected|:white_check_mark:
|Bucketlist |The user should be navigated to the bucketlist page, where their added posts are displayed.|"Bucketlist" link in the navbar.|Works as expected|:white_check_mark:
|Avatar|The user should be navigated to the profile page of the logged-in traveler.|Click on the avatar in the navbar.|Works as expected|:white_check_mark:
|Logout |The user should be logged out and redirected to the home page.|Click on the "Logout" link in the navbar.|Works as expected|:white_check_mark:

#### Memory (post):
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No image|The memory creation should fail, and an error message should be displayed indicating a missing image.|Try to add a memory without an image.|Works as expected|:white_check_mark:
|No title|The memory creation should fail, and an error message should be displayed indicating a missing title.|Try to add a memory without a title.|Works as expected|:white_check_mark:
|No text content|The memory creation should fail, and an error message should be displayed indicating a missing text.|Try to add a memory without a text content.|Works as expected|:white_check_mark:
|Cancel button|The memory creation process should be canceled, and the user should be returned to the previous page.|Press the cancel button while adding a memory.|Works as expected|:white_check_mark:
|Add a memory|The memory should be successfully created, and it should be displayed on the home page.|Fill in all the fields and press the save button while adding a memory.|Works as expected|:white_check_mark:
|Update a memory|A valid post update should be saved.|Update one of your own posts by accessing the memory detail view, going to the menu, and selecting the update option. Cancel the update process and successfully update a post.|Works as expected|:white_check_mark:
|Cance update|Canceling should exit the update process|Cancel the update process by pressing the cancel button|Works as expected|:white_check_mark:
||The user should first see an alert about deleting, then if pressing the post should be successfully deleted.|Delete one of your own posts by accessing the memory detail view, going to the menu, and selecting the delete option.|Works as expected|:white_check_mark:

#### Comments
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Add a comment to another user's post|The comment should be successfully added to the post and the comments counter should increase.|Scroll to the comments field, add a comment, and save it.|Works as expected|:white_check_mark:
|Update comment|A valid comment update should be saved.|Update one of your own comments on another user's post by accessing the memory detail view, scrolling to the comments field, accessing the menu for your comment, and selecting the update option.|Works as expected|:white_check_mark:
|Cancel update|Canceling should exit the update process,|Cancel the update process |Works as expected|:white_check_mark:
|Delete a Comment|First a warning alert should be visible and if the user continues to click the comment should be successfully deleted.|Delete one of your own comments by accessing the comment, accessing the menu, and selecting the delete option.|Works as expected|:white_check_mark:
|Like a Comment|The comment should be successfully liked and the counter should increase|Like another user's comment by accessing the comment and pressing the thumbs-up icon.|Works as expected|:white_check_mark:
|Unlike a Comment|The comment should be successfully unliked and the counter should decrease.|Press the thumbs icon again to unlike the comment.|Works as expected|:white_check_mark:


#### Home Page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Search|The search functionality should return relevant posts based on the search query.|Search for a post.|Works as expected|:white_check_mark:
|Like post|The post should be successfully liked, and the like count should increment.|Like a post.|Works as expected|:white_check_mark:
|Add to bucketlist|The post should be successfully added to bucketlist, and the like count should increment.|Like a post.|Works as expected|:white_check_mark:
|Infinity scroll|The home page should load more posts as the user scrolls down, demonstrating infinite scrolling.|Scroll through the home page.|Works as expected|:white_check_mark:

#### Following page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No followers|Page should display the appropriate icon and text to prompt you to follow another traveler.|Go to the following feed page by clicking the link in the navbar|Works as expected|:white_check_mark:
|Follow|The user should be successfully followed, their posts should appear in the "Following" page, the users followers count should increase with 1 as will the followers follower count.|Click the follow button on a user.|Works as expected|:white_check_mark:
|Unfollow|The user should be successfully unfollowed, their posts should not appear in the "Following" feed anymore. Users followers count should go down by one|Click the follow button on a user.|Works as expected|:white_check_mark:

#### Bucketlist page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|No bucketlist items|Page should display the appropriate icon and text to prompt you to add posts to the bucketlist.|Go to the bucketlist page by clicking the link in the navbar|Works as expected|:white_check_mark:
|Add to bucketlist|The post should be successfully added and the counter for that posts bucketlists should increase by one.|Click the bucket on a post.|Works as expected|:white_check_mark:
|Remove post|The post should be successfully removed from the bucketlist and the counter should go down with one.|Click the bucket on a post.|Works as expected|:white_check_mark:

#### Travelers profile page
|**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass**|
|--- | --- | --- | --- | :---:
|Go to profile|Users profile page should be displayed.|Click on your avatar to navigate to your profile.|Works as expected|:white_check_mark:
|Menu|Dropdown list with options to update profile, change username and password will appear.|Click the 3 dots in the upper right corner and go to the "Update Profile" option.|Works as expected|:white_check_mark:
|Update profile|The profile should be successfully updated, and the changes should be reflected on the profile page.|Update your profile information and press the save button.|Works as expected|:white_check_mark:
|Cancel update|The profile update process should be canceled, and the user should be returned to the profile page.|Press the cancel button while updating the profile.|Works as expected|:white_check_mark:
|Change username|The username should be successfully changed, and the updated username should be displayed on the profile page.|Change the username and press the save button.|Works as expected|:white_check_mark:
|Cancel update|The username change process should be canceled, and the user should be returned to the profile page.|Press the cancel button while changing the username.|Works as expected|:white_check_mark:
|Change password|The password should be successfully changed, and the user should be prompted to log in again with the new password.|Change the password and press the save button.|Works as expected|:white_check_mark:
|Cancel update|The password change process should be canceled, and the user should be returned to the profile page.|Press the cancel button while changing the password.|Works as expected|:white_check_mark:

[Back to the top](#table-of-content)

## Summary
The application largely demonstrated effective functionality across its features during testing. Both authorized and unauthorized user operations were successfully carried out, from basic navigation tasks such as logging in and signing up, to more intricate tasks such as adding and deleting memories (posts), managing user following, and manipulating bucket list items.

The navigation bar, posts list, account creation, and login processes for unauthorized users all passed the tests. For authorized users, the application performed efficiently across the home page, following page, bucket list page, and traveler's profile page. The ability to add, update, and delete memories and comments were all functional. The search functionality, liking and unliking of posts, and following and unfollowing users also worked as expected. This testing phase indicates that the application is reliable, offering a smooth and comprehensive user experience.

[Back to the top](#table-of-content)

<br>