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
2. Deploy the application to any hosting environment, such as **GitHub Pages**, **Netlify**, **Vercel**, **AWS**, or others.
3. Ensure that the deployment runs for every Pull Request update.


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

Certainly! Here's the updated **evaluation criteria and penalties** rewritten entirely in English:

---

### Evaluation Criteria (100 points)

#### **CI/CD Setup (55 points)**
- [20] Validations for every commit (`npm run lint`, `npm run test`, `npm run build`) are implemented and correctly configured.
- [15] PR workflows are properly configured, and merging is blocked unless mandatory checks are successfully completed.
- [15] Deployment pipeline is fully functional, automatically deploys the application after every push and merge.
- [5] Branch name validation (`feature/<feature_name>`) is implemented via workflow.

---

#### **Accessibility Improvements (A11y) (15 points)**
- [10] Application improvements result in Lighthouse accessibility score ≥95%, focusing on functionality, semantics, and accessibility over design adjustments.
- [5] Before-and-after Lighthouse accessibility score screenshots are included in the PR.

---

#### **Performance Optimization (30 points)**
- [10] Initial performance metrics (Lighthouse + DevTools: FCP, LCP, TTI, Speed Index, CLS) are documented in the PR, along with a screenshot of the results.
- [5] Optimization suggestions are written in the PR (a few sentences, with a brief analysis of the metrics and recommendations).
- [10] Lighthouse performance score improved by 15 points or more, incorporating optimizations.
- [5] Before-and-after Lighthouse performance metrics and corresponding screenshots are included in the PR.
