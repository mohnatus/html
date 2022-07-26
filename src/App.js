import { Lesson } from "components/Lesson";
import { Lessons } from "components/Lessons";
import { courseLessons } from "data/course";

import { AppContext } from "./app/AppContext";

const tagsCount = Object.values(courseLessons).reduce(
  (total, lesson) => total + (lesson?.tags?.length || 0),
  0
);

function App() {
  return (
    <AppContext>
      <div>Всего тегов выучить: {tagsCount}</div>
      <Lessons className="lessons" />
      <Lesson className="lesson" />
    </AppContext>
  );
}

export default App;
