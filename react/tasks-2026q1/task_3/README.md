# Task 3. Functional Components, Hooks, and Routing

| Folder Name       | Branch            | Coefficient |
|-------------------|-------------------|-------------|
| hooks-and-routing | hooks-and-routing | 0.3         |


**Task:** [React: Routing and Hooks — Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/functional-routing.md)

Convert all class components to functional components with React hooks, create a custom hook for `localStorage` operations, and implement client-side routing with four key features: URL-synchronized pagination, a master-detail split view using `<Outlet>`, an About page, and a 404 fallback page. Use **React Router** (Data or Declarative mode) or **TanStack Router** throughout. Branch from `unit-testing`.

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

### React Hooks Fundamentals
- What problem do hooks solve that class components could not address cleanly?
- What are the Rules of Hooks and why do they exist?
- What is the difference between `useState` and `useReducer`? When would you reach for `useReducer`?
- How does `useEffect` cleanup work, and when is it necessary?

### Custom Hooks
- What makes something a "custom hook" as opposed to a plain utility function?
- How do you design a custom hook for `localStorage` so that it stays in sync with component state?
- How do you test a custom hook in isolation without a full component wrapper?
- What is `useRef` and when should you use it instead of `useState`?

### React Router
- What is the difference between Data Router and Declarative Router modes?
- How does `<Outlet>` enable a master-detail layout, and what does the URL look like while a detail panel is open?
- How do `useParams`, `useSearchParams`, and `useNavigate` differ? Give an example use case for each.
- What happens when a user navigates to an undefined route, and how do you handle it?

### Migration from Class Components
- Walk through converting a class component that uses `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to a functional equivalent.
- Why are Error Boundaries still implemented as class components, and is there a functional alternative?
- What state management patterns in class components are hardest to translate to hooks?
