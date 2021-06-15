---
title: NgRx Notes
description: Future post for the blog
authorName: Pietro Poluzzi
publish: true
---

# NgRx Notes
NgRx stands for Angular Reactive Extensions. NgRx is a **state management system** based on the [Redux](https://redux.js.org/) pattern.
Redux is a pattern used to simplify the state management process in JavaScript (/TypeScript) applications. Be sure to follow the [Redux best practices](https://redux.js.org/style-guide/style-guide) to avoid getting into huge problems.

## State
Application **state** is the entire memory of the application. It is composed of data received by API calls, user inputs, UI state, app preferences and so on.
An Angular application is composed by different components, which have their own state and have no consciousness of the state of the other components.
The only way to share data between parent and child components is by using `@Input` and `@Output` decorators.

This approach of passing information becomes impossible to manage when the number of components grows significantly.

## Golden Rules of a State Manager
### Single Source of Truth
The application state is stored in an object tree, which is unique store.
The store is responsible for storing the data and providing the data to components whenever requested.
In this way, data flows between the store and the components, instead of from parent-component to child-component.

### Read-only state
State is immutable. Off course, it can be changed, but not directly.
In order to perform changes in the state, you need to dispatch **actions** from the app to the store.

### Modify the state with pure functions
Dispatching actions will trigger the **reducers**, which are a set of *pure functions*.
Reducers are responsible for modifying the state based on the action received.

## Architecture

### Actions
An action is an instruction dispatched to the store, which can optionally have some metadata (called **payload**) which will be used by reducers to modify the state.
Based on the type of the action, the store decides which operations it needs to be executed.

### Reducers
Reducers are responsible for modifying the state based on the action received.
Reducer takes in two parameters:
1. current state
2. action

The reducer will always return a new state object with the changes which have been made.

### Effects
Effects allow you to perform side effects when an action is dispatched to the store.

NgRx provides a utility function called `createEffect` to create effects. It takes in as parameters:
- a function that returns an `Observable`
- a configuration object (optionally)

NgRx handles the subscription to the observable returned by `createEffect` function: you don't have to manually subscribe or unsubscribe. If any error occurs, NgRx will create a new observable and resubscribe to ensure that the side effect always gets executed.

If `dispatch == true` (which is the default value) in the configuration object, `createEffect` returns an `Observable<Action>`. NgRx will subscribe to the returned observable of type `Observable<Action>` and dispatch the actions received to the store. \
Else, if `dispatch == false` in the configuration object, `createEffect` returns an `Observable<Unknown>`.

If you are not mapping the received action to a different type of action in the operator chain, you'll have to set `dispatch = false`. Otherwise, the execution will result in an infinite loop, as the same action will get dispatched and received in the `actions$` stream again and again.

### Selectors
Selectors are pure functions used for obtaining slices of the store state. Here is where the **memorization** process comes in play: those functions maintain a memory of the previous executions. Until where are no input changes, the output don't need to be recalculated from the memory.

NgRx provides a utility function called `createSelector` to build selectors with memoization capability. `createSelector` takes in *one-to-many* mapping functions that give different slices of the state, and a projector function that carries out the computation. The projector function will not be invoked if the state slices haven't changed from the last execution. In order to use the created selector function, you have to pass it as an argument to the select operator.



