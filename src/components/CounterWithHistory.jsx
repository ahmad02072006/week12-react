import { useState } from 'react';

// Two state variables: count + history (array)
function CounterWithHistory() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);

  function change(newValue) {
    setCount(newValue);
    setHistory((prev) => [...prev, newValue]);
  }

  function undo() {
    if (history.length <= 1) return;
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    setCount(newHistory[newHistory.length - 1]);
  }

  function reset() {
    setCount(0);
    setHistory([0]);
  }

  return (
    <div>
      <p className="big-number">{count}</p>
      <div className="row">
        <button className="btn" onClick={() => change(count + 1)}>+1</button>
        <button className="btn" onClick={() => change(count - 1)}>-1</button>
        <button className="btn btn-ghost" onClick={reset}>Reset</button>
        <button className="btn btn-ghost" onClick={undo} disabled={history.length <= 1}>
          Undo
        </button>
      </div>
      <p className="muted">History (last 5): [{history.slice(-5).join(', ')}]</p>
    </div>
  );
}

export default CounterWithHistory;