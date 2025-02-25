# Task 4. Custom-lodash


| Folder Name   | Branch        | 	Coefficient   |
|---------------|---------------|----------------|
| custom-lodash | custom-lodash | 0.8            |


Your task is to implement 'custom' version of lodash library following next requirements:

1. Usage of methods from ```Array.prototype.*``` or ```Object.prototype.*``` is **strictly forbidden**.
2. You can create your own additional service functions (if needed).
3. You should use ES6+ features (any feature which supported by latest stable Chrome).
4. Lodash chain is out of scope
5. **Please reuse as much of your code as possible**

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

## Bonus:
all use cases from the dock
- [filter](https://lodash.com/docs/4.17.11#filter)

## Mentors check

Max score: 100
- [10] The index.js file with all functions (declaration or arrow) has been created in the ```custom-lodash``` folder and exported
```js
module.exports = {chunk, compact, drop, dropWhile, take, filter, find, includes, map, zip, merge, omit, omitBy, pick, pickBy, toPairs};
```

- [10] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention and every feat commit should include one of implemented function
- [10] Pull Request name is Custom-lodash and description should contain the following:
  - Task URL
  - Submittion Date / Deadline Date
  - Your self-check of Task's completion result
- [2.5 * 16 = 40] All functions works correctly and all requirements of the task have been met
- [20] the code follows the principles of clean code and the student reuses as much of their code as possible
- [10] ``` filter``` implemented with all use cases from the dock