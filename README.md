# React Learnings

##  React basics
Learned that in React we do not directly change HTML. We change **state**, and React updates the UI for us. Used `useState` to store data and understood that whenever state changes, the component re-renders. Learned how events like `onClick` and `onChange` work in JSX.

##  Controlled inputs
Learned how to control input fields using React state. The input value comes from state and updates using `onChange`. This makes the UI predictable and allows easy UX logic like disabling buttons when input is empty.

## Form handling
Learned how to handle multiple inputs using a single `onChange` handler with the `name` attribute. Understood why we should not directly modify state and how to update part of an object using the spread operator. Also handled form submission and reset.

##  Lifting state up and props
Learned how data flows in React from parent to child. To send data from child to parent, we pass a function as a prop and call it with data. Understood where state should live and the difference between local state and shared state.

##  Props drilling and Context API
Learned what props drilling is and why it becomes a problem when data is needed by deep components. Used Context API to avoid passing props through unnecessary components. Also learned when to use props and when context is actually needed.
##  useReducer (state management concept)
Learned why `useReducer` exists and when it should be used instead of `useState`.
Understood the reducer pattern: action → reducer → new state.
Saw how related states (loading, error, form data) can be managed in one place.
Also learned that `useReducer` is useful only when state logic becomes complex,
not just because there are multiple states.

##  Custom Hooks & useEffect basics

Learned how to create custom hooks to reuse logic across components.
Built a custom API hook and understood how `useEffect` works after render.
Learned about dependency arrays, when effects run, and how cleanup works.
Also understood common mistakes like calling hooks conditionally
and why state updates are asynchronous in React.

##  Real-world useEffect (Search feature)
Built a real search feature using `useEffect` that reacts to user input.
Implemented API fetching, query-based filtering, loading, error,
and empty-result states.
Learned how to guard effects, avoid unnecessary calls,
and verify state updates through UI instead of console logs.
This day focused on writing practical, production-style React code.

## Debounce & performance optimization
Learned the concept of debouncing and why it is needed to improve performance.
Understood that debounce is used to delay expensive operations like API calls
until the user stops typing. Implemented debouncing using setTimeout and
clearTimeout inside useEffect to avoid unnecessary repeated API calls.
Learned that debounce is a UX and performance decision, not just a technical trick.

##  Custom Hook (useDebounce)
Refactored debounce logic into a reusable custom hook called useDebounce.
Learned how to design custom hooks, follow the Rules of Hooks,
and keep components clean by separating logic from UI.
Used the debounced value to trigger API calls with useEffect,
making the search feature more readable, reusable, and scalable.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
