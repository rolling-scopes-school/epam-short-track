# Cross Interview #6

## Interview questions list

### Rendering Concepts (SSR, CSR, SSG)

1. What is client-side rendering (CSR), and what are its main advantages and drawbacks for a single-page application?
2. What is server-side rendering (SSR), and what problems does it solve compared to CSR?
3. What is static site generation (SSG), and how does it differ from SSR in terms of when the HTML is produced?
4. When would you choose SSG over SSR, and when is SSR the better fit? Give a concrete example of each.
5. What is hydration, and why is it necessary after the server sends pre-rendered HTML?
6. What problems can occur during hydration (e.g., hydration mismatch), and what typically causes them?
7. How do SSR and SSG affect SEO and the "Time to First Byte" / "First Contentful Paint" metrics?
8. What is Incremental Static Regeneration (ISR), and how does it combine the benefits of SSG and SSR?
9. What does it mean that React has a "dual nature" — running in both the server and the browser environments?
10. What is Time to Interactive (TTI), and why can server-rendered pages still feel unresponsive before hydration completes?

### React Server Components (RSC)

11. What is a React Server Component, and how does it differ from a traditional (client) component?
12. Where does a Server Component execute, and what does this mean for the JavaScript bundle sent to the browser?
13. Why can't a Server Component use hooks like `useState` or `useEffect`, or browser APIs?
14. What is the `"use client"` directive, and what does it signal to the bundler and React?
15. How can a Server Component render a Client Component, and what are the restrictions when passing props between them?
16. Why can't a Client Component directly import a Server Component, and what is the "children as props" workaround?
17. How does data fetching in a Server Component differ from fetching data with `useEffect` in a Client Component?
18. What are the benefits of React Server Components regarding bundle size, data access, and security (e.g., keeping secrets on the server)?
19. What is serialization in the context of RSC, and why must props passed from a Server Component to a Client Component be serializable?
20. How do Server Components and Client Components work together in a single component tree during rendering?

### Next.js Fundamentals

21. What core problems does Next.js solve on top of React, and why might you migrate a Vite project to it?
22. How does file-based routing in the Next.js App Router work? What is the significance of `page.tsx` and `layout.tsx`?
23. What is the difference between the `app` directory (App Router) and the older `pages` directory (Pages Router)?
24. In the App Router, are components Server Components or Client Components by default, and how do you change that?
25. How do you fetch data in the App Router, and what replaced `getServerSideProps` and `getStaticProps` from the Pages Router?
26. How does Next.js extend the native `fetch` API to control caching and revalidation (e.g., `cache`, `next: { revalidate }`)?
27. What are `loading.tsx` and `error.tsx` files used for, and how do they relate to React Suspense and error boundaries?
28. What is a Server Action in Next.js, where does it run, and how do you invoke one from a form?
29. What advantages does the `next/image` component provide over a plain `<img>` tag?
30. What are the general steps and main challenges involved in migrating a Vite + React Router application to Next.js?
