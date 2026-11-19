import ShoppingCart from './components/ShoppingCart';
import CounterWithHistory from './components/CounterWithHistory';
import TodoList from './components/TodoList';
import SearchPage from './components/SearchPage';
import WordCount from './components/WordCount';

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {subtitle && <p className="muted">{subtitle}</p>}
      {children}
    </section>
  );
}

function App() {
  return (
    <>
      <a className="skip" href="#main-content">Skip to content</a>

      <header className="header">
        <div className="container header-inner">
          <strong>Week 12 · React State</strong>
          <nav>
            <a href="#cart">Shopping Cart</a>
            <a href="#counter">Counter</a>
            <a href="#todo">Todo</a>
            <a href="#search">Search</a>
            <a href="#words">Word Count</a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="container">
        <div className="hero">
          <h1>Interactive React State</h1>
          <p>Web Programming · K0126_002 — useState, arrays, lifting state up</p>
        </div>

        <Section
          id="cart"
          title="Homework: Interactive Shopping Cart"
          subtitle="Add items, change quantities, and watch the total update."
        >
          <ShoppingCart />
        </Section>

        <div className="grid-2">
          <Section id="counter" title="Counter with History" subtitle="Two state variables + undo.">
            <CounterWithHistory />
          </Section>
          <Section id="todo" title="Todo List" subtitle="State with arrays.">
            <TodoList />
          </Section>
          <Section id="search" title="Search (Lifting State Up)" subtitle="Parent owns the query.">
            <SearchPage />
          </Section>
          <Section id="words" title="Live Word Count" subtitle="Practice: textarea + useState.">
            <WordCount />
          </Section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">Built by Ahmad · Web Programming · Week 12</div>
      </footer>
    </>
  );
}

export default App;