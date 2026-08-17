# Cross Interview #7

The goal of the technical interview is to check the quality of learning on topics: generative AI fundamentals, AI fluency and prompt design, AI coding agents, and Gemini API integration.

## Interview questions list

### Generative AI and LLM Fundamentals

1. What is a large language model (LLM), and how does it differ from a traditional program that follows explicitly written rules?
2. What is a token, and why do token counts matter when using an LLM through an API?
3. What does next-token prediction mean, and how can it produce both useful answers and confidently incorrect information?
4. What is a context window, what can it contain, and what happens when a conversation or document exceeds it?
5. What is an AI hallucination, and what techniques can an application use to reduce or detect hallucinated information?
6. Why can an LLM be unreliable when answering questions about recent, rare, or domain-specific information?
7. What is the difference between a model's capabilities, knowledge, working memory, and steerability?
8. When should a developer avoid using an LLM and choose deterministic application logic instead?

### AI Fluency, Prompt Design, and Evaluation

9. What are the four competencies in Anthropic's AI Fluency framework: Delegation, Description, Discernment, and Diligence?
10. What does effective delegation to an AI system involve, and how do you decide which parts of a task should remain under human control?
11. What information should a well-designed prompt provide besides the task itself?
12. How do constraints, delimiters, examples, and an explicit output format improve a prompt?
13. What is the Description–Discernment loop, and why is prompt engineering usually an iterative process?
14. Why should fluent wording or a confident tone not be treated as evidence that an AI response is correct?
15. How would you evaluate whether a prompt or AI feature works reliably rather than judging it from a single successful response?
16. What is structured output, and when is a JSON schema more reliable than asking for JSON only in natural-language instructions?

### Coding Agents, Tools, and Context

17. What is the difference between a chat assistant and an AI coding agent that can inspect files, run commands, and edit a project?
18. What are the main stages of an agent loop, and why must the agent inspect the result of an action before choosing the next one?
19. Why is an Explore → Plan → Code → Verify workflow useful when working with a coding agent?
20. How does the context supplied to a coding agent affect the quality of its changes, and what project information is most useful to provide?
21. Why should an AI agent receive only the tools and permissions required for its current task?
22. What is the difference between structured output and tool calling: when should a model return data, and when should it ask the application to perform an action?
23. What is the Model Context Protocol (MCP), and what roles do MCP clients and servers play when connecting an AI application to external systems?

### Gemini API and React Integration

24. How do you create and authenticate a request with the Gemini API using the official `@google/genai` JavaScript/TypeScript SDK?
25. Why must `GEMINI_API_KEY` remain on the server, and why would placing it in a `NEXT_PUBLIC_` environment variable be insecure?
26. Where should Gemini API calls live in a Next.js application, and how should a Client Component communicate with that server-side code?
27. What is response streaming, and how can it improve the user experience of an AI-powered React interface compared with waiting for the complete response?
28. Which UI and application states should be handled around an AI request, including loading, partial output, cancellation, empty or blocked responses, errors, and retries?
29. How should an application handle Gemini rate limits and a `429` response without producing duplicate requests or overwhelming the service?
30. Why must model output be treated as untrusted data, and how would you validate, render, and test it safely without making real Gemini requests in unit tests?
