import { Lesson } from "components/Lesson";
import { Lessons } from "components/Lessons";

import { AppContext } from "./app/AppContext";

function App() {
  return (
    <AppContext>
      <Lessons className="lessons" />
      <Lesson className="lesson" />
    </AppContext>
  );
}

export default App;
