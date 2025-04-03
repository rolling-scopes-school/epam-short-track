# Task 3. Redux. State Management in React.

## Task requirements

This task is the third part of the project, and your main goal is to learn and practice working with Redux Toolkit to manage application state in React. You will refactor the application to use Redux for handling courses and authors data.

You will need to create a Redux store, slices for courses and authors, and use Redux state in the components.

---

### Redux Store Requirements

- The application should use Redux Toolkit to centralize state management.
- Create slices for courses and authors.
- Handle asynchronous API requests using `createAsyncThunk` for fetching and updating data.
- Ensure that components use data from Redux store instead of local state or direct API calls.

---

### Courses Page Requirements

- Refactor the Courses page to use Redux for fetching and displaying courses.
- Use `createAsyncThunk` in `coursesSlice` to fetch courses data from the API.
- Store the courses list in the Redux store and display the list using `useSelector`.
- Ensure that adding a new course updates the Redux store and reflects on the Courses page without reloading.

---

### Course Form Page Requirements

- Refactor the Course Form page to use Redux for managing authors and creating new courses.
- Use `createAsyncThunk` in `authorsSlice` to fetch authors data from the API.
- Manage the list of authors and course authors using Redux state.
- Ensure that adding/deleting authors updates the Redux store.
- After creating a course, update the courses list in Redux store and navigate back to Courses page.

---

### API Requirements

- Refactor API calls in the application to use `createAsyncThunk` for handling asynchronous logic.
- Use the same API endpoints as in Task 2:
  - Courses API (`/courses`) for fetching, creating, and updating courses.
  - Authors API (`/authors`) for fetching and adding authors.

---

### Other Requirements

- Cover all slices and components with unit tests (tests will be checked during mentor check).
- Create a separate branch for this task. Branch name: "react-task-3".

---

### Mentor Code Review Criteria: 100 Points

The mentor will review your code based on the following criteria:

1. **Redux Store Implementation (20 Points)**  
   - [10 points] Redux Toolkit is used correctly to configure the store and create slices.  
   - [10 points] Store contains slices for courses and authors with proper state structure.

2. **Courses Slice and Page Implementation (30 Points)**  
   - [10 points] `createAsyncThunk` is used to fetch courses data from the API.  
   - [10 points] The courses list is stored in Redux state and displayed using `useSelector`.  
   - [10 points] Adding a new course updates Redux state and reflects on the Courses page.

3. **Authors Slice and Course Form Page Implementation (30 Points)**  
   - [10 points] `createAsyncThunk` is used to fetch authors data from the API.  
   - [10 points] Authors and course authors are managed correctly in Redux state.  
   - [10 points] Creating a course updates Redux state and navigates back to the Courses page.

4. **Code Quality and Structure (20 Points)**  
   - [10 points] The code is clean, modular, and follows best practices (e.g., separating slices, components, and API logic).  
   - [10 points] Unit tests are provided for slices and key components.
