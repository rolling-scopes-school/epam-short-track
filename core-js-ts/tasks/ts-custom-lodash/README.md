# Task 4. TS-Custom-lodash

| Folder Name      | Branch           | Score | Coefficient |
|------------------|------------------|-------|-------------|
| /ts-custom-lodash| ts-custom-lodash | 300   | 0.7         |

## Task Description

Your task is to implement 'custom' version of lodash library following next requirements:

1. Usage of methods from ```Array.prototype.*``` or ```Object.prototype.*``` is **strictly forbidden**.
2. You can create your own additional service functions (if needed).
3. You should use ES6+ features (any feature which supported by latest stable Chrome).
4. Lodash chain is out of scope
5. **Please reuse as much of your code as possible**

### Requirements

- Create a folder named `ts-custom-lodash`.
- Install TypeScript, ESLint and Prettier as dev dependencies. You can use the following article [Setting Up ESLint and Prettier for a TypeScript Project](https://medium.com/@robinviktorsson/setting-up-eslint-and-prettier-for-a-typescript-project-aa2434417b8f).
- Configure your project to use TypeScript, ESLint and Prettier.
- Add a TypeScript configuration file with (`tsconfig.json`):
```json
{
  "compilerOptions": {
    "rootDir": "./lib",
    "outDir": "./dist",

    "module": "system",
    "target": "es2015",

    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    "strict": true,
    "noImplicitAny": true,
    "removeComments": true,
    "skipLibCheck": true
  }
}
```
- Add a ESLint for TypeScript configuration file with the `no-explicit-any` rule enabled (`eslint.config.mjs`). **There must be no ESLint errors.**
```ts
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    {
        files: ["**/*.ts"],

        languageOptions: {
            parser: tsparser,
            sourceType: "module",
        },

        plugins: {
            "@typescript-eslint": tseslint,
            prettier: prettierPlugin,
        },

        rules: {
            ...tseslint.configs.recommended.rules,
            ...prettierConfig.rules,
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "error",
            "no-console": "warn",
            semi: ["error", "always"],
            "no-warning-comments": [
                "warn",
                { terms: ["todo", "fixme", "xxx"], location: "anywhere" },
            ],
            "no-inline-comments": "warn",
            quotes: ["error", "double"],
            "prettier/prettier": "error",
        },
    },
];
```
- Add a Prettier configuration file (`.prettierrc.json`).
```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100,
  "arrowParens": "always"
}
```
- Add scripts to `package.json`:
```json
{
  "name": "ts-custom-lodash",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "lint": "npx eslint .",
    "lint-fix": "npx eslint . --fix",
    "prettier": "npx prettier --write ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^8.49.0",
    "@typescript-eslint/parser": "^8.49.0",
    "eslint": "^9.39.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "prettier": "^3.7.4",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.49.0"
  }
}
```
### Implementation Details

- Each function must be implemented in `ts-custom-lodash/lib` folder in a separate `.ts` file named after the function (e.g., `chunk.ts`, `compact.ts`, etc.).
- Create a `utils` folder for reusable helper functions.
- Add a `types.ts` or `interfaces.ts` file for shared types.
- The `index.ts` file in the `ts-custom-lodash/lib` folder must export all functions as follows:
```ts
export { chunk } from './chunk';
export { compact } from './compact';
// ...etc for all functions
```
- **Do not use the `any` type anywhere.**
- **Do not use any methods from `Array.prototype.*` or `Object.prototype.*`.**
- **Reuse your code as much as possible.**
- Implement the following functions:

#### Implement for use cases where the arguments are Arrays:
- [chunk](https://lodash.com/docs/4.17.11#chunk)
- [compact](https://lodash.com/docs/4.17.11#compact)
- [drop](https://lodash.com/docs/4.17.11#drop)
- [dropWhile](https://lodash.com/docs/4.17.11#dropWhile)
- [take](https://lodash.com/docs/4.17.11#take)
- [filter](https://lodash.com/docs/4.17.11#filter)
- [find](https://lodash.com/docs/4.17.11#find)
- [includes](https://lodash.com/docs/4.17.11#includes)
- [map](https://lodash.com/docs/4.17.11#map)
- [zip](https://lodash.com/docs/4.17.11#zip)

#### Implement for use cases where the arguments are Objects:
- [merge](https://lodash.com/docs/4.17.11#merge)
- [omit](https://lodash.com/docs/4.17.11#omit)
- [omitBy](https://lodash.com/docs/4.17.11#omitBy)
- [pick](https://lodash.com/docs/4.17.11#pick)
- [pickBy](https://lodash.com/docs/4.17.11#pickBy)
- [toPairs](https://lodash.com/docs/4.17.11#toPairs)

#### ***Implement for all use cases from the docs:
- [filter](https://lodash.com/docs/4.17.11#filter)

---

## Pull Request Requirements

Your Pull Request **must** include:

- Task URL.
- Submission Date / Deadline Date.
- Your self-check of the task’s completion using checkboxes.
- Any comments explaining your implementation decisions (if necessary).

---

## Mentor Checklist

**Maximum Score: 300 points**

| Criteria                                                                                            | Points |
|-----------------------------------------------------------------------------------------------------|--------|
| The branch is named `ts-custom-lodash`                                                              | 5      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention)         | 5      |
| The `ts-custom-lodash` folder exists                                                                | 5      |
| The `ts-custom-lodash/lib` folder exists                                                            | 5      |
| Each function is in its own `.ts` files                                                             | 5      |
| The `ts-custom-lodash/lib/utils` folder with reusable helper functions implemented                  | 5      |
| Add a `ts-custom-lodash/lib/types.ts` or `ts-custom-lodash/lib/interfaces.ts` file for shared types | 5      |
| The `ts-custom-lodash/lib/index.ts` file import and export all functions                            | 5      |
| The code uses Types or Interfaces                                                                   | 5      |
| The code uses Everyday Types                                                                        | 5      |
| The code uses Generics                                                                              | 5      |
| The code uses Union Types                                                                           | 5      |
| The code uses Object Types                                                                          | 5      |
| The code uses Function Types                                                                        | 5      |
| The code follows clean code principles and maximizes code reuse                                     | 10     |
| ESLint is configured for TypeScript, `no-explicit-any` is enabled, and there are no errors          | 5      |
| The TypeScript config includes `"noImplicitAny": true` and `"strict": true`                         | 5      |
| The `.prettierrc.json` file added                                                                   | 5      |
| The `package.json` file includes scripts: "lint", "lint-fix", "prettier"                            | 5      |
| All dependencies added as dev dependencies                                                          | 5      |
|                                                                                                     |        |
| **Implemented for use cases where the argument is an array.:**                                      |        |
| chunk                                                                                               | 10     |
| compact                                                                                             | 10     |
| drop                                                                                                | 10     |
| dropWhile                                                                                           | 10     |
| take                                                                                                | 10     |
| filter                                                                                              | 10     |
| find                                                                                                | 10     |
| includes                                                                                            | 10     |
| map                                                                                                 | 10     |
| zip                                                                                                 | 10     |
|                                                                                                     |        |
| **Implemented for use cases where the arguments are Objects**                                       |        |
| merge                                                                                               | 10     |
| omit                                                                                                | 10     |
| omitBy                                                                                              | 10     |
| pick                                                                                                | 10     |
| pickBy                                                                                              | 10     |
| toPairs                                                                                             | 10     |
|                                                                                                     |        |
| **Implement for all use cases from the docs**                                                       |        |
| filter                                                                                              | 20     |
|                                                                                                     |        |
| **Pull Request description includes all required elements:**                                        |        |
| Task URL is included in the PR                                                                      | 5      |
| Submission and Deadline Dates are included in the PR                                                | 5      |
| Your self-check of the task’s completion using checkboxes is included in the PR                     | 5      |
|                                                                                                     |        |
| **Penalty:**                                                                                        |        |
| Less than 3 commits in the PR                                                                       | -20    |
| Commit after the deadline and before mentor review                                                  | -20    |
| The solution includes any comments                                                                  | -50    |
| The solution includes console.log                                                                   | -10    |
| Code is not fully covered with types                                                                | -50    |
| ESLint errors                                                                                       | -10    |
| Use of the `any` type                                                                               | -300   |
| Do not use any methods from `Array.prototype.*` or `Object.prototype.*`                             | -300   |

## Notes

- **Do not use `any` type anywhere.**
- **Do not use any methods from `Array.prototype.*` or `Object.prototype.*`.**
- The solution must be well-structured, readable, and follow best practices.
- If any required element is missing or incorrect, points will be deducted accordingly.
