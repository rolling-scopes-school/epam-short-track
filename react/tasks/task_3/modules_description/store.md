# Store Configuration

## Template Path
`src/store/index.ts`

## Overview
We are using Redux Toolkit and Redux Thunk for this application.

## Setup Requirements

### Store Configuration
Configure a store and connect it to the application by wrapping the App component with Provider in the `main.ts` file.

### Slices
Create the following slices in the appropriate files:

- **moviesSlice**: `src/store/moviesSlice.ts`
  - See "Create Slices" topic for reference

- **userSlice**: `src/store/userSlice.ts`
  - See "Create Slices" topic for reference

### Selectors
Create selectors in `src/store/selectors.ts`:

- **selectMovies** - Returns movies list to display in MoviesList
  - Please feel free to create any additional selectors you want

### Thunks
Create thunks in `src/store/thunks.ts`:

- `fetchMoviesThunk`
- `addMovieThunk`
- `updateMovieThunk`
- `deleteMovieThunk`
- `loginUserThunk`
- `getUserThunk`

See "Async Operation with createAsyncThunk" topic for reference.
Please feel free to create any additional thunks you want.

### Custom Hooks
Create custom hooks in `src/store/hooks`:

- **useAppSelector**: Typed version of `useSelector` - use this instead of `useSelector`
- **useAppDispatch**: Typed version of `useDispatch` - use this instead of `useDispatch`

