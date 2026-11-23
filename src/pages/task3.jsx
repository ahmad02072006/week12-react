import mount from '../mount';
import TaskPage from '../components/TaskPage';
import SearchPage from '../components/SearchPage';

mount(
  <TaskPage n={3}>
    <section className="section">
      <SearchPage />
    </section>
  </TaskPage>
);
