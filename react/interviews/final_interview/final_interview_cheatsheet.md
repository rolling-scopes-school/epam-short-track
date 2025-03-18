### Components
- **What is a Component?**  

A component in React is a reusable, independent piece of the UI that defines how a particular    section of the application should look and behave. Components act as the building blocks of a    React application and can be thought of as JavaScript functions or classes that return           HTML-like code (via JSX) to render in the browser.
    Components can hold their own state and can receive data as props, enabling dynamic and interactive user interfaces.

---

- **What are the Types of Components?**  

    There are primarily two main types of components in React:
    - Functional Components:  
    
        Functional components are JavaScript functions that accept props and return JSX.
        They are simpler, lighter, and easier to write.
        Originally, functional components were stateless, but since React hooks were introduced (e.g., useState, useEffect), functional components can now manage state and handle side effects.
        ```javascript
        const Greeting = (props) => {
          return <h1>Hello, {props.name}!</h1>;
        };
        ```

    - Class Components:  
    
        Class components are ES6 classes that extend React.Component.
        They are more powerful as they can handle state and lifecycle methods directly.
        Before React Hooks were introduced, class components were used for managing state and lifecycle methods.
        ```javascript
        class Greeting extends React.Component {
            render() {
              return <h1>Hello, {this.props.name}!</h1>;
            }
        }
        ```

---

- **What are Controlled and Uncontrolled Components?**
  - Controlled Components:
      A controlled component is one where the form data is handled by the React component’s state.
      React takes control of the input fields by maintaining their values in state and updating them as necessary.
  - Uncontrolled Components:
      An uncontrolled component is one where the form data is handled by the DOM itself instead of React's state.
      Data is retrieved from the DOM using ref rather than controlled state.

---

- **When Should You Use One Over the Other?**  

    Controlled Components are recommended when working on complex forms with validation or when the app’s logic requires tight control over form inputs.
    Uncontrolled Components can be used when you need simple form input handling without much logic or validation (e.g., pure JavaScript forms).

### JSX
- **What is JSX?**  

    JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly in JavaScript files. JSX makes it easier to describe the structure and appearance of your UI using a familiar syntax.

---

- **Why is it Used?**  

    JSX makes it easier to write and create React elements in a more readable and intuitive way.
    It combines the rendering logic (HTML structure) with dynamic behavior (JavaScript code), which is central to a React component.
    It improves developer productivity and provides a clearer structure for building components.

---

- **What are JSX Rules?**
  - HTML Tags vs React Components:
      Tags starting with lowercase letters (like <div>) refer to regular HTML elements.
      Tags starting with uppercase letters (like <Greeting>) refer to React components.
  - JSX Must Have a Single Parent Element.
  - Use {} for JavaScript Expressions.
  - Tags that do not need children, like <img />, must be self-closed.
  - JSX uses camelCase for HTML attributes (e.g., className, onClick).

---

- **Embedded JavaScript Expressions:**  

    In JSX, {} is used for embedding JavaScript expressions. You can use variables, functions, conditions, or any valid JavaScript code.
    But you can use only expressions, that means that loops, if..else blocks, assignment on top level in JSX are not available.

---

- **React Fragment**  

    React fragments (<React.Fragment> or shorthand <>) allow you to group multiple elements inside a single parent without adding extra nodes to the DOM.
    ```javascript
        return (
          <>
            <h1>Welcome</h1>
            <p>This is a React fragment.</p>
          </>
        )
    ```

---

### State
- **What is State?** 
  - State is an object managed within a React component that represents the dynamic data of the component. It allows a component to change what is displayed based on user interaction or other events.
  - State is mutable (it can change over time).
  - Changes to state trigger re-rendering of the component to reflect updated data.

---

- **How to Create and Manage State in Class-Based Components?** 

    In class-based components, state is initialized and managed directly within the class using the state property and setState().
    ```javascript
    class Counter extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 }; // Initialize state
      }

      increment = () => {
        this.setState({ count: this.state.count + 1 }); // Update state
      };

      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
          </div>
        );
      }
    }
    ```

---

- **What is the Difference Between Props and State?**
  - Aspect:	Props	State
  - Definition:	Props are inputs to a component passed from its parent.	State is internal data managed by a component.
  - Mutability:	Props are immutable (cannot be changed by the child component).	State is mutable (can be modified within the component).
  - Usage Scope:	Props are used to pass data from a parent to a child.	State is used to manage dynamic behavior within a component.
  - Control:	Controlled by the parent component.	Controlled by the component itself.

---

### **useState**

- **What does it return?**  

    The `useState` hook returns an array with two elements:
    - The **current state value** (initially set to the value you pass to `useState`).
    - A **state updater function** (`setValue`) that allows you to update the state.  
    
    ```javascript
    const [count, setCount] = useState(0);
    ```

    Here:  
    - `count` holds the current state value (`0` initially).  
    - `setCount` is a function that lets you update `count`.  

---

- **What are the arguments `useState` can accept?**  

    The `useState` hook accepts a **single argument**, which is the initial state value. This can be:  

    - Any **primitive value** like a string, number, or boolean:  
       ```javascript
       const [name, setName] = useState("John");
       ```

    - A **complex data type** like an array or object:  
       ```javascript
       const [profile, setProfile] = useState({ name: "John", age: 25 });
       ```

    - A **function** that returns the initial state value (useful for expensive calculations):  
       ```javascript
       const [count, setCount] = useState(() => computeExpensiveValue());
       ```

---

- **How does a function passed as a parameter in `useState` behave?**  

    If you pass a function to `useState`, it is executed **only once** during the initial render to calculate the initial state. This behavior is beneficial when the initial state is computationally expensive to derive.  

    ```javascript
    const [count, setCount] = useState(() => {
       console.log("Calculating...");
       return expensiveComputation();
    });
    ```

    In this case, `"Calculating..."` will only be logged once, even if the component re-renders later.  

---

- **Discussion of Stateful and Stateless Components**  

    - **Stateful Components**:  
      These are components that manage their own `state` and behavior internally. They are dynamic and keep track of UI changes over time. Both **class components** and **functional components using hooks** (like `useState`) can be stateful.  

      ```javascript
      const Counter = () => {
        const [count, setCount] = useState(0); // Stateful component
        return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
      };
      ```

    - **Stateless Components**:  
      These components do not manage their own state and instead rely entirely on `props` provided by a parent component. They are simpler and primarily used for rendering static or purely visual UI.  

      ```javascript
      const Greeting = ({ name }) => <h1>Hello, {name}!</h1>; // Stateless component
      ```

---

- **What is the difference between passing a value and a function to `setValue`?**  

    The `setValue` function accepts either a **new value** or a **function**. The behavior differs in these cases:  

    - **Passing a Value**: Directly replaces the current state with the new value.  
       Example:  
       ```javascript
       setCount(5); // Sets the state to 5, irrespective of the previous state
       ```

    - **Passing a Function**: Receives the previous state as an argument, allowing you to calculate the new state dynamically based on the old state. This is the safer option when the new state depends on the previous one.  
       Example:  
       ```javascript
       setCount((prevCount) => prevCount + 1); // Increments the previous state by 1
       ```

---

### **Component Lifecycle**

- **What are the phases of a component's render lifecycle?**  

    A React component's lifecycle consists of three main phases:  
    1. **Mounting** (when the component is added to the DOM):  
       - This includes methods like `constructor`, `componentDidMount` (class components), or `useEffect` with no dependency array (functional components).  

    2. **Updating** (when the props or state of a component change):  
       - This includes methods like `componentDidUpdate` (class components) or `useEffect` with specific dependencies (functional components).  

    3. **Unmounting** (when the component is removed from the DOM):  
       - This includes `componentWillUnmount` (class components) or the cleanup function returned by `useEffect` (functional components).  

---

- **How Can We Interact with a Component in Specific Phases?**  

    - In **Class Components**:  
      - `componentDidMount()`: Executed after the component is mounted.  
      - `componentDidUpdate()`: Executed after any update to props or state.  
      - `componentWillUnmount()`: Executed just before the component is unmounted.  

      ```javascript
      class MyComponent extends React.Component {
        componentDidMount() { console.log("Mounted"); }
        componentDidUpdate() { console.log("Updated"); }
        componentWillUnmount() { console.log("Unmounted"); }
      }
      ```

    - In **Functional Components**:  
      Use the `useEffect` hook for similar behavior.  

      ```javascript
      useEffect(() => {
        console.log("Mounted or Updated");

        return () => {
          console.log("Unmounted");
        };
      }, [dependency]); // Dependency controls when the effect runs
      ```

---

- **What triggers re-rendering?**  

    Re-rendering is triggered by:  
    - Changes to **state** (`setState` or `useState`).  
    - Changes to **props** passed from a parent component.  
    - For **parent components**, any changes in their state/props trigger re-renders of child components unless explicitly prevented.  

---

- **What are Error Boundaries?**  

    Error Boundaries are special React components that **catch JavaScript errors** in their child component tree during rendering, lifecycle methods, or inside constructors.  

    They prevent the entire application from crashing and instead display a fallback UI.  

---

- **How to implement Error Boundary in a functional component?**  

    While Error Boundaries are primarily implemented using **class components**, functional components cannot currently serve as Error Boundaries. However, functional components can handle errors via the `ErrorBoundary` component or libraries such as `react-error-boundary`.

---

- **Which types of errors do they catch?**  

    - **Caught**:  
      - Errors in rendering.  
      - Errors in lifecycle methods.  
      - Errors in constructors of child components.  

    - **Not Caught**:  
      - Errors in event handlers (must handle those with `try/catch`).  
      - Errors in asynchronous code like `setTimeout` or `fetch`.  
      - Errors in server-side rendering (SSR).  

---

- **How to Catch Other Types of Errors?**  

    - **Event Handlers**: Use `try/catch` within the function itself.  
       ```javascript
       const handleClick = () => {
         try {
           // Some code that may throw an error
         } catch (error) {
           console.error("Error:", error);
         }
       };
       ```

    - **Asynchronous Errors**: Use `catch` with promises or wrap in a `try/catch` block if using `async/await`.  
       ```javascript
       const fetchData = async () => {
         try {
           const response = await fetch("/api/data");
           const data = await response.json();
         } catch (error) {
           console.error("Error fetching data:", error);
         }
       };
       ```  

---

### **Hooks**

- **What are Hooks?**  

    Hooks are special functions introduced in React 16.8 that allow you to "hook into" React state and lifecycle features inside functional components. They make it possible to use state and other React features (e.g., context, refs, side effects) without having to use class components.  

    Benefits of Hooks:  
    - Simplify component logic by separating stateful behavior from UI logic.  
    - Reuse stateful logic through custom hooks.  
    - Eliminate the need for class components in most cases.  

    ```javascript
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0); // Declare state with the useState hook

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }
    ```

---

- **Rules of Hooks**  

    To work correctly, Hooks must follow specific rules:  
    - **Only Call Hooks at the Top Level**:  
       - Never call hooks inside loops, conditions, or nested functions. They must always be invoked in the same order.  
       - Example of incorrect use:
         ```javascript
         if (someCondition) {
           const [count, setCount] = useState(0); // ❌ Don't do this
         }
         ```

    - **Only Call Hooks from React Functions**:  
       - Hooks can only be used inside functional components or custom hooks, not in regular JavaScript functions or class components.  
       - Example of incorrect use:
         ```javascript
         function regularFunction() {
           const [state, setState] = useState(0); // ❌ Invalid
         }
         ```

    Recommended Rules Enforcements: Use `eslint-plugin-react-hooks` to automatically detect rule violations.

---

- **Types of Hooks**  

    React provides two categories of hooks:  

    - **Basic Hooks**: These are the hooks most frequently used in React development. Examples include:  
      1. `useState` - Manages state in functional components.  
      2. `useEffect` - Handles side effects, such as fetching data or DOM manipulation.  
      3. `useContext` - Accesses values from React's context without passing props.  

    - **Additional Hooks**: These provide useful advanced features:
      1. `useReducer` - Manages more complex state logic (e.g., state with multiple sub-values).  
      2. `useMemo` - Memoizes a computed value to optimize performance.  
      3. `useCallback` - Memoizes a function to avoid unwanted re-creations.  
      4. `useRef` - Accesses and manipulates DOM elements or persists mutable data across renders.  

    - **Custom Hooks**: These are user-defined hooks that allow developers to encapsulate reusable logic.  

---

- **What are some examples of hooks, and how do they work?**  

    - **`useState` Example**:  
       Manages local state in a functional component.  
       ```javascript
       const [count, setCount] = useState(0);
       ```

    - **`useEffect` Example**:  
       Executes side effects during lifecycle changes (e.g., on mount, update, unmount).  
       ```javascript
       useEffect(() => {
         console.log("Component mounted or updated");
         return () => console.log("Component unmounted");
       }, []);
       ```

    - **`useContext` Example**:  
       Shares data across components without passing props explicitly.  
       ```javascript
       const user = useContext(UserContext);
       ```

    - **Custom Hook Example**:  
       Encapsulates common logic for easy reuse:
       ```javascript
       const useCounter = () => {
         const [count, setCount] = useState(0);
         const increment = () => setCount(count + 1);
         return { count, increment };
       };
       ```

---

### **Component Composition**

- **Decomposition vs. Inheritance**  

    - **Decomposition (Composition)**:  
      React promotes **composition** where the UI is broken into smaller, reusable components. Each component is responsible for a small part of the overall application, and components can combine to form complex UIs.  

      ```javascript
      const Header = () => <h1>App Header</h1>;
      const Footer = () => <p>App Footer</p>;

      const App = () => (
        <div>
          <Header />
          <Footer />
        </div>
      );
      ```

    - **Inheritance**:  
      React discourages inheritance because it can lead to tight coupling and less reusable code. Instead of extending components through inheritance, React recommends "children" and props for flexibility.  

      ```javascript
      class Animal extends React.Component {
        eat() {
          console.log("Eating...");
        }
      }

      class Dog extends Animal {
        bark() {
          console.log("Barking...");
        }
      }
      ```

---

- **What is `props.children`, and when is it passed to a Component?**  

    - `props.children` is a special prop in React that allows components to receive and display the content between their opening and closing tags.

      ```javascript
      const Container = ({ children }) => <div className="container">{children}</div>;

      const App = () => (
        <Container>
          <h1>Hello, World!</h1>
        </Container>
      );
      ```

      In this example, the `h1` element is passed as `props.children` to the `Container` component.

---

- **What is prop drilling?**  

    - Prop drilling refers to the process of passing data from parent components to child components deep in the component tree, even if intermediate components do not need the data.  

    - This can lead to unnecessarily complex code and difficulty in maintaining components because intermediate components become bloated with props they don’t use directly.  

      ```javascript
      const Grandparent = () => {
        const user = "John";
        return <Parent user={user} />;
      };

      const Parent = ({ user }) => <Child user={user} />;
      const Child = ({ user }) => <p>User: {user}</p>;
      ```

    - **Solution**: Use React Context or state management libraries (e.g., Redux) to avoid prop drilling by providing global or shared state directly to child components.

---

- **What is state lifting?**  

    - **State Lifting** involves moving the state from a child component to a shared parent component to allow multiple child components to access and synchronize the same state.  

    - This pattern is used when two or more components need to share the same state, and that state cannot be passed directly between them without involving a parent.  

      ```javascript
      const Parent = () => {
        const [count, setCount] = useState(0);

        return (
          <div>
            <ChildButton count={count} setCount={setCount} />
            <ChildDisplay count={count} />
          </div>
        );
      };

      const ChildButton = ({ count, setCount }) => (
        <button onClick={() => setCount(count + 1)}>Increment</button>
      );

      const ChildDisplay = ({ count }) => <p>Count: {count}</p>;
      ```

      In this example, the `count` state is managed by the parent, while child components communicate through props passed by the parent.

---

### **React DOM**

- **What is `useRef` Hook?**  

    The `useRef` hook is a React hook that provides a way to reference a value, an object, or a DOM element without triggering a re-render when the referenced value changes.  

    ```javascript
    const inputRef = useRef(null);
    ```

---

- **What is it used for?**  

    `useRef` has several key use cases:  
    - Accessing and manipulating DOM elements directly (like an `input` field).  
    - Persisting values across renders without triggering a re-render (e.g., storing a timer ID).  
    - Creating mutable objects to hold references for complex operations.  

    ```javascript
    const inputRef = useRef();

    const focusInput = () => {
      inputRef.current.focus();
    };

    return <input ref={inputRef} type="text" />;
    ```

---

- **What does it accept and return?**  

    - **Accepts**: An initial value (can be any value, including `null`, primitives, objects, or functions).  
      Example: `useRef(0)` or `useRef(null)`  

    - **Returns**: An object with a `current` property that references the given value.  
      Example:  
      ```javascript
      const ref = useRef(0);
      console.log(ref.current); // Logs 0
      ```

---

- **Does the value of a ref change between renders?**  

    No, the value of a ref does not change between renders unless explicitly modified. Updating a ref's `current` property does not trigger a re-render of the component.  

    ```javascript
    const countRef = useRef(0);

    const incrementCount = () => {
      countRef.current += 1; // Ref updated, but no re-render happens
    };
    ```

---

- **How to create refs for Class Components?**  

    For class components, React provides the static `React.createRef()` API to create refs. Each component instance has its own ref object, which can be accessed via the `current` property.  

    ```javascript
    class App extends React.Component {
      constructor(props) {
        super(props);
        this.inputRef = React.createRef();
      }

      focusInput = () => {
        this.inputRef.current.focus();
      };

      render() {
        return <input ref={this.inputRef} type="text" />;
      }
    }
    ```

---

- **When is it better to use refs?**  

    Use refs in the following scenarios:  
    - When you need to directly interact with the DOM (e.g., focus, animations).  
    - To store mutable data that does not trigger re-renders (e.g., timer IDs).  
    - To implement imperative logic, such as integrating third-party libraries.  

    ```javascript
    const videoRef = useRef();

    const playVideo = () => {
      videoRef.current.play();
    };

    return <video ref={videoRef}>...</video>;
    ```

---

- **How to pass refs to Custom Components?**  

    - To pass a ref to a custom component, use the `forwardRef` API. This allows the parent component to expose refs to the child component’s DOM. In React v19 this is not necessary, you can pass ref as a usual prop.

    ```javascript
    const CustomComponent = React.forwardRef((props, ref) => (
      <input ref={ref} type="text" {...props} />
    ));

    const App = () => {
      const ref = React.useRef();
      return <CustomComponent ref={ref} />;
    };
    ```

---

- **What are Synthetic Events?**  

    Synthetic events are React’s wrapper around native browser events. They provide a consistent cross-browser interface and enable React to manage event delegation efficiently. 

---

- **How to access the Native Event?**  

    The native event is accessible via the `nativeEvent` property of the React synthetic event.  
    
    ```javascript
    const handleClick = (event) => {
      console.log(event.nativeEvent); // Logs the browser's native event object
    };

    return <button onClick={handleClick}>Click Me</button>;
    ```

---

- **How to capture events in the Capture Phase?**  

    Use the `onClickCapture` (or similar event handlers) attribute for capturing events during the capture phase.  
    
    ```javascript
    return (
      <div onClickCapture={() => console.log("Capture phase")}>
        <button onClick={() => console.log("Bubbling phase")}>Click Me</button>
      </div>
    );
    ```

---

### **React Code Reuse Patterns**

- **Custom Hooks: What are they, and why are they needed?**  

    Custom hooks allow you to encapsulate reusable logic in a function that starts with `use`. They’re used to share stateful or side-effect logic across multiple components in a readable and modular way.  

    ```javascript
    const usePagination = (currentPage, totalPages) => {
      // Add reusable logic
      return { nextPage, prevPage };
    };
    ```

---

- **Why do Hooks start with "use"?**  

    Hooks must start with `"use"` to help React identify them. React uses this naming convention to enforce rules like not calling hooks inside regular functions and ensuring correct functionality during rendering and updates.

---

- **What is a Higher-Order Component (HOC)? When is it used?**  

    A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new component that enhances or modifies the original component’s behavior. It is usually used for reusing logic like authentication, logging, or theming.  

    ```javascript
    const withAuth = (Component) => {
      return (props) => {
        const isAuthenticated = true; // Just an example
        return isAuthenticated ? <Component {...props} /> : <p>Access Denied</p>;
      };
    };

    const Dashboard = () => <h1>Dashboard</h1>;
    const ProtectedDashboard = withAuth(Dashboard);
    ```

---

- **What is Render Props? When is it used?**  

    Render Props is a pattern where a component receives a function as a prop and uses it to determine what should be rendered dynamically.  

    ```javascript
    const MouseTracker = ({ render }) => {
      const [position, setPosition] = React.useState({ x: 0, y: 0 });

      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };

      return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
    };

    const App = () => (
      <MouseTracker render={(position) => <p>Mouse Position: {position.x}, {position.y}</p>} />
    );
    ```

    Render Props are used when you want to share dynamic state or behavior among components.

---

### **Context API**

- **What is it, and why is it used?**  

    The Context API is a React feature that allows you to share global data (e.g., theming, user authentication, language preferences) across components **without prop drilling** (manually passing props down through every level of the component tree).  

    It solves the issue of having to pass data through multiple levels of unrelated components, making it easier to manage shared state at a global level.  

    Example Use Case: Sharing a user's authentication state across an app.  

---

- **How to attach Context API to the application and use it?**  

    - **Create a Context**: Use `React.createContext()` to create a new context object.  
       ```javascript
       const UserContext = React.createContext();
       ```

    - **Provide Context**: Use the `Provider` component to wrap the parts of the app that need access to the context.  
       ```javascript
       const App = () => {
         const user = { name: "John", email: "john@example.com" };

         return (
           <UserContext.Provider value={user}>
             <Dashboard />
           </UserContext.Provider>
         );
       };
       ```

    - **Consume Context**: Access the context in child components using `useContext` (in functional components) or `Context.Consumer` (more verbose, but useful for class components).  
       ```javascript
       const Dashboard = () => {
         const user = React.useContext(UserContext);
         return <h1>Welcome, {user.name}</h1>;
       };
       ```

---

- **Is it possible to update context dynamically?**  

    Yes, the context value passed to the `Provider` can be updated dynamically. Typically, you would manage the state in the parent component and pass both the value and the updater function through the context.  

    ```javascript
    const UserContext = React.createContext();

    const App = () => {
      const [user, setUser] = React.useState({ name: "John", email: "john@example.com" });

      return (
        <UserContext.Provider value={{ user, setUser }}>
          <Profile />
        </UserContext.Provider>
      );
    };

    const Profile = () => {
      const { user, setUser } = React.useContext(UserContext);

      const updateName = () => setUser({ ...user, name: "Jane" });

      return (
        <div>
          <p>Name: {user.name}</p>
          <button onClick={updateName}>Change Name</button>
        </div>
      );
    };
    ```

---

- **How to use `Context.Consumer`?**  

    `Context.Consumer` is a React component that subscribes to a context and accesses its value. It is a more verbose alternative to `useContext`, but is necessary in class components or when functional components need access to multiple contexts.  

    ```javascript
    const Dashboard = () => {
      return (
        <UserContext.Consumer>
          {(user) => <h1>Welcome, {user.name}</h1>}
        </UserContext.Consumer>
      );
    };
    ```

---

### **Performance Optimizations**

- **Hooks Optimizing Performance: `useMemo`, `useCallback`**  

    - **`useMemo`**: Memoizes the result of a computation to avoid recalculating it on every render.  
    
      ```javascript
      const expensiveCalculation = (num) => {
        console.log("Computing...");
        return num * 2;
      };

      const App = () => {
        const [count, setCount] = React.useState(0);
        const memoizedValue = React.useMemo(() => expensiveCalculation(count), [count]);

        return <p>Result: {memoizedValue}</p>;
      };
      ```

    - **`useCallback`**: Memoizes callback functions to prevent unnecessary re-creations on every render, especially when passing callbacks to child components.  
  
      ```javascript
      const Button = React.memo(({ onClick }) => {
        console.log("Button re-render");
        return <button onClick={onClick}>Click Me</button>;
      });

      const App = () => {
        const [count, setCount] = React.useState(0);

        const handleClick = React.useCallback(() => setCount(count + 1), [count]);

        return <Button onClick={handleClick} />;
      };
      ```

---

- **React.memo Usage and alternatives for Class Components**  

    - **`React.memo`**: A higher-order component that memoizes functional components, preventing unnecessary re-renders if props don’t change.  
      
      ```javascript
      const Component = React.memo(({ data }) => {
        console.log("Rendered");
        return <p>{data}</p>;
      });

      const Parent = () => {
        const [count, setCount] = React.useState(0);
        return <Component data="Hello" />;
      };
      ```

    - **Class Component Alternative**: Use `shouldComponentUpdate` or `React.PureComponent` to achieve a similar effect.  
      ```javascript
      class Component extends React.PureComponent {
        render() {
          console.log("Rendered");
          return <p>{this.props.data}</p>;
        }
      }
      ```

---

- **Why is it necessary to use unique keys in lists?**  

    Keys help React identify which items in a list have changed, been added, or been removed. Without unique keys, React re-renders the entire list, which can lead to performance issues and bugs (e.g., incorrect state preservation).  

      ```javascript
      const items = [1, 2, 3, 4];
      return items.map((item) => <li key={item}>{item}</li>);
      ```

    - **Keys Should Be Unique and Stable**: Avoid using array indices as keys if items can be reordered or removed.

---

- **React.lazy and Suspense**  

    - **`React.lazy`**: Enables code-splitting by dynamically importing components. These lazy-loaded components are split into separate chunks and only loaded when needed.  
      
      ```javascript
      const LazyComponent = React.lazy(() => import("./LazyComponent"));

      const App = () => (
        <React.Suspense fallback={<p>Loading...</p>}>
          <LazyComponent />
        </React.Suspense>
      );
      ```

    - **`React.Suspense`**: Provides a fallback UI (like a loading spinner) while lazy-loaded components are still being fetched.  

---

- **React Profiler (Optional)**  

    The React Profiler is a tool that allows developers to measure the performance of their React applications by analyzing how often components render and how much time rendering takes.  

    - **How to Use It?**  
      Enable the React Developer Tools in your browser and look for the "Profiler" tab.  
      
    - **Profiler API (for Programmatic Use)**:  
      React provides a `<Profiler>` component to wrap parts of your component tree and collect runtime performance data.  
        
      ```javascript
      const App = () => {
        const onRenderCallback = (id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        };

        return (
          <React.Profiler id="App" onRender={onRenderCallback}>
            <MyComponent />
          </React.Profiler>
        );
      };
      ```
---