# Header Component

## Overview
Render Header component in App component for each route.

### Template Path
`src/components/Header/Header.tsx`

### Contains
- Logo element: `netflixroulette` text at the left
- + ADD MOVIE button for ADMIN users (render for route `/`)
- USER button with contextual menu for AUTHORIZED users
- Search block [Search Block](./search.md)

### Functional Requirements

- Header is rendered on all routes and should be visible at the top of every page
- Header contains the following elements (layout from left to right):
  - **Logo** element:
    - Text: **"netflixroulette"** (styled as logo/brand name)
    - On click: navigates to main page (**/**)
  - **+ ADD MOVIE** button (admin only):
    - Visible only for **ADMIN user**
    - Rendered on route **/**
    - Hidden on other routes
    - On click: navigates to **/create-movie** route
  - **USER** button with dropdown menu (authorized users only):
    - Visible only for **AUTHORIZED users** (both admin and regular users)
    - Hidden for non-authorized users
    - Button displays: user's name **first letter** (uppercase) as the button label
    - Example: if user name is "John", button shows **"J"**
    - On USER button click:
      - Opens dropdown/contextual menu with:
        - User's full name displayed as text
        - **LOGOUT** button
      - Menu should be positioned below or near the USER button
    - On **LOGOUT** button click:
      - Removes token from localStorage (key: `"token"`)
      - Clears user data from Redux store
      - Navigates to **/login** page
- Header styling should be consistent across all pages
- Header should be fixed or sticky at the top of the viewport
