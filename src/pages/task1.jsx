import mount from '../mount';
import TaskPage from '../components/TaskPage';
import CounterWithHistory from '../components/CounterWithHistory';

mount(
  <TaskPage n={1}>
    <section className="section">
      <CounterWithHistory />
    </section>
  </TaskPage>
);
