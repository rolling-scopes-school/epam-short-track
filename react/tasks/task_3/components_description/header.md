# Header Component

## Overview
Render Header component in App component for each route.

### Template Path
`src/components/Hero/components/Header/Header.tsx`

### Contains
- Logo element: `netflixroulette` text at the left
- Search field with magnifying glass (render for route `/movies/:movieId`)
- + ADD MOVIE button for ADMIN users (render for route `/movies` or `/`)
- USER button with contextual menu for AUTHORIZED users
- Search block (render for route `/movies` or `/`):
  - 'FIND YOUR MOVIE' text
  - Search field
  - SEARCH button

### Functional Requirements

#### + ADD MOVIE Button
- Render + ADD MOVIE button for ADMIN users
- On click, navigate to the route `/movies/add`

#### USER Button
- Render USER button for AUTHORIZED users
- Display user's name first letter as button label
- On USER button click, display menu with:
  - User's name (text)
  - LOGOUT button:
    - On LOGOUT button click:
      - Send request to logout current user `[POST] /me/logout`
      - Remove token from the localStorage
      - Update store
      - Navigate to the Login page

#### Logo
- On Logo click, navigate to `/movies`

---

## Search Component

### Overview
Render Search element in the Header component.

### Contains
- Input field - Use common component Input:
  - Field should have placeholder according to the provided design: 'What do you want to watch?'
- SEARCH button or button with magnifying glass icon (depends on route) - Use common component Button

### Functional Requirements
- Update movies list according to search query on SEARCH / magnifying glass button click OR Enter
- Render all movies if search field is empty (track onChange event)
- Use `useSearchParams` react-router-dom hook to pass search query
- Example: `http://localhost:5173/movies?search=star`

### Route-Specific Rendering
- **For `/` and `/movies` routes**: Full search block with 'FIND YOUR MOVIE' text, search field, and SEARCH button
- **For `/movies/:movieId` route**: Search field with magnifying glass icon

