# Final Interview

The goal of the technical interview is to give opportunity to be prepared to a real React interview.

## Interview questions list

###   Components
  - What is a component?
  - What are the types of Components?
  - What are Controlled and Uncontrolled components? When should you use one over the other?

### JSX
  - What is JSX?
  - Why is it used?
  - What are JSX rules?
  - Embedded JS expressions, attributes
  - React Fragment

### State
  - What is state? 
  - How to create and manage state in Class-Based Components?
  - What is the difference between props and state?

### useState
  - What does it return?
  - What are the arguments useState can accept?
  - How does a function passed as a parameter in useState behave?
  - Discussion of stateful and stateless components.
  - What is the difference between passing a value and a function to setValue?

### Component lifecycle
  - What are the phases of a component's render lifecycle?
  - How can we interact with a component during specific phases of its lifecycle (class vs. functional components)?
  - What triggers re-rendering? 
  - What are Error Boundaries?
  - How to implement Error Boundary in a functional component?
  - Which types of errors do they catch?
  - How to catch other types of errors?

### Hooks
  - What are Hooks?
  - Rules of hooks.
  - Types of hooks.
  - What are some examples of hooks, and how do they work?
  
### Components composition
  - Decomposition vs. Inheritance
  - What is props.children, and when is it passed to a component?
  - What is prop drilling?
  - What is state lifting?
  
### React DOM
  - What is useRef hook?
  - What is it used for?
  - What does it accept and return?
  - Does the value of a ref change between renders? 
  - How to create refs for class components?
  - When is it better to use refs?
  - How to pass refs to custom components?
  - What are Synthetic Events?
  - How to access the native event?
  - How to capture events in the capture phase?

### ReactCode Reuse Patterns
  - Custom Hooks: What are they, and why are they needed?
  - Why do hooks start with "use"?
  - What is a Higher-Order Component (HOC)? When is it used?
  - What is Render Props? When is it used?
  
### Context API
  - What is it, and why is it used?
  - How to attach Context API to the application and use it?
  - Is it possible to update context dynamically?
  - How to use Context.Consumer?

### Performance optimizations
  - Hooks optimizing performance: useMemo, useCallback
  - React.memo usage and alternatives for class components.
  - Why is it necessary to use unique keys in lists?
  - React.lazy and Suspense
  - React Profile (optional)

### Virtual DOM
  - What is it?
  - What’s the difference between the real and virtual DOM?
  - What is the DOM reconciliation algorithm?
  - Order of operations during reconciliation.

### Redux
  - The three principles of Redux.
  - Describe the core architecture of Redux and its data flow.
  - When to use Redux vs. Context?

### React Redux
  - What are presentational and container components?
  - Redux hooks for React.
  - How to connect Redux to React app?
  - "connect" method (optional)

### Asynchronous Redux
  - What is middleware, and why is it used?
  - What are redux-thunk and redux-saga?
  - How redux-think works under the hood?
  - How to create an asynchronous action?
  
### React Router
  - Web API in React Router.
  - Types of routers and their purposes.
  - Common React Router hooks and their use cases.
  - How to connect Router to React app
  - Base routes configuration

###  Testing Components
  - Overview of React Testing Library (RTL) and Jest.
  - Pros and cons of RTL.
  - Types of rendering during testing.


## Possible practical tasks

- Write a functional and a class-based component.
- Write a component that accepts specific props and embed them in JSX.
- Add a controlled component (e.g., form input).
- Use useEffect to log a value to the console whenever it changes.
- Decompose a component into smaller components.
- Connect a ref to a form and log the form value to the console.
- Create a context with a default value, wrap child components with a provider, pass new values, and subscribe to context changes in a child component.
- Write a test for a React component.

