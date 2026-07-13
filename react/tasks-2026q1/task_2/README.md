# Task 2. Unit Testing

| Folder Name  | Branch       | Coefficient |
|--------------|--------------|-------------|
| react-testing| react-testing| 0.3         |


**Task:** [React: Unit Testing — Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/tests.md)

Write comprehensive unit tests for the class components built in Task 1 using **Jest** or **Vitest** and **React Testing Library**. Tests must cover component rendering, user interactions, API mocking, error boundaries, and `localStorage` integration, achieving at least **80% statement coverage** and **50%** in all other metrics.

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

### React Testing Library Philosophy
- What is the core philosophy of React Testing Library? How does it differ from Enzyme's approach?
- Why does RTL discourage querying by component internals (class names, instance methods, state)?
- What is the difference between `getBy*`, `queryBy*`, and `findBy*` queries? When would you use each?
- Why is `getByRole` often preferred over `getByTestId`?

### Rendering and User Interactions
- What does `render` return in React Testing Library? Which parts of the return value do you use most?
- What is the difference between `fireEvent` and `userEvent`? Which should you prefer and why?
- How do you test that a component re-renders correctly after a state change or prop update?
- What is `screen` in React Testing Library, and why is it preferred over destructuring from `render`?

### Async Testing and API Mocking
- How do you test a component that fetches data on mount? Walk through the steps.
- What is `waitFor` / `findBy*` used for? How do you avoid flaky async tests?
- How do you mock `fetch` or `axios` in a unit test? What are the trade-offs between manual mocks and a library like MSW?
- What does `afterEach(() => jest.resetAllMocks())` protect you from?

### Error Boundaries and `localStorage`
- How do you test that an Error Boundary renders its fallback UI when a child throws?
- Why does React Testing Library log `console.error` output during Error Boundary tests, and how do you suppress it cleanly?
- How do you mock `localStorage` in a test environment? Why can't you rely on the real `localStorage` between tests?
- What is the risk of testing `localStorage` reads in `componentDidMount` without resetting storage state between tests?

### Code Coverage
- What does **statement coverage** measure? How is it different from **branch coverage** and **line coverage**?
- Why is 100% coverage not a reliable indicator of test quality?
- How do you generate a coverage report with Jest/Vitest, and what does the output tell you?
- What parts of your codebase are reasonable to exclude from coverage, and how do you configure that exclusion?
