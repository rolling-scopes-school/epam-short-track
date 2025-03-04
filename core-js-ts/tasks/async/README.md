# Task 7. Async


| Folder Name | Branch | Coefficient |
|-------------|--------|-------------|
| async       | async  | 0.5         |


Your task is sending data to the server with error handling. You need to design a system that sends a large amount of data to a server, taking into account its limits on the number of requests per second and possible errors.

## Task Description
You are developing a TypeScript function that receives an array of data and sends it to a remote server. However, real-world systems have certain limitations that must be considered:

### Constraints
1. Limit on concurrent requests
   - The server can handle no more than 20 simultaneous requests.
   - If this limit is exceeded, the server will start rejecting new requests.
   - If the limit is exceeded, the request is considered `lost`
2. Execution time limit
   - The entire function must complete within 1 minute.
   - If the function takes longer than 1 minute, it must stop.
   - All data that has not been sent is considered `skipped`.
3. Error handling
   - The server can randomly reject 5-10% of requests.
   - If a request fails with `Random Failure` message, it must be retried up to 3 times before being considered a final failure.
   - After 3 failed attempts, the data is considered `failed`.

### Input data
The function receives an array of objects, each with a unique `id`.
```ts
type DataItem = { id: string; value: number };
```

### What You Need to Do
1. Implement `task` function with controlled data sending to ensure the server is not overloaded.
2. Implement a timeout for the entire `task` function in the `runTaskWithTimeout` method in the `Executor` class.
3. Implement a functionality to retry failed requests.
4. Log status updates to the console (successful requests, retries, failures).
5. Log the final result of the function:
    - number of processed requests,
    - number of successful requests,
    - number of failed requests,
    - number of lost requests,
    - number of skipped requests.

## Mentor Evaluation Criteria (100 points)

- [5] The index.ts file with `task` function is created in the `async` folder. The folder structure matches the requirement of the task.
- [5] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention. Pull Request name is `Async` and description should contain the following:
    - Task URL
    - Submittion Date / Deadline Date
    - Your self-check of Task's completion result (be aware that mentor will not give you more points than you stated in self-check)
- [10] ESLint (or Biome) is configured for TypeScript, the `no-explicit-any` rule is enabled, and there are no errors.
- [20] Server limits are respected: Server Overload message is not appearing.
- [20] Implemented a functionality to retry failed requests.
- [20] The function completes within 1 minute and stops if it takes longer.
- [20] Logs the final result of the function implemented.

