import ShoppingCart from './components/ShoppingCart';
import CounterWithHistory from './components/CounterWithHistory';
import TodoList from './components/TodoList';
import SearchPage from './components/SearchPage';
import WordCount from './components/WordCount';
import Countdown from './components/Countdown';

const bandWords = ['SNEAKERS', 'TRENDING', 'NEW ARRIVALS', '20% DISCOUNT'];

function Band({ className }) {
  const items = [...bandWords, ...bandWords, ...bandWords, ...bandWords];
  return (
    <div className={`band ${className}`} aria-hidden="true">
      <div className="band-track">
        {items.map((word, i) => (
          <span key={`${word}-${i}`}>
            {word} <b>✱</b>
          </span>
        ))}
      </div>
    </div>
  );
}

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

      <header className="top">
        <div className="container top-inner">
          <a className="logo" href="#home">● StrideLab</a>
          <nav className="pill-nav" aria-label="Main">
            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#cart">Shop</a>
            <a href="#demos">Demos</a>
          </nav>
          <a className="cart-chip" href="#cart">Cart ↗</a>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="container">
          <div className="hero">
            <h1>
              <span className="hero-accent">Unleash</span> your
              <br />
              unique sneaker identity
            </h1>
            <a className="shop-now" href="#cart">
              <span>↗</span>
              SHOP NOW
            </a>
            <img
              className="hero-img"
              src="https://placehold.co/420x260/7c6df0/ffffff?text=Sneaker"
              alt="Featured sneaker"
            />
            <p className="hero-text">
              Explore diverse sneaker collections, express yourself through limited
              editions, and stand out with a style that is entirely yours.
            </p>
          </div>
        </section>

        <div className="bands">
          <Band className="band-yellow" />
          <Band className="band-orange" />
        </div>

        <section id="collections" className="container">
          <h2 className="big-title">Explore our unique collections.</h2>
          <div className="collections">
            <article className="coll coll-dark">
              <h3>Save up to 50% on sneakers this season</h3>
              <p>Discounts on a wide selection. Limited time offer!</p>
              <a className="pill-btn" href="#cart">View details</a>
            </article>
            <article className="coll coll-yellow">
              <h3>Men's Collections.</h3>
              <p>Explore the latest men's fashion trends.</p>
              <a className="pill-btn" href="#cart">Shop now</a>
            </article>
            <article className="coll coll-lav">
              <h3>Women's Collections.</h3>
              <p>Explore the latest women's fashion trends.</p>
              <a className="pill-btn" href="#cart">Shop now</a>
            </article>
          </div>
        </section>

        <section className="container deals">
          <Countdown />
          <h2 className="big-title">Best deals of the week!</h2>
          <Section
            id="cart"
            title="Interactive Shopping Cart"
            subtitle="Add items, change quantities, and watch the total update."
          >
            <ShoppingCart />
          </Section>
        </section>

        <section id="demos" className="container">
          <h2 className="big-title">More React state demos</h2>
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
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-big">StrideLab · Walk your own way</p>
          <p>Built by Ahmad · Web Programming K0126_002 · Week 12</p>
        </div>
      </footer>
    </>
  );
}

export default App;