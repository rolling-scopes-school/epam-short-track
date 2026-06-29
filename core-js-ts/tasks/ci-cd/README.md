### Task. Setting Up CI/CD, Accessibility (A11y), and Performance Optimization

| Folder Name    | Branch         | Coefficient |
|----------------|----------------|-------------|
| ./             | feature/ci-cd  | 0.3         |

Your task is to fork the given repository [ci-cd](https://github.com/lexarudak/ci-cd) to your personal GitHub account and complete the assignment according to the next steps and requirements.

The task is divided into **three stages**: **CI/CD Setup**, **Accessibility Improvements (A11y)**, and **Performance Optimization**.

---

### Stage 1: CI/CD Setup
At this stage, you are required to set up **CI/CD processes** for the application using **GitHub Actions** to automate code validation, testing, deployment, and release management workflows.

#### **1. Branching Requirements**
- **Main branch protection**:
  - Direct pushes to `main` are prohibited.
  - All changes must be submitted via pull requests (PRs) and merged after successful validations.
- Development is only allowed in branches named `feature/<feature_name>`. (Should be implemented via workflow)
  - Ensure all work (new features, fixes, etc.) is done in branches that start with `feature/`.

---

#### **2. Validations for Each Commit**
For every **push** to a branch starting with `feature/`, the following automated workflows must be executed via **GitHub Actions**:
1. **Run linters**:
   - Execute lint checks using `npm run lint`.
   - Ensure there are no linting errors.
2. **Run tests**:
   - Execute unit tests using `npm run test`.
   - All tests must pass.
3. **Build**:
   - Compile the application using `npm run build`.
   - Ensure that the build succeeds without errors.

---

#### **3. Pull Request Validation Workflow**
When a **Pull Request (PR)** is created or updated, the following must happen:
1. Run all validations from the "Validations for Each Commit" section:
   - Linters (`npm run lint`).
   - Tests (`npm run test`).
   - Build (`npm run build`).
2. Block merging if:
   - Tests fail.
   - Lint errors occur.
   - Build fails.

---

#### **4. Deployment Pipeline Requirements**
Set up **automatic deployment upon each push to a branch with an open Pull Request**. The deployment pipeline should:
1. Build the application using `npm run build`.
2. Deploy the application to **GitHub Pages**.
3. Ensure that the deployment runs for every Pull Request update.

##### GitHub Pages Deployment

**Repository Settings**
- Go to your repository → **Settings** → **Pages**.
- Under **Build and deployment**, set **Source** to **GitHub Actions** (not the legacy "Deploy from a branch" option).


### Stage 2: Accessibility (A11y) Improvements
After successful deployment, the next stage is ensuring high accessibility standards:

1. **Initial Audit**:
   - Run Lighthouse accessibility checks for the homepage (desktop version).
   - Save the current accessibility score screenshot.

2. **Make Improvements**:
   - Achieve a Lighthouse score of ≥95%.
   - Prioritize functionality over design adjustments.

3. **Validation**:
   - Insert before-and-after Lighthouse score screenshots into the PR.

---

### Stage 3: Performance Optimization
Analyze and optimize the performance of the homepage:

1. **Initial Audit**:
   - Use Lighthouse and DevTools Performance tab to evaluate:
     - **First Contentful Paint (FCP)**.
     - **Largest Contentful Paint (LCP)**.
     - **Time to Interactive (TTI)**.
     - **Speed Index**.
     - **Cumulative Layout Shift (CLS)**.

2. **Document Metrics**:
   - Run Lighthouse performance test several times. Save the best scores screenshot.

3. **Recommendations**:
   - Add optimization suggestions to the PR (just a few sentences).

4. **Optimization**:
   - Improve the Lighthouse Performance score. It should add +15 points to your best result before the improvement. (For example, if your pre-improvement score was 74 points, you are expected to achieve a result of 89 points or higher).
   - Insert before-and-after Lighthouse score screenshots into the PR.

**Please make your PR review as convenient as possible for the reviewer. If additional actions or screenshots are required to verify the functionality, kindly include them in the PR.**

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

### **CI/CD Setup (11 points)**
- [4] Validations for every commit (`npm run lint`, `npm run test`, `npm run build`) are implemented and correctly configured.
- [3] PR workflows are properly configured, and merging is blocked unless mandatory checks are successfully completed.
- [3] Deployment pipeline is fully functional, automatically deploys the application after every push.
- [1] Branch name validation (`feature/<feature_name>`) is implemented via workflow.

---

### **Accessibility Improvements (A11y) (3 points)**
- [2] Application improvements result in Lighthouse accessibility score ≥95%, focusing on functionality, semantics, and accessibility over design adjustments.
- [1] Before-and-after Lighthouse accessibility score screenshots are included in the PR.

---

### **Performance Optimization (6 points)**
- [2] Initial performance metrics (Lighthouse + DevTools: FCP, LCP, TTI, Speed Index, CLS) are documented in the PR, along with a screenshot of the results.
- [1] Optimization suggestions are written in the PR (a few sentences, with a brief analysis of the metrics and recommendations).
- [2] Lighthouse performance score improved by 15 points or more, incorporating optimizations.
- [1] Before-and-after Lighthouse performance metrics and corresponding screenshots are included in the PR.

## Mentor Interview Topics

After submitting the task, your mentor will ask 4–5 questions from the areas below. Answers account for **~80 points** of the total score, so make sure you can explain the concepts in your own words — not just recite a definition.

#### CI/CD
- What is Continuous Integration, and what problem does it solve in a team development workflow?
- What is the difference between Continuous Delivery and Continuous Deployment?
- What is GitHub Actions? What are workflows, jobs, and steps? How are they related?
- What triggers can start a GitHub Actions workflow? Give examples of at least three different trigger types.
- What is branch protection, and why is it important? How did you configure it in this task?
- How does a deployment pipeline differ from a build/test pipeline? What did your deployment pipeline do in this task?
- Why is it useful to run lint, tests, and build checks on every PR rather than only before merging?

#### Accessibility (A11y)
- What is web accessibility, and why does it matter? Who benefits from it beyond users with disabilities?
- What are WCAG conformance levels A, AA, and AAA? Which level is typically required as a minimum standard?
- What is semantic HTML, and how does it improve accessibility compared to using generic `<div>` and `<span>` elements?
- What is Lighthouse, and what categories does it measure? How did you use it in this task?
- What are ARIA roles and attributes? When should you use them, and when should you prefer native HTML elements instead?
- How do screen readers like NVDA or VoiceOver interact with a web page? What HTML features make a page easier to navigate with a screen reader?

#### Performance Optimization
- What is the Critical Rendering Path (CRP)? Name its main stages and explain why it matters for page load performance.
- What do FCP, LCP, TTI, Speed Index, and CLS measure? How do they relate to the user experience?
- What is Reflow (Layout) and Repaint? What types of CSS changes trigger each, and why are they expensive?
- How do the `async` and `defer` attributes on a `<script>` tag affect page rendering? When would you choose one over the other?
- What optimizations did you apply to improve the Lighthouse performance score in this task? How did each one affect the metrics?
- What is the difference between hardware and software compositing in browsers, and which CSS properties promote an element to its own compositor layer?
