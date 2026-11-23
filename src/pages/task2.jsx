import mount from '../mount';
import TaskPage from '../components/TaskPage';
import TodoList from '../components/TodoList';

mount(
  <TaskPage n={2}>
    <section className="section">
      <TodoList />
    </section>
  </TaskPage>
);
