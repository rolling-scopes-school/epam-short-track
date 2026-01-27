# App Component

## Overview
This is the main component in your application.

## Template Path
`src/App.tsx` (or similar)

## Contains
- Router component with Routes components

## Functional Requirements

### User Authentication
- Get user info if token is present in the localStorage:
  - Put user token to the store (`state.user.token`)
  - Use `getUserThunk` to get user info by `[GET] /me/user` API

### Movies Data
- Get movies list by `[GET] /movies` API and put data to the store (`state.movies.fetchedMovies`):
  - Use `fetchMoviesThunk`

### Provider Setup
- App component should be wrapped in Provider in the `src/main.ts`

