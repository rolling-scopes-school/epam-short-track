# MovieForm Component

## Overview
Use MovieForm component to render a form element to ADD or EDIT movie. Render ONLY for ADMIN user.

### Template Path
`src/components/MovieForm/MovieForm.tsx`

### Rendering
Render MovieForm component in the Modal component.

---

## ADD Movie Form

### Figma Link
[ADD Movie Form](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:439&p=f&t=XSCRJYXQbu19shES-0)

### Requirements
- Form is accessible only for **ADMIN user** via **/create-movie** route
- Form title displays: **"ADD MOVIE"**
- Form contains the following input fields:
  - **TITLE** field with placeholder "Movie Title" (text input, required)
  - **RELEASE DATE** field with placeholder "Select Date" (date input, required)
  - **POSTER URL** field with placeholder "https://" (URL input, required)
  - **RATING** field with placeholder "7.8" (number input, required, range: 0-10)
  - **GENRE** field (multi-select checkbox group, at least one genre required)
  - **RUNTIME** field with placeholder "minutes" (number input, required)
  - **OVERVIEW** field with placeholder "Movie description" (textarea, required)
- Form contains two action buttons:
  - **RESET** button: clears all form fields when clicked
  - **SUBMIT** button: validates and submits the form data
- Form validation:
  - All fields are required
  - If any field is empty, display validation message: **"ALL FIELDS ARE REQUIRED"**
  - Validation messages should appear below empty fields or as a notification
- On submission:
  - Send POST request to `/movies` API endpoint with movie data
  - Re-fetch list of movies or update store to show the newly created movie in the movies list
  - Display **SUCCESS** notification modal with:
    - Title: **"CONGRATULATIONS!"**
    - Message: **"The movie has been added to database successfully"**
- On RESET button click: all form fields are cleared to their initial empty state

---

## EDIT Movie Form

### Figma Link
[EDIT Movie Form](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=202:1158&p=f&t=XSCRJYXQbu19shES-0)

### Requirements
- Form is accessible only for **ADMIN user** via **/:movieId/edit-movie** route
- Form title displays: **"EDIT MOVIE"**
- Form is pre-populated with existing movie data:
  - Get movie ID from URL using `useParams` hook
  - Fetch movie data from Redux store by movie ID
  - All fields are pre-filled with current movie values:
    - **TITLE** field contains current movie title
    - **RELEASE DATE** field contains current release date
    - **POSTER URL** field contains current poster URL
    - **RATING** field contains current rating value
    - **GENRE** field has current genres pre-selected (checkboxes checked)
    - **RUNTIME** field contains current runtime in minutes
    - **OVERVIEW** field contains current movie description
- Form contains the same input fields and buttons as Create Movie Form (see above)
- Form contains two action buttons:
  - **RESET** button: resets all fields to original movie values (not empty)
  - **SUBMIT** button: validates and submits the updated form data
- Form validation:
  - All fields are required
  - If any field is empty, display validation message: **"ALL FIELDS ARE REQUIRED"**
  - Validation messages should appear below empty fields or as a notification
- On submission:
  - Send PUT request to `/movies/:movieId` API endpoint with updated movie data
  - Re-fetch list of movies or update store to show the updated movie with new values in the movies list
  - Display **SUCCESS** notification modal with:
    - Title: **"CONGRATULATIONS!"**
    - Message: **"The movie has been updated in database successfully"**
- On RESET button click: all form fields are reset to original movie values (not cleared)
