# React Basics 🌟

## Module Overview 📚

This module establishes the conceptual foundations of React development. It covers how React applies functional programming principles to UI construction, how the rendering pipeline works under the hood, and how to manage state correctly — from keeping it local, to lifting it up, to knowing when side effects are truly necessary.

## Learning Objectives 🎯

Students will:

- Understand how functional programming concepts (pure functions, immutability, and composition) shape React's design.
- Write components that are pure and free of side effects during the render phase.
- Apply the "Thinking in React" methodology to decompose a UI and place state correctly.
- Lift state up to a common parent to share data between sibling components.
- Describe React's render-and-commit pipeline and what triggers a re-render.
- Predict when React preserves or resets component state based on render-tree position, and control it with the `key` prop.
- Use `useEffect` correctly to synchronize components with external systems.
- Identify and eliminate unnecessary Effects by moving logic to the render phase or event handlers.

## Approximate Module Completion Time ⏱️

- **[3 hours]**

## Theory 📖

Students are encouraged to study the following resources:

1. **Functional programming concepts:**
   - [Functional programming in React](https://blog.saeloun.com/2024/07/25/functional-programming-in-react/) - [10 minutes]
   - [Lambda Calculus — Computerphile (YouTube)](https://www.youtube.com/watch?v=eis11j_iGMs) - [12 minutes]
   - [Keeping components pure - react.dev](https://react.dev/learn/keeping-components-pure) - [10 minutes]
   - [What Are Pure Functions? — Web Dev Simplified](https://blog.webdevsimplified.com/2020-09/pure-functions/) - [10 minutes]

2. **Components, composition, and one-way data flow:**
   - [Thinking in React - react.dev](https://react.dev/learn/thinking-in-react) - [15 minutes]
   - [Sharing state between components - react.dev](https://react.dev/learn/sharing-state-between-components) - [10 minutes]
   - [Composition vs Inheritance - react.dev](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) - [10 minutes]

3. **Rendering, reconciliation, keys, and state identity:**
   - [Render and Commit - react.dev](https://react.dev/learn/render-and-commit) - [10 minutes]
   - [Preserving and Resetting State - react.dev](https://react.dev/learn/preserving-and-resetting-state) - [10 minutes]
   - [Rendering Lists - react.dev](https://react.dev/learn/rendering-lists) - [10 minutes]

4. **Effects and lifecycle:**
   - [Synchronizing with Effects - react.dev](https://react.dev/learn/synchronizing-with-effects) - [20 minutes]
   - [You Might Not Need an Effect - react.dev](https://react.dev/learn/you-might-not-need-an-effect) - [20 minutes]
   - [Web Dev Simplified: React hooks crash course (Video)](https://frontendmasters.com/tutorials/webdevsimplified/react-hooks/) - [40 minutes]

## Additional Resources 📘

Expand your knowledge with these additional materials:

- [React's official video collection - react.dev](https://react.dev/community/videos)
