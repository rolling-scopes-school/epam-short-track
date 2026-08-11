# Task 6. Next.js SSR & SSG

| Folder Name | Branch      | Coefficient |
|-------------|-------------|-------------|
| nextjs-ssr  | nextjs-ssr  | 0.3         |


**Task:** [React: Next.js Server-Side Rendering & Static Site Generation — Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/nextjs-ssr-ssg.md)

Migrate the existing Vite application to **Next.js App Router**, replacing React Router with file-based routing. Implement internationalization via **next-intl**, a static About page (SSG), server-rendered Search Results page (SSR), server actions for search and CSV generation, and use `next/image` and `next-intl` navigation throughout. Branch from `api-queries`.

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

### Next.js App Router & File-based Routing
- How does file-based routing in the Next.js App Router differ from React Router? What files have special meaning (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`)?
- What is the difference between a route segment and a dynamic route segment? How do you access dynamic params inside a Server Component?
- How do nested layouts work — at what level does a layout re-render, and how does this differ from a page?
- What is the purpose of the `template.tsx` file and how does it differ from `layout.tsx`?
- How do you handle a 404 "not found" response in App Router — what file and function do you use?

### Server Components vs Client Components
- What is the fundamental difference between a Server Component and a Client Component in Next.js App Router? Where does each execute?
- What are the rules for composing Server and Client Components — can a Server Component import a Client Component and vice versa? What is the "passing as props" pattern for?
- Why can't Server Components use `useState`, `useEffect`, or browser-only APIs? What should you do when you need interactivity in a subtree that is otherwise server-rendered?
- How does the `"use client"` directive work — does it make the component render only on the client, or does it still SSR?
- What are the performance implications of placing `"use client"` at the top of the component tree versus at the leaf nodes?

### SSR and SSG Data Fetching
- How do you fetch data in a Server Component — what replaces `getServerSideProps` and `getStaticProps` from the Pages Router?
- What is the difference between a dynamically rendered page and a statically generated page in App Router? How does Next.js decide which one to use?
- How do you force a page to be fully static (`force-static`) or always dynamic (`force-dynamic`)? When would you use each?
- What is `generateStaticParams` and how does it enable SSG for dynamic routes? What happens to paths not included in the returned list?
- How does Next.js extend the native `fetch` API — what options control caching behaviour (`cache: 'no-store'`, `next: { revalidate }`)? How does this relate to ISR?

### Internationalization with next-intl
- How does `next-intl` integrate with Next.js App Router routing — what does the `[locale]` segment do, and how is the locale resolved from the URL?
- What is the difference between `useTranslations` (Client Component) and `getTranslations` (Server Component)? When would you use each?
- How does `createNavigation` (or `createSharedPathnamesNavigation`) from next-intl work, and why should you use it instead of plain `next/link` in an i18n app?
- What is the middleware's role in next-intl — what does it do and where must it be placed?
- Why should you localize only UI text and navigation, not API data? What problems arise if you pass locale to the API?

### Server Actions
- What is a Server Action in Next.js — where does it run, how do you define one, and how do you invoke it from a component?
- How do you call a Server Action from a Client Component — what is the difference between using it as a form `action` attribute and calling it directly from an event handler?
- How does progressive enhancement work with Server Actions and HTML forms — what happens when JavaScript is disabled?
- How do you handle loading and error states when a Server Action is in flight — what hooks or primitives does Next.js provide?
- What are the security considerations for Server Actions — how do you prevent unauthorized calls, and how does Next.js protect action endpoints?

### Performance and Built-in Optimizations
- What advantages does `next/image` provide over a plain `<img>` tag — what does it do automatically, and what props are required?
- How does `next/image` handle remote images — what configuration is needed in `next.config.ts`, and why?
- What is the `<Link>` component's default prefetching behaviour in App Router, and how do you disable it when it would hurt performance?
- How does Next.js handle font optimization with `next/font` — what problem does it solve, and how does it differ from importing a font via CSS?
- What information does `next build` output tell you about each route (static, dynamic, ISR)? How do you use this to verify that your About page is truly statically generated?
