# Cross Interview #4

The goal of the technical interview is to check the quality of learning on topics: Context API, Redux Toolkit, Zustand.

## Interview questions list

### State Management (General)
  1. What is state management in React, and why does managing state become challenging as an application grows?
  2. What is the difference between local component state, shared/lifted state, and global application state?
  3. What is the concept of a single source of truth, and why is it important in state management?
  4. What is unidirectional data flow, and how does it differ from two-way data binding?
  5. What is prop drilling, and what approaches exist to avoid it?
  6. How do you decide what state belongs in a component versus a global store?
  7. What are the main categories of state in a React application (UI state, server/cache state, form state, global app state), and which tools are suited to each?
  8. What criteria would you use to choose a state management solution for a new React project?

### Functional Programming Concepts in State Management
  9. What is a pure function, and why must Redux reducers be pure?
  10. What is immutability, and why is it a core constraint in Redux state updates?
  11. What is referential equality, and how does it relate to re-render optimization in `useSelector` and Zustand subscriptions?
  12. What is memoization, and how does `createSelector` use it to avoid redundant recomputations?
  13. What are higher-order functions, and where do they appear in Redux (e.g., middleware, `connect`, action creators)?
  14. What is a closure, and how does Zustand's `create` function rely on closures to encapsulate store state?
  15. What are side effects, and why does Redux enforce separating side effects from reducer logic?

### Context API
  16. What is the Context API in React, what problem does it solve, and how does it help avoid prop drilling?
  17. How do you create a context with `createContext` and supply values to a component tree using `Context.Provider`?
  18. How do you consume context values using the `useContext` hook, and what triggers a re-render when the context value changes?
  19. What is the `use` hook introduced in React 19, and how does it compare to `useContext` for consuming context?
  20. How does context propagation work through a component hierarchy, and what happens when a provider value changes?
  21. What are the performance considerations when using Context API, and when should you prefer it over a dedicated state management library?

### Redux Toolkit Flow - If Interviewee chose RTK
  22. What is Redux Toolkit, and what problems does it solve compared to writing plain Redux?
  23. What are the three core Redux concepts — actions, reducers, and the store — and how do they interact?
  24. What is `createSlice`, what does it generate automatically, and how do you use the resulting action creators and reducer?
  25. How does Redux Toolkit use Immer under the hood, and what does that allow you to write in reducer functions?
  26. How do you configure a Redux store with `configureStore`, and what does it set up by default?
  27. How do you provide the Redux store to a React application and access it with `useSelector` and `useDispatch`?
  28. What are selectors in Redux, why are they used for derived state, and how does `createSelector` from Reselect help?
  29. How do Redux DevTools work, and how does Redux Toolkit enable them?
  30. How does Redux Toolkit integrate with TypeScript (typing the store, `RootState`, `AppDispatch`, typed hooks)?

### Zustand Flow - If Interviewee chose Zustand
  22. What is Zustand, and how does its architecture differ from Redux (no actions/reducers, direct store mutation)?
  23. How do you create a store in Zustand using the `create` function, and how do you read and update state from a component?
  24. How does the `set` function work in Zustand for partial and full state updates?
  25. How does Zustand handle TypeScript type safety when defining a store?
  26. What are the trade-offs between Zustand and Redux Toolkit in terms of boilerplate, bundle size, DevTools support, and ecosystem maturity?
  27. When would you choose Zustand over Redux Toolkit, and vice versa?
  28. How do Zustand subscriptions work, and how can you subscribe to only a slice of the store to avoid unnecessary re-renders?
  29. How does Zustand support middleware (e.g., `devtools`, `persist`, `immer`), and how do you compose multiple middleware together?
  30. How do you split a large Zustand store into multiple slices while keeping them in a single store instance?
