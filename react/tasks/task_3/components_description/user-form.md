# UserForm Component

## Overview
Use UserForm component for LOGIN and REGISTRATION.

### Template Path
`src/components/forms/UserForm/UserForm.tsx`

### Rendering
Render UserForm in App component. See Figma LOGIN and Figma REGISTRATION designs.

### Component Requirements
- Use common/Input component for all fields
- Use common/Button component for all buttons
- Use `form` tag

### Props
- `mode`: 'login' or 'register' values according to the form role

---

## Login Form

### Figma Link
[Login Form](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=202:1684&p=f&t=XSCRJYXQbu19shES-0)

### Rendering
Render UserForm components with prop `mode='login'` by route `/login`.

### Contains
- EMAIL label
- Email field with placeholder 'enter email'
- PASSWORD label
- Password field with placeholder 'enter password'
- Text with link 'Do not have an account? Go to Registration form!'
- RESET button
- LOGIN button

### Functional Requirements
- Clean all fields on RESET button click
- Navigate user to the `/registration` page on Registration link click:
  - Use 'react-router-dom' Link component
- On LOGIN button click:
  - Check if all fields are filled:
    - **All fields are filled:**
      - Sends request to API for getting token (see 'me/login' endpoint in API Swagger)
      - Save user data to the store
      - Save token to the localStorage with a key `token`
      - Navigate user to `/movies`
    - **Any of fields are not filled:**
      - Render validation message for empty field. See Figma

### Login Response Example
```json
{
  "data": {
    "id": 12345,
    "name": "johndoe",
    "email": "johndoe@example.com",
    "role": "user / admin",
    "token": "token"
  },
  "message": "Login successful"
}
```

> **Pay attention**: There are two types of user's role: admin and user. To login as an admin use these credentials:
> ```json
> {
>   "email": "admin@email.com",
>   "password": "Admin123"
> }
> ```

---

## Registration Form

### Figma Link
[Registration Form](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=202:1734&p=f&t=XSCRJYXQbu19shES-0)

### Rendering
Render UserForm components with prop `mode='registration'` by route `/registration`.

### Contains
- NAME label
- Name field with placeholder 'enter name'
- EMAIL label
- Email field with placeholder 'enter your email'
- PASSWORD label
- Password field with placeholder 'create password'
- Text with link 'Already registered? Go to Login form!'
- RESET button
- REGISTER button

### Functional Requirements
- Clean all fields on RESET button click
- Navigate user to the `/login` page on 'Login' link click:
  - Use 'react-router-dom' Link component
- On REGISTER button click:
  - Check if all fields are filled:
    - **All fields are filled:**
      - Sends request to API for getting token (see 'me/register' endpoint in API Swagger)
      - Navigate user to the `/login`
    - **Any of fields are not filled:**
      - Render validation message. See Figma

