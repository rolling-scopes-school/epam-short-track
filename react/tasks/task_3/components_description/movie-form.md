# MovieForm Component

## Overview
Use MovieForm component to render a form element to ADD or EDIT movie. Render ONLY for admin user. Use PrivateRoute component.

### Path
`src/component/MovieForm/MovieForm.tsx`

### Rendering
Render MovieForm component in the Modal component.

---

## ADD Movie Form

### Figma Link
[ADD Movie Form](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:439&p=f&t=XSCRJYXQbu19shES-0)

### Contains
- Form title: 'ADD MOVIE'
- TITLE field with placeholder 'Movie Title' (use Input component)
- RELEASE DATE field with placeholder 'Select Date' (use Input component)
- POSTER URL field with placeholder 'https://' (use Input component)
- RATING field with placeholder '7.8' (use Input component)
- GENRE field
- RUNTIME field with placeholder 'minutes' (use Input component)
- OVERVIEW field with placeholder 'Movie description'
- RESET button (use Button component)
- SUBMIT button (use Button component)

### Functional Requirements
- User should be able to enter new movie data and save it to the database and store
- Render add mode for `/movies/add` route
- On SUBMIT button click:
  - Validate form data: show notification "ALL FIELDS ARE REQUIRED"
  - Use API `/movies [POST]` to add movie on the server
  - Add movie to the store after success API call
  - Show SUCCESS notification after successful adding
  - Navigate to the `/movies` route after notification close button click => new movie should be in the Movies list on the page
- On RESET button click:
  - Clean all fields

---

## EDIT Movie Form

### Figma Link
[EDIT Movie Form](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=202:1158&p=f&t=XSCRJYXQbu19shES-0)

### Contains
- Form title: 'ADD MOVIE' or 'EDIT MOVIE'
- TITLE field with chosen movie title (use Input component)
- RELEASE DATE field with chosen movie release date (use Input component)
- POSTER URL field with chosen movie poster url (use Input component)
- RATING field with chosen movie rating info (use Input component)
- GENRE field with chosen movie checked genres
- RUNTIME field with chosen movie runtime info (use Input component)
- OVERVIEW field with chosen movie description
- RESET button (use Button component)
- SUBMIT button (use Button component)

### Functional Requirements
- User should be able to change movie data and save it to the database and store
- Render the edit mode for `/movies/edit/:movieId` route
- Use `useParams` react-router-dom hook to get movie id
- Use `useAppSelector` custom hook to get movie from store by id
- On SUBMIT button click:
  - Validate form data: show notification "ALL FIELDS ARE REQUIRED"
  - Use API `/movies [PUT]` to update movie on the server
  - Update movie to the store after success API call
  - Show SUCCESS notification after successful adding / update
  - Navigate to the `/movies` route after notification close button click => new / updated movie should be in the Movies list on the page
- On RESET button click:
  - Clean all fields

---

## SUCCESS Notification

### Figma Link
[SUCCESS Notification](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=202:832&p=f&t=XSCRJYXQbu19shES-0)

### Overview
Use Modal component to render notification.

### Notification Contains
- Title: 'CONGRATULATIONS!'
- Message: 'The movie has been added to database successfully'

### Functional Requirements
- Navigate to `/movies` route on Close button click (default Modal onClick behavior)

