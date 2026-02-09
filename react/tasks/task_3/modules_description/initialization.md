## Initialization

### Application Initialization
- When user opens the app, the App component should:
  - Get user info if token is present in localStorage (use `getUserThunk`)
  - Get movies list from API (use `fetchMoviesThunk`)
  - Put data to the Redux store

### Application Routes:
- **/**: Home page
- **/:movieId**: Movie Page
- **/:movieId/edit-movie**: Edit Movie page
- **/create-movie**: Create Movie page
- **/login**: Login page

### User Types and Access
- **Non-authorized user**: Show only Login page
- **Authorized users**: Show movies with Search, filters, sort option, Login and Registration pages
- **ADMIN user**: All pages are available. This user is able to delete, add and edit movies


### Available functionality per role

#### Non-Authorized User
- Show only Login page

#### Authorized Users
- Show movies with Search, filters option
- Show Login pages
- Show Movie page

#### Admin User
- Admin users can add new movies via **/create-movie** route
- Admin users can edit existing movies via **/:movieId/edit-movie** route
- Admin users can delete movies (with confirmation)
- Context menu button visible only for admin users on MovieTile

#### Admin Credentials
We have already created an ADMIN user. Please use these credentials to login as ADMIN:

- **Email**: `admin@email.com`
- **Password**: `Admin123`
