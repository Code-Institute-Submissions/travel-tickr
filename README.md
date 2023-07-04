# ![Logo](/docs/travel.jpg)

Travel Tickr is your ultimate destination for all things travel. Whether you're a globetrotter, an avid explorer, or simply seeking inspiration for your next adventure, Travel Tickr has got you covered. Share your travel tales, from exhilarating hikes to serene beach getaways, by uploading stunning photos accompanied by captivating stories. Connect with fellow travelers, exchange tips and recommendations, and create meaningful connections with people who share your passion for exploration. With Travel Tickr, your travel memories are beautifully organized, easily accessible, and ready to be shared with friends, family, and the global travel community. 

Join Travel Tickr today and embark on a journey of discovery, connection, and endless travel inspiration.

![Mockup image](#) <br>
Developer: [Sandra Bergström](https://github.com/SandraBergstrom) <br>
[Live webapp](#) <br>
[Repository](#) <br>
[APi](#) <br>
[API Repository](#) <br>


## Table of Content

- [User Experience](#user-experience)
  * [Objective:](#objective)
  * [Strategy](#strategy)
    + [Project Goals ](#project-goals)
    + [User Goals](#user-goals)
    + [Site Owner Goals](#site-owner-goals)
    + [Target Audience](#target-audience)
    + [User Requirements and Expectations](#user-requirements-and-expectations)
  * [Scope](#scope)
    + [Features](#features)
    + [Future Features](#future-features)
    + [User Stories](#user-stories)
  * [Structure](#structure)
    + [Database](#database)
  * [Skeleton](#skeleton)
    + [Wireframes](#wireframes)
  * [Surface](#surface)
    + [Design Choices](#design-choices)
    + [Colour](#colour)
    + [Fonts](#fonts)
- [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Frameworks](#frameworks)
  * [Database](#database-1)
  * [Tools](#tools)
  * [Supporting Libraries and Packages](#supporting-libraries-and-packages)
- [Methodology](#methodology)
  * [Agile Project Management with GitHub Projects](#agile-project-management-with-github-projects)
  * [User Stories as GitHub Issues](#user-stories-as-github-issues)
  * [Bug Tracking](#bug-tracking)
  * [Iterative Development Approach](#iterative-development-approach)
    + [Sprint 1 (June 13th - June 18th, 2023): ](#sprint-1-june-13th---june-18th-2023)
    + [Sprint 2 (June 19th - June 24th, 2023):](#sprint-2-june-19th---june-24th-2023)
    + [Sprint 3 (June 25th - July 1st, 2023): ](#sprint-3-june-25th---july-1st-2023)
  * [Backlog and Subsequent Iterations ](#backlog-and-subsequent-iterations)
- [Bugs](#bugs)
  * [Known bugs](#known-bugs)
  * [Fixed bugs ](#fixed-bugs)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
  * [Media](#media)
  * [Django Documentation:](#django-documentation)
  * [W3 Schools:](#w3-schools)
  * [Stackoverflow:](#stackoverflow)
  * [Geeksforgeeks: ](#geeksforgeeks)
  * [Various tutorials and YouTube channels:](#various-tutorials-and-youtube-channels)
  * [Other open-source projects and packages:](#other-open-source-projects-and-packages)
- [Acknowledgements](#acknowledgements)

<!-- TOC end -->

## User Experience
The travel memory platform is designed to cater to a diverse range of users who share a common interest in travel and creating and sharing travel memories. 

### Objective:
The objective of Travel Tickr is to create a travel memory platform that caters to the needs and expectations of travel enthusiasts, adventure seekers, storytellers, travel planners, and members of the travel community.

### Strategy
#### Project Goals 
- **Create a Travel Memory Platform:** Develop a user-friendly web application that allows travelers to save and share their travel memories in the form of text and pictures. Provide a seamless experience for users to upload photos, write accompanying stories, and organize their memories into albums. Enable users to create, read, comment, and vote/like on contents.

- **Build a Traveler Community:** Foster a vibrant community of travelers by enabling users to connect with each other, follow fellow travelers, and like and comment on their travel experiences. Implement features that allow users to search, filter, and categorize content, enhancing the discoverability of travel stories and recommendations.

- **Offer Seamless Travel Exploration:** Implement features that enhance the travel exploration process, such as enable travelers to search and filter content based on username, popularity, date created, title, content keywords, and category. Provide search functionality that allows users to easily find relevant content and resources.

- **Provide a Clean and Intuitive User Interface:** Design an aesthetically pleasing and user-friendly interface that reflects the essence of a travel journal. Ensure the application meets accessibility guidelines, follows UX design principles, and provides a set of user interactions that intuitively guide users through the platform. Implement responsive design to ensure the application is accessible and functional across different devices.

- **Implement Advanced Features *(if time permits)*:** Explore the possibility of implementing additional features, such as a world map where users' travel photos are geographically marked, a trip creation functionality that provide users with destination-specific information, safety warnings, packing checklists, and reminders for passport expiration.and a bucket list feature. Automatically create photo albums when a photo has a date that is within the time line of the created trip. A bucket list feature that will allow users to add destinations and travel experiences discovered through content shared by other users to their personal list of aspirations. Provide users with the ability to curate and manage their bucket list, making it a valuable tool for planning and tracking their travel goals.

#### User Goals
- **Capture and Preserve Travel Memories:** Users want to save and preserve their travel memories, including photos, stories, and experiences, in a secure and organized manner.

- **Share Travel Experiences:** Users aim to share their travel experiences with others, allowing them to inspire and connect with fellow travelers.

- **Discover New Destinations:** Users are interested in exploring new destinations and discovering travel recommendations and tips shared by other community members.

- **Connect with Fellow Travelers:** Users want to connect with like-minded travelers, follow their journeys, and engage in meaningful discussions and interactions.

- **Plan Future Adventures:** Users seek inspiration and resources to plan their future travel adventures, including destination-specific information, safety guidelines, and packing checklists.

- **Curate a Personal Bucket List:** Users aspire to create and manage their own bucket list of destinations and travel experiences they wish to explore in the future.

- **Access a User-Friendly Platform:** Users expect a user-friendly and intuitive platform that is easy to navigate, provides a seamless uploading and sharing experience, and offers search and filter functionalities for finding relevant content.

#### Site Owner Goals
- **Create a Vibrant Travel Community:** The site owner aims to establish a vibrant community of travelers who actively engage, connect, and share their travel experiences and recommendations.

- **Facilitate Content Sharing:** The site owner intends to provide a platform where users can easily upload, organize, and share their travel memories, fostering a culture of storytelling and inspiration.

- **Drive User Engagement:** The site owner wants to encourage user engagement by implementing features such as likes, comments, and following functionalities, creating an interactive and supportive community.

- **Enhance User Experience:** The site owner strives to deliver a seamless and enjoyable user experience through an aesthetically pleasing design, intuitive navigation, and responsive interface across devices.

- **Promote Travel Exploration:** The site owner aims to facilitate travel exploration by offering features like search, filter, categorization, and destination-specific information, allowing users to discover new destinations and plan their adventures.

- **Monetization Opportunities:** The site owner may seek monetization opportunities through partnerships, advertising, or premium features, while ensuring they align with the overall user experience and add value to the community.

#### Target Audience
The target audience includes:

- **Travel Enthusiasts:** People who have a passion for traveling and want a platform to document and share their travel experiences.

- **Adventure Seekers:** Individuals who actively seek out new destinations, experiences, and adventures.

- **Storytellers:** Users who enjoy sharing their travel stories and inspiring others with their experiences and recommendations.

- **Travel Planners:** People who are in the process of planning their future trips and seek inspiration, tips, and resources.

- **Travel Community Members:** Individuals who value being part of a vibrant community of fellow travelers and engaging in discussions and interactions.

#### User Requirements and Expectations
To meet the needs and expectations of the target audience, the travel memory platform should fulfill the following requirements:

- **User-Friendly Interface:** Users expect an intuitive and easy-to-navigate interface that allows them to quickly access features and functionalities.

- **Seamless Content Creation:** Users require a smooth and streamlined process for uploading photos, writing accompanying stories, and organizing their memories into albums.

- **Social Interaction:** Users expect the ability to connect with other travelers, follow their journeys, like and comment on their content, and engage in discussions.

-  **Discoverability and Search:** Users want to easily search, filter, and discover relevant travel stories, destinations, and recommendations based on their interests and preferences.

- **Responsive Design:** Users anticipate a responsive design that adapts to different devices (e.g., desktop, tablet, mobile) for seamless access and functionality.

- **Accessibility:** Users with disabilities expect the platform to adhere to accessibility guidelines, enabling them to access and use the platform effectively.

By considering these user requirements and expectations, Travel Tickr can provide a positive and fulfilling user experience, encouraging user engagement, and fostering a vibrant community of travelers.

[Back up](#table-of-content)

### Scope
#### Features

##### User Account Management
- Registration: Users can register for an account on the Travel Tickr platform to explore and share their travel memories.
- Login: Users can log in to their Travel Tickr account using their registered email and password to access personalized features.
- Logout: Users can securely log out of their Travel Tickr account to protect their account and maintain privacy.
- Profile Update: Users can update their profile information to reflect their current preferences and interests.

##### Post Management
- Create Memory Post: Users can upload a photo with accompanying text to create a memory post and share their travel experiences with others.
- View Posts: Users can view and read posts shared by other users to explore and discover travel stories.
- Update Posts: Users can edit or add content to their own posts to make changes or additions to their shared content.
- Delete Posts: Users can remove their own posts that are no longer relevant or desired.

##### Interactions and Engagement
- Search: Users can search for specific posts or users to discover new travel stories and connect with like-minded travelers.
- Sorting: Users can sort posts based on criteria such as date, popularity, or relevance to find the most relevant and interesting content.
- Like Posts: Users can like posts shared by other users to show appreciation for inspiring content.
- Commenting: Users can comment on posts shared by other users to engage in discussions and interact with the travel community.
- View Comments: Users can view and read comments on posts to follow conversations and opinions shared by other users.
- Update Comments: Users can edit or correct their own comments to modify their shared opinions.
- Delete Comments: Users can remove their own comments to retract or remove their previous statements.
- Follow Users: Users can follow other users to stay updated on their travel journeys and experiences.
- Site Owner Administration
- Account, Post, and Comment Management: Site owners can delete user accounts, posts, and comments to maintain a safe and high-quality user environment.

##### Navigation:
###### Profile Navigation:
Upon clicking on the profile image in the navigation bar, additional links are revealed, providing access to specific profile-related pages and actions:

##### Unauthorized users

#### Future Features

##### Travel Memory Management
- Add to Bucket List: Users will be able to add travel memories shared by others to their bucket list on the Travel Tickr platform, allowing them to save and revisit those memories later.
- Multiple Photos per Post: Users will have the ability to upload several photos to a single post on the Travel Tickr platform, enabling them to share a collection of images for a particular memory.
- Create Albums: Users will be able to create albums on the Travel Tickr platform, providing them with the capability to organize and categorize their travel memories.

##### Visual Showcase
- Word Map with Photos: Users will have the option to display a word map on their profile, with photos spread out as pins representing the locations of their travel memories on the Travel Tickr platform. This feature will allow users to visually showcase their travel experiences.

##### Trip Planning and Information
- Trip Creation and Auto-generated Photo Album: Users will be able to create a trip on the Travel Tickr platform before embarking on a journey. An auto-generated photo album will be created, incorporating photos taken during the trip. This feature will make it convenient for users to capture and share their travel moments seamlessly.
- Trip Planning Resources: Users will have access to automated packing lists and information about destinations on the Travel Tickr platform. This information will include weather forecasts, safety warnings, recommended vaccinations, and other relevant details, ensuring that users are well-prepared for their travel plans.

#### User Stories

##### Epic 1: User Account Management
- [As a first-time user, I can register for an account on the Travel Tickr platform, so that I can start exploring and sharing my travel memories.](https://github.com/SandraBergstrom/travel-tickr/issues/10)
- [As a user, I can log in to the Travel Tickr platform using my registered email and password, so that I can access my account and personalized features.](https://github.com/SandraBergstrom/travel-tickr/issues/11)
- [As a user, I can log out of the Travel Tickr platform, so that I can secure my account and maintain privacy.](https://github.com/SandraBergstrom/travel-tickr/issues/12)
- [As a user, I can update my profile information on the Travel Tickr platform, so that my profile reflects my current preferences and interests.](https://github.com/SandraBergstrom/travel-tickr/issues/13)

##### Epic 2: Post (CRUD) Management
- [As a user, I can upload a photo with accompanying text to create a memory post on the Travel Tickr platform, so that I can share my travel experiences with others.](https://github.com/SandraBergstrom/travel-tickr/issues/14)
- [As a user, I can view and read posts on the Travel Tickr platform, so that I can explore and discover travel stories shared by other users.](https://github.com/SandraBergstrom/travel-tickr/issues/15)
- [As a user, I can update my own posts on the Travel Tickr platform, so that I can make edits or additions to my shared content.](https://github.com/SandraBergstrom/travel-tickr/issues/16)
- [As a user, I can delete my own posts on the Travel Tickr platform, so that I can remove content that is no longer relevant or desired.](https://github.com/SandraBergstrom/travel-tickr/issues/17)

##### Epic 3: Interactions and Engagement
- [As a user, I can search for specific posts or users on the Travel Tickr platform, so that I can discover new travel stories and connect with like-minded travelers.](https://github.com/SandraBergstrom/travel-tickr/issues/18)
- [As a user, I can sort posts based on criteria such as date, popularity, or relevance, so that I can find the most relevant and interesting content.](https://github.com/SandraBergstrom/travel-tickr/issues/19)
- [As a user, I can like posts shared by other users on the Travel Tickr platform, so that I can show appreciation for inspiring content.](https://github.com/SandraBergstrom/travel-tickr/issues/20)
- [As a user, I can comment on posts shared by other users on the Travel Tickr platform, so that I can engage in discussions and interact with the travel community.](https://github.com/SandraBergstrom/travel-tickr/issues/21)
- [As a user, I can view and read comments on posts on the Travel Tickr platform, so that I can follow the conversations and opinions shared by other users.](https://github.com/SandraBergstrom/travel-tickr/issues/22)
- [As a user, I can update my own comments on the Travel Tickr platform, so that I can make edits or corrections to my shared opinions.](https://github.com/SandraBergstrom/travel-tickr/issues/23)
- [As a user, I can delete my own comments on the Travel Tickr platform, so that I can remove or retract my previous statements.](https://github.com/SandraBergstrom/travel-tickr/issues/24)
- [As a user, I can follow other users on the Travel Tickr platform, so that I can stay updated on their travel journeys and experiences.](https://github.com/SandraBergstrom/travel-tickr/issues/25)
- [As a user I can see which the most popular travelers are so that I can get inspired by them](https://github.com/SandraBergstrom/travel-tickr/issues/50)
- [As a user I can see other users profile so that I can learn more about them](https://github.com/SandraBergstrom/travel-tickr/issues/51)


##### Epic 4: Site Owner Administration
- [As a site owner, I can delete user accounts, posts, and comments on the Travel Tickr platform, so that I can maintain a safe and high-quality user environment.](https://github.com/SandraBergstrom/travel-tickr/issues/26)

##### Epic 5: Memory Management
- [As a user, I can add travel memories shared by others to my bucket list on the Travel Tickr platform, so that I can save and revisit them later.](https://github.com/SandraBergstrom/travel-tickr/issues/27)
- [As a user, I can upload several photos to one post on the Travel Tickr platform, so that I can share a collection of images for a particular memory.](https://github.com/SandraBergstrom/travel-tickr/issues/28)
- [As a user, I can create albums on the Travel Tickr platform, so that I can organize and categorize my travel memories.](https://github.com/SandraBergstrom/travel-tickr/issues/29)
- [As a user, I can have a world map on my profile with photos spread out as pins, representing the locations of my travel memories on the Travel Tickr platform, so that I can visually showcase my travel experiences.](https://github.com/SandraBergstrom/travel-tickr/issues/30)

##### Epic 6: Trip Planning and Information
- [As a user, I can create a trip on the Travel Tickr platform before going on a journey, and an auto-generated photo album will be created with photos taken during the trip, so that I can easily capture and share my travel moments.](https://github.com/SandraBergstrom/travel-tickr/issues/31)
- [As a user, I can access automated packing lists and information about destinations such as weather forecasts, safety warnings, recommended vaccinations, and other relevant details on the Travel Tickr platform, so that I can be well-prepared for my travel plans.](https://github.com/SandraBergstrom/travel-tickr/issues/32)
- [As a user I can see a posts location so that I can know where the memory was made](https://github.com/SandraBergstrom/travel-tickr/issues/36)

[Back up](#table-of-content)

### Structure
#### Database
The Travel Tickr utilizes the following database schema:
<details><summary>See Database Schema</summary>
<img src="/docs/database-diagram.png">
</details>

##### Traveler App

....

[Back up](#table-of-content)

### Skeleton
#### Wireframes
The wireframes provide a visual representation of the different pages and features of the web application. They serve as a blueprint for the design and layout of each page, helping to visualize the user interface and overall user experience. These wireframes were created using Balsamiq, a tool that enables quick and intuitive sketching of design ideas.

<details><summary>Log in (landing page)</summary>
<img src="#">
</details>
<details><summary>About</summary>
<img src="#">
</details>
<details><summary>Sign Up</summary>
<img src="#">
</details>
<details><summary>Home Page</summary>
<img src="#">
</details>
<details><summary>My Memories</summary>
<img src="#">
</details>
<details><summary>My Bucketlist</summary>
<img src="#">
</details>
<details><summary>Add/Update Memory</summary>
<img src="#">
</details>
<details><summary>Memory Detail</summary>
<img src="#">
</details>
<details><summary>Traveler Profile</summary>
<img src="#">
</details>
<details><summary>Logout</summary>
<img src="#">
</details>
<br>

### Surface

#### Design Choices


#### Colour

![Mockup image](/docs/colors.png)

#### Fonts

[Back up](#table-of-content)

## Technologies Used

### Languages
- HTML
- CSS
- Python
- JSX (JavaScript XML)

### Frameworks
- Django: A high-level Python web framework used for building the Recipe Collective website.
- React: A JavaScript library for building user interfaces. It is commonly used for creating dynamic and interactive components in web applications.
- Cloudinary: A cloud-based media management platform used for storing and serving images in the Recipe Collective project.

### Database
- ElephantSQL: ElephantSQL is a PostgreSQL database as a service. It is used as the database for the Recipe Collective project, providing a reliable and scalable storage solution for the application's data.

### Tools
- Git: A distributed version control system used for tracking changes in the project's source code.
- GitHub: A web-based hosting service for version control repositories, used for storing and managing the project's source code.
- Gitpod: An online integrated development environment (IDE) used for developing and testing the Recipe Collective project.
- Heroku: A cloud platform that enables deployment and hosting of web applications. Heroku was used for deploying the Recipe Collective project to a live server.
- Adobe Photoshop: A professional image editing software used for advanced image manipulation and design in the Recipe Collective project.
- Balsamiq: A wireframing tool used for creating mockups and prototypes of the Recipe Collective website.
- Lucidchart: Lucidchart is a web-based diagramming tool that offers a wide range of diagramming capabilities, including ER diagrams. It provides an intuitive interface and collaboration features, making it suitable for both individual and team use.
- Google Fonts: A collection of free and open-source fonts used for typography on the Recipe Collective website.
- Font Awesome: A library of icons used for adding scalable vector icons to the Recipe Collective website.

### Supporting Libraries and Packages


[Back up](#table-of-content)

## Methodology
The Travel Tickr project has been developed using agile principles, enabling efficient collaboration, iterative development, and effective project management. The following methodology has been employed throughout the project:

### Agile Project Management with GitHub Projects
GitHub Projects has been utilized to facilitate agile project management. User stories and bugs have been organized as GitHub issues, allowing for a clear and structured approach to development. The project board in GitHub Projects serves as a Kanban board, providing an overview of the project's progress.

### User Stories as GitHub Issues
Each user story has been created as a GitHub issue, capturing the desired functionality from the user's perspective. The user stories are linked to their corresponding GitHub issues, allowing easy access to the acceptance criteria, tasks, and comments associated with each user story.

### Bug Tracking
Bugs encountered during the development process have also been logged as GitHub issues. These issues contain details about the specific bug, its impact, and steps to reproduce it. By linking the bugs in the README.md to their respective GitHub issues, users can gain insights into the bugs' resolution progress and view any additional comments.

### Iterative Development Approach
The Travel Tickr project follows an iterative development approach, allowing for continuous improvement and progress while adhering to time constraints. The development process is structured into sprints, with each sprint typically lasting around 6 days.

To ensure efficient prioritization, the project employs the MuSCoW (Must have, Should have, Could have, Won't have) method. User stories critical to the app's success are categorized as Must-haves, followed by Should-haves, Could-haves, and Won't-haves. You can refer to the [Kanban board](https://github.com/users/SandraBergstrom/projects/7/views/1) to view the prioritization.

Within each sprint, a MoSCoW method is used to further prioritize user stories. They are classified as Must Do, Should Do, Could Do, and Won't Do, representing the remaining user stories that will not be included in the sprints. This approach ensures a clear differentiation between the overall project prioritization and the prioritization within each sprint, minimizing any potential confusion.

#### Sprint 1 (June 13th - June 18th, 2023): 
**Planning & Documentation**
* [x] Plan Sprint (Must do)
* [x] Create and write readme.md (Must do)
* [x] Design Database Schema (Should do)
* [x] Create the wireframes (Should do)
* [x] Plan Sprint 2 (Must do)

**Backend**
* [x] Create a repository for the api in Github (Must do)
* [x] Start a django project in Gitpod (Must do)
* [x] Install necessary libraries and dependencies (Must do)
* [x] Create an ElephantSQL database and connect it to the API (Must do)
* [x] Connect image uploads to Cloudinary (Must do)
* [x] Add filtering (Should do)
* [x] Deploy the Djano REST API (Should do)

**Create Apps and models for:** 
* [x] Traveler (extension of the user) (Must do)
* [x] Posts (Must do)
* [x] Comements (Must do)
* [x] Likes (Must do)
* [x] Follower (Should do)
* [x] Bucketlist (Must do)
* [ ] Location (Should have) *- Moved to next sprint*

**Frontend**
* [x] Create a repository for the Travel Tickr (Should do)
* [x] Start a React project in Gitpod (Could do)
* [ ] Test deploy project on Heroku (Could do) *- Moved to next sprint*
* [ ] Install component library (Could do) *- Moved to next sprint*
* [ ] Design and implement navigation bar (Could do) *- Moved to next sprint*
* [ ] Do so navigation bar and authorization works (Could do) *- Moved to next sprint*
* [ ] Design and implement footer (Could do) *- Moved to next sprint*

#### Sprint 2 (June 19th - June 24th, 2023):
* [ ] Location (Must do)  *- Moved to next sprint and user story created*
* [x] Test deploy project on Heroku (Must do) 
* [x] Install component library (Must do) 
* [x] Design and implement navigation bar (Must do)
* [x] Do so navigation bar and authorization works (Must do)
* [ ] Design and implement footer (Must do)   *- Moved to next sprint*
* [x] [USER STORY: Registration](https://github.com/SandraBergstrom/travel-tickr/issues/10)  (Must do) 
* [x] [USER STORY: Login](https://github.com/SandraBergstrom/travel-tickr/issues/11) (Must do)
* [x] [USER STORY: Logout](https://github.com/SandraBergstrom/travel-tickr/issues/12) (Must do)
* [ ] [USER STORY: Update profile](https://github.com/SandraBergstrom/travel-tickr/issues/13) (Should do)  *- Moved to next sprint*
* [x] [USER STORY: Create a post/Memory](https://github.com/SandraBergstrom/travel-tickr/issues/14) (Must do)
* [x] [USER STORY: View a post](https://github.com/SandraBergstrom/travel-tickr/issues/15) (Must do) *- Moved to next sprint*
* [ ] [USER STORY: Update a post](https://github.com/SandraBergstrom/travel-tickr/issues/16) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Delete a post](https://github.com/SandraBergstrom/travel-tickr/issues/17) (Should do) *- Moved to next sprint*

* [ ] [USER STORY: Search Posts](https://github.com/SandraBergstrom/travel-tickr/issues/18) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Sort Posts](https://github.com/SandraBergstrom/travel-tickr/issues/19) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Like Posts](https://github.com/SandraBergstrom/travel-tickr/issues/20) (Should do) *- Moved to next sprint*

* [ ] [USER STORY: Create a Comment](https://github.com/SandraBergstrom/travel-tickr/issues/21) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: View Comments](https://github.com/SandraBergstrom/travel-tickr/issues/22) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Update Comment](https://github.com/SandraBergstrom/travel-tickr/issues/23) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Delete Comment](https://github.com/SandraBergstrom/travel-tickr/issues/24) (Could do) *- Moved to next sprint*
* [x] Plan Sprint 2 (Must do)

#### Sprint 3 (June 25th - July 1st, 2023): 
* [ ] Design and implement footer (Could do) *- Moved to next sprint*
* [x] [USER STORY: Profile page](https://github.com/SandraBergstrom/travel-tickr/issues/51) (Must do)
* [x] [USER STORY: Update profile](https://github.com/SandraBergstrom/travel-tickr/issues/13) (Must do)
* [x] [USER STORY: Popular Profiles](https://github.com/SandraBergstrom/travel-tickr/issues/50) (Must do)
* [x] [USER STORY: View a post](https://github.com/SandraBergstrom/travel-tickr/issues/15) (Must do)
* [x] [USER STORY: Update a post](https://github.com/SandraBergstrom/travel-tickr/issues/16) (Must do)
* [x] [USER STORY: Delete a post](https://github.com/SandraBergstrom/travel-tickr/issues/17) (Must do)

* [x] [USER STORY: Search Posts](https://github.com/SandraBergstrom/travel-tickr/issues/18) (Must do)
* [x] [USER STORY: Sort Posts](https://github.com/SandraBergstrom/travel-tickr/issues/19) (Must do)
* [x] [USER STORY: Like Posts](https://github.com/SandraBergstrom/travel-tickr/issues/20) (Must do)
* [ ] [USER STORY: Location](https://github.com/SandraBergstrom/travel-tickr/issues/36) (Should do) *- Moved to next sprint*

* [x] [USER STORY: Create a Comment](https://github.com/SandraBergstrom/travel-tickr/issues/21) (Must do)
* [x] [USER STORY: View Comments](https://github.com/SandraBergstrom/travel-tickr/issues/22) (Must do)
* [x] [USER STORY: Update Comment](https://github.com/SandraBergstrom/travel-tickr/issues/23) (Must do)
* [x] [USER STORY: Delete Comment](https://github.com/SandraBergstrom/travel-tickr/issues/24) (Must do)

* [x] [USER STORY: Follow Users](https://github.com/SandraBergstrom/travel-tickr/issues/25) (Must do) 
* [x] [USER STORY: Maintain user enviornment](https://github.com/SandraBergstrom/travel-tickr/issues/26) (Must do)
* [x] [USER STORY: Add Post to bucket list](https://github.com/SandraBergstrom/travel-tickr/issues/27) (Must do)

* [ ] [USER STORY: Upload multiple photos](https://github.com/SandraBergstrom/travel-tickr/issues/28) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Photo Album](https://github.com/SandraBergstrom/travel-tickr/issues/29) (Should do) *- Moved to next sprint*
* [ ] [USER STORY: Travel Map](https://github.com/SandraBergstrom/travel-tickr/issues/30) (Could do) *- Moved to next sprint*
* [ ] [USER STORY: Create a trip](https://github.com/SandraBergstrom/travel-tickr/issues/31) (Wont do) *- Moved to next sprint*
* [ ] [USER STORY: Packing list and info](https://github.com/SandraBergstrom/travel-tickr/issues/32) (Wont do) *- Moved to next sprint*
* [ ] [USER STORY: Location](https://github.com/SandraBergstrom/travel-tickr/issues/36) (Must do) *- Moved to next sprint*

**Sprint 3 recap:** Although I have decided to move the "Location" user story to the next sprint, we have successfully accomplished a significant portion of the planned tasks for Sprint 3. 

#### Sprint 4 (July 2nd - July 7th, 2023): 
* [ ] Design and implement footer (Must do) 
* [x] [USER STORY: Like comments](https://github.com/SandraBergstrom/travel-tickr/issues/54) (Must do)
* [ ] Testing  (Must do)
* [ ] Documentatino (Must do)
* [ ] [USER STORY: Upload multiple photos](https://github.com/SandraBergstrom/travel-tickr/issues/28) (Should do) *- Moved to backlog*
* [ ] [USER STORY: Photo Album](https://github.com/SandraBergstrom/travel-tickr/issues/29) (Could do) *- Moved to backlog*
* [ ] [USER STORY: Travel Map](https://github.com/SandraBergstrom/travel-tickr/issues/30) (Could do) *- Moved to backlog*
* [ ] [USER STORY: Create a trip](https://github.com/SandraBergstrom/travel-tickr/issues/31) (Wont do) *- Moved to backlog*
* [ ] [USER STORY: Packing list and info](https://github.com/SandraBergstrom/travel-tickr/issues/32) (Wont do) *- Moved to backlog*
* [x] [USER STORY: Location](https://github.com/SandraBergstrom/travel-tickr/issues/36) (Must do) 

#### Backlog
* [ ] [USER STORY: Upload multiple photos](https://github.com/SandraBergstrom/travel-tickr/issues/28) 
* [ ] [USER STORY: Photo Album](https://github.com/SandraBergstrom/travel-tickr/issues/29)
* [ ] [USER STORY: Travel Map](https://github.com/SandraBergstrom/travel-tickr/issues/30)
* [ ] [USER STORY: Create a trip](https://github.com/SandraBergstrom/travel-tickr/issues/31)
* [ ] [USER STORY: Packing list and info](https://github.com/SandraBergstrom/travel-tickr/issues/32)


### Backlog and Subsequent Iterations 
The user stories are tracked on the project board, and the "To do" column represents the backlog of user stories (also see above), indicating the tasks that will be addressed in subsequent iterations.

Please note that even though the project timeline has been accelerated, the iterative development approach allows for ongoing improvements and enhancements to meet the evolving needs of users.

For a comprehensive view of the project progress, user stories, and bug tracking, please see the [Kanban board](https://github.com/users/SandraBergstrom/projects/7).

[Back up](#table-of-content)

## Bugs

### Known bugs

| **Bug** | **Status** |
| ----------- | ----------- |
| []()|  |
|||

### Fixed bugs 

| **Bug** | **Fix** |
| ----------- | ----------- |
|[Npm start error message](https://github.com/SandraBergstrom/travel-tickr/issues/38)| Run "nvm install 16" |


[Back up](#table-of-content)

## Testing
The Travel Tickr ....

To view the complete testing details and results, please [click here](TESTING.md).

[Back up](#table-of-content)

## Deployment
The website was deployed using Heroku by following these steps:
1. Set DEBUG to False in the settings.py file.
2. Commit and push your code to the GitHub repository.
3. Clear the 'static' folder in Cloudinary to ensure the latest static files are used during deployment. This step is important to avoid any potential conflicts between cached versions of static files and the updated versions being deployed. Clearing the 'static' folder ensures that the latest versions of static files are used during the deployment process, preventing any eTag errors or inconsistencies.
4. Navigate to the project's deploy page in Heroku.
5. Choose the manual deployment option to deploy the latest code changes.

You can for fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner
3. Wait for the forking process to complete. Once done, you will have a copy of the repository in your GitHub account.

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select your preferred method for cloning: HTTPS, SSH, or GitHub CLI, and click the copy button to copy the repository URL to your clipboard.
4. Open Git Bash (or your preferred terminal).
5. Change the current working directory to the location where you want the cloned directory to be created.
6. Type the command **'git clone'** followed by the URL you copied in step 3. The command should look like this: **git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY**.
7. Press Enter to create your local clone.

[Back up](#table-of-content)

## Credits
I would like to express my sincere gratitude to the following resources, which have been instrumental in the development of the Travel Tickr:

### Media
...
### Django Documentation:
...

### W3 Schools:
...

### Stackoverflow:
...

### Geeksforgeeks: 
...

### Various tutorials and YouTube channels:
....

### Other open-source projects and packages:
....

[Back up](#table-of-content)

## Acknowledgements
I would like to acknowledge ...

I am truly grateful for their contributions, which have greatly enriched my learning and development.

[Back up](#table-of-content)