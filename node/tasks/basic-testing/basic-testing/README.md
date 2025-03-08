# Basic testing

⚠️ DO NOT SUBMIT PULL REQUESTS TO THIS REPO ⚠️

---

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/AlreadyBored/basic-testing
3. Clone your newly created repo locally: https://github.com/<%your_github_username%>/basic-testing/  
4. Go to folder `basic-testing`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run **test scripts** in command line.
7. You will see the number of skipped, passing and failing tests.

---

### Test scripts

```bash
# run unit tests
$ npm run test

# with logging
$ npm run test:verbose
```

---

#### Notes
1. We recommend you to use Node.js of version 20.x.x LTS. If you use any of features, that does not supported by Node.js 20, there may be problems with task submit.
2. Please, be sure that each of your tests is limited to 30 sec.
3. Please, be sure you don't have any linter/TS compiler errors.

---

## General task description
Your task is to write unit tests for code, provided in file `index.ts`. 

---

### **Simple tests**

Write unit tests for the `simpleCalculator` function, which performs basic mathematical operations - addition, subtraction, division, multiplication, and exponentiation. Your task is to verify that the operations are executed correctly and that the function returns `null` for invalid input.

Write your tests in `src/01-simple-tests/index.test.ts`.

---

### **Table tests**

Your task is to rewrite the tests written in the previous task using the table-driven testing approach, utilizing the appropriate Jest API.

Write your tests in `src/02-table-tests/index.test.ts`.

---


### **Error handling & async**

Your task is to test functions that work asynchronously/throw/reject exceptions..

Write your tests in `src/03-error-handling-async/index.test.ts`.

---

### **Testing class**

Your task is to test a class representing a bank account that implements corresponding operations. Please note that some methods of the class invoke others, some operations result in errors, and the implementation is asynchronous and involves the native JS API. These aspects should be taken into account when writing the tests.

Write your tests in `src/04-test-class/index.test.ts`.

---

### **Partial mocking**

Your task is to utilize the Jest API to partially mock the contents of a module.

Write your tests in `src/05-partial-mocking/index.test.ts`.

---

### **Mocking Node.js API**

Your task is to test the proper usage of the Node.js API based on commonly used APIs such as the `fs` module, as well as `setTimeout` and `setInterval`. Remember that the tests should not interact with the actual file system and should not rely on real-time!

Write your tests in `src/06-mocking-node-api/index.test.ts`.

---

### **Mocking library API**

Your task is to test that function that utilize library APIs is working correctly (with commonly used libraries such as `axios` and `lodash` as examples).

Write your tests in `src/07-mocking-lib-api/index.test.ts`.

---

### **Snapshot testing**

Your task is to use snapshot testing with Jest and compare it to regular comparison testing.

Write your tests in `src/08-snapshot-testing/index.test.ts`.

---

© [AlreadyBored](https://github.com/AlreadyBored)
