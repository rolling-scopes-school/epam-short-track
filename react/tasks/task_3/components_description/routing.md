# Routing Configuration

## Overview
Add Routing to your application using React Router.

## Setup
To enable routing in your application, wrap it with the Routes component. This component will handle the definition of paths and the rendering of corresponding components based on the current route.

## Route Definitions

| Route | Components Rendered |
|-------|---------------------|
| `/` and `/movies` | Render the MoviesList component |
| `/movies/:movieId` | Render the MovieDetails component alongside the MoviesList component |
| `/movies/add` | Render the MoviesList component and a required Modal containing the MovieForm component in 'ADD' mode ONLY for admin user |
| `/movies/edit/:movieId` | Render the MoviesList component and a required Modal containing the MovieForm component in 'EDIT' mode ONLY for admin user |
| `/login` | Render the UserForm component in Login mode |
| `/registration` | Render the UserForm component in Registration mode |

## Modal Component Usage
For routes like `/movies/add`, `/movies/edit/:movieId` and `/movies/:movieId`, the Modal component is required to wrap the content.

