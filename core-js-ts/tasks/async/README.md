# Task 6. Async


| Folder Name | Branch | Coefficient |
|-------------|--------|-------------|
| async       | async  | 0.7         |


Your task is sending data to the server with error handling. You need to design a system that sends a large amount of data to a server, taking into account its limits on the number of requests per second and possible errors.

## How to Start
Install the server

```
npx degit rolling-scopes-school/epam-short-track/core-js-ts/tasks/async/async server
```

The boilerplate is in the `server/` folder.

```
server/
├── server.ts      # Express server — do not modify
├── executor.ts    # Executor class — complete runTaskWithTimeout here
├── index.ts       # Create this file — export and wire up your task function
├── package.json
└── tsconfig.json
```

**Setup:**

```bash
cd server
npm install
```

## Task Description

You are developing a TypeScript function that receives an array of data and sends it to a remote server. However, real-world systems have certain limitations that must be considered.

### Boilerplate Walkthrough

**`server.ts`** — a ready-made Express server. It exposes one endpoint:

```
POST /send   body: { id: string; value: number }
```

Server behaviour:
- Tracks `activeConnections`. If ≥ 20 are in-flight simultaneously it immediately returns `503 { error: "Server Overload" }` — the request is **not** queued.
- Each accepted request takes **100–1 100 ms** to complete (random delay).
- About **10 %** of accepted requests fail with `500 { error: "Random Failure" }`.

**`executor.ts`** — wires everything together. It:
1. Creates `SimpleServer` and starts it.
2. Generates 3 000 `DataItem` objects.
3. Calls `runTaskWithTimeout(data)` — **this method needs your implementation**.
4. Stops the server when done (or on error).

**`index.ts`** (you create this) — defines `task` function, then instantiates `Executor`:

```ts
const executor = new Executor(task);
executor.start();
```

### How To Run

```bash
npx ts-node index.ts
```

Or add a `start` script to `package.json`:

```json
"start": "ts-node index.ts"
```

Then run `npm start`.

The server starts on `http://localhost:3000` and the `Executor` immediately fires the task with **3 000 items**. You should see per-item log lines and a final summary printed to the console.

### Constraints

1. **Concurrent request limit**
   - The server handles at most **20 simultaneous requests**.
   - Exceeding this causes an immediate `503 Server Overload` response — the item is considered **`lost`**.
   - Your `task` must keep in-flight requests ≤ 20 at all times (a concurrency semaphore or similar).

2. **Execution time limit**
   - The entire `task` must finish within **60 seconds**.
   - Implement this timeout inside `runTaskWithTimeout` in `Executor`.
   - Any item not yet dispatched when the timeout fires is **`skipped`**.

3. **Error handling and retries**
   - The server randomly rejects ~10 % of requests with `Random Failure`.
   - On `Random Failure` retry the same item up to **3 times** total (1 original + 2 retries, or however you count — just cap at 3 attempts).
   - After 3 failed attempts the item is **`failed`**.

### What You Need to Implement

| # | What | Where |
|---|------|-------|
| 1 | `task` function — sends items with concurrency control | `index.ts` (new file) |
| 2 | Timeout logic — abort after 60 s | `runTaskWithTimeout` in `executor.ts` |
| 3 | Retry logic — up to 3 attempts on `Random Failure` | inside `task` |
| 4 | Per-item console logs — success / retry / failure | inside `task` |
| 5 | Final summary log | end of `task` or `runTaskWithTimeout` |

### Item Lifecycle

```
DataItem
  │
  ▼
POST /send ──► 503 Server Overload  →  lost
  │
  ├──► 500 Random Failure ──► retry (≤3 attempts) ──► still failing  →  failed
  │
  ├──► timeout fires before dispatch                                  →  skipped
  │
  └──► 200 OK                                                         →  success
```

### Final Summary Log (required)

```
--- Final Results ---
Processed : 2850
Successful: 2600
Failed    :  120
Lost      :    0
Skipped   :  150
```

---

## Developer's Diary

While working on this task, keep a [developer's diary](../../modules/diary/README.md). Write down the decisions you made, the approaches you considered, where you got stuck, and how you worked through it.

The diary is not graded. Its purpose is to help you understand your own work more deeply and to give your mentor a basis for a real conversation about the task.

The "Diary" folder can be placed in the root of the project.

---

## Mentor Checklist

**Maximum Score: 100 points**
- Task implementation **20 points**
- Mentor interview **80 points**

- [1] The `index.ts` file with `task` function is created in the `async` folder. The folder structure matches the requirement of the task.
- [1] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention. Pull Request name is `Async` and description should contain the following:
    - Task URL
    - Submition Date / Deadline Date
    - Your self-check of Task's completion result (be aware that mentor will not give you more points than you stated in self-check)
- [2] ESLint (or Biome) is configured for TypeScript, the `no-explicit-any` rule is enabled, and there are no errors.
- [4] Server limits are respected: Server Overload message is not appearing.
- [4] Implemented a functionality to retry failed requests.
- [4] The function completes within 1 minute and stops if it takes longer.
- [4] Logs the final result of the function implemented.

| **Penalty:**                                         |        |
|------------------------------------------------------|--------|
| Less than 3 commits in the PR                        | -4     |
| Commit after the deadline and before mentor review   | -4     |
| The solution includes any comments                   | -10    |
| The solution includes console.log                    | -2     |
| ESLint errors                                        | -2     |
| Use of the `any` type                                | -20    |

## Mentor Interview Topics

After submitting the task, your mentor will ask 4-5 questions from the areas below. Answers account for **~80 points** of the total score, so make sure you can explain the concepts in your own words — not just recite a definition.

### Timers
- What is the difference between `setTimeout` and `setInterval`? When would you use each?
- What does `clearTimeout` / `clearInterval` do, and when is it important to call them?
- Why does `setTimeout(fn, 0)` not execute `fn` immediately? What guarantees does it actually give?

### Promises
- What is a Promise? Describe its three states and how it transitions between them.
- What is the difference between `.then(onFulfilled, onRejected)` and `.then(onFulfilled).catch(onRejected)`?
- How do `Promise.all`, `Promise.allSettled`, `Promise.race`, and `Promise.any` differ? Give a use case for each.
- What happens if you throw inside a `.then()` callback?

### async / await
- How does `async/await` relate to Promises under the hood?
- What does `await` actually do to execution? Where does control go while a Promise is pending?
- How do you handle errors with `async/await`? What happens to an unhandled rejection in an `async` function?
- How do you run multiple async operations in parallel with `async/await` instead of sequentially?

### JavaScript Errors
- What is the difference between `throw` and returning a rejected Promise?
- How does `try...catch` interact with `async/await`? Can it catch errors from `await`ed Promises?
- How would you create a custom error type in JavaScript? When is that useful?

### Event Loop
- Describe the event loop: what is the call stack, the task queue, and the microtask queue?
- Why do Promise callbacks (`.then`) run before `setTimeout` callbacks even when both are already resolved/expired?
- What is the difference between macrotasks and microtasks? Give examples of each.
- How does `async/await` interact with the event loop — where do `await` continuations get scheduled?

