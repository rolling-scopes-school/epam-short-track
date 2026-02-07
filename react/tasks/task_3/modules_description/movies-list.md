# MoviesList Component and Related Components

## MoviesList

### Template Path
`src/components/MoviesList/MoviesList.tsx`

### Figma Link
[MoviesList Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:23&p=f&t=XSCRJYXQbu19shES-0)

### Overview
Use this component to render the list of MovieTile components.

### Contains
- Movies count information (number 4 in Figma)
- Panel component
- List of MovieTile components

### Functional Requirements
- Render component in App component by route `/`
- Fetch movies list: use `fetchMovies` thunk to fetch movies (`http://localhost:4000/movies`)
- Use `useAppDispatch` to put movies list to the store
- Use `useAppSelector` and `selectMovies` selector to get movies list from store
- Use `useSearchParams` react-router-dom hook to get search, filter queries
- Display list of all available movies
- Show loading state while fetching movies
- Show error message if fetch fails (notification or fallback)
- Display movies count information (e.g., "39 movies found" or "1 movie found")
- Support search functionality (filter by title/description)
- Support filtering by genre
- Filter and search should work together (search in filtered results)
- Filtering and search should be implemented using data from Redux store

### Movies Count Information
Create an element to display the number of displayed movies.

**Functional Requirements:**
- Display message `{list.length} movies found` if movies number > 1 || = 0
- Display message `{list.length} movie found` if movies number = 1

---

## GenresFilter

### Overview
Use this element to render a list of movie genres.

### Figma Link
[GenresFilter Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:23&p=f&t=XSCRJYXQbu19shES-0)

### Contains
- The list of buttons with genres: use common Button component for each genre button and `Array.map` to render a list of genres

### Functional Requirements
- Display only the genres that are associated with the movies currently shown on the page
- Clicking on a genre button should:
  - Use `useSearchParams` react-router-dom hook to pass filter query
  - Example: `http://localhost:5173/?filter=action` or `http://localhost:5173/?filter=comedy`
  - Filter the displayed movies to show only those matching the selected genre
- Clicking the ALL button should:
  - Reset the filter and display all available movies

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
- [ONLY ADMIN user] Context menu button (number 11 in Figma)

### Functional Requirements
- Display poster, title, genre, release year
- Three dots menu is visible only for **ADMIN user**
- When click on three dots menu inside the movie card dropdown with **EDIT** and **DELETE** buttons should appear
- When click on **EDIT** button user should be redirected to the **/:movieId/edit-movie** route
- When click on **DELETE** button the confirmation modal should appear
- If user confirm deletion the movie should be deleted from the list and list of movies should be re-fetched
- When user click on the **Movie Card** the user should be redirected to the **/:movieId** route
