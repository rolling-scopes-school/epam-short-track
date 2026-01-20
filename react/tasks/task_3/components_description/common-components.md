# Common Components

## PrivateRoute

### Path
`src/common/PrivateRoute/PrivateRoute.tsx`

### Purpose
Use this component to render MovieForm component by routes `/movies/add` and `/movies/edit/:movieId`.

### Props
- `children` - Any private component

### Functional Requirements
- Should render any component as children
- Checks user's role (`store.user.role`) and if it is admin, returns component as children
- Otherwise redirects to `/movies`

---

## Button

### Path
`src/common/Button/Button.tsx`

### Overview
Enhance the existing component to meet the specified requirements.

The Button component is a functional component that renders a button HTML element.

### Props
- `children` - Accepts any content to be displayed inside the button
- `onClick` - A callback function executed when the button is clicked

### Additional Notes
- Feel free to add any additional props as needed to enhance functionality
- Reuse the Button component across all components where buttons are required in the design
- **Tip**: Ensure consistency by using the Button component wherever a button is present in the application design

---

## Input

### Path
`src/common/Input/Input.tsx`

### Overview
Enhance the existing component to meet the specified requirements.

### Contains
- `input` tag
- `label` tag

> **Note**: Using a label tag for input is considered good practice. See usage and benefits of label tag.

### Props
- `placeholderText` - To provide placeholder text for input field
- `onChange` - Pass a callback function that will be executed upon a field content change
- `labelText` - Text for input label to describe the input's purpose
- `value` - Pass the value for input field

### Additional Notes
- Please feel free to add any props you need

---

## Modal

### Path
`src/common/Modal/Modal.tsx`

### Figma Link
[Modal Component](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=201:611&p=f&t=XSCRJYXQbu19shES-0)

### Overview
Use Modal component to render a modal window with custom content.

### Technical Requirements
- Component should use the Portals functionality
- All needed dependencies were added to the `package.json`. **DO NOT install any packages**

### Contains
- Close (×) button - Use common Button component
- Body content

### Props
- `children` - JSX for body content
- `onClose` - A callback function for handling clicks on close button (×) in the header

### Functional Requirements
- Close the Modal window on close button click: navigate to the `/movies` route OR call `onClick` callback from props
- **[OPTIONAL / does not covered with tests]** Add Escape button click event handler to close the Modal window

