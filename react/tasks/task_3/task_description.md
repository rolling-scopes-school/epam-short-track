# Task 3. Movies Application

## Task Requirements

We will write a small React application that allows users to see, sort, filter, search, edit and create movies. The app will also have an authorization functionality.

You can use any UI frameworks/libraries to simplify (facilitate) the creation of your markup. It's recommended to use Material UI or Antd as they are the most popular for React.

### Design Mockup
[Figma Design](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=0-1&p=f&t=XSCRJYXQbu19shES-0)

**NB**: Visual design and color scheme of the app is by your taste and up to you - just all the necessary components should be created and usually better if they would be on their recommended places, though you can also follow one to one the offered design.

---

## Component Structure

```
|--src
  |
  |--common
  |  |--Button
  |  |--Modal
  |  |--Input
  |  |--PrivateRoute
  |
  |--components
  |  |--forms
  |  |  |--MovieForm
  |  |  |--UserForm
  |  |
  |  |--Hero
  |  |  |--components
  |  |     |--Header
  |  |
  |  |--MoviesList
  |  |  |--components
  |  |  |  |--MovieDetails
  |  |  |  |--MovieTile
  |  |  |--Panel
  |
  |--store
  |  |--index.ts
  |  |--moviesSlice.ts
  |  |--userSlice.ts
  |  |--selectors.ts
  |  |--thunks.ts
  |  |--hooks
  |
  |--types
  |
  |--services
```

## Component Descriptions

Detailed descriptions for each component can be found in the [components_description](./components_description/) folder:

- [Store Configuration](./components_description/store.md) - Redux store setup, slices, selectors, thunks, and hooks
- [Routing](./components_description/routing.md) - Route definitions and routing requirements
- [User Types](./components_description/user-types.md) - User roles and admin credentials
- [Styling](./components_description/styling.md) - Styling guidelines
- [App Component](./components_description/app.md) - Main application component
- [Common Components](./components_description/common-components.md) - Button, Input, Modal, PrivateRoute
- [MoviesList](./components_description/movies-list.md) - MoviesList, Panel, MovieTile, ContextMenu
- [MovieDetails](./components_description/movie-details.md) - Movie details view
- [MovieForm](./components_description/movie-form.md) - Add/Edit movie forms
- [UserForm](./components_description/user-form.md) - Login/Registration forms
- [Header](./components_description/header.md) - Header component and Search functionality
- [Delete Notification](./components_description/delete-notification.md) - Delete movie confirmation modal

---

## API Server

- Copy a folder with [server](./server)
- Install dependencies

```bash
npm install
```

- Run the server

```bash
npm run start
```

- Find a SWAGGER by url **http://localhost:4000/api-docs**

---

## Functional Requirements

### Application Initialization
- When user opens the app, the App component should:
  - Get user info if token is present in localStorage (use `getUserThunk`)
  - Get movies list from API (use `fetchMoviesThunk`)
  - Put data to the Redux store

### User Types and Access
- **Non-authorized user**: Show only Login and Registration pages
- **Authorized users**: Show movies with Search, filters, sort option, Login and Registration pages
- **ADMIN user**: All pages are available. This user is able to delete, add and edit movies

### Movies List Functionality
- Display list of all available movies
- Show loading state while fetching movies
- Show error message if fetch fails
- Display movies count information (e.g., "39 movies found" or "1 movie found")
- Support search functionality (filter by title/description)
- Support filtering by genre
- Support sorting by Release Date or Title
- Filter and sort should work together (sort filtered results)

### Movie Details
- Click on MovieTile to view MovieDetails
- MovieDetails should be rendered above the movie list
- Display poster, title, genre, release year, rating, duration, and description

### Admin Functionality
- Admin users can add new movies via `/movies/add` route
- Admin users can edit existing movies via `/movies/edit/:movieId` route
- Admin users can delete movies (with confirmation)
- Context menu button visible only for admin users on MovieTile

### Authentication
- Login functionality via `/login` route
- Registration functionality via `/registration` route
- Token stored in localStorage
- User data stored in Redux store
- Logout functionality for authorized users

### Search and Navigation
- Search movies by title/description
- Search works on button click or Enter key
- Empty search shows all movies
- Logo click navigates to `/movies`
- Navigation between routes using React Router

---

## Technical Requirements

- Create a separate branch for this task. Branch name: "react-task-3"
- Follow the requirements for the project setup listed [here](../project-setup.md)
- All logical parts should be set into separate components such as Header, Button, Input, SearchBar and etc.
- You can use CSS frameworks (e.g. Tailwind CSS) or React UI library (e.g. Antd, Material UI)
- React Router should be used for navigation
- Redux Toolkit should be used for state management
- React Testing Library should be used for tests
- TypeScript should be used for components typing

---

## Cross-check Criteria (100 points)

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
