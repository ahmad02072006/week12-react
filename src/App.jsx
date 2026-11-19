import { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import CounterWithHistory from './components/CounterWithHistory';
import TodoList from './components/TodoList';
import SearchPage from './components/SearchPage';
import WordCount from './components/WordCount';
import Countdown from './components/Countdown';

const bandWords = ['SNEAKERS', 'TRENDING', 'NEW ARRIVALS', '20% DISCOUNT'];

function Band({ className }) {
  return (
    <div className={`band ${className}`} aria-hidden="true">
      <div className="band-track">
        {['first', 'second'].map((copy) => (
          <span className="band-copy" key={copy}>
            {bandWords.map((word) => (
              <span className="band-word" key={word}>
                {word} <b>✱</b>
              </span>
            ))}
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
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <a className="skip" href="#main-content">Skip to content</a>

      <header className="top">
        <div className="container top-inner">
          <a className="logo" href="#home" aria-label="StrideLab home">
            <span className="logo-mark" aria-hidden="true">S</span>
            StrideLab
          </a>
          <nav className="pill-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="cart-chip" href="#cart" aria-label={`View cart, ${cartCount} items`}>
            <span aria-hidden="true">↗</span> {cartCount} items
          </a>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="container">
          <div className="hero">
            <p className="hero-kicker">StrideLab / Find your next favorite</p>
            <h1>
              <span className="hero-accent">Unleash</span> your unique
              <br className="desktop-break" /> sneaker identity
            </h1>
            <a className="shop-now" href="#shop" aria-label="Shop the sneaker collection">
              <span aria-hidden="true">↗</span>
              SHOP NOW
            </a>
            <img
              className="hero-img"
              src="https://placehold.co/900x640/211b3c/ffe531?text=StrideLab+Sneaker+Drop"
              alt="Featured sneaker from the StrideLab collection"
            />
            <p className="hero-text">
              Sneakers made for wherever your day takes you. Find your fit, make
              your mark, and move your own way.
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
              <div>
                <p className="coll-label">THE STRIDELAB EDIT</p>
                <h3>Fresh pairs. Better prices.</h3>
                <p>Find your new everyday favorite in this week's handpicked deals.</p>
              </div>
              <a className="pill-btn" href="#shop">Explore deals</a>
            </article>
            <article className="coll coll-yellow">
              <div className="coll-copy">
                <p className="coll-label">MADE TO MOVE</p>
                <h3>Men's collection</h3>
                <p>Everyday comfort with a little extra edge.</p>
                <a className="pill-btn" href="#shop">Shop men's</a>
              </div>
              <img
                src="https://placehold.co/520x380/f5b92e/0b0720?text=Men%27s+Sneakers"
                alt="Men's sneaker collection"
                loading="lazy"
              />
            </article>
            <article className="coll coll-lav">
              <div className="coll-copy">
                <p className="coll-label">OWN YOUR PACE</p>
                <h3>Women's collection</h3>
                <p>Fresh colors and easy comfort for every day.</p>
                <a className="pill-btn" href="#shop">Shop women's</a>
              </div>
              <img
                src="https://placehold.co/520x380/d8d5f3/0b0720?text=Women%27s+Sneakers"
                alt="Women's sneaker collection"
                loading="lazy"
              />
            </article>
          </div>
        </section>

        <section id="shop" className="container deals">
          <Countdown />
          <h2 className="big-title">Best deals of the week</h2>
          <Section
            title="Find your stride"
            subtitle="Six fresh picks. Add a pair, adjust the quantity, and watch your total update."
          >
            <ShoppingCart onCartCountChange={setCartCount} />
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
        <div id="contact" className="container">
          <p className="footer-kicker">STEP INTO YOUR NEXT FAVORITE</p>
          <p className="footer-big">StrideLab. Walk your own way.</p>
          <a className="footer-link" href="mailto:hello@stridelab.example">Contact the StrideLab team</a>
          <p className="footer-note">© StrideLab · Made for wherever you're headed.</p>
        </div>
      </footer>
    </>
  );
}

export default App;