# Task 4. TS-Custom-lodash

| Folder Name      | Branch           | Score | Coefficient |
|------------------|------------------|-------|-------------|
| /ts-custom-lodash| ts-custom-lodash | 100   | 0.7         |

## Task Description

Your task is to implement 'custom' version of lodash library following next requirements:

1. Usage of methods from ```Array.prototype.*``` or ```Object.prototype.*``` is **strictly forbidden**.
2. You can create your own additional service functions (if needed).
3. You should use ES6+ features (any feature which supported by latest stable Chrome).
4. Lodash chain is out of scope
5. **Please reuse as much of your code as possible**

### Requirements

- Add a TypeScript configuration file (`tsconfig.json`):
```json
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "sourceMap": true
  }
}
```
- Set up ESLint for TypeScript with the `no-explicit-any` rule enabled. There must be no ESLint errors.
```ts
export default tseslint.config({
  rules: {
    "@typescript-eslint/no-explicit-any": "error"
  }
});
```
- Implement each function into its own file named after the function (e.g., `chunk.ts`, `compact.ts`, etc.).
- Create a `utils` folder for reusable helper functions.
- Add a `types.ts` or `interfaces.ts` file for shared types.
- The `index.ts` file must import and export all functions.
- **Do not use the `any` type anywhere.**
- **Do not use any methods from `Array.prototype.*` or `Object.prototype.*`.**
- **Reuse your code as much as possible.**
- Implement the following functions:

#### Arrays:
- [chunk](https://lodash.com/docs/4.17.11#chunk)
- [compact](https://lodash.com/docs/4.17.11#compact)
- [drop](https://lodash.com/docs/4.17.11#drop)
- [dropWhile](https://lodash.com/docs/4.17.11#dropWhile)
- [take](https://lodash.com/docs/4.17.11#take)
- [filter](https://lodash.com/docs/4.17.11#filter) (**all use cases from the docs**)
- [find](https://lodash.com/docs/4.17.11#find)
- [includes](https://lodash.com/docs/4.17.11#includes)
- [map](https://lodash.com/docs/4.17.11#map)
- [zip](https://lodash.com/docs/4.17.11#zip)

#### Objects:
- [merge](https://lodash.com/docs/4.17.11#merge)
- [omit](https://lodash.com/docs/4.17.11#omit)
- [omitBy](https://lodash.com/docs/4.17.11#omitBy)
- [pick](https://lodash.com/docs/4.17.11#pick)
- [pickBy](https://lodash.com/docs/4.17.11#pickBy)
- [toPairs](https://lodash.com/docs/4.17.11#toPairs)

### Implementation Details

- Each function must be implemented in its own `.ts` file and exported.
- The `index.ts` file in the `ts-custom-lodash` folder must export all functions as follows:

```ts
export { chunk } from './chunk';
export { compact } from './compact';
// ...etc for all functions
```

- All helper functions must be placed in the `utils` folder.
- All shared types/interfaces must be placed in `types.ts` or `interfaces.ts`.
---

## Pull Request Requirements

Your Pull Request **must** include:

- Task URL.
- Description of the code structure and type usage (Types, Generics, etc.).
- Submission Date / Deadline Date.
- Your self-check of the task’s completion using checkboxes.

---

## Mentor Checklist

**Maximum Score: 100 points**

| Criteria                                                                                    | Points |
|---------------------------------------------------------------------------------------------|--------|
| The branch is named `ts-custom-lodash`                                                      | 5      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention) | 5      |
| The `ts-custom-lodash` folder exists                                                        | 5      |
| Each function is in its own `.ts` file                                                      | 5      |
| The `index.ts` file imports and exports all functions                                       | 5      |
| The code uses Types or Interfaces                                                           | 5      |
| The code uses Everyday Types                                                                | 5      |
| The code uses Generics                                                                      | 5      |
| The code uses Union Types                                                                   | 5      |
| The code uses Object Types                                                                  | 5      |
| The code uses Function Types                                                                | 5      |
| The code follows clean code principles and maximizes code reuse                             | 10     |
| ESLint is configured for TypeScript, `no-explicit-any` is enabled, and there are no errors  | 5      |
| The TypeScript config includes `"noImplicitAny": true`                                      | 5      |
|                                                                                             |        |
| **Pull Request description includes all required elements:**                                |        |
| Task URL is included in the PR                                                              | 5      |
| Screenshot of local test results is attached in the PR                                      | 5      |
| Description of code structure and type usage is provided in the PR                          | 5      |
| Submission and Deadline Dates are included in the PR                                        | 5      |
| Your self-check of the task’s completion using checkboxes is included in the PR             | 5      |
|                                                                                             |        |
| **Penalty:**                                                                                |        |
| Less than 3 commits in the PR                                                               | -20    |
| Commit after the deadline and before mentor review                                          | -20    |
| The solution includes any comments                                                          | -50    |
| The solution includes console.log                                                           | -10    |
| Use of the `any` type                                                                       | -50    |
| Do not use any methods from `Array.prototype.*` or `Object.prototype.*`.                    | -50    |
| Code is not fully covered with types                                                        | -50    |
| Missing required TypeScript config flags                                                    | -20    |
| ESLint errors                                                                               | -10    |
| Missing required ESLint rule                                                                | -10    |

## Notes

- **Do not use `any` type anywhere.**
- **Do not use any methods from `Array.prototype.*` or `Object.prototype.*`.**
- The solution must be well-structured, readable, and follow best practices.
- If any required element is missing or incorrect, points will be deducted accordingly.
