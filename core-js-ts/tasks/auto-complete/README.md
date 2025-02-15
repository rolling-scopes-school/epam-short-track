# Task 2. Auto-complete


| Folder Name   | Branch           | 	Coefficient |
|---------------|------------------|-------------|
| auto-complete | 	auto-complete  |     0.4     |


Your task is to implement a custom createAutoComplete function and **implement the fastest algorithm**. The function should get an array of strings as input and work as in the example below:

```js
const data = [
  'java',
  'javascript',
  'python',
];

const autocomplete = createAutoComplete(data);

autocomplete('ja'); // returns [ 'java', 'javascript']
autocomplete('javas'); // returns [ 'javascript']
autocomplete('p'); // returns [ 'python']
```

Please note that your ```index.js``` file should contain one export ```createAutocomplete```.
```js
  function createAutoComplete(data) {}

  module.exports = {createAutoComplete};
```

You can find [test and examples here](https://github.com/Shastel/autocomplete-tests).

Please **run tests with your code before submitting PR**, your mark depends on it.

### **Pull Request MUST be open**

## Mentors check

Max score: 100
- [10] The index.js file with the createAutocomplete function has been created in the auto-complete folder.
- [10] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention
- [10] Pull Request description must contain the following:
  - Task URL.
  - Screenshot showing the result of the local test result.
  - Description of the search algorithm used and its complexity (Big O notation)
  - Submittion Date / Deadline Date.
  - Your self-check of Task's completion result.
- [50] createAutocomplete function works correctly and passes all tests
- [20] fastest search algorithm is implemented