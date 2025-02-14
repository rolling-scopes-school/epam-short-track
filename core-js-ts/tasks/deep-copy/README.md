# Task 2. Deep-copy


| Folder Name | Branch     | 	Coefficient |
|-------------|------------|--------------|
| deep-copy   | 	deep-copy | 0.3          |


Your task is to implement the function ```copy``` that creates a copy of an object.

1. Usage of rest/spread operator is **strictly forbidden**
2. Your implementation should implement a *'deep' copy* if some property is an object you should also copy it. (Pay attention to arrays)
3. Usage of any ```npm lib``` will result to -100%pts
4. Usage of ```structuredClone``` is **strictly forbidden**
5. Usage of ```JSON.stringify```, ```JSON.parse``` is **strictly forbidden**

Example:

```js
const obj = {
  a: 4,
  b: {
    c: 5,
  },
};

const obj1 = copy(obj)

//obj1 is a newly created object
obj1 === obj // false;
obj1.b === obj.b // false;
```

## Mentors check

Max score: 100
- [10] The index.js file with the ```copy``` function has been created in the ```deep-copy``` folder
- [10] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention
- [10] Pull Request description must contain the following:
  - Task URL
  - Description of examples of objects that were used for verification
  - Submittion Date / Deadline Date
  - Your self-check of Task's completion result
- [50] ```copy``` function works correctly and all requirements of the task have been met
- [20] the code follows the principles of clean code