# Task 6. Javascript Classes & Inheritance


| Folder Name | Branch     | 	Coefficient |
|-------------|------------|--------------|
| js-classes  | js-classes | 0.6          |


Create a base class that will contain common methods. Then create 2 child classes (inherit from base): IntBuilder in ES6 style and StringBuilder in ES5 style. Almost all methods should be chainable for handy usage. You can add any own methods and properties to the classes **BUT!** methods described bellow must be in your solution

### ES6 class IntBuilder should be implemented using TS in `index.ts`:
```js
// API:
new IntBuilder(int) // constructor takes starting integer, if not passed starts with 0; 
.plus(...n)         // take infinite number of integers and sum all with stored value;
.minus(...n)        // take infinite number of integers and subtract from stored value; 
.multiply(n)        // multiply param n on stored value;
.divide(n)          // leaves integer part of division stored value on n; 
.mod(n)             // leaves remainder of the division stored value with on n;
.get()              // returns stored value;
IntBuilder.random(from, to)   // static method; from, to: integer; values limits the range of random values;

// EXAMPLE:
IntBuilder.random(10, 100);          // 42;

let intBuilder = new IntBuilder(10); // 10;
intBuilder
  .plus(2, 3, 2)                     // 17;
  .minus(1, 2)                       // 14;
  .multiply(2)                       // 28;
  .divide(4)                         // 7;
  .mod(3)                            // 1;
  .get();                            // -> 1;
```

### ES5 class StringBuilder should be implemented using JavaScript in `es5.js`:
```js
// API:
new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
plus(...str)             // takes infinite number of strings and concat with stored string;
minus(n)                 // cut last n chars from stored string;
multiply(int)            // repeat stored strings n times;
divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace(); 
sub(from, n)             // leaves substring starting from and with length n;
get()                    // returns stored value;

// EXAMPLE:
let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e';
```

### Additional:
+20 For lazy evaluation

## Mentor Evaluation Criteria (100 points)

- [5] The es5.js and index.ts files created in the `js-classes` folder.
- [5] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention.
- [5] Pull Request name is `JS classes` and description should contain the following:
  - Task URL
  - Submitting Date / Deadline Date
  - Your self-check of Task's completion result
- [5] ESLint is configured for TypeScript, the `no-explicit-any` rule is enabled, and there are no errors.
- [5] The `any` type isn't used anywhere.
- [5] The TypeScript configuration file includes the flags `"noImplicitAny": true` and `"strict": true`.
- [10] The base class created and contained common methods.
- [20] Created 2 child classes (inherit from base): IntBuilder in ES6 style and StringBuilder in ES5 style.
- [10] All methods are chained (except `random` and `get`).
- [10] All the methods described exist in your solution.
- [20] Lazy evaluation implemented.
