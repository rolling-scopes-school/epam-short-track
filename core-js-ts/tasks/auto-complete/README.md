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

## Developer's Diary

While working on this task, keep a [developer's diary](../../modules/diary/README.md). Write down the decisions you made, the approaches you considered, where you got stuck, and how you worked through it.

The diary is not graded. Its purpose is to help you understand your own work more deeply and to give your mentor a basis for a real conversation about the task.

The "Diary" folder can be placed in the root of the project.

---

## Mentor Checklist

**Maximum Score: 100 points**

| Criteria                                                                                    | Points |
|---------------------------------------------------------------------------------------------|--------|
| The branch is named `autocomplete`                                                          | 1      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention) | 1      |
| The `autocomplete` folder exists                                                            | 1      |
| The `index.js` file exists in the correct folder                                            | 1      |
| The `index.js` file exports the `createAutoComplete` function                               | 1      |
| The function is implemented using binary search                                             | 4     |
| The function passes all provided tests                                                      | 4     |
| The solution is well-structured, readable, and follow best practices                        | 2     |
|                                                                                             |        |
| **Pull Request description includes all required elements:**                                |        |
| Task URL is included in the PR                                                              | 1      |
| Screenshot of local test results is attached in the PR                                      | 1      |
| Algorithm analysis (Big O) is provided in the PR description                                | 1      |
| Submission and Deadline Dates are included in the PR                                        | 1      |
| Your self-check of the task’s completion using checkboxes is included in the PR             | 1      |
|                                                                                             |        |
| **Penalty:** Commit after the deadline and before mentor review                             | -4    |
| **Penalty:** The solution includes any comments                                             | -10    |
| **Penalty:** The solution includes console.log                                              | -2    |

---

## Mentor Interview Topics

After submitting the task, your mentor will ask 4–5 questions from the areas below. Answers account for **~80 points** of the total score, so make sure you can explain the concepts in your own words — not just recite a definition.

### Binary search
- How does binary search work? Walk through the algorithm step by step.
- What precondition must the input data satisfy for binary search to work correctly?
- What is the time complexity of binary search and why? How does it compare to linear search?
- What happens if the array contains duplicate values?

### Complexity analysis
- What does Big O notation express? What does it mean for an algorithm to be O(log n) vs O(n) vs O(n log n)?
- What is the time complexity of your `createAutoComplete` solution in the worst case? Account for both the search phase and collecting the results.

### Strings and lexicographic ordering
- How are strings compared in JavaScript? What determines whether `"apple" < "banana"` is true?
- Why does lexicographic ordering make binary search applicable to string prefix matching?
- What edge cases in string comparison could affect your implementation (e.g. case sensitivity, empty prefix, Unicode)?

### JavaScript fundamentals
- Your function returns another function — what is this pattern called and how does it work?
- What is a closure? How does `createAutoComplete` rely on one?
- What array methods did you use, and what is their time complexity?

---

## Notes

- **Binary search is required** for the search algorithm. Any other approach will not receive full points for performance.
- The solution must be well-structured, readable, and follow best practices.
- If any required element is missing or incorrect, points will be deducted accordingly.
