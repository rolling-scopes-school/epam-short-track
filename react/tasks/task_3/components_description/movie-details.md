# MovieDetails Component

### Template Path
`src/components/MoviesList/components/MovieDetails/MovieDetails.tsx`

### Figma Link
[MovieDetails Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:316&p=f&t=XSCRJYXQbu19shES-0)

### Overview
MovieDetails component should be rendered at the top of page above the movie list.

### Contains
- Poster
- Movie name
- Genre
- Release year
- Rating
- Duration
- Description

### Functional Requirements
- Render component by `/movies/:movieId` route by clicking on the MovieTile
- Get movie from the store by `movieId`
- Get `movieId` from URL using `useParams` hook

