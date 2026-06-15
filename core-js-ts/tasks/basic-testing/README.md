# Task 7. Basic Testing

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
- Ensure you are using Node.js version 20.x.x(or newer)
- Download the `basic-testing` [archive](https://github.com/rolling-scopes-school/epam-short-track/raw/main/core-js-ts/tasks/basic-testing/basic-testing.zip)
- Install all necessary dependencies
- Write the required tests
- Execute the test scripts from the command line
- Review the output to see the count of skipped, passing, and failing tests

### Developer's Diary

While working on this task, keep a [developer's diary](../../modules/diary/README.md). Write down the decisions you made, the approaches you considered, where you got stuck, and how you worked through it.

The diary is not graded. Its purpose is to help you understand your own work more deeply and to give your mentor a basis for a real conversation about the task.

The "Diary" folder can be placed in the root of the project.

## Mentor Evaluation Criteria (100 points)

**Maximum Score: 100 points**
- Task implementation **20 points**
- Mentor interview **80 points**

- [2] Tests check all operations of the `simpleCalculator` function.
- [1] Tests handle invalid inputs and edge cases.
- [2] Tests are rewritten using table-driven testing.
- [1] Tests handle functions that throw or reject errors.
- [1] Tests handle asynchronous functions.
- [2] Tests cover all methods of the bank account class.
- [2] Tests consider method interactions, errors, and asynchronous operations.
- [2] Tests use Jest API to partially mock modules.
- [2] Tests mock Node.js APIs without using the actual file system or real-time.
- [2] Tests ensure functions using library APIs (e.g., `axios`, `lodash`) work correctly.
- [1] Snapshot test work correctly
- [1] Tests are well-structured, readable, and easy to maintain.
- [1] Tests run correctly from the command line.


| **Penalty:**                                         |        |
|------------------------------------------------------|--------|
| Less than 3 commits in the PR                        | -4     |
| Commit after the deadline and before mentor review   | -4     |
| The solution includes any comments                   | -10    |

### Mentor Interview Topics

After submitting the task, your mentor will ask 2–3 questions from the areas below. Answers account for **~80 points** of the total score, so make sure you can explain the concepts in your own words — not just recite a definition.

#### Types of Testing
- What is unit testing? How does it differ from integration and end-to-end testing?
- Describe the testing pyramid. Why is it shaped the way it is?

#### Testing Principles
- What does FIRST stand for in the context of testing? Explain each principle with an example.
- What is TDD (Test-Driven Development)? What is the red-green-refactor cycle?
- What is code coverage? What does it measure, and what are its limitations?

#### Writing Tests with Jest
- What is the AAA (Arrange-Act-Assert) pattern? Show how you applied it in this task.
- How do `describe`, `it`/`test`, `beforeEach`, and `afterEach` help structure a test suite?
- What are table-driven tests (`test.each`)? When and why would you use them over separate test cases?
- How do you test a function that throws an error synchronously? How does the approach differ for async functions that reject?
- How do you test async/await code in Jest? What is the role of `expect.assertions()`?

#### Mocking
- What is mocking and why is it used in unit tests? What problems does it solve?
- What is the difference between a mock, a stub, and a spy?
- How does `jest.fn()` work? What can you assert on a mock function?
- What is partial mocking (`jest.mock` with a factory)? When is it preferable to mocking an entire module?
- How do you mock Node.js APIs such as `fs` and timer functions (`setTimeout`, `setInterval`)? Why is it important not to rely on the real file system or real time in unit tests?
- How do you mock a third-party library (e.g., `axios`, `lodash`) in Jest? What is `jest.mock()` doing under the hood?

#### Snapshot Testing
- What is snapshot testing? When is it useful and when can it be misleading?
- What is the difference between snapshot testing and a regular equality assertion?
- How do you update a snapshot when the expected output intentionally changes?
