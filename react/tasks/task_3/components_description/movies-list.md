# MoviesList Component and Related Components

## MoviesList

### Template Path
`src/components/MoviesList/MovieList.jsx`

### Figma Link
[MoviesList Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:23&p=f&t=XSCRJYXQbu19shES-0)

### Overview
Use this component to render the list of MovieTile components.

### Contains
- Movies count information (number 4 in Figma)
- Panel component
- List of MovieTile components

### Functional Requirements
- Render component in App component by routes `/` and `/movies`
- Fetch movies list: use `fetchMovies` thunk to fetch movies (`http://localhost:4000/movies`)
- Show a message "Loading movies..." instead of movies list while fetching
- Show a message `Error: {fetch error}` instead of movies list if fetch is not successful
- Use `useAppDispatch` to put movies list to the store
- Use `useAppSelector` and `selectMovies` selector to get movies list from store
- Use `useSearchParams` react-router-dom hook to get search, filter and sort queries

> **Tip**: For draft development you can use mocked movie list data, find these data in the `src/moviesMock.js`.

- Use loop for MovieTile rendering
- Please follow this link to the "Rendering Lists" topic to see the example

### Movies Count Information
Create an element to display the number of displayed movies.

**Functional Requirements:**
- Display message `{list.length} movies found` if movies number > 1 || = 0
- Display message `{list.length} movie found` if movies number = 1

---

## Panel

### Template Path
`src/components/MoviesList/Panel/Panel.tsx`

### Figma Link
[Panel Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:23&p=f&t=XSCRJYXQbu19shES-0)

### Overview
Use Panel to sort and filter movies list.

### Rendering
Render Panel component in the MoviesList component above movies count information.

### Contains
- GenresFilter element (number 10 in Figma)
- SortControl element (number 5 in Figma)

---

## GenresFilter

### Overview
Use this element to render a list of movie genres.

### Contains
- The list of buttons with genres: use common Button component for each genre button and `Array.map` to render a list of genres

### Functional Requirements
- Display only the genres that are associated with the movies currently shown on the page
- Clicking on a genre button should:
  - Use `useSearchParams` react-router-dom hook to pass filter query
  - Example: `http://localhost:5173/movies?filter=action`
  - Filter the displayed movies to show only those matching the selected genre
- Clicking the ALL button should:
  - Reset the filter and display all available movies

---

## SortControl

### Overview
Use SortControl element to sort movies by Release Date OR Title.

### Contains
- Label "SORT BY" (to the left)
- Select control (to the right) with the following options:
  - RELEASE DATE (default value)
  - TITLE

### Functional Requirements
- On select control click, open dropdown menu with 2 options: 'RELEASE DATE' and 'TITLE'
- On any option click:
  - The selected option should be shown in the select control
  - Use `useSearchParams` react-router-dom hook to pass sortBy query
  - Example: `http://localhost:5173/movies?sortBy=title`
  - Update current movies list
  - Filter the CURRENT movie list: if the movie list was filtered by any genre, the sorting should be done only for these filtered movies

---

## MovieTile

### Template Path
`src/components/MoviesList/components/MovieTile/MovieTile.tsx`

### Figma Link
[MovieTile Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:23&p=f&t=XSCRJYXQbu19shES-0)

### Overview
Use MovieTile component to display the movie info.

### Contains
- Poster
- Movie title
- Genre / genres
- Release year
- [ONLY admin user] Context menu button (number 11 in Figma)

### Props
- `poster_path` - The URL of the movie poster image
- `title` - The title of the movie
- `genres` - An array of genres associated with the movie
- `release_date` - The release date of the movie in ISO format
- `id` - The unique identifier of the movie

### Functional Requirements
- On tile click: render MovieDetails component above the MoviesList component (use `useNavigate()` hook)
- Render context menu button only for 'admin' user
- Use common component Button for context menu button

---

## ContextMenu

### Overview
Show element by context menu button click (11 in Figma).

### Contains
- Close Cross button (Use common/Button)
- Edit button (Use common/Button)
- Delete button (Use common/Button)

### Functional Requirements
- Menu should be available only for admin user
- On Edit button click, navigate to the route `/movies/edit/:movieId`
- On Delete button click:
  - Show the Modal window with DELETE MOVIE notification
- On Cross button click, hide the context menu

