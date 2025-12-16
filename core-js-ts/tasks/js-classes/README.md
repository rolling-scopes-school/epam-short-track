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

## Mentor Checklist

**Maximum Score: 100 points**

| Criteria                                                                                    | Points |
|---------------------------------------------------------------------------------------------|--------|
| The branch is named `js-classes`                                                            | 2      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention) | 5      |
| The `js-classes` folder exists                                                              | 2      |
| The `index.js` file exists in the correct folder                                            | 2      |
| All three classes are implemented in the file                                               | 2      |
| **Base class is implemented and contains common methods**                                   | 4      |
| **Two child classes are implemented and inherit from the base**                             | 15     |
| All methods except `get` and static methods support chaining                                | 10     |
| All methods described in the task are implemented                                           | 20     |
| Lazy evaluation is implemented                                                              | 20     |
| Code is well-structured, readable, and follows best practices                               | 10     |
|                                                                                             |        |
| **PR description includes:**                                                                |        |
| Task URL                                                                                    | 2      |
| Description of classes and methods                                                          | 2      |
| Submission and deadline dates                                                               | 2      |
| Your self-check using checkboxes                                                            | 2      |
|                                                                                             |        |
| **Penalty:**                                                                                |        |
| Fewer than 3 commits in the PR                                                              | -20    |
| Commit after the deadline and before mentor review                                          | -20    |
| The solution contains comments                                                              | -50    |
| The solution contains console.log                                                           | -10    |
| The PR includes more than one required `index.js` file                                      | -50    |

---

## Notes

- The solution must be clean, readable, and follow best practices.
- If any required element is missing or implemented incorrectly, points will be deducted accordingly.
- All requirements regarding style and API are mandatory.
