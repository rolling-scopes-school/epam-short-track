# Task 5. Autocomplete (TypeScript + Trie)

| Folder Name           | Branch               | Score | Coefficient |
|-----------------------|----------------------|-------|-------------|
| /ts-autocomplete-trie | ts-autocomplete-trie | 100   | 0.7         |

## Task Description

Implement the `createAutoComplete` function in **TypeScript** that efficiently returns all strings from a given array that start with a provided prefix.  
**Your solution must be implemented using a Prefix Tree (Trie)** for optimal search performance.
Use Class syntax to define the Trie structure and its methods.

**Learn more about Trie:**
- [Prefix Tree — detailed description and JS implementation](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/trie/README.ru-RU.md#%D0%BF%D1%80%D0%B5%D1%84%D0%B8%D0%BA%D1%81%D0%BD%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE)
- [Habr article: Prefix Tree (Trie) — theory and practice](https://habr.com/ru/companies/timeweb/articles/828068/)

### Requirements

- The function should accept an array of strings and return a function that, given a prefix, returns all matching strings.
- The search for matches **must be implemented using a Prefix Tree (Trie)** for optimal performance.
- Binary search or any other approach is not allowed—only Trie.
- You must provide an analysis of your algorithm’s time complexity (Big O notation) in your Pull Request description.

### Example

```ts
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

- Your `index.ts` file in the `ts-autocomplete-trie` folder must export the `createAutoComplete` function as follows:

```ts
function createAutoComplete(data: string[]): (prefix: string) => string[] {}

export { createAutoComplete };
```

- [Tests and examples are available here](https://github.com/Shastel/autocomplete-tests).
- **Run all tests locally before submitting your Pull Request.** Your score depends on passing all tests.

---

## Project Setup and Building JavaScript with Vite

To work with TypeScript and build your JavaScript output, you should use [Vite](https://vitejs.dev/), a fast and modern build tool.

### 1. Initialize the Project

If you haven't already, create your project folder and initialize it:

```bash
npm create vite@latest ts-autocomplete-trie -- --template vanilla-ts
cd ts-autocomplete-trie
npm install
```

This will set up a Vite project with TypeScript support.

### 2. Project Structure

Place your solution in the `ts-autocomplete-trie` folder, and ensure your main code is in `index.ts`:

```
/ts-autocomplete-trie
  /index.ts
  /package.json
  /tsconfig.json
  ...
```

### 3. Build JavaScript Output

To compile your TypeScript code to JavaScript, use the Vite build command:

```bash
npm run build
```

The compiled JavaScript files will be output to the `dist` directory by default.

### 4. Running and Testing

- You can run your code using Node.js or set up scripts as needed.
- To run tests, follow the instructions in the [autocomplete-tests](https://github.com/Shastel/autocomplete-tests) repository.

---

### Code Formatting and Linting 🎨🔍

**Prettier and ESLint Configuration**
- Prettier must be correctly set up with the script `prettier` for auto-formatting in `package.json`.
- ESLint must be configured with the `strict` rule enabled for TypeScript.
    - A `lint` script in `package.json` should run ESLint checks.

You can use the settings from https://github.com/PoMaKoM/prettier-demo and watch the video https://youtu.be/OLKZBiqD4iU to better understand Prettier settings.

### Code Quality and Structure

**TypeScript Usage and Functions**
- No usage of `any` type in TypeScript.
- TypeScript must be configured with strict mode enabled, ensuring robust type-checking and improved code quality.
- Code should be divided into small methods (≤ 40 lines each) with clear names and purposes.

**Code Duplication and Magic Numbers**
- Minimal or no code duplication.
- No magic numbers or strings in the code.

**Bundling and Modular Architecture**
- Webpack or another bundler must be used, resulting in a single JS file.


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
| The branch is named `ts-autocomplete-trie`                                                  | 2      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention) | 5      |
| The `ts-autocomplete-trie` folder exists                                                    | 2      |
| The `index.ts` file exists in the correct folder                                            | 2      |
| The `index.ts` file exports the `createAutoComplete` function                               | 2      |
| The function is implemented using a Trie (Prefix Tree) class                                | 20     |
| The function passes all provided tests                                                      | 20     |
| The solution is well-structured, readable, and follows best practices                       | 10     |
| **ESLint is configured for TypeScript, and there are no errors**                            | 5      |
| **The TypeScript config includes `"strict": true`**                                         | 5      |
| **The `.prettierrc.json` file added**                                                       | 5      |
| **The `package.json` file includes scripts: "build", lint", "prettier"**                    | 5      |
| **All dependencies added as dev dependencies**                                              | 5      |
|                                                                                             |        |
| **Pull Request description includes all required elements:**                                |        |
| Task URL is included in the PR                                                              | 2      |
| Screenshot of local test results is attached in the PR                                      | 2      |
| Algorithm analysis (Big O) is provided in the PR description                                | 4      |
| Submission and Deadline Dates are included in the PR                                        | 2      |
| Your self-check of the task’s completion using checkboxes is included in the PR             | 2      |
|                                                                                             |        |
| **Penalty:**                                                                                |        |
| Less than 3 commits in the PR                                                               | -20    |
| Commit after the deadline and before mentor review                                          | -20    |
| The solution includes any comments                                                          | -50    |
| The solution includes console.log                                                           | -10    |
| Code is not fully covered with types                                                        | -50    |
| ESLint errors                                                                               | -10    |
| Use of the `any` type                                                                       | -100   |


## Notes

- **Trie (Prefix Tree) is required** for the search algorithm. Any other approach will not receive full points for performance.
- The solution must be well-structured, readable, and follow best practices.
- If any required element is missing or incorrect, points will be deducted accordingly.
