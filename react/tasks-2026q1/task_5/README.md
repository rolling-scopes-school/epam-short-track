# Task 5. API Querying

| Folder Name  | Branch       | Coefficient |
|--------------|--------------|-------------|
| api-queries  | api-queries  | 0.3         |


**Task:** [React: API Querying — Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/queries.md)

Migrate all API calls to **RTK Query** (Redux path) or **TanStack Query** (Zustand path), implement caching with configurable TTL, display loading and error states, add manual cache invalidation, and write tests covering loading, error, and caching behaviour. Branch from `app-state-management`.

---

## Developer's Diary

While working on this task, keep a [developer's diary](../../modules/diary/README.md). Write down the decisions you made, the approaches you considered, where you got stuck, and how you worked through it.

The diary is not graded. Its purpose is to help you understand your own work more deeply and to give your mentor a basis for a real conversation about the task.

The "Diary" folder can be placed in the root of the project.

---

## Mentor Checklist

**Maximum Score: 300 points**
- Task implementation **100 points**
- Mentor interview **200 points**

---

## Mentor Interview Topics

After submitting the task, your mentor will ask 4–5 questions from the areas below. Answers account for **~200 points** of the total score, so make sure you can explain the concepts in your own words.

### RTK Query Fundamentals
- What problem does RTK Query solve that plain Redux Toolkit (with `createAsyncThunk`) does not? What does it give you for free?
- What is the difference between a `query` endpoint and a `mutation` endpoint in RTK Query? When would you use each?
- How does RTK Query's cache work — what is a cache key, when is a cache entry created, and when is it removed?
- What is `keepUnusedDataFor` and how do you configure it globally vs. per endpoint? How would you drive this value from an environment variable?
- How do you trigger an automatic refetch after a mutation — explain `invalidatesTags` and `providesTags`?

### TanStack Query Fundamentals
- What is the role of `QueryClient` and `QueryClientProvider` in TanStack Query?
- How does TanStack Query determine when to re-fetch data — explain `staleTime` vs. `cacheTime` (or `gcTime` in v5)?
- What is a query key, why must it be serialisable, and how do you structure it for paginated or parameterised data?
- How do you perform a mutation with `useMutation` and then invalidate related queries afterwards?
- How would you set a global default `staleTime` and override it for a specific query?

### Caching Strategy
- What does "cache hit" mean in the context of RTK Query / TanStack Query? How do you prove in the browser that navigating back to a cached page does not fire a new network request?
- How does configuring TTL via an environment variable work end-to-end — from `.env` file to the query client configuration?
- What is the difference between background refetching and cache invalidation? When does each occur?

### Loading and Error States
- What hooks or properties expose loading and error states in RTK Query (`isLoading`, `isFetching`, `isError`)? What is the difference between `isLoading` and `isFetching`?
- In TanStack Query, what is the difference between `status === 'loading'` and `fetchStatus === 'fetching'`?
- How do you show a stale-data indicator while a background refetch is in progress without blocking the UI?
- What is the recommended pattern for displaying user-friendly error messages when a fetch fails?

### Manual Cache Invalidation
- How do you implement a "Refresh" button that forces a re-fetch — what RTK Query API or TanStack Query method do you call?
- What is the difference between `refetch()` (re-run the same query) and `invalidatesTags` / `invalidateQueries` (mark cache stale)? When would you prefer one over the other?
- How do you invalidate only the currently viewed page vs. the entire list cache?

### Testing
- How do you test a component that uses an RTK Query hook — do you mock the store, the network, or use `msw`? What are the trade-offs of each approach?
- How do you test loading and error states in RTK Query component tests?
- How do you test a TanStack Query hook in isolation — what does `renderHook` with a `QueryClientProvider` wrapper look like?
- How do you reset the query cache between tests to prevent cross-test pollution?
- How do you assert that a cached response is reused (i.e. no second network call) in a test?
