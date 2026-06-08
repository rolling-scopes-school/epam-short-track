# Task 6. JS Classes & Inheritance

| Folder Name | Branch      | Coefficient |
|-------------|-------------|-------------|
| /js-classes | js-classes  | 0.4         |

## Task Description

In a single file `index.js`, implement a base class with common methods and two child classes:
- **BaseBuilder** (common methods ES5 style)
- **IntBuilder** (ES6 style)
- **StringBuilder** (ES5 style)

All three classes must be implemented in one `index.js` file using JavaScript.  
Almost all methods should support chaining.  
You may add your own methods and properties, but the methods described below are mandatory.

### Implementation Requirements

- One `index.js` file in the `js-classes` folder.
- One base class with common methods:
    - **BaseBuilder** — implemented in ES5 style (using function constructor and prototype).
- Two child classes inheriting from the base:
    - **IntBuilder** — implemented in ES6 style (using `class`).
    - **StringBuilder** — implemented in ES5 style (using function constructor and prototype).
- All methods except `get` and static methods must support chaining.
- Methods must match the API below.
- **Lazy evaluation**: calculations are performed only when `get()` is called.
- The code must be clean, readable, and follow best practices.

---

### API

#### IntBuilder (ES6 class)

```js
// API:
new IntBuilder(int) // constructor takes starting integer, if not provided starts with 0
.plus(...n)         // takes any number of integers and adds them to the value
.minus(...n)        // takes any number of integers and subtracts them from the value
.multiply(n)        // multiplies the value by n
.divide(n)          // leaves the integer part of dividing the value by n
.mod(n)             // leaves the remainder of dividing the value by n
.get()              // returns the current value
IntBuilder.random(from, to) // static method, returns a random integer in the range [from, to]
```

**Example:**
```js
IntBuilder.random(10, 100); // 42

const intBuilder = new IntBuilder(10); // 10
intBuilder
  .plus(2, 3, 2)    // 17
  .minus(1, 2)      // 14
  .multiply(2)      // 28
  .divide(4)        // 7
  .mod(3)           // 1
  .get();           // -> 1
```

---

#### StringBuilder (ES5 function + prototype)

```js
// API:
new StringBuilder(str)   // constructor takes starting string, if not provided starts with ''
.plus(...str)            // takes any number of strings and concatenates them to the value
.minus(n)                // cuts off n characters from the end of the string
.multiply(int)           // repeats the string int times
.divide(n)               // leaves the first k characters, where k = Math.floor(str.length / n)
.remove(str)             // removes all occurrences of substring str (without using replace)
.sub(from, n)            // leaves a substring starting from 'from' of length n
.get()                   // returns the current value
```

**Example:**
```js
var strBuilder = new StringBuilder('Hello'); // 'Hello'
strBuilder
  .plus(' all', '!')     // 'Hello all!'
  .minus(4)              // 'Hello '
  .multiply(3)           // 'Hello Hello Hello '
  .divide(4)             // 'Hell'
  .remove('l')           // 'He'
  .sub(1,1)              // 'e'
  .get();                // -> 'e'
```

---

### Implementation Details

- All classes must be implemented in a single `index.js` file in the `js-classes` folder.
- No need to export anything.
- Test the classes locally with the examples above before submitting your PR.

---

## Pull Request Requirements

Your Pull Request **must** include:

- Task URL.
- Brief description of the implemented classes and their methods.
- Submission date / deadline.
- Your self-check using checkboxes.

---

## Developer's Diary

While working on this task, keep a [developer's diary](../../modules/diary/README.md). Write down the decisions you made, the approaches you considered, where you got stuck, and how you worked through it.

The diary is not graded. Its purpose is to help you understand your own work more deeply and to give your mentor a basis for a real conversation about the task.

The "Diary" folder can be placed in the root of the project.

---

## Mentor Checklist

**Maximum Score: 100 points**
- Task implementation **20 points**
- Mentor interview **80 points**

| Criteria                                                                                    | Points |
|---------------------------------------------------------------------------------------------|--------|
| The branch is named `js-classes`                                                            | 1      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention) | 2      |
| The `js-classes` folder exists                                                              | 1      |
| The `index.js` file exists in the correct folder                                            | 1      |
| All three classes are implemented in the file                                               | 1      |
| **Base class is implemented and contains common methods**                                   | 2      |
| **Two child classes are implemented and inherit from the base**                             | 1     |
| All methods except `get` and static methods support chaining                                | 2     |
| All methods described in the task are implemented                                           | 2     |
| Lazy evaluation is implemented                                                              | 2     |
| Code is well-structured, readable, and follows best practices                               | 1     |
|                                                                                             |        |
| **PR description includes:**                                                                |        |
| Task URL                                                                                    | 1      |
| Description of classes and methods                                                          | 1      |
| Submission and deadline dates                                                               | 1      |
| Your self-check using checkboxes                                                            | 1      |
|                                                                                             |        |
| **Penalty:**                                                                                |        |
| Fewer than 3 commits in the PR                                                              | -5    |
| Commit after the deadline and before mentor review                                          | -5    |
| The solution contains comments                                                              | -10    |
| The solution contains console.log                                                           | -2    |
| The PR includes more than one required `index.js` file                                      | -10    |

---

## Mentor Interview Topics

After submitting the task, your mentor will ask 2–3 questions from the areas below. Answers account for **~80 points** of the total score, so make sure you can explain the concepts in your own words — not just recite a definition.

### ES5 vs ES6 class syntax
- What is the difference between defining a class using a function constructor (ES5) and using the `class` keyword (ES6)?
- Are ES6 `class` declarations just syntactic sugar? What does JavaScript actually create under the hood?
- Why do we attach methods to `Constructor.prototype` in ES5 instead of defining them inside the constructor function?

### Inheritance
- How do you set up inheritance in ES5 (function constructor + prototype)? Walk through each step required to make a child class inherit from a parent.
- What is `Object.create` and why is it preferred over `new Parent()` when setting up the prototype chain for inheritance?
- What does `Child.prototype.constructor = Child` do, and what breaks if you omit it?
- How does ES6 `extends` and `super()` compare to the manual ES5 inheritance setup?
- What happens if you forget to call `super()` inside an ES6 subclass constructor?

### Prototype chain
- What is the prototype chain? Describe how JavaScript resolves a property lookup step by step.
- What is the difference between `__proto__` and `prototype`?
- How does `instanceof` work, and what does it actually check?

### Method chaining
- How do you implement method chaining? What must each chainable method return and why?
- What is the difference between returning `this` and returning a new instance? When would you choose one over the other?

### Lazy evaluation
- What is lazy evaluation? How does it differ from eager evaluation?
- How is lazy evaluation implemented in your builders — what is deferred, and what triggers the actual computation?
- What are the advantages of lazy evaluation in a builder pattern?

### Static methods
- What is a static method? How do you define one in ES6 and in ES5?
- Can a static method access instance properties via `this`? Why or why not?
- When should a method be static rather than an instance method?

---

## Notes

- The solution must be clean, readable, and follow best practices.
- If any required element is missing or implemented incorrectly, points will be deducted accordingly.
- All requirements regarding style and API are mandatory.
