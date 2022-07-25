import { useState } from "react";
import {
  ActiveLessonContextProvider,
  ActiveLessonDispatchContextProvider,
} from "./useActiveLessonContext";
import { useHash } from "hooks/useHash";

export function AppContext({ children }) {
  const [hash, setHash] = useHash();
  const [activeLesson, setActiveLesson] = useState(hash);

  const updateActiveLesson = (lessonId) => {
    setActiveLesson(lessonId);
    setHash(lessonId);
  };

  return (
    <ActiveLessonDispatchContextProvider value={updateActiveLesson}>
      <ActiveLessonContextProvider value={activeLesson}>
        {children}
      </ActiveLessonContextProvider>
    </ActiveLessonDispatchContextProvider>
  );
}
