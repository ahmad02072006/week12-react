import mount from '../mount';
import TaskPage from '../components/TaskPage';
import TextAnalyzer from '../components/TextAnalyzer';
import ConceptQuiz from '../components/ConceptQuiz';

mount(
  <TaskPage n={5}>
    <TextAnalyzer />
    <ConceptQuiz />
  </TaskPage>
);
