# Task 3. Movies Application (is not fully completed!)

## Task Requirements

We will write a small React application that allows users to see, search, edit and create movies. The app will also have an authorization functionality.

You can use any UI frameworks/libraries to simplify (facilitate) the creation of your markup. It's recommended to use Material UI or Antd as they are the most popular for React.

### Design Mockup
[Figma Design](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=0-1&p=f&t=XSCRJYXQbu19shES-0)

---

## Application Structure

### Project Folder Structure

```
src/
├── components/              
│   ├── common/             
│   │   ├── Button
│   │   ├── Input
│   │   ├── Modal/
│   │   └── PrivateRoute
│   ├── Header/
│   │   └── components/
│   ├── MoviesList/
│   │   └── components/
│   ├── MovieForm/
│   │   └── components
│   └── UserForm/       
│       └── components
├── pages/
│   ├── HomePage/  
│   ├── ManageMoviePage/
│   ├── MoviePage/
│   └── LoginPage/ 
├── store/                  
│   ├── index.ts            
│   ├── hooks.ts            
│   ├── slices
│   ├── selectors
│   └── thunks
├── services/
├── types/
├── utils/ 
├── hooks/
├── App.tsx                 
├── main.tsx                
├── index.css           
```

**NB** Not the mandatory structure, just as an example

### Key Organization Principles

- **Modules structure**: Components are organized by feature (MoviesList, MovieForm, etc.)
- **Separation of concerns**: Store, services, and components are separated
- **Reusability**: Common components are in a shared `common/` folder
- **Scalability**: Each component has its own folder with styles and sub-components
- **Type safety**: TypeScript types are centralized in the `types/` folder
- **Testability**: Clear separation makes unit testing easier

## Modules Descriptions

Detailed descriptions for each module can be found in the [modules_description](./modules_description/) folder:

### Main modules

- [App Initialization](./modules_description/initialization.md) - Application initialization
- [Header](./modules_description/header.md) - Header component and Search functionality
- [MoviesList](./modules_description/movies-list.md) - MoviesList, Panel, MovieTile, ContextMenu
- [MovieDetails](./modules_description/movie-details.md) - Movie details view
- [MovieForm](./modules_description/movie-form.md) - Add/Edit movie forms
- [LoginForm](./modules_description/login-form.md) - Login form

### Additional modules

- [Store Configuration](./modules_description/store.md) - Redux store setup, slices, selectors, thunks, and hooks
- [Styling](./modules_description/styling.md) - Styling guidelines

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

- Find Swagger documentation at **http://localhost:4000/api-docs**

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

## Evaluation Criteria

> **Important:** All data must be fetched from the API server (not from mocked/hardcoded lists). If a student does not send API requests for a requirement, deduct 50% or more from that requirement's score.

---

### 1. Login Page — 18 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 2 | **Login page renders** | Login page is rendered at `/login` route with EMAIL and PASSWORD input fields. |
| 2 | **Login form elements** | Form contains EMAIL input (placeholder: "enter email"), PASSWORD input (placeholder: "enter password"), LOGIN button, and RESET button. |
| 2 | **Redirect for non-authorized** | Non-authorized users (no token in `localStorage`) are redirected to `/login` from any other route. |
| 3 | **API login request** | On LOGIN button click, sends POST request to `/me/login` with email and password. |
| 2 | **Token saved on success** | On successful login response, saves token to `localStorage` (key: `"token"`). |
| 2 | **User data saved to store** | On successful login, saves user data (id, name, email, role) to Redux store. |
| 1 | **Navigate after login** | On successful login, navigates to main page (`/`). |
| 1 | **Auto-redirect with token** | If token already exists in `localStorage`, auto-redirects to main page on app load. |
| 1 | **Login error message** | Displays error message on failed login (e.g., "Invalid email or password"). |
| 1 | **Validation on empty fields** | Validation messages appear below empty fields when user attempts to submit with missing values. |
| 1 | **RESET button** | RESET button clears all form fields (email and password). |

---

### 2. Header Component — 10 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 1 | **Logo display** | Displays `"netflixroulette"` text as a logo/brand element. |
| 1 | **Logo click** | Clicking the logo navigates to the main page (`/`). |
| 1 | **User button display** | For authorized users: displays a button with the user's first name initial (uppercase). Hidden for non-authorized users. |
| 2 | **User dropdown menu** | Clicking the user button opens a dropdown showing the user's full name and a LOGOUT button. |
| 2 | **Logout action** | LOGOUT button removes token from `localStorage`, clears user data from Redux store, and navigates to `/login`. |
| 1 | **+ ADD MOVIE button visibility** | + ADD MOVIE button is visible only for ADMIN users and only on route `/`. Hidden on other routes and for non-admin users. |
| 2 | **+ ADD MOVIE button action** | Clicking + ADD MOVIE button navigates to `/create-movie`. |

---

### 3. Search — 10 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 2 | **Search block renders** | Search block is rendered on route `/` (inside or below the Header). Contains "FIND YOUR MOVIE" heading. |
| 1 | **Search input** | Search input field with placeholder: "What do you want to watch?" |
| 2 | **Search button click** | On SEARCH button click: filters movies by title/description (case-insensitive). |
| 1 | **Search on Enter** | Pressing Enter key in the search input triggers the same search functionality. |
| 2 | **Search URL update** | Search updates URL with `?search=query_text` parameter. |
| 1 | **Empty search** | If search field is empty and user triggers search, all movies are shown and search param is removed from URL. |
| 1 | **Search + filter combo** | Search works together with genre filter (both can be active at the same time). |

---

### 4. Movies List Page — 18 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 3 | **Fetch movies from API** | Fetches movies from API (`/movies`) using `fetchMoviesThunk` and stores them in Redux store. |
| 2 | **Loading state** | Shows loading state while movies are being fetched. |
| 2 | **Error state** | Shows error message if movie fetch fails. |
| 2 | **Movies count display** | Displays `"{count} movies found"` (plural) or `"{count} movie found"` (singular). |
| 2 | **MovieTile — content** | Each MovieTile displays: poster image, movie title, genre(s), and release year. |
| 2 | **MovieTile — click navigation** | Clicking a MovieTile navigates to `/:movieId` route. |
| 2 | **Genre filter buttons** | Displays genre buttons for genres present in the current movie list, plus an ALL button. |
| 2 | **Genre filter action** | Clicking a genre button filters movies by that genre and updates URL with `?filter=genre`. |
| 2 | **Genre filter reset** | Clicking ALL button resets the genre filter and shows all movies. |
| 2 | **Filter + search combo** | Genre filter and search work together (both can be active simultaneously). |

---

### 5. Movie Details Page — 14 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 2 | **Route and rendering** | MovieDetails component is rendered on route `/:movieId`. |
| 3 | **Movie info display** | Displays movie data: poster, title, genre, release year, rating, duration, and description. |
| 2 | **GO BACK button** | GO BACK button is present and returns user to the main page (`/`). |
| 2 | **EDIT button (admin only)** | EDIT button is visible only for ADMIN users. Clicking it navigates to `/:movieId/edit-movie`. |
| 2 | **DELETE button (admin only)** | DELETE button is visible only for ADMIN users. Clicking it shows a confirmation modal. |
| 3 | **Delete confirmation** | On delete confirmation: sends DELETE request to API and redirects to main page. |

---

### 6. Movie Form — Add Movie — 15 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 2 | **Route and access** | Add Movie form is rendered at `/create-movie` route. Accessible only for ADMIN users. |
| 1 | **Form title** | Form title displays: "ADD MOVIE". |
| 2 | **Form fields** | Contains all required fields: Title (text), Release Date (date), Poster URL (url), Rating (number, 0-10), Genre (multi-select), Runtime (number, minutes), Overview (textarea). |
| 2 | **RESET button** | RESET button clears all form fields to their initial empty state. |
| 2 | **Validation** | All fields are required. If any field is empty on submit, displays validation message (e.g., "ALL FIELDS ARE REQUIRED"). |
| 3 | **Submit API request** | SUBMIT button sends POST request to `/movies` with movie data. |
| 2 | **Movies list update** | After successful submission, re-fetches movies list (or updates store) so the new movie appears in the list. |
| 2 | **Success notification** | After successful submission, displays success notification with title "CONGRATULATIONS!" and message "The movie has been added to database successfully". |

---

### 7. Movie Form — Edit Movie — 15 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 2 | **Route and access** | Edit Movie form is rendered at `/:movieId/edit-movie` route. Accessible only for ADMIN users. |
| 1 | **Form title** | Form title displays: "EDIT MOVIE". |
| 3 | **Pre-populated fields** | All form fields are pre-filled with existing movie data (fetched by movie ID from URL using `useParams`). |
| 2 | **RESET button** | RESET button restores all fields to original movie values (not empty). |
| 2 | **Validation** | All fields are required. If any field is empty on submit, displays validation message (e.g., "ALL FIELDS ARE REQUIRED"). |
| 3 | **Submit API request** | SUBMIT button sends PUT request to `/movies/:movieId` with updated movie data. |
| 2 | **Success notification** | After successful submission, displays success notification with title "CONGRATULATIONS!" and message "The movie has been updated in database successfully". |

---

### 8. Context Menu on MovieTile (Admin) — 8 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 2 | **Three-dots button visibility** | Three-dots menu button is visible on each MovieTile only for ADMIN users. Hidden for non-admin users. |
| 2 | **Dropdown menu** | Clicking the three-dots button opens a dropdown with EDIT and DELETE options. |
| 2 | **Edit action** | Clicking EDIT in the dropdown navigates to `/:movieId/edit-movie`. |
| 2 | **Delete action** | Clicking DELETE in the dropdown opens a confirmation modal. On confirm: sends DELETE request to API, removes the movie, and re-fetches the list. |

---

### 9. Role-Based Access — 6 Points

| Pts | Requirement | Details |
|-----|-------------|---------|
| 2 | **Non-authorized user** | Can only see the Login page. All other routes redirect to `/login`. |
| 2 | **Authorized user** | Can view movies list, search, filter, and view movie details. EDIT/DELETE/ADD MOVIE buttons are hidden. |
| 2 | **Admin user** | Has full access: can add, edit, and delete movies. Context menu, EDIT, DELETE, and + ADD MOVIE buttons are visible. |

---

### Total: 115 Points
