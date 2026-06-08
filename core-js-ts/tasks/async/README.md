# Task 7. Async


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

## Mentor Evaluation Criteria (100 points)

- [5] The `index.ts` file with `task` function is created in the `async` folder. The folder structure matches the requirement of the task.
- [5] The names of the commits should be according to the guideline https://rs.school/docs/en/git-convention. Pull Request name is `Async` and description should contain the following:
    - Task URL
    - Submition Date / Deadline Date
    - Your self-check of Task's completion result (be aware that mentor will not give you more points than you stated in self-check)
- [10] ESLint (or Biome) is configured for TypeScript, the `no-explicit-any` rule is enabled, and there are no errors.
- [20] Server limits are respected: Server Overload message is not appearing.
- [20] Implemented a functionality to retry failed requests.
- [20] The function completes within 1 minute and stops if it takes longer.
- [20] Logs the final result of the function implemented.

