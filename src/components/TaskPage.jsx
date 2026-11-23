import TASKS from '../data/tasks';

// Shared shell for tasks 1, 2, 3 and 5: top bar, title, content, prev/next links.
function TaskPage({ n, children }) {
  const base = import.meta.env.BASE_URL;
  const task = TASKS[n - 1];
  const prev = TASKS[n - 2];
  const next = TASKS[n];

  return (
    <>
      <header className="top">
        <div className="container top-inner">
          <a className="logo" href={base}>
            <span className="logo-mark" aria-hidden="true">W</span>
            Week 12.1
          </a>
          <nav className="pill-nav" aria-label="Tasks">
            {TASKS.map((t) => (
              <a
                key={t.n}
                href={`${base}${t.file}`}
                aria-current={t.n === n ? 'page' : undefined}
              >
                Task {t.n}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container task-page">
        <p className="task-kicker">Task {n} of {TASKS.length}</p>
        <h1 className="task-title">{task.title}</h1>
        <p className="muted">{task.topic}</p>

        {children}

        <div className="task-footer-nav">
          {prev ? <a href={`${base}${prev.file}`}>← Task {prev.n}</a> : <span />}
          <a href={base}>All tasks</a>
          {next ? <a href={`${base}${next.file}`}>Task {next.n} →</a> : <span />}
        </div>
      </main>
    </>
  );
}

export default TaskPage;
