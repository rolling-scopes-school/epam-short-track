# Task 1. React components. React State.

## Task requirements

The main goal of first task is to create app skeleton - set of some simple components for the app. In this task you need to create 2 pages with necessary functionality and markup.

You can use any UI frameworks/libraries to simplify (facilitate) the creation of your markup. It's recommended to use Material UI or Antd as they are the most popular for React.

![image](./assets/Courses%20Page.jpg)
NB: Visual design and color scheme of the app is by your taste and up to you - just all the necessary components should be created and usually better if they would be on their recommended places, though you can also follow one to one the offered design.

---

### Components structure

#### Header Component

- Header
  - Logo
  - UserName (mocked for now)
  - LoginButton (without functionality)

---

#### Courses component

- SearchBar
  - SearchInput
  - SearchButton
- AddNewCourseButton (without functionality)
- CoursesList
  - CourseCard
    - Title
    - Duration (format: hh:mm + 'hours')
    - CreationDate (format: dd.mm.yyyy)
    - Description
    - ShowCourseButton
    - DeleteCourseButton
    - EditCourseButton  (without functionality)
    - AuthorsList

---

#### CourseInfo component

- CourseInfoTitle
- CourseInfoCard
  - Description
  - Duration
  - Id
  - AuthorsList
  - CreationDate
- BackButton


#### EmptyCoursesList component
- Title
- Subtitle
- AddNewCourseButton

---

### Functional requirements

- When user opens the app the header and the list of all available courses is shown
- The header should contain: Logo component, mocked UserName component, LoginButton component
- You can find logo image in **assets** folder of the tasks
- Courses component should include: SearchBar component, AddNewCourse component, CoursesList component, CourseCard component
- For this task you should copy **mockCoursesList.js** file, paste it into the top level of your app and import *mockCurrentCoursesList* and *mockedAuthorsList* to use for rendering CourseCards components
- Using search bar user can filter courses **after** clicking on **Search** button
- The filtration should be by title and description of the course
- When user clicks **SHOW COURSE** button CourseInfo component with current course info should replace Courses component.
- When user click on BackButton component from CourseInfo returns to the Courses component with clean SearchInput component.
- When user click on Delete button course disappears from the list, and it will not appear when reload the page
- If user delete all courses EmptyCoursesList component should appear
- For now if user click on **AddNewCourseButton** from **EmptyCoursesList** component the list of predefined courses should be restored, for this *mockedCoursesList* should be used
- Each mock course has a list of authors ids, to get authors names you should filter authors list by ids from course.
- The authors names should be displayed on the one line
- If all authors names do not fit on one line, then the extra text should be cut off and '...' should be added at the end of line
- Cover with tests Courses and CoursesInfo components (tests will be checked during mentor check)

## Technical Requirements

- Create a separate branch for this task. Branch name: "react-task-1".
- Follow the requirements for the project setup listed [here](../project-setup.md)
- All logical parts should be set into separate components such as Header, Logo, Button, Input, SearchBar and etc.
- You can use CSS frameworks (e.g. Tailwind CSS) or React Ui library (e.g. Antd, Materia UI)

Cross-check criteria 100 points:
- [5] Header component includes Logo, UserName (mocked for now), LoginButton (without functionality)
- [30] Courses component includes
  - [10] SearchBar
    - SearchInput
    - SearchButton
  - [5] AddNewCourseButton (without functionality)
  - [5] CoursesList includes CourseCards
  - [10] CourseCard
    - CourseTitle
    - CourseDuration (format: hh:mm + 'hours')
    - CreationDate (format: dd.mm.yyyy)
    - Description
    - ShowCourseButton
    - DeleteCourseButton
    - EditCourseButton  (without functionality)
    - AuthorsList
- [20] CourseInfo component includes
  - CourseTitle
  - CourseCard
    - Title
    - Description
    - Duration
    - Id
    - AuthorsList
    - CreationDate
  - BackButton
- [5] EmptyCoursesList component includes
  - Title
  - Subtitle
  - AddNewCourseButton
- [40] Functional requirements 
  - [5] List of all available courses is shown
  - [5] Courses could be filtered by title and description **after** clicking on **Search** button
  - [5] When user clicks **SHOW COURSE** button CourseInfo component with current course info replace Courses component.
  - [5] When user click on BackButton component from CourseInfo returns to the Courses component with clean SearchInput component.
  - [5] When user click on Delete button course disappears from the list, and it does not appear when reload the page
  - [5] If user delete all courses EmptyCoursesList component appears
  - [5] If user click on **AddNewCourseButton** from **EmptyCoursesList** component the list of predefined courses restored
  - [5] The authors names displayed on the one line, if all authors names do not fit on one line, then the extra text cuts off and '...'
