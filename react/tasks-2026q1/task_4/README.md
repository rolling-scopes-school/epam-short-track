# Task 4. State Management and Context API

| Folder Name       | Branch            | Coefficient |
|-------------------|-------------------|-------------|
| state-management  | state-management  | 0.3         |


**Task:** [React: State Management and Context API — Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/state-management.md)

Implement application-wide state management using **Redux Toolkit** or **Zustand**, add item selection with checkboxes that persist across navigation, build a sticky flyout panel with "Unselect all" and CSV download functionality, and introduce light/dark theme switching via the **Context API**. Branch from `hooks-and-routing`.

---

## Developer's Diary

While working on this task, keep a [developer's diary](../../modules/diary/README.md). Write down the decisions you made, the approaches you considered, where you got stuck, and how you worked through it.

The diary is not graded. Its purpose is to help you understand your own work more deeply and to give your mentor a basis for a real conversation about the task.

The "Diary" folder can be placed in the root of the project.

---

## Mentor Checklist

**Maximum Score: 300 points**
- Task implementation **100 points**
- Mentor interview **200 points**

---

## Mentor Interview Topics

After submitting the task, your mentor will ask 4–5 questions from the areas below. Answers account for **~200 points** of the total score, so make sure you can explain the concepts in your own words.

### Redux Toolkit Fundamentals
- What problem does Redux Toolkit solve compared to plain Redux?
- What is a slice in Redux Toolkit and what does `createSlice` generate for you?
- How does Immer allow "mutable" syntax inside Redux Toolkit reducers without actually mutating state?
- What is the difference between `useSelector` and `useDispatch`? How do you avoid unnecessary re-renders with `useSelector`?

### Zustand Fundamentals
- What is Zustand's core philosophy and how does it differ from Redux?
- How do you define a store in Zustand and how do you read/write state from a component?
- How does Zustand avoid unnecessary re-renders — what is the role of the selector argument in `useStore`?
- What are Zustand middlewares and name one common use case (e.g. `persist`, `devtools`)?

### Derived and Shared State
- How do you persist selection state across client-side navigation without putting everything into the URL?
- What is the difference between local component state, shared store state, and server/cache state? Give an example of each.
- How do you keep a checkbox's "selected" status independent from the navigation action triggered by clicking the surrounding item row?

### Context API and Theming
- What is the React Context API and when is it appropriate to use it instead of a global store?
- How does `useContext` work and what triggers a re-render when context value changes?
- Why is it recommended to split context by concern (e.g. theme vs. auth vs. data)?
- How do you apply a light/dark theme to the entire application using `document.documentElement` attributes and CSS custom properties?

### Testing — Redux Toolkit
- How do you unit-test a Redux Toolkit slice (reducer + actions) in isolation?
- How do you mock the Redux store in component tests using `renderWithProviders` or similar helpers?

### Testing — Zustand
- How do you test a Zustand store without mounting a full component?
- How do you reset Zustand store state between tests to avoid cross-test pollution?

### CSV Download and Browser APIs
- How does `Blob` work, and why is it used instead of a third-party library for CSV generation?
- Walk through the steps: `Blob` → `URL.createObjectURL` → anchor `download` attribute → `URL.revokeObjectURL`. Why is the last step important?
- What characters in data values require escaping in a CSV file?
