# Task 2. Autocomplete

| Folder Name   | Branch       | Score | Coefficient |
|---------------|--------------|-------|-------------|
| /autocomplete | autocomplete | 100   | 0.3         |

## Task Description

Implement a custom `createAutoComplete` function that efficiently returns all strings from a given array that start with a provided prefix. **You are expected to implement the fastest possible search algorithm, specifically using binary search.** Your solution will be evaluated for both correctness and performance.

### Requirements

- The function should accept an array of strings and return a function that, given a prefix, returns all matching strings.
- The search for matches must be implemented using **binary search** for optimal performance.
- You must provide an analysis of your algorithm’s time complexity (Big O notation) in your Pull Request description.

### Example

```js
const data = [
  'java',
  'javascript',
  'python',
];

const autocomplete = createAutoComplete(data);

autocomplete('ja'); // returns [ 'java', 'javascript' ]
autocomplete('javas'); // returns [ 'javascript' ]
autocomplete('p'); // returns [ 'python' ]
```

### Implementation Details

- Your `index.js` file in the `autocomplete` folder must export the `createAutoComplete` function as follows:

```js
function createAutoComplete(data) {}

module.exports = { createAutoComplete };
```

- You can find [tests and examples here](https://github.com/Shastel/autocomplete-tests).
- **Run all tests locally before submitting your Pull Request.** Your score depends on passing all tests.

---

## Pull Request Requirements

Your Pull Request **must** include:

- Task URL.
- Screenshot showing the result of the local test run.
- Description of the search algorithm used, including its time complexity (Big O notation).
- Submission Date / Deadline Date.
- Your self-check of the task’s completion using checkboxes.

---

## Mentor Checklist

**Maximum Score: 100 points**

| Criteria                                                                                    | Points |
|---------------------------------------------------------------------------------------------|--------|
| The branch is named `autocomplete`                                                          | 5      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention) | 5      |
| The `autocomplete` folder exists                                                            | 5      |
| The `index.js` file exists in the correct folder                                            | 5      |
| The `index.js` file exports the `createAutoComplete` function                               | 5      |
| The function is implemented using binary search                                             | 20     |
| The function passes all provided tests                                                      | 20     |
| The solution is well-structured, readable, and follow best practices                        | 10     |
|                                                                                             |        |
| **Pull Request description includes all required elements:**                                |        |
| Task URL is included in the PR                                                              | 5      |
| Screenshot of local test results is attached in the PR                                      | 5      |
| Algorithm analysis (Big O) is provided in the PR description                                | 5      |
| Submission and Deadline Dates are included in the PR                                        | 5      |
| Your self-check of the task’s completion using checkboxes is included in the PR             | 5      |
|                                                                                             |        |
| **Penalty:** Commit after the deadline and before mentor review                             | -20    |
| **Penalty:** The solution includes any comments                                             | -50    |
| **Penalty:** The solution includes console.log                                              | -10    |
| **Penalty:** The PR includes more then one required `index.js` file                         | -50    |

## Notes

- **Binary search is required** for the search algorithm. Any other approach will not receive full points for performance.
- The solution must be well-structured, readable, and follow best practices.
- If any required element is missing or incorrect, points will be deducted accordingly.
