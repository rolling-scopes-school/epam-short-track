# Task 3. Deep-copy

| Folder Name | Branch     | Coefficient |
|-------------|------------|-------------|
| /deep-copy  | deep-copy  | 0.5         |

## Task Description

Implement a custom `copy` function that creates a deep copy of a given object. Your implementation must handle all types listed below, support any level of nesting, and strictly follow the requirements.

### Requirements

- **Do not use** rest/spread operators (`...`), `structuredClone`, `JSON.stringify`, `JSON.parse`, or any npm libraries.
- The function must perform a true **deep copy**: all nested objects and arrays must be recursively copied.
- All types must be handled:
    - **Basic types:** string, number, boolean, null, undefined, BigInt
    - **Special types:** Date, functions, arrays, objects, get/set accessors
- Keys must be strings. Keys and values must **not** be Symbols.
- Any property value can be `null` or `undefined`.
- The function must correctly copy objects with any nesting level.
- The solution must not mutate the original object.
- The code must be clean, readable, and follow best practices.

### Example

```js
const complexObject = {
  stringValue: "Hello, World!",
  numberValue: 42,
  booleanValue: true,
  nullValue: null,
  undefinedValue: undefined,
  bigIntValue: BigInt(9007199254740991),
  arrayValue: [1, 2, 3, "four", { nestedKey: "nestedValue" }],
  valueDate: new Date(),
  nestedObject: {
    level1: {
      level2: {
        level3: {
          stringValue: "Deep Nesting",
          numberValue: 3.14,
          booleanValue: false,
          arrayValue: [true, false, null],
          anotherNestedObject: {
            level4: "Final Level",
            functionValue: function() {
              return "I am a function!";
            }
          }
        }
      }
    }
  },
  functionValue: function() {
    return "I am a function!";
  }
};

const obj1 = copy(complexObject);

console.log(obj1 === complexObject); // false
console.log(obj1.nestedObject.level1.level2.level3 === complexObject.nestedObject.level1.level2.level3); // false
console.log(obj1.arrayValue === complexObject.arrayValue); // false
```

### Implementation Details

- Your `index.js` file in the `deep-copy` folder must export the `copy` function as follows:

```js
function copy(obj) {}

module.exports = { copy };
```

- **Test your function locally** with various objects, including the example above, before submitting your Pull Request.

---

## Pull Request Requirements

Your Pull Request **must** include:

- Task URL.
- Description of the types and structures of objects used for verification (with examples).
- Submission Date / Deadline Date.
- Your self-check of the task’s completion using checkboxes.

---

## Mentor Checklist

**Maximum Score: 100 points**

| Criteria                                                                                                                      | Points |
|-------------------------------------------------------------------------------------------------------------------------------|--------|
| The branch is named `deep-copy`                                                                                               | 2      |
| Commit messages follow [RS School Git Convention](https://rs.school/docs/en/git-convention)                                   | 5      |
| The `deep-copy` folder exists                                                                                                 | 2      |
| The `index.js` file exists in the correct folder                                                                              | 2      |
| The `index.js` file exports the `copy` function                                                                               | 1      |
| **The function correctly deep-copies the following types:**                                                                   |        |
| &nbsp;&nbsp;&nbsp;&nbsp;String                                                                                                | 5      |
| &nbsp;&nbsp;&nbsp;&nbsp;Number                                                                                                | 5      |
| &nbsp;&nbsp;&nbsp;&nbsp;Boolean                                                                                               | 5      |
| &nbsp;&nbsp;&nbsp;&nbsp;Null                                                                                                  | 5      |
| &nbsp;&nbsp;&nbsp;&nbsp;Undefined                                                                                             | 5      |
| &nbsp;&nbsp;&nbsp;&nbsp;BigInt                                                                                                | 5      |
| &nbsp;&nbsp;&nbsp;&nbsp;Date                                                                                                  | 8      |
| &nbsp;&nbsp;&nbsp;&nbsp;Function                                                                                              | 8      |
| &nbsp;&nbsp;&nbsp;&nbsp;Array                                                                                                 | 8      |
| &nbsp;&nbsp;&nbsp;&nbsp;Object                                                                                                | 8      |
| &nbsp;&nbsp;&nbsp;&nbsp;get/set accessors                                                                                     | 8      |
| The solution is well-structured, readable, and follows best practices                                                         | 10     |
|                                                                                                                               |        |
| **Pull Request description includes all required elements:**                                                                  |        |
| Task URL is included in the PR                                                                                                | 2      |
| Description of test objects and types is included in the PR                                                                   | 2      |
| Submission and Deadline Dates are included in the PR                                                                          | 2      |
| Your self-check of the task’s completion using checkboxes is included in the PR                                               | 2      |
|                                                                                                                               |        |
| **Penalty:**                                                                                                                  |        |
| Less than 3 commits in the PR                                                                                                 | -20    |
| Commit after the deadline and before mentor review                                                                            | -20    |
| The solution includes any comments                                                                                            | -50    |
| The solution includes console.log                                                                                             | -10    |
| The PR includes more than one required `index.js` file                                                                        | -50    |
| The solution includes rest/spread operators (`...`), `structuredClone`, `JSON.stringify`, `JSON.parse`, or any npm libraries. | -100   |

## Notes

- The solution must be well-structured, readable, and follow best practices.
- If any required element is missing or incorrect, points will be deducted accordingly.
- All requirements regarding forbidden methods and types must be strictly followed.
