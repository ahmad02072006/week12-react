import { useState } from 'react';

const fruits = ['Apple', 'Banana', 'Blueberry', 'Cherry', 'Grape', 'Mango', 'Orange', 'Peach'];

function SearchBox({ query, onQueryChange }) {
  return (
    <input
      className="input"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="Search fruits..."
      aria-label="Search fruits"
    />
  );
}

function ResultList({ query }) {
  const results = fruits.filter((f) => f.toLowerCase().includes(query.toLowerCase()));
  return results.length === 0 ? (
    <p className="muted">No results.</p>
  ) : (
    <ul className="chips">
      {results.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}

// The parent owns the state; both siblings use it
function SearchPage() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <SearchBox query={query} onQueryChange={setQuery} />
      <ResultList query={query} />
    </div>
  );
}

export default SearchPage;