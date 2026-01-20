# Task 2. Asynchronous React.

## Task requirements

This task is the second part of the project, and your main goal is to learn and practice working with asynchronous logic in React.

You will need to create Login, Course Form, Course Info and Courses components.
You will need to add mock API for handling authorization and courses information.


### Design mockup - https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/Music_App?node-id=208-202&p=f&t=7oWuigQ5P7NW7FOa-0


#### Login Page requirements

![login page](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/Music_App?node-id=210-928&t=7oWuigQ5P7NW7FOa-0)

- User should see Login page if he's not authorized.
- Login should have an auth functionality. When you entered an username and password application sends request to API using login service. You can use [Dummy JSON Auth API](https://dummyjson.com/docs/auth#auth-login). After successful login application renders Courses page using conditional rendering.
- Save token from API after login to localStorage. Add functionality that check if token in localStorage. If token is in the localStorage app automatically renders Courses page.
- Validation required for all fields (username and password)

#### Courses Page requirements

![courses page](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/Music_App?node-id=209-545&t=7oWuigQ5P7NW7FOa-0)

- Show Courses component by default if there is token in the localStorage.
- Open Add New Course modal by clicking Add New Course button. !!!

#### Course Info Page requirements

![course info page](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/Music_App?node-id=209-609&t=7oWuigQ5P7NW7FOa-0)

- To find out which course info you should render, you should use id of the course from path-parameters.
- When click on Show course button you conditionally should show course info page
- Back to course button should replace current view by list of courses.

#### Course Form Modal requirements

![course form modal](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/Music_App?node-id=209-758&t=7oWuigQ5P7NW7FOa-0)

- Modal should contain following fields:
  - Title (input) - field for input course name. Text length should be at least 2 characters.
  - Description (textarea) - text length should be at least 2 characters.
  - Authors - contains a list of all authors and their corresponding Add author buttons
  - Course authors - contains a list of authors course and their corresponding Delete author buttons
  - Delete author - when user clicks on this button the corresponding author disappears from the Course authors list and shows in Authors
  - Add author - when user clicks on this button the corresponding author disappears from the Authors list and shows in Course authors. New author should be added to the initial author's list
  - Author field (input) - author name length should be at least 2 characters;
  - Create author (button) - when user clicks on this button: the new author appears in Authors and input cleaned
  - Duration - this part provides logic for adding course duration time.
    - the duration of the course is entered in minutes;
    - for the correct display of the course duration, you need to format minutes into hours and minutes;
    - duration should be more than 0 minutes;
    - user should have an ability to enter ONLY numbers into the field.
  - Create course (button) - when user clicks on this button:
    - The modal should be closed;
    - New course is added to the courses list.
- After save course should appear in the Courses Page. 

### API requirements

- For login you can use [Dummy JSON Auth API](https://dummyjson.com/docs/auth#auth-login)
- You can use [Mock API](https://mockapi.io/) to create your Courses API:
  - Add two resources, courses and authors:

    ![course api schema](./assets/course-api-schema.png)
    ![author api schema](./assets/author-api-schema.png)
  - Add data from mockedCoursesList and mockedAuthorsList as initial data 
  - Use resulted API for all required requests: list all courses, create new course, list all authors, create new authors.

    ![api example](./assets/api-example.png)

### Other requirements

- The header should contain: Logo component, User Name and Login/Logout button.
- When user clicks on Logout button, app should render login page and token should be removed from localStorage
- Create a separate branch for this task. Branch name: "react-task-2".
- All logical parts should be set into separate components and files.
- You can use CSS frameworks (e.g. Tailwind CSS) or React Ui library (e.g. Antd, Materia UI)

**Cross-Check Criteria: 85 Points**:

1. Login Page (20 Points)
  - [5 points] View: Renders Login page for non-authorized users.  
  - [10 points] Authorization: Sends API request on login, saves token to `localStorage`, renders Courses page, auto-redirect if token exists.
  - [5 points] Validation: Validates username and password (required, proper format).  

2. Courses Page (15 Points)
  - [5 points] View: Displays courses if token exists.
  - [5 points] Add New Course Navigation: Opens Create Course modal when click on Add New Course button.  
  - [5 points] Course List: Fetches course from backend (mock API) and displays title, description, authors, duration, and creation date.

3. Course Info Page (10 Points)
  - [5 points] View: Requests course data from backend (mock API) and renders Course Info page when click in Show Course button.  
  - [5 points] Navigation: Renders Courses Page when click on back button.  

4. Course Form (30 Points)
  - [5 points] Navigation: Opens Create Course modal when click on `Add New Course` button.  
  - [15 points] Form Functionality:  
    - Title/Description: At least 2 characters.  
    - Duration field: Numeric, formatted as `hh:mm`, >0.  
    - Authors management (Add/Delete): Move authors between lists and create new authors (at least 2 characters).  
  - [10 points] Create Course: When click on Create Course button saves course to database (mock API) and close modal.  

5. Header Component (10 Points)  
  - Includes `Logo`, `User Name`, and `Login/Logout` button. Logout removes token and navigates to `/login`.

> Comment:
>  
> if student don't send API requests, you can deduct 50% or more from the score. Example:
> 
> - `[5 points] View: Requests course data from backend (mock API) and renders Course Info page when click in Show Course button.` - student get course data from mocked list, no API request, then final point for this requirement will be 2.5 or less
