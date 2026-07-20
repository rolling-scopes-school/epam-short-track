# Cross Interview #3

## Interview questions list

### React Hooks

1. What is a React Hook and why were hooks introduced in React 16.8?
2. What are the two core rules of hooks and why does React enforce them?
3. Why can't hooks be called inside loops, conditions, or nested functions?
4. What is the difference between state and a regular variable in a React component?
5. What does `useState` return and how do you update the state it provides?
6. What happens when you call the state setter function with the same value as the current state?
7. How do you perform a state update based on the previous state value, and why is that form preferred?
8. Why is state considered immutable in React, and what is the correct way to update an array or object stored in state?
9. What is the purpose of `useEffect` and when does it run by default?
10. What is the role of the dependency array in `useEffect`? How does behavior differ with no array, an empty array, and a populated array?
11. What is a cleanup function in `useEffect`, and give an example of when you would need one?
12. Name three situations where you might NOT need `useEffect` (i.e., where derived state or event handlers are better).
13. What makes a function a custom hook, and what naming convention is required?
14. What is the main benefit of extracting logic into a custom hook vs. a regular utility function?
15. Can two components that use the same custom hook share state? Explain why or why not.

### React Router

16. What problem does client-side routing solve in a single-page application (SPA)?
17. What is the difference between `BrowserRouter` and `HashRouter`? When would you choose one over the other?
18. What is the role of the `<Routes>` component and how does it differ from the older `<Switch>` component?
19. What is the difference between `<Link>` and `<NavLink>`? When would you use `<NavLink>`?
20. What is programmatic navigation and how do you achieve it using the `useNavigate` hook?
21. How do you navigate to the previous page using `useNavigate`?
22. How do you define a dynamic route segment in React Router (e.g., a route for a user profile by ID)?
23. How do you access a URL parameter inside a component, and which hook do you use?
24. What is the `useLocation` hook and what information does it provide?
25. What are nested routes and how do you render child route content using `<Outlet>`?
26. How would you implement a protected route that redirects unauthenticated users to a login page?
27. How do you handle a 404 "not found" page in React Router?
28. What is code splitting in the context of routing, and how can `React.lazy` and `Suspense` be combined with React Router to achieve it?
29. What is the difference between relative and absolute paths in React Router v6?
30. How does scroll restoration work in React Router and why might you need to manage it manually?
