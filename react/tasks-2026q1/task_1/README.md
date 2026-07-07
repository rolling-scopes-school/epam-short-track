# Task 1. React Class Components

| Folder Name | Branch        | Coefficient |
|-------------|---------------|-------------|
| task_1      | react-task-1  | 0.3         |


**Task:** [React Class Components — Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md)

Build a search application using React **class components**, TypeScript, and Vite. The app fetches data from a public RESTful API (PokéAPI, SWAPI, or STAPI), displays search results, persists search terms to `localStorage`, shows loading/error states, and includes an Error Boundary with a fallback UI.

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

### Class Components vs Functional Components
- What is the difference between a class component and a functional component in React?
- Why does a class component extend `React.Component`? What does that base class provide?
- What is the role of the `constructor` in a class component, and when do you need to call `super(props)`?
- When would you still choose a class component today over a functional one?

### State and `setState`
- How do you initialize and update state in a class component?
- Is `setState` synchronous or asynchronous? What are the implications?
- What happens if you call `setState` inside `render`? Why is that a problem?
- How do you update state based on the previous state value safely?

### Lifecycle Methods
- What are the three main lifecycle phases of a React class component?
- When is `componentDidMount` called? What is it typically used for?
- What is `componentDidUpdate(prevProps, prevState)`? How do you avoid infinite loops inside it?
- When is `componentWillUnmount` called? What kind of cleanup should happen there?
- What does `shouldComponentUpdate` do, and how does it relate to performance?

### Error Boundaries
- What is an Error Boundary? What problem does it solve?
- Why can't a functional component (without hooks) act as an Error Boundary?
- What types of errors does an Error Boundary NOT catch (e.g. event handlers, async code, server-side rendering)?

### Props, Data Flow, and TypeScript
- What is the difference between `props` and `state`? Which one is mutable from within the component?
- How do you pass a callback from a parent class component to a child so the child can report changes?

### Local Storage and Side Effects
- Where in the class component lifecycle is the right place to read from `localStorage`? To write to it?
- How do you handle the case where `localStorage` contains stale or malformed data?
- What is the difference between triggering a side effect in the constructor vs. `componentDidMount`?
