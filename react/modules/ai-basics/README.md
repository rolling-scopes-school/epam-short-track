# AI Basics for Frontend Developers 🌟

## Module Overview 📚

This module introduces the foundations of working with generative AI and large language models (LLMs). It focuses on building a useful mental model of how LLMs work, collaborating with them responsibly, using AI coding agents effectively, and integrating an AI model into a web application.

The main learning path uses Anthropic's free courses. Although their examples use Claude, the core concepts—context, prompting, model limitations, evaluation, tool use, agent loops, streaming, and structured output—apply to other providers as well. The practical API resources use Google's Gemini API, which will be used in the upcoming task.

## Learning Objectives 🎯

Students will:

- Explain at a high level how an LLM produces a response and what tokens and context windows are.
- Recognize hallucinations, knowledge limitations, prompt injection, and other common failure modes.
- Write clear prompts with relevant context, constraints, examples, and an explicit output format.
- Evaluate AI output instead of treating it as a source of truth.
- Use an AI coding agent with an explore, plan, implement, and verify workflow.
- Understand the difference between a model call, tool use, an agent loop, and the Model Context Protocol (MCP).
- Create and secure a Gemini API key and make requests with the official JavaScript/TypeScript SDK.
- Design a responsive AI-powered UI using loading states, streaming, error handling, and structured output.

## Approximate Module Completion Time ⏱️

- **[10 hours]**

## Theory 📖

Students are encouraged to study the following resources in order. All Anthropic courses below are available through the [Anthropic course catalog](https://anthropic.skilljar.com/) with free enrollment.

1. **Generative AI foundations and responsible collaboration:**

   - [AI Capabilities and Limitations](https://anthropic.skilljar.com/ai-capabilities-and-limitations) - Learn about next-token prediction, knowledge boundaries, working memory, steerability, and why plausible answers can still be wrong. - [30 minutes]
   - [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) - Practice the four AI fluency competencies: Delegation, Description, Discernment, and Diligence. - [1.5 hours]
   - [AI Fluency for Builders](https://anthropic.skilljar.com/ai-fluency-for-builders) - Apply the AI Fluency framework to software and product development, including evaluation of generated code and user experiences. - [1 hour]

2. **AI-assisted software development:**

   - [Claude Code 101](https://anthropic.skilljar.com/claude-code-101) - Learn how coding agents gather context, use tools, work with permissions, and follow an Explore → Plan → Code → Commit workflow. - [2 hours]
   - [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) - Go deeper into context management, project instructions, tool use, hooks, MCP servers, and development workflows. Sections that overlap with Claude Code 101 may be reviewed quickly. - [2 hours]

3. **Building AI-powered applications:**

   - [Claude Platform 101](https://anthropic.skilljar.com/claude-platform-101) - Follow the path from model selection to agent loops, tool use, context management, and managed agents. Focus on the provider-independent concepts. Exercises that call the Claude API are optional because they require a Claude API key and prepaid credit. - [1.5 hours]

4. **Google Gemini API preparation:**

   - [Gemini API: Getting started](https://ai.google.dev/gemini-api/docs/get-started) - Create an API key in Google AI Studio, configure `GEMINI_API_KEY`, install the official SDK, and make a first request. - [20 minutes]
   - [Google GenAI SDK libraries](https://ai.google.dev/gemini-api/docs/libraries) - Use the current `@google/genai` package for JavaScript/TypeScript and avoid legacy Gemini libraries. - [10 minutes]
   - [Text generation and streaming](https://ai.google.dev/gemini-api/docs/text-generation) - Compare complete and streamed responses and consider how each maps to React loading and rendering states. - [25 minutes]
   - [Prompt design strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies) - Practice clear instructions, context, constraints, examples, and explicit response formats. - [25 minutes]
   - [Structured outputs](https://ai.google.dev/gemini-api/docs/structured-output) - Request predictable JSON using a schema, then validate the result before using it in the UI. - [20 minutes]
   - [Using Gemini API keys securely](https://ai.google.dev/gemini-api/docs/api-key) - Keep the key in a server-side environment variable and never expose it in browser code or commit it to Git. - [15 minutes]

## Additional Resources 📘

Expand your knowledge with these additional materials:

- [Google AI Studio quickstart](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart) - Experiment with prompts and inspect generated API code.
- [Gemini API safety and factuality guidance](https://ai.google.dev/gemini-api/docs/safety-guidance) - Plan for unsafe, biased, or factually incorrect output and deliberate misuse.
- [Gemini API troubleshooting](https://ai.google.dev/gemini-api/docs/troubleshooting) - Diagnose authentication, quota, model, and transient API errors.
- [Building with the Claude API](https://anthropic.skilljar.com/claude-with-the-anthropic-api) - Optional eight-hour course covering Claude-specific API development, evaluations, retrieval, tools, workflows, and agents. It requires a Claude API key; complete it only if you want additional practice with another provider.
- [Anthropic: Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) - A structured prompt-engineering workflow and techniques.
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) - Decide when a simple workflow is enough and when an agent is justified.
- [OWASP Top 10 for Large Language Model Applications](https://genai.owasp.org/llm-top-10/) - Security risks including prompt injection, sensitive information disclosure, and improper output handling.
