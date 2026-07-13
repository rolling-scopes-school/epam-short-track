# Cross Interview #2

The goal of the technical interview is to check the quality of learning on topics: unit testing in React, functional programming concepts, component composition and one-way data flow, rendering and reconciliation, and effects and lifecycle.

## Interview questions list

### Testing in React
  1. What is the difference between unit tests and integration tests, and where do React Testing Library tests typically fall?
  2. Why should you test component **behavior and public API** rather than implementation details, and what problem does testing internal state cause during refactoring?
  3. How do you mock an external API call in tests using Jest/Vitest or MSW, and why is it important to avoid real network requests in unit tests?
  4. What coverage metrics does Jest/Vitest report (statements, branches, functions, lines), and what does each measure?

### Functional Programming Concepts
  5. What is a pure function, and why does React require components to behave like pure functions?
  6. What does "immutability" mean in the context of React state, and why is mutating state directly a problem?
  7. What side effects are allowed during a React component's render phase, and which are not?
  8. What does it mean for a React component to produce the same output for the same input, and why is this important for React's rendering model?
  9. How does React use functional programming principles (pure functions, immutability, composition) to make UI predictable and easier to test?
  10. What is function composition, and how does it manifest in React's component model?

### Components, Composition, and One-Way Data Flow
  11. What is the "Thinking in React" methodology, and what are its key steps?
  12. What does "one-way data flow" mean in React, and why is it preferred over two-way binding?
  13. What is "lifting state up," and when should you apply it?
  14. What is the difference between composition and inheritance in React? Which does React favor and why?
  15. How do you pass content into a component using the `children` prop, and what problem does it solve?
  16. What determines where state should "live" in a React component tree?
  17. How do props differ from state in terms of ownership and mutability?

### Rendering, Reconciliation, Keys, and State Identity
  18. What are the three phases of React's render pipeline (trigger, render, commit)?
  19. What triggers a re-render in React?
  20. Why is the render phase described as a "pure calculation" — what are you not allowed to do during it?
  21. How does React decide which DOM nodes to update during the commit phase?
  22. How does React determine whether a component's state should be preserved or reset when re-rendering?
  23. Why is the `key` prop important when rendering lists, and what happens if you use array indices as keys?
  24. How can you use the `key` prop to intentionally reset a component's state?

### Effects and Lifecycle
  25. What is a React Effect, and what problem does `useEffect` solve?
  26. How does the dependency array in `useEffect` control when the effect runs?
  27. What is a cleanup function in `useEffect`, and when should you use one?
  28. What is an example of a case where you "might not need an Effect" — where should that logic live instead?
  29. What is the difference between an event handler and an Effect in React? When should you use each?
  30. How does `useEffect` relate to the class component lifecycle methods `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`?
