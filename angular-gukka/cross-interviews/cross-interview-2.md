## Set 1

1. What are Signals in Angular? How do they improve reactivity in Angular applications?
1. How do you create a signal in Angular? Provide examples of creating writable signals.
1. How do you read the value of a signal? What methods are available?
1. How do you update signal values? Explain the difference between `set()`, `update()`, and `mutate()` methods.
1. What are computed signals and how do they work? How do they differ from regular writable signals?
1. What is the `effect()` API in Angular Signals and when would you use it?
1. How does signal equality checking work and why is it important for performance?
1. What is RxJS and why is it important in Angular development? How does it relate to the reactive programming paradigm?
1. Explain the concept of Observables in RxJS. How do they differ from Promises?
1. What are Observers and Subscriptions in RxJS? Explain their relationships with Observables.
1. How do you create Observables in RxJS? What are the different creation operators (`of`, `from`, `interval`, `fromEvent`)?
1. What is the difference between cold and hot Observables? Provide examples of each.
1. How do you properly handle subscriptions in Angular components to prevent memory leaks?
1. What is the `async` pipe and what are its advantages when working with Observables?
1. Explain the `toSignal()` function. How do you convert an Observable to a Signal and what are the configuration options?

## Set 2

1. What are the benefits of using Signals over Observables for managing state in Angular applications?
1. How do you combine multiple signals? Explain the use of `computed()` for deriving values from multiple signals.
1. What are the cleanup and scheduling options in the `effect()` function?
1. What is signal equality checking? How can you customize it?
1. How does the change detection mechanism in Angular work with Signals? How do Signals affect change detection compared to traditional approaches?
1. What are the core principles of reactive programming? How does RxJS implement these principles?
1. What are Subjects in RxJS? How do they differ from regular Observables?
1. What is the difference between Subject, BehaviorSubject, ReplaySubject, and AsyncSubject? When would you use each one?
1. Explain transformation operators in RxJS: `map`, `tap`, `scan`. Provide use cases for each.
1. What are filtering operators in RxJS? Explain `filter`, `take`, `first`, `skip`, `distinctUntilChanged`.
1. How do combination operators work? Explain `combineLatest`, `merge`, `concat`, `forkJoin`, `zip`.
1. What are flattening operators (`mergeMap`, `switchMap`, `concatMap`, `exhaustMap`)? When should you use each one?
1. How do error handling operators work in RxJS? Explain `catchError`, `retry`, `retryWhen`.
1. How do you use `toObservable()` to convert a Signal to an Observable? When would you need this conversion?
1. What are the best practices for using Signals and RxJS together in Angular applications? How do they complement each other?
