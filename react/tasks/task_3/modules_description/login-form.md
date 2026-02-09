# LoginForm Component

## Overview
Use LoginForm component for LOGIN.

### Template Path
`src/components/forms/LoginForm/LoginForm.tsx`

### Rendering
Render LoginForm in App component. See Figma LOGIN design.

## Login Form

### Figma Link
[Login Form](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=202:1684&p=f&t=XSCRJYXQbu19shES-0)

### Contains
- EMAIL label
- Email field with placeholder 'enter email'
- PASSWORD label
- Password field with placeholder 'enter password'
- RESET button
- LOGIN button

### Functional Requirements
- Form is accessible via **/login** route for all users (non-authorized and authorized)
- Form title or heading: **"LOGIN"** or similar
- Form contains the following input fields:
  - **EMAIL** label with email input field
    - Placeholder: **"enter email"**
    - Type: email (text input with email validation)
    - Required field
  - **PASSWORD** label with password input field
    - Placeholder: **"enter password"**
    - Type: password (masked input)
    - Required field
- Form contains two action buttons:
  - **RESET** button: clears all form fields (email and password)
  - **LOGIN** button: submits the login credentials
- Form validation:
  - Both email and password fields are required
  - If any field is empty, display validation message below the empty field
  - Validation messages should be visible and styled according to design
- On LOGIN button click:
  - **If all fields are filled:**
    - Send POST request to `/me/login` API endpoint with email and password
    - On successful response:
      - Save user data (id, name, email, role) to Redux store
      - Save token to localStorage with key `"token"`
      - Navigate user to main page (**/**)
    - On error response:
      - Display error message (e.g., "Invalid email or password")
  - **If any field is empty:**
    - Display validation message for empty field(s)
    - Prevent form submission
- Admin credentials for testing:
  - Email: **"admin@email.com"**
  - Password: **"Admin123"**
- On RESET button click: both email and password fields are cleared
