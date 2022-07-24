import { useState } from "react";
import { Lesson } from "./components/Lesson";
import { Lessons } from "./components/Lessons";
import { AppContextProvider, AppDispatchContextProvider } from "./app/context";

function App() {
  const [activeLesson, setActiveLesson ] = useState();

  return (
    <AppDispatchContextProvider value={setActiveLesson}>
      <AppContextProvider value={activeLesson}>

        <Lessons />

        <Lesson  />

      </AppContextProvider>
    </AppDispatchContextProvider>
  );
}

export default App;
