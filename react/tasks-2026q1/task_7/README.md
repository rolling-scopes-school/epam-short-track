# Task 7. AI Tools Basics

| Folder Name | Branch    | Coefficient |
|-------------|-----------|-------------|
| ai-tools    | ai-tools  | 0.3         |

This task is a continuation of the Next.js SSR & SSG task. You will use an AI coding assistant to plan and implement a small feature, then integrate a generative AI model into your existing search/API application.

The task has two related goals:

1. Learn to collaborate with an AI coding assistant using an **explore → plan → implement → review → verify** workflow.
2. Learn to build a secure, useful, and testable AI-powered feature with the **Google Gemini API**.

Only tools with a free plan may be used. The required path is [GitHub Copilot Free](https://docs.github.com/en/copilot/how-tos/manage-your-account/get-started-with-a-copilot-plan) (or Copilot Student if you already qualify) and the [Gemini API Free Tier](https://ai.google.dev/gemini-api/docs/pricing). You are not required to activate billing or purchase a subscription.

Study the [AI Basics for Frontend Developers](../../modules/ai-basics/README.md) module before starting.

## Technical Requirements

1. Create a separate branch from the `nextjs-ssr` branch. Branch name: `ai-tools`.

2. Preserve the existing application:
   - The application must continue to use Next.js App Router and TypeScript.
   - Existing functionality from previous tasks must continue to work unless it directly conflicts with this task.
   - The new UI text must use the application's existing `next-intl` localization setup.

3. Use GitHub Copilot Chat in VS Code:
   - Use **Plan** mode before making implementation changes.
   - Review and refine the proposed plan rather than accepting it without inspection.
   - Use **Agent** mode to implement at least one meaningful part of the approved plan.
   - Review every generated change and run the relevant checks yourself.

4. Use the Gemini API:
   - Use the current official JavaScript/TypeScript SDK: [`@google/genai`](https://ai.google.dev/gemini-api/docs/libraries).
   - Use the Free Tier model `gemini-3.6-flash`.
   - Keep the model name configurable through `GEMINI_MODEL` and provide `gemini-3.6-flash` as the default or documented value.
   - Make the Gemini request through a Next.js Server Action, Route Handler, or another explicitly server-only module.
   - A Gemini request must never be made directly from browser code.

5. Protect the API key:
   - Store the local key as `GEMINI_API_KEY` in `.env.local`.
   - Ensure `.env.local` is ignored by Git.
   - Add or update `.env.example` with safe placeholders only.
   - Do not prefix the key with `NEXT_PUBLIC_`, hard-code it, log it, return it from a server function, or expose it in an error message.
   - Mark modules that access the key with `import 'server-only'` or otherwise demonstrate that they cannot be imported into the client bundle.

6. Treat model input and output as untrusted:
   - Send only public data already provided by the selected public API.
   - Do not send secrets, personal data, source code, cookies, request headers, or unrelated application state.
   - Select a small set of useful item properties instead of sending the complete raw API response.
   - Render generated output as text. Do not render it through `dangerouslySetInnerHTML`.

7. Keep automated tests deterministic:
   - Mock the Gemini SDK or the server-side AI boundary.
   - Unit and component tests, coverage runs, and CI must not make real Gemini requests.
   - No API key may be required to run the automated test suite.

## Functional Requirements (max **100 points**)

### Feature 1: AI-Assisted Development Workflow (**15 points**)

**As a** developer  
**I want** to plan, implement, and review a feature with an AI coding assistant  
**So that** I can use AI productively without giving up engineering judgment

**Scenario: Copilot Plan and Agent workflow**

- **Given** I have opened my existing application in VS Code
- **When** I begin the AI explanation feature
- **Then** I use Copilot Plan mode to inspect the project and propose an implementation plan
- **And** I review and refine that plan
- **And** I use Agent mode for at least one meaningful implementation step
- **And** I verify the resulting changes myself

**Acceptance Criteria:**

- A `docs/ai-feature-plan.md` file records the initial Plan-mode prompt, the final implementation plan, and the clarifications or changes requested by the student. **[6 points]**
- The document identifies the meaningful implementation step delegated to Agent mode and summarizes the files or behavior it changed. **[4 points]**
- The document describes at least one AI suggestion that the student changed or rejected, explains why, and lists the lint, test, and build commands used for manual verification. **[5 points]**

Do not include an API key, personal data, or an entire private chat transcript in this document. Short relevant excerpts are enough.

### Feature 2: Secure Gemini API Integration (**20 points**)

**As a** developer  
**I want** to call Gemini through a protected server-side boundary  
**So that** users can access the feature without exposing my credentials

**Scenario: Server-side model request**

- **Given** a valid Gemini API key exists in the server environment
- **When** a user requests an explanation
- **Then** the application calls `gemini-3.6-flash` through the official `@google/genai` SDK
- **And** the key and server implementation are not included in the client bundle

**Acceptance Criteria:**

- The official `@google/genai` SDK is installed and used with `gemini-3.6-flash`; the model value is configurable through `GEMINI_MODEL`. **[5 points]**
- The Gemini call is implemented in a Server Action, Route Handler, or server-only service and cannot execute in browser code. **[7 points]**
- `GEMINI_API_KEY` is read from the server environment; `.env.local` is ignored and `.env.example` contains placeholders only. **[5 points]**
- The server boundary validates its input and returns only the explanation or a safe application-level error, never SDK internals or secret values. **[3 points]**

### Feature 3: Explain This Item with AI (**25 points**)

**As a** user  
**I want** an AI-generated explanation of the selected item  
**So that** I can understand the item's important properties more easily

**Scenario: Generate an explanation**

- **Given** I am viewing an item's details
- **When** I click the `Explain this item with AI` button
- **Then** the application requests an explanation for that item
- **And** I see clear pending, success, and retry states
- **And** the explanation is presented in my active UI language

**Acceptance Criteria:**

- A localized `Explain this item with AI` button is available in the item details view, and a request starts only after an explicit user action. **[5 points]**
- While the request is pending, the UI displays a localized loading state and prevents accidental duplicate requests. **[5 points]**
- A successful explanation is displayed in a readable panel or section, uses the active application locale, and includes a visible notice that the content is AI-generated and may be inaccurate. **[7 points]**
- The user can retry after a failure and can explicitly regenerate an existing explanation. **[4 points]**
- The result is reused while the same item and locale remain selected; re-renders must not silently trigger additional Gemini requests. **[4 points]**

### Feature 4: Prompt and Context Design (**15 points**)

**As a** developer  
**I want** to provide focused instructions and minimal context to the model  
**So that** its responses are relevant, economical, and less likely to invent facts

**Scenario: Build a grounded prompt**

- **Given** the selected item contains data from a public API
- **When** the application constructs the Gemini request
- **Then** only useful allowlisted fields are included
- **And** the prompt defines the audience, language, constraints, and expected response
- **And** the model is told to treat item data as data rather than instructions

**Acceptance Criteria:**

- A dedicated prompt or context builder converts the selected item into an allowlisted object containing no more than 12 useful properties; large or irrelevant fields are excluded. **[5 points]**
- The prompt requests a beginner-friendly explanation in the active locale, sets a clear length or structure, requires the model to use only supplied facts, and tells it not to follow instructions found inside item data. **[7 points]**
- Input and output are bounded: serialized item context is no larger than 4 KB and the configured model response is limited to no more than 512 output tokens. **[3 points]**

The wording of the prompt and the exact output layout are up to you. Structured JSON output is allowed but not required. If used, it must be validated before rendering.

### Feature 5: Failure and Free-Tier Handling (**10 points**)

**As a** user  
**I want** useful feedback when an AI request cannot be completed  
**So that** the application remains understandable and usable

**Scenario: Model request fails**

- **Given** the API key is missing, the Free Tier quota is exhausted, the request is blocked, or the Gemini service fails
- **When** I request an explanation
- **Then** the details page remains usable
- **And** I see a safe, localized message with an appropriate recovery action

**Acceptance Criteria:**

- Missing configuration, authentication errors, rate limits (`429`), blocked or empty responses, and unexpected server errors are handled without crashing the page. **[6 points]**
- User-facing messages are localized and do not expose stack traces, prompts, secrets, raw SDK responses, or other internal details. **[4 points]**

### Feature 6: Tests for the AI Feature (**15 points**)

**As a** developer  
**I want** deterministic tests around the AI boundary and interface  
**So that** I can verify application behavior without spending quota or depending on model wording

**Scenario: Run the automated tests**

- **Given** no Gemini API key is available in the test environment
- **When** I run the test suite
- **Then** all AI-related tests use mocks or fixtures
- **And** no request is sent to the real Gemini service

**Acceptance Criteria:**

- Tests cover the prompt/context builder, including field allowlisting and at least one input-size or untrusted-data case. **[5 points]**
- Tests cover a successful server-side Gemini call and at least one failure using a mocked SDK or mocked server boundary. **[5 points]**
- UI tests cover the pending/disabled state and the display of either a successful explanation or a recoverable error. **[5 points]**

Do not assert an exact real-world Gemini response. Test the application contract and state transitions instead.

## Developer's Diary

While working on this task, continue keeping a [developer's diary](../../../core-js-ts/modules/diary/README.md). Write down the decisions you made, the approaches you considered, where you got stuck, and how you worked through it.

The diary is not graded and must remain your own reflection. The required `docs/ai-feature-plan.md` is a separate engineering artifact and does not replace the diary.

The `Diary` folder can be placed in the root of the project.

## Penalties and Score Caps

### 1. Secrets and Client-Side API Calls

- A real Gemini API key is committed to Git or exposed in the client bundle: **task implementation score is 0 points**. Revoke the key immediately; deleting it in a later commit does not remove it from Git history.
- A Gemini request is made directly from browser code: **-40 points**.
- The key is stored in a `NEXT_PUBLIC_` variable, hard-coded, logged, or returned to the client: **-40 points**.
- Secrets, personal data, cookies, request headers, or unrelated private data are sent to the model: **-50 points**.

### 2. AI Workflow

- `docs/ai-feature-plan.md` is missing: no points for Feature 1.
- Only a generated plan or chat transcript is submitted, with no student review, correction, or verification evidence: Feature 1 is capped at **4 points**.

### 3. Tests

- Automated tests or CI make requests to the real Gemini API: no points for Feature 6.
- Tests require a real API key to pass: no points for Feature 6.

### 4. TypeScript and Code Quality

- TypeScript is not used: **-100 points**.
- Usage of `any`: **-20 points per occurrence**.
- Usage of `@ts-ignore`: **-20 points per occurrence**.
- Code smells such as a God object, large duplicated sections, or committed commented-out code: **-10 points per occurrence**.

### 5. React and Output Safety

- Direct DOM manipulation inside React components: **-50 points per occurrence**.
- Unsanitized AI output is rendered with `dangerouslySetInnerHTML`: **-50 points**.
- Gemini requests are triggered automatically by rendering, hydration, or an effect instead of an explicit user action: **-20 points**.

### 6. Project Management

- Commits after the deadline: **-40 points**.
- The Pull Request does not follow the [Pull Request requirements](https://rs.school/docs/en/pull-request-review-process#pull-request-requirements-pr), including the score checklist: **-10 points**.

## FAQ (Frequently Asked Questions)

### ❓ Why do I need both Copilot and Gemini?

They serve different purposes. Copilot is the development assistant you use to plan and implement the feature. Gemini is the runtime model called by your completed application when a user asks for an explanation.

### ❓ Do I need a paid Copilot or Gemini account?

No. Use GitHub Copilot Free or Copilot Student if you already qualify, and keep the Gemini project on the Free Tier. Do not activate billing for this task. Free plans have usage limits, so activate the tools early and keep your requests focused.

### ❓ What exactly must I do in Copilot Plan mode?

Ask Plan mode to inspect the existing Next.js application and propose an implementation plan for this task. Provide the task constraints and relevant project context. Review its plan, answer or correct open questions, and refine the result before implementation. Save the relevant prompt, final plan, and your changes in `docs/ai-feature-plan.md`.

### ❓ How much work must Agent mode implement?

At least one meaningful, reviewable part of the feature—for example the server-side Gemini service and tests, or the explanation UI and its tests. Asking Agent mode to rename a variable, format a file, or write only the documentation does not satisfy this requirement.

### ❓ May Copilot implement the whole task?

It may assist with any part, but you remain responsible for the architecture, security, correctness, and every line submitted. During the mentor interview you must be able to explain the generated and manually written code equally well.

### ❓ Which Gemini model should I use?

Use `gemini-3.6-flash`, which is a stable model available on the Gemini API Free Tier at the time this task was written. Keep the value configurable through `GEMINI_MODEL`. If Google withdraws the model during the task, mentors will announce a replacement stable Free Tier text model.

### ❓ What should “Explain this item” produce?

A short explanation that helps a beginner understand the important fields already present in the selected item. For example, it can explain how a Pokémon's types and abilities relate, or summarize the properties of a Star Wars or Star Trek entity. It must not be prompted to invent trivia or unsupported facts.

### ❓ Should I send the entire API response to Gemini?

No. Create a small domain-specific object with no more than 12 useful properties. Primitive values and small arrays are fine. Exclude image blobs, URLs that add no explanatory value, nested metadata, pagination data, and any unrelated application state. The serialized context must remain at or below 4 KB.

### ❓ Why must item data be described as untrusted?

External text could contain instructions such as “ignore the previous rules.” The prompt must make clear that item fields are data to explain, not instructions for the model to follow. This is a basic defense against prompt injection, although prompt wording alone is not a complete security boundary.

### ❓ Do I need structured output or streaming?

No. Both are optional. Plain text rendered safely is sufficient. If you request structured JSON, validate it before using it. If you implement streaming, the same pending, failure, security, and testing requirements still apply.

### ❓ Do I need a database or persistent AI cache?

No. Reusing the current explanation in component or application state is enough. The requirement is to avoid accidental repeated requests during re-renders. A new request may be made when the item or locale changes, when the user explicitly regenerates, or after a failure.

### ❓ How do I test a nondeterministic model?

Mock the SDK or your server-side AI service and return fixed fixtures. Verify the fields passed to the prompt builder, safe server result shape, loading state, result display, and error recovery. Do not test whether a real model produces an exact sentence.

### ❓ Must I deploy the AI feature?

No. It may be demonstrated locally. If you deploy it, configure `GEMINI_API_KEY` as a server-side secret in the hosting platform. Remember that every public user consumes your quota, so do not publish an unrestricted endpoint merely to satisfy this task.

### ❓ What happens to data sent through the Gemini Free Tier?

According to the current [Gemini API pricing documentation](https://ai.google.dev/gemini-api/docs/pricing), Free Tier content may be used to improve Google's products. Send only the selected public API fields required for the explanation and never send personal, confidential, or secret information.

## Mentor Checklist

**Maximum Score: 300 points**

- Task implementation: **100 points**
- Mentor interview: **200 points**

After submitting the task, your mentor will ask 4–5 questions from the areas below. Answers account for approximately **200 points** of the total score, so be prepared to explain the concepts and the decisions in your own implementation.

## Mentor Interview Topics

### LLM Foundations and Limitations

- At a high level, how does a large language model produce a response? What are tokens and a context window?
- What is a hallucination, and why can a confident or plausible response still be wrong?
- What is the difference between deterministic application code and probabilistic model output?
- Why should an AI explanation be labeled, and what information should a user receive about its limitations?

### AI-Assisted Development

- What is the difference between Copilot Ask, Plan, and Agent modes?
- Walk through your Plan-mode prompt and the changes you made to the proposed plan.
- Which implementation step did you delegate to Agent mode? How did you review its changes?
- Describe an AI suggestion you rejected or corrected. What evidence helped you decide?
- Why is running tests and reviewing the diff still necessary after an agent reports success?

### Prompt and Context Design

- What instructions does your prompt contain, and why is each one useful?
- Which item fields do you send to Gemini, which do you exclude, and why?
- How do input and output limits affect latency, quota usage, relevance, and cost?
- What is prompt injection? How does separating instructions from untrusted item data reduce the risk?
- What can you do to reduce unsupported claims when the supplied data is incomplete?

### Gemini API and Server Security

- Why must `GEMINI_API_KEY` remain on the server? What would happen if it used the `NEXT_PUBLIC_` prefix?
- Trace one explanation request from the button click to Gemini and back to the rendered result.
- What does `import 'server-only'` protect against in a Next.js application?
- Why should the server validate input even when the request originates from your own React component?
- What must you do if an API key is accidentally committed, even if a later commit deletes it?

### AI User Experience and Failure Handling

- How do you prevent duplicate requests and unnecessary Free Tier usage?
- How does your UI distinguish pending, success, empty, blocked, rate-limited, and unexpected error states?
- Why do you reuse an explanation for the same item and locale? When is regeneration appropriate?
- What risks appear if the application is deployed publicly with the student's server-side key?

### Testing AI Integrations

- Where is the mock boundary in your tests, and why did you choose it?
- Why should unit tests never depend on a live Gemini response?
- What should be asserted instead of the exact generated text?
- How do you prove that re-rendering the component does not trigger another model request?
- How would you test an invalid or oversized item context and a `429` response?

## Reference Documentation

- [GitHub Copilot Free](https://docs.github.com/en/copilot/how-tos/manage-your-account/get-started-with-a-copilot-plan)
- [Copilot Chat modes: Ask, Plan, and Agent](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide)
- [Planning with agents in VS Code](https://code.visualstudio.com/docs/agents/planning)
- [Gemini API getting started](https://ai.google.dev/gemini-api/docs/get-started)
- [Google GenAI SDK](https://ai.google.dev/gemini-api/docs/libraries)
- [Gemini text generation](https://ai.google.dev/gemini-api/docs/text-generation)
- [Gemini prompt design strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)
- [Using Gemini API keys securely](https://ai.google.dev/gemini-api/docs/api-key)
- [Gemini API pricing and Free Tier](https://ai.google.dev/gemini-api/docs/pricing)
- [Gemini API rate limits](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Next.js data security](https://nextjs.org/docs/app/guides/data-security)
- [Next.js environment variables](https://nextjs.org/docs/app/guides/environment-variables)
