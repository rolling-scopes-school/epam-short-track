# Task 8. Basic Testing


| Folder Name   | Branch        | Coefficient |
|---------------|---------------|-------------|
| basic-testing | basic-testing | 0.5         |


Your task is to write unit tests using [Jest](https://jestjs.io/) API.

## Task Description
Your task is to create unit tests using Jest for the functions and classes, addressing scenarios like simple operations, table-driven tests, error handling, partial and API mocking, and snapshot testing, while ensuring they are properly structured and error-free.

### Input Data (`basic-testing` package):

 **1. Simple tests**:
  - Develop unit tests for the `simpleCalculator` function, which handles basic math operations such as addition, subtraction, division, multiplication, and exponentiation. Ensure that the tests confirm the correct execution of these operations and that the function returns `null` for invalid inputs.
  - Test file location: `src/01-simple-tests/index.test.ts`

 **2. Table tests**:
  - Your task is to rewrite the tests written in the previous task using the table-driven testing approach, utilizing the appropriate Jest API.
  - Test file location: `src/02-table-tests/index.test.ts`

 **3. Error handling & async**:
  - Your task is to test functions that work asynchronously, throw, or reject exceptions.
  - Test file location: `src/03-error-handling-async/index.test.ts`

 **4. Testing class**:
  - Your task is to test a class representing a bank account that implements corresponding operations. Please note that some methods of the class invoke others, some operations result in errors, and the implementation is asynchronous and involves the native JS API. These aspects should be taken into account when writing the tests.
  - Test file location: `src/04-test-class/index.test.ts`

 **5. Partial mocking**:
  - Your task is to utilize the Jest API to partially mock the contents of a module.
  - Test file location: `src/05-partial-mocking/index.test.ts`

 **6. Mocking Node.js API**:
  - Your task is to test the proper usage of the Node.js API based on commonly used APIs such as the `fs` module, as well as `setTimeout` and `setInterval`. Remember that the tests should not interact with the actual file system and should not rely on real-time!
  - Test file location: `src/06-mocking-node-api/index.test.ts`

 **7. Mocking library API**:
  - Your task is to test that functions that utilize library APIs are working correctly (with commonly used libraries such as `axios` and `lodash` as examples).
  - Test file location: `src/07-mocking-lib-api/index.test.ts`

 **8. Snapshot testing**:
  - Your task is to use snapshot testing with Jest and compare it to regular comparison testing.
  - Test file location: `src/08-snapshot-testing/index.test.ts`

### What You Need to Do
- Ensure you are using Node.js version 20.x.x
- Download the `basic-testing` [folder](https://github.com/rolling-scopes-school/epam-short-track/tree/main/core-js-ts/tasks/basic-testing/basic-testing)
- Install all necessary dependencies
- Write the required tests
- Execute the test scripts from the command line
- Review the output to see the count of skipped, passing, and failing tests


## Mentor Evaluation Criteria (100 points)

- [10] Tests check all operations of the `simpleCalculator` function.
- [5] Tests handle invalid inputs and edge cases.
- [10] Tests are rewritten using table-driven testing.
- [5] Tests handle functions that throw or reject errors.
- [5] Tests handle asynchronous functions.
- [10] Tests cover all methods of the bank account class.
- [10] Tests consider method interactions, errors, and asynchronous operations.
- [10] Tests use Jest API to partially mock modules.
- [10] Tests mock Node.js APIs without using the actual file system or real-time.
- [10] Tests ensure functions using library APIs (e.g., `axios`, `lodash`) work correctly.
- [5] Snapshot test work correctly
- [5] Tests are well-structured, readable, and easy to maintain.
- [5] Tests run correctly from the command line.
