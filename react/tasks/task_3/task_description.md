# Task 3. Movies Application

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

### 4. Movies List Page — 21 Points

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

### 6. Movie Form — Add Movie — 16 Points

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

### Total: 118 Points

---

## Total additional Evaluation criteria for the Mentors check

These criteria are for mentors to assess **Redux usage** and **test coverage** in addition to the main 118 points. The task is aimed at a learning course; students may be new to React, so evaluation should focus on understanding of concepts and consistent application rather than perfection.

---

### 1. Redux usage (Redux Toolkit) — up to 20 points

Evaluate step by step according to the [Store Configuration](./modules_description/store.md). Each item can be scored as **full / partial / none**.

| Pts | Requirement | What to check |
|-----|-------------|----------------|
| 2 | **Store creation and connection** | Store is created with `configureStore`. App is wrapped with `<Provider store={store}>` in `main.tsx` (or equivalent). |
| 3 | **moviesSlice** | Slice exists and manages movies list, loading state, and error state. Uses `createSlice` with appropriate reducers (e.g. fulfilled/pending/rejected from thunks or manual). |
| 2 | **userSlice** | Slice exists and stores user data (e.g. id, name, email, role) and optionally auth state. Updated on login and cleared on logout. |
| 2 | **Selectors** | At least `selectMovies` is implemented in `store/selectors`. Selectors are used in components instead of reading raw state directly. Additional selectors (e.g. filtered movies, selected movie) are a plus. |
| 5 | **Thunks** | Required thunks are implemented and used: `fetchMoviesThunk`, `addMovieThunk`, `updateMovieThunk`, `deleteMovieThunk`, `loginUserThunk`, `getUserThunk`. API calls live in thunks (or services called from thunks), not in components. |
| 2 | **Typed hooks** | `useAppSelector` and `useAppDispatch` are implemented (typed wrappers around `useSelector` and `useDispatch`) and used in components instead of plain hooks. |
| 4 | **Separation of concerns** | Components dispatch thunks and read state via selectors; they do not fetch directly from API. State shape is predictable (slices own their data). No major logic that clearly belongs in the store left inside components. |

**Suggested scoring:** Full = full points, partial = about half, none = 0. Sum all points for Redux (max 20).

---

### 2. Component test coverage (React Testing Library) — up to 20 points

Students must use **React Testing Library** for tests. The goal is to have meaningful tests on critical user flows and main components, not necessarily 100% coverage. For a learning course, the following are **minimum expectations**.

#### Coverage and volume

| Metric | Minimum (pass) | Good (full credit) |
|--------|-----------------|---------------------|
| **Line coverage** | At least **50%** for `src/` (components, pages, store) | **70%** or higher |
| **Number of test files** | At least **8** test files (or equivalent number of `describe` blocks) | **12+** test files / major describe blocks |
| **Total test cases** | At least **25** passing test cases (`it` / `test`) | **40+** test cases |

Coverage can be measured with the project’s test runner (e.g. `npm test -- --coverage`). If coverage is not run, mentors can estimate from the number and scope of test files and cases.

#### Components and areas that should be tested

Prioritize in this order (higher = more important to have tests):

1. **Must have tests (critical):**
   - **LoginPage / UserForm** — form renders, validation (empty fields), submit calls login (e.g. mock dispatch or API), error message display.
   - **MoviesList or HomePage** — list renders, loading state, error state, or at least that movie tiles render when data is provided.
   - **MovieForm** (Add or Edit) — form renders with fields, validation on submit, RESET clears fields; optionally submit triggers the correct thunk/action.
   - **PrivateRoute** (or equivalent) — redirects to `/login` when user is not authorized; allows access when authorized.

2. **Should have tests (important):**
   - **Header** — logo, user button for authorized user, logout action (e.g. clears store / redirects), or search input/button behavior.
   - **MovieTile** — renders movie data, click navigates to movie details (or triggers correct behavior).
   - **Movie details page** — renders movie info, GO BACK works, or EDIT/DELETE visibility for admin.

3. **Nice to have:**
   - **Common components** (Button, Input, Modal) — basic render and callback behavior.
   - **App routing** — main routes render correctly (e.g. with MemoryRouter in tests).

#### What mentors should look for in tests

| Pts | Requirement | What to check |
|-----|-------------|----------------|
| 4 | **Critical flows covered** | Login, movie list (or main page), and at least one form (MovieForm) or PrivateRoute have tests. |
| 4 | **Rendering tests** | Key components are tested for rendering (elements, labels, placeholders) without errors. |
| 4 | **User interaction tests** | Tests use `userEvent` or `fireEvent` for clicks, input, submit; behavior is asserted (e.g. navigation, dispatch, validation message). |
| 4 | **Test quality** | Tests are readable and test real behavior (user-centric), not implementation details. Mocks (e.g. for router, store, API) are used where appropriate. |
| 4 | **Coverage and volume** | Meets minimum coverage (~50%) and number of tests (~25 cases, ~8 files); full credit for ~70%+ and 40+ cases. |

**Suggested scoring:** Sum the points above (max 20). If a student has very few tests or no tests for login/list/form, cap the total for this section (e.g. max 8–10) even if the few existing tests are good.

---

### Summary for mentors

- **Redux (max 20 pts):** Store, slices (movies + user), selectors, thunks, typed hooks, and separation of concerns. Use the table and give full / partial / none per row, then sum.
- **Tests (max 20 pts):** React Testing Library used; minimum ~50% coverage and ~25 tests across ~8 files; Login, list/form, and PrivateRoute (or equivalent) tested; tests focus on rendering and user actions; good volume and quality can reach up to 20 pts.
- These **40 points** are **additional** to the main **118 points** and are intended to encourage proper use of Redux and basic testing skills suitable for beginners.
