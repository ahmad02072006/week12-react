import mount from '../mount';
import TASKS from '../data/tasks';

const base = import.meta.env.BASE_URL;

mount(
  <>
    <header className="top">
      <div className="container top-inner">
        <a className="logo" href={base}>
          <span className="logo-mark" aria-hidden="true">W</span>
          Week 12.1
        </a>
        <nav className="pill-nav" aria-label="Site">
          <a href="https://ahmad02072006.github.io/web-programming-class/">← Back to coursework</a>
        </nav>
      </div>
    </header>

    <main className="container">
      <h1 className="big-title">React State & useState</h1>
      <p className="muted task-intro">Week 12 · Monday. Each task is its own page.</p>

      <ol className="task-grid">
        {TASKS.map((t) => (
          <li key={t.n}>
            <a className="task-card" href={`${base}${t.file}`}>
              <span className="task-num">Task {t.n}</span>
              <strong>{t.title}</strong>
              <span className="muted">{t.topic}</span>
            </a>
          </li>
        ))}
      </ol>
    </main>
  </>
);
