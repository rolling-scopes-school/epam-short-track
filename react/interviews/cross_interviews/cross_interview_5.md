# Cross Interview #5

The goal of the technical interview is to check the quality of learning on topics: RTK Query, TanStack Query (React Query).

## Interview questions list

### Server State & Data Fetching (General)
  1. What is the difference between client state and server state, and why does server state need special management tools?
  2. What is the stale-while-revalidate strategy, and how do query libraries use it to balance freshness and performance?
  3. What does "caching" mean in the context of data fetching, and what problems does it solve compared to fetching on every render?
  4. What is cache invalidation, and what are common strategies for deciding when cached data should be refetched?
  5. What are loading, error, and success states in a data-fetching lifecycle, and how should a UI handle each one?
  6. What is background refetching, and what triggers it (window focus, network reconnect, polling interval)?
  7. What is an optimistic update, and when would you use it instead of waiting for a server response before updating the UI?
  8. How do query libraries handle deduplication of concurrent requests for the same data?
  9. What is a REST API, and how do HTTP methods (GET, POST, PUT, PATCH, DELETE) map to CRUD operations on a backend resource?
  10. What is an HTTP status code, and what do the 2xx, 4xx, and 5xx ranges indicate — give an example of when a frontend should handle a 401 differently from a 404 or 500?
  11. What is CORS, why does a browser enforce it, and what must a backend do to allow a frontend on a different origin to make requests?
  12. What is the difference between authentication and authorization, and how are tokens (e.g., JWT) typically passed from a frontend to a backend API?
  13. What is pagination in a REST API (offset-based vs cursor-based), and how would you implement infinite scroll or a "load more" pattern using a query library?

### Functional Programming Concepts in Query Libraries
  9. How does the concept of a pure function apply to query functions (`queryFn`) — what would break if a query function had side effects?
  10. Why must query cache updates be treated as immutable — what would happen if you mutated a cached object in place?
  11. What role does referential equality play in cache key comparison, and why do query libraries serialize query keys to strings or use deep equality?
  12. How does memoization appear in query libraries (e.g., returning the same cached object reference when data has not changed), and how does it prevent unnecessary re-renders?
  13. What is a closure, and how does a `QueryClient` instance use a closure to encapsulate the cache and make it accessible only through its own API?
  14. What are side effects in this context, and how do query libraries isolate them inside `queryFn` / `mutationFn` rather than in render logic?

### RTK Query Flow - If Interviewee chose RTK
  15. What is RTK Query, and how does it fit into the Redux Toolkit ecosystem compared to writing manual `createAsyncThunk` data fetching?
  16. How do you define an API slice with `createApi`, and what is the purpose of `fetchBaseQuery`?
  17. What is an endpoint in RTK Query, and what is the difference between a `query` endpoint and a `mutation` endpoint?
  18. How does RTK Query automatically generate React hooks from endpoints (e.g., `useGetPostsQuery`, `useAddPostMutation`), and how do you use them in a component?
  19. What does the object returned by a generated query hook contain (data, error, isLoading, isFetching, isSuccess, etc.), and when would you use `isLoading` versus `isFetching`?
  20. How does RTK Query's cache work — what is a cache entry, what is `keepUnusedDataFor`, and when is a cache entry removed?
  21. What are cache tags (`providesTags` / `invalidatesTags`), and how do they allow a mutation to automatically trigger a refetch of related queries?
  22. How do you configure polling in RTK Query, and what real-world scenarios is it suitable for?
  23. How does RTK Query handle errors, and how do you distinguish between network errors and server-returned errors in the hook result?
  24. How does RTK Query integrate with Redux DevTools, and what does it store in the Redux state?
  25. How do you add the generated reducer and middleware from `createApi` to `configureStore`, and why is the middleware required?

### TanStack Query Flow - If Interviewee chose Zustand
  15. What is TanStack Query (React Query), and what problem does it solve that plain `useEffect` + `useState` data fetching does not?
  16. How do you set up TanStack Query in a React app using `QueryClient` and `QueryClientProvider`?
  17. What is a query key, why must it uniquely identify a query, and how does including variables (e.g., an ID) in the key enable automatic refetching when they change?
  18. How does `useQuery` work — what are the required `queryKey` and `queryFn` options, and what does it return?
  19. What is the difference between `staleTime` and `gcTime` (formerly `cacheTime`), and how do they control when data is considered fresh versus when it is garbage collected?
  20. How does `useMutation` differ from `useQuery`, and how do you use `onSuccess`, `onError`, and `onSettled` callbacks?
  21. How do you invalidate queries after a mutation using `useQueryClient` and `invalidateQueries`, and why is this the preferred approach over manual cache updates?
  22. What is `isFetching` vs `isLoading` in TanStack Query, and when does each become `true`?
  23. How does TanStack Query integrate with React Suspense using `useSuspenseQuery`, and what is the benefit of the Suspense approach for loading states?
  24. How would you test a component that uses `useQuery` — what does TanStack Query provide to wrap components in tests?
  25. What are the trade-offs between TanStack Query and RTK Query in terms of setup complexity, bundle size, DevTools, and independence from a global state store?
