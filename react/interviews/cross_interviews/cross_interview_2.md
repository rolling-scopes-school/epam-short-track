# Cross Interview #2

The goal of the technical interview is to check the quality of learning on topics: Component lifecycle, useEffect, Error boundaries, React Forms, Virtual Dom, Reconciliation algorithm.

## Interview questions list

### Component Lifecycle
  1. What are the main lifecycle stages of a React component?
  2. What are the lifecycle methods available in class components, and how do they compare to hooks in functional components?
  3. What causes a React component to re-render, and what strategies can be used to optimize re-renders before applying optimization techniques?
  4. What are render phases? Give detailed explanation of them.

### useEffect
  5. How does the `useEffect` hook work in functional components? Can you give an example of its usage?
  6. What is the difference between useEffect and useLayoutEffect?
  7. How do you use useEffect to mimic componentDidMount, componentDidUpdate, and componentWillUnmount?
  8. Is it possible to use an async callback in the useEffect hook and why?

### Error Boundaries
  9. What are error boundaries in React, and when would you use them?
  10. How would you implement error boundary?
  11. What kinds of errors are error boundaries able to catch and why?
  12. Is it possible to implement error boundary using functional component and why?

### React Forms
  13. What is the difference between controlled and uncontrolled components in React forms?
  14. What are the pros and cons of using third-party form libraries like Formik or React Hook Form?
  15. What are synthetic events in React, and how are they used in forms?
  16. How do you manage complex form state in large React applications?
  17. Describe the work of useActionState and useFormStatus hooks. What are the cases of usage?
  18. How does the useOptimistic hook work and when could it be used?

### React Types
  19. How do you use PropTypes for type checking in React components?
  20. What are the benefits of using TypeScript with React?

### Virtual DOM
  21. What is the virtual DOM, and how does it differ from the real DOM?
  22. What are the advantages and limitations of the virtual DOM approach?
  23. How does React batch updates to the virtual DOM for performance?
  24. How does the virtual DOM help with cross-browser compatibility?

### Reconciliation Algorithm
  25. What is the reconciliation algorithm in React?
  26. How does React determine which components need to be updated during reconciliation?
  27. What role do keys play in the reconciliation process?
  28. How can inefficient reconciliation impact application performance, and how can you mitigate it?
  29. What strategies can you use to optimize reconciliation in large lists?
  30. What are the consequences of not providing unique keys for list items in React?
