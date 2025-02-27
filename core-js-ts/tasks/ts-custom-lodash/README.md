# Task 5. TS-Custom-lodash


| Folder Name      | Branch           | 	Coefficient |
|------------------|------------------|--------------|
| ts-custom-lodash | ts-custom-lodash | 0.7          |


Your task is to refactor your version of 'custom' lodash library following next requirements:

1. The work should be done in private school's repository.
2. Create new branch `ts-custom-lodash` from `custom-lodash`. 
3. Rename folder `ts-custom-lodash` in the created branch where you will refactor the source code.
4. Add [TypeScript]](https://www.typescriptlang.org/) into the folder `ts-custom-lodash`. The TypeScript configuration file includes the following flags:
   - "noImplicitAny": true
   - "strict": true
5. Set up [ESLint](https://eslint.org/) to work with TypeScript into the folder `ts-custom-lodash`. ESLint has the no-explicit-any rule enabled.
6. Split `index.js` into separate files for each function. The name of the files must match the name of the functions.
7. Create a `utils` folder in the `ts-custom-lodash` folder. Move all your additional function files that you have created for reuse to this folder.
8. Migrate the application from JavaScript to TypeScript using at least:
    - `Types` or `Interfaces`, 
    - `Everyday Types`, 
    - `Generics`, 
    - `Union Types`, 
    - `Object Types`, 
    - `Function Types`. 
9. Add `types.ts` or `interfaces.ts` file to reuse types.
10. The `index.ts` should include import of all of following functions and their exports.

## Methods to implement:
### Arrays:
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

### Objects:
- [merge](https://lodash.com/docs/4.17.11#merge)
- [omit](https://lodash.com/docs/4.17.11#omit)
- [omitBy](https://lodash.com/docs/4.17.11#omitBy)
- [pick](https://lodash.com/docs/4.17.11#pick)
- [pickBy](https://lodash.com/docs/4.17.11#pickBy)
- [toPairs](https://lodash.com/docs/4.17.11#toPairs)

## Mentor Evaluation Criteria (100 points)

- [5] The index.ts file with all functions imported from separate files and exported is in the `ts-custom-lodash` folder.
- [5] The folder structure matches the requirement of the task.
- [5] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention.
- [5] Pull Request name is `TS-custom-lodash` and description should contain the following:
  - Task URL
  - Submittion Date / Deadline Date
  - Your self-check of Task's completion result
- [10] ESLint is configured for TypeScript, the `no-explicit-any` rule is enabled, and there are no errors.
- [10] The `any` type isn't used anywhere.
- [10] The TypeScript configuration file includes the flags `"noImplicitAny": true` and `"strict": true`.
- [5] `Types` or `Interfaces` used.
- [5] `Everyday Types` used.
- [5] `Generics` used.
- [5] `Union Types` used.
- [5] `Object Types` used.
- [5] `Function Types` used.
- [10] The code is fully migrated to TypeScript.
- [10] The code follows the principles of clean code.

### Penalties
- (-20 points) Use of the `any` type
- (-20 points) Code is not fully covered with types
- (-20 points) Mandatory flags `"noImplicitAny": true` and `"strict": true` are not set in the TypeScript configuration file
- (-10 points) The ESLint configuration file does not include the `no-explicit-any` rule
- (-10 points) ESLint errors