# Smart Home UI. Part 3

(Cross-Check) [Smart Home UI. Part 3](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular-smart-home-ui/smart-home-part-3.md)

## Mentor Evaluation Criteria (100 points)

**Note**: Mentor evaluation focuses on architecture, design patterns, and code quality. Basic requirements (ESLint, TypeScript configuration, PR/commit conventions) are covered in the Penalties section.

### 1. NgRx Architecture and State Management - **50 points**

- **(15 points)** Store structure and design:
  - Store is properly organized (actions, reducers, effects, selectors in logical structure)
  - State interfaces are clearly defined with proper TypeScript types
  - Single source of truth principle is maintained
- **(10 points)** Actions design:
  - Actions represent events, not commands
  - Action names follow consistent convention (e.g., `[Dashboard] Enter Edit Mode`)
  - Proper use of `createAction` with typed payloads
  - Actions are granular and focused
- **(10 points)** Reducers implementation:
  - Pure functions without side effects
  - Immutable state updates (proper use of spread operators or libraries)
  - Proper use of `createReducer` and `on()` functions
  - State updates are predictable and testable
- **(15 points)** Effects and side effects management:
  - API calls are properly handled in effects
  - Effects use appropriate RxJS operators
  - Error handling is implemented in effects
  - Effects dispatch appropriate success/failure actions
  - Optimistic updates are implemented correctly (e.g., device toggle)

### 2. Component Architecture - **25 points**

- **(15 points)** Component design patterns:
  - Smart/Presentational (Container/Component) pattern is used appropriately
  - Components have single responsibility
  - Proper separation between business logic (services/store) and presentation (components)
  - Components are reusable and not tightly coupled
- **(10 points)** Component communication:
  - Proper use of `@Input()` and `@Output()` for component interaction
  - Store is accessed through selectors, not directly
  - Actions are dispatched through proper channels

### 3. Services and Business Logic - **15 points**

- **(10 points)** Service layer design:
  - API calls are encapsulated in dedicated services
  - Services are properly injected and reusable
  - Business logic is in services, not components or templates
  - Services follow single responsibility principle
- **(5 points)** Reactive programming patterns:
  - Efficient use of RxJS operators where appropriate
  - Proper subscription management (no memory leaks)
  - Observables are used effectively with async pipe or proper cleanup

### 4. Code Quality and Maintainability - **10 points**

- **(5 points)** Code organization and readability:
  - Functions and methods are focused and not overly complex
  - Naming is clear, consistent, and follows conventions
  - Code follows DRY principle without over-engineering
  - Proper use of TypeScript features (interfaces, types, generics where appropriate)
- **(5 points)** Modern Angular features:
  - Signals are used appropriately for UI state
  - Reactive Forms are properly implemented with validators
  - Proper integration between Signals, RxJS, and NgRx where needed

**Note**: The evaluation criteria above focus on code quality, architecture, and adherence to Angular best practices. Functional testing is covered by the student cross-check evaluation criteria.

## Penalties

- Store is not used for dashboard - **-25**
- Device toggle handled locally (not via NgRx) - **-10**
- API not used for saving/deleting dashboards - **-10**
- Business logic is implemented in components/templates instead of services or store - **-10**
- ESLint warnings or errors are present - **-10**
- Using the `any` type in TypeScript - **-10**
- Mandatory flag `strict: true` is not set in the TypeScript configuration file - **-10**
- The ESLint configuration file does not include the `no-explicit-any` rule - **-5**
- Failure to meet the [requirements](https://rs.school/docs/en/pull-request-review-process#pull-request-requirements-pr) when creating a `Pull Request` - **-5**
- Non-compliance with commit history and commit message [guidelines](https://rs.school/docs/en/git-convention#commit-requirements) - **-5**
- Failure to submit on time may lead to points loss according to the [Deadlines for Students requirements](https://rs.school/docs/en/pull-request-review-process#deadlines-for-students)
