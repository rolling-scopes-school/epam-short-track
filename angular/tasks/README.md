# YouTube Client App Final Assignment

Throughout this Angular course, you will implement a comprehensive YouTube client application. Please refer to the [Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1) for design guidelines.

## Task Requirements

1. **Setup and Initial Project Creation**
   - Use the `@angular/cli` to create a new project with Angular v18 or later.
   - Set up a new repository on GitHub for the project and push the initial commit.
   - Use Angular Material for UI components.
   - Use SCSS as the default stylesheet.
   - Migrate Angular application to ESLint with rules [AirBnB](https://github.com/airbnb/javascript).

2. **Components**
   - Generate necessary Angular components using Angular CLI (e.g., header, search results, search item).
   - Add filtering and sorting functionality for search results:
     - Sort by date (both ascending and descending).
     - Sort by view count (both ascending and descending).
   - Use directives to style search results based on publication date:
     - Red (🟥) if older than 6 months.
     - Yellow (🟨) if between 1 to 6 months.
     - Green (🟩) if between 7 days to 1 month.
     - Blue (🟦) if newer than 7 days.
   - Example of returned [data](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/response.json).

3. **Implement the following pages and Routing**
   - **Login Page**:
     - Allows users to authenticate using their credentials.
     - Upon successful login, stores the auth token in local storage and redirects the user to the main page.
     - If the user is not logged in, restricts access to other parts of the application using an _AuthGuard_.
     - Validate the email format and required fields.
     - Validate password strength and required fields.
     - Ensure forms cannot be submitted with invalid data.
     - Display error messages and styles for invalid fields.

   - **404 Page**:
     - Displays a message indicating that the requested page was not found.
     - Redirects users to this page when they navigate to an undefined route.

   - **Main Page**:
     - Displays the primary interface of the application where users can search for YouTube videos.
     - Shows search results, allowing users to view video details and perform sorts and filters.

   - **Admin Page**:
     - Allows authenticated users to create custom video cards with specific details.
     - Provides a form for inputting video details such as title, description, image link, video link, and creation date.
     - Supports form validation to ensure all entries are valid before submission.
     - Validate title (required, min/max length).
     - Optionally validate description (max length).
     - Validate image and video links (required).
     - Validate creation date (must not be in the future).
     - Ensure forms cannot be submitted with invalid data.
     - Display error messages and styles for invalid fields.
     - Created cards are saved in the state.

   - **Detailed Information Page**:
     - Provides detailed information about a selected video.
     - Shows video details including title, description, views, likes, dislikes, publication date, and more.
     - Allows users to mark videos as favorites.

4. **RxJS and Observables, HTTP Requests**
   - **Global search functionality**
     - Implement search functionality that triggers after the user stops typing for 300 milliseconds.
     - Create a new Observable in your component that emits changes when the user enters at least 3 characters.
     - Add debounce functionality to prevent API calls from being performed if the user is still typing.
   - **Login block**
     - Create a new Observable in the **Login service** that will emit a boolean indicating whether the user is logged in or not.
     - Show the _Login_ and _Logout_ button depending on the user's login state.
   - **HTTP requests and YouTube API**
     - Use the HTTP interceptor to shorten request URLs in your services and pass your access token.
     - [How to get an API key](https://www.youtube.com/watch?v=JbWnRhHfTDA)
     - You can find detailed [documentation](https://developers.google.com/youtube/v3).

   #### Samples of YouTube REST API requests:
     ```
     https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&type=video&part=snippet&maxResults=15&q=js
     https://www.googleapis.com/youtube/v3/videos?key=YOUR_API_KEY&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics
     ```

5. **State Management with NgRx**
   - Use NgRx to manage application state.
   - Create actions, reducers, and selectors for managing search results, custom cards, and favorite videos.
   - Implement the admin page for adding custom video cards using NgRx.
   - Implement functionality to toggle the favorite status of videos.

6. **Integrate Angular Signals**
   - Use signals in component templates to display data. Implement this in two or more instances.
   - Convert observables to signals using `toSignal`.

## Evaluation Criteria

Your final application will be evaluated based on the following criteria:

1. **Project Setup and Initial Structure**
   - Correctly generated Angular project (**+10**).
   - Properly configured TypeScript and ESLint (**+10**).
   - Use Angular Material for UI components (**+10**).
   - Use SCSS as the default stylesheet (**+5**).

2. **Component Implementation and Functionality**
   - Main page layout and components (**+10**).
   - Functional search, filtering, and sorting (each functionality +20 points) (**+60**).
   - Correct use of directives and pipes (**+15**).

3. **Pages and Routing**
   - Login Page (**+50**).
   - 404 Page (**+15**).
   - Main Page (**+70**).
   - Admin Page (**+40**).
   - Detailed Information Page (**+50**).
   - Working routing with guards (**+20**).

4. **RxJS and API Integration**
   - Effective use of RxJS for search input (**+30**).
   - Integrated real YouTube API (**+40**).
   - Proper HTTP interceptor implementation (**+15**).

5. **Forms and Validation**
   - Reactive forms with validation (**+20**).
   - Clear error messages and proper styling for invalid fields (**+15**).
   - Functional admin page form (**+30**).

6. **NgRx State Management**
   - NgRx-based state management (**+50**).
   - Functional admin pages with NgRx (**+20**).

7. **Angular Signals**
   - Use of signals in components and templates (**+15**).
   - Conversion from observables to signals (**+15**).

## System of Fines

- Incorrect project structure (**-10**).
- Application errors in console (**-20**).
- ESLint warnings/errors (**-10**).
- Usage of the `any` type (**-10**).
- Non-compliance with commit history and message guidelines (**-20**).

By completing all the tasks and meeting the evaluation criteria, you will have a fully functional YouTube client application showcasing your understanding and skills in Angular.

---

This detailed assignment should now address all your requirements and guide students through creating a fully functional YouTube client application using Angular.