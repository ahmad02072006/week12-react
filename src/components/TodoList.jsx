import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Finish shopping cart homework', done: false },
    { id: 2, text: 'Push project to GitHub', done: false },
  ]);
  const [text, setText] = useState('');

  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: trimmed, done: false }]);
    setText('');
  }

  function toggle(id) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function remove(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <form className="row" onSubmit={addTodo}>
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
          aria-label="New task"
        />
        <button className="btn">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id}>
            <label className={t.done ? 'done' : ''}>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              {t.text}
            </label>
            <button className="link-btn" onClick={() => remove(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p className="muted">
        {todos.filter((t) => !t.done).length} of {todos.length} remaining
      </p>
    </div>
  );
}

export default TodoList;