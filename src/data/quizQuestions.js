// Quizzes 1–7 from the Week 12 Monday slides (React State).
// `answer` is the index (0-based) of the correct option.
const QUESTIONS = [
  {
    topic: 'State vs Props',
    question: 'Which statement most accurately distinguishes state from props in React?',
    options: [
      'Props are mutable by the child; state is immutable and passed down.',
      "State is received from a parent; props are a component's private memory.",
      'Props are read-only inputs from a parent; state is component-owned data whose setter schedules a re-render.',
      'A local variable declared with let persists across renders like state.',
      'State can only hold numbers and strings.',
    ],
    answer: 2,
    explanation:
      'Ownership is the decisive criterion: a parent supplies props, while the component itself owns state and changes it only through the setter, which triggers a re-render.',
  },
  {
    topic: 'The useState return value',
    question: 'What does the call useState(0) return?',
    options: [
      'The number 0',
      'An object { value, setValue }',
      'An array: [currentValue, setterFunction]',
      'Only a setter function',
      'A Promise that resolves to the state',
    ],
    answer: 2,
    explanation:
      'useState returns a pair in an array. Position, not name, gives each element its meaning, which is why you destructure it and choose your own names.',
  },
  {
    topic: 'Rules of Hooks',
    question: 'Which of the following violates the Rules of Hooks?',
    options: [
      'const [n, setN] = useState(0); // top of component',
      'if (open) { const [t, setT] = useState(""); }',
      'function useCounter() { useState(0); ... }',
      'Two useState calls, one after the other, at the top',
      'An arrow-function component calling useState at its top',
    ],
    answer: 1,
    explanation:
      'React matches Hook calls by their order on every render. A conditional call changes that order, so later Hooks would receive the wrong state.',
  },
  {
    topic: 'Stale state and batching',
    question:
      'A handler runs setCount(count + 1) three times in a row, and count is 0 in the current render. What is count after the update?',
    options: ['0', '1', '2', '3', 'It depends on timing (a race condition)'],
    answer: 1,
    explanation:
      'Within one render, count is a constant snapshot (0). All three calls enqueue the value 1, so the result is 1. Using setCount(prev => prev + 1) three times would give 3.',
  },
  {
    topic: 'Designing state variables',
    question:
      'A form has three independent fields: name, email and subscribed (a boolean). Which design best follows the guidance of this lecture?',
    options: [
      'Three separate useState calls, one per field',
      'One useState holding all fields, always, for performance',
      'A module-level variable shared by the component',
      'useState called inside a loop over the field names',
      'Props, because the user can edit them by typing',
    ],
    answer: 0,
    explanation:
      'Independent values with independent update logic are clearest as separate state variables. Each setter changes only its own piece, with no spread needed.',
  },
  {
    topic: 'Immutable updates to arrays',
    question:
      'Which statement adds an item x to the array state todos without mutating it, so that React re-renders?',
    options: [
      'todos.push(x); setTodos(todos);',
      'setTodos(todos.push(x));',
      'setTodos(prev => [...prev, x]);',
      'todos.unshift(x); setTodos(todos);',
      'setTodos(prev => { prev.push(x); return prev; });',
    ],
    answer: 2,
    explanation:
      'The spread creates a new array with the old items plus x. The new reference triggers a re-render, and the updater reads the latest state.',
  },
  {
    topic: 'Sharing state between siblings',
    question:
      'Sibling components A and B must display and edit the same value. Which design is idiomatic in React?',
    options: [
      'Keep a copy in each sibling and synchronise them manually',
      'Lift the state to the nearest common parent; pass the value down as props and the setter as a callback',
      "Let A call B's internal state setter directly",
      'Store the value in a global mutable variable',
      'Pass the value as a prop and let A modify its own props',
    ],
    answer: 1,
    explanation:
      'One owner holds the state (single source of truth). Data flows down through props and events flow up through callbacks.',
  },
];

export default QUESTIONS;
