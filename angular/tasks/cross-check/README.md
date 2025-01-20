# Cross-Check Rules for YouTube Client App

## Objective

The goal of the cross-check process is to ensure the completeness, functionality, and quality of the YouTube client applications developed by students. This includes verifying that all requirements are met, the code is clean and well-organized, and there are no major issues affecting usability and performance.

## Cross-Check Guidelines

### 1. General Guidelines

1. **Reviewing Time**: Allocate sufficient time to thoroughly review the application, typically around 30-45 minutes per project.
2. **Notes and Feedback**: Make detailed notes of any issues or suggestions for improvement to provide constructive feedback.
3. **Fairness**: Be objective and impartial, focusing on the application's functionality, code quality, and adherence to requirements.

### 2. Functionality Testing

1. **Setup and Execution**:
   - Clone the repository and follow the provided setup instructions.
   - Ensure the application runs without errors.
   - Check for any setup or configuration issues as per the guidelines given in the ReadMe file.

2. **Main Page**:
   - Verify the layout matches the Figma mockup.
   - Test the search functionality to ensure it's triggered after the user stops typing for 300 milliseconds.
   - Check filtering and sorting functionality:
     - Sort by date (ascending and descending).
     - Sort by view count (ascending and descending).
   - Validate the color coding of search result items based on publication date using directives.

3. **Login Page**:
   - Test the login form validation (check for required fields, email format, and password strength).
   - Ensure form submission only happens with valid data and proper error messages are displayed for invalid inputs.
   - Verify that upon successful login, the auth token is stored and users are redirected to the main page.
   - Check AuthGuard to ensure that unauthorized users cannot access restricted parts of the application.

4. **404 Page**:
   - Ensure navigating to an undefined route displays the 404 page with an appropriate message.

5. **Admin Page**:
   - Test the form for creating custom video cards:
     - Check validation for required fields, min/max length constraints, etc.
     - Ensure form submission only happens with valid data.
     - Validate error messages and styling for invalid fields.
   - Verify that the created custom cards are saved in the application state.

6. **Detailed Information Page**:
   - Check that detailed information about the selected video is displayed correctly.
   - Verify the functionality for marking videos as favorites.

### 3. Code Review

1. **Code Structure and Organization**:
   - Check for a well-organized project structure with appropriate use of modules (CoreModule, SharedModule, AuthModule, YoutubeModule).
   - Ensure the proper use of standalone components and services.
   - Verify the use of Angular Material for UI components and SCSS as the default stylesheet.

2. **Code Quality**:
   - Check for clean and readable code with proper indentation and spacing.
   - Ensure meaningful variable and function names that follow the project’s naming conventions.
   - Verify that comments and documentation are provided where necessary.

3. **ESLint and TypeScript**:
   - Ensure ESLint is configured with AirBnB rules and there are no linting errors or warnings.
   - Check that TypeScript is configured with `strict: true` mode and there is no use of the `any` type.

4. **RxJS and Observables**:
   - Verify the correct implementation of RxJS for debounce, and observables for managing search input and login state.
   - Ensure the use of debounce logic to prevent excessive API calls during the search.

5. **NgRx State Management**:
   - Check actions, reducers, and selectors for managing state.
   - Ensure the correct implementation of NgRx for managing search results, custom cards, and favorite videos.

6. **Angular Signals**:
   - Verify the use of signals in the component's templates to display data.
   - Ensure observables are properly converted to signals using `toSignal`.

### 4. Providing Feedback

1. **Functionality Feedback**:
   - Note any bugs or issues found during functionality testing.
   - Suggest potential improvements or enhancements.

2. **Code Quality Feedback**:
   - Provide comments on code organization, readability, and adherence to best practices.
   - Suggest refactoring where necessary to improve code quality.

3. **Overall Evaluation**:
   - Summarize the overall performance of the application, including strengths and areas for improvement.
   - Assign a score based on the evaluation criteria.

## Evaluation Criteria

Your final score should reflect the overall quality and completeness of the application. Use the following criteria as a guide:

1. **Project Setup and Initial Structure** (35 points total):
   - **Correctly generated Angular project** (10 points)
   - **Properly configured TypeScript and ESLint** (10 points)
   - **Use Angular Material for UI components** (10 points)
   - **Use SCSS as the default stylesheet** (5 points)

2. **Component Implementation and Functionality** (85 points total):
   - **Main page layout and components** (10 points)
   - **Functional search, filtering, and sorting** (each functionality 20 points, total 60 points)
   - **Correct use of directives and pipes** (15 points)

3. **Pages and Routing** (245 points total):
   - **Login Page** (50 points)
   - **404 Page** (15 points)
   - **Main Page** (70 points)
   - **Admin Page** (40 points)
   - **Detailed Information Page** (50 points)
   - **Working routing with guards** (20 points)

4. **RxJS and API Integration** (85 points total):
   - **Effective use of RxJS for search input** (30 points)
   - **Integrated real YouTube API** (40 points)
   - **Proper HTTP interceptor implementation** (15 points)

5. **Forms and Validation** (65 points total):
   - **Reactive forms with validation** (20 points)
   - **Clear error messages and proper styling for invalid fields** (15 points)
   - **Functional admin page form** (30 points)

6. **NgRx State Management** (70 points total):
   - **NgRx-based state management** (50 points)
   - **Functional admin pages with NgRx** (20 points)

7. **Angular Signals** (30 points total):
   - **Use of signals in components and templates** (15 points)
   - **Conversion from observables to signals** (15 points)

## System of Fines

- **Incorrect project structure** (-10 points)
- **Application errors in console** (-20 points)
- **ESLint warnings/errors** (-10 points)
- **Usage of the `any` type** (-10 points)
- **Non-compliance with commit history and message guidelines** (-20 points)
