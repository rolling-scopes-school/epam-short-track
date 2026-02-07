# MovieDetails Component

### Template Path
`src/components/MoviesList/components/MovieDetails/MovieDetails.tsx`

### Figma Link
[MovieDetails Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:316&p=f&t=XSCRJYXQbu19shES-0)

### Overview
MovieDetails component that contains the description of the selected movie.

### Contains
- Poster
- Movie name
- Genre
- Release year
- Rating
- Duration
- Description
- **GO BACK** button
- **DELETE** button
- **EDIT** button

### Functional Requirements
- Click on **Movie Card** to view MovieDetails
- MovieDetails should be rendered on the separate route (**/:movieId**)
- Display poster, title, genre, release year, rating, duration, and description
- When click on **GO BACK** button user should be returned to the main page
- **EDIT** and **DELETE** buttons should be hidden for **Authorized users** and visible only for **ADMIN user**
- When click on **EDIT** button user should be redirected to the **/:movieId/edit-movie** route
- When click on **DELETE** button the confirmation modal should appear
- If user confirm deletion the movie should be deleted and user should be redirected to the main page

