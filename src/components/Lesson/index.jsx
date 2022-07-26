import {
  useActiveLessonContext,
  useActiveLessonDispatchContext,
} from "app/useActiveLessonContext";
import { courseModules, courseLessons } from "data/course";
import { lessonComponents } from "./lessons";
import styles from "./style.module.scss";

const lessons = courseModules.reduce((arr, m) => [...arr, ...m.lessons], []);

export function Lesson() {
  const lessonId = useActiveLessonContext();
  const dispatch = useActiveLessonDispatchContext();

  const Component = lessonComponents[lessonId];

  if (!Component) {
    return null;
  }

  const lesson = courseLessons[lessonId];
  const index = lessons.findIndex((key) => key === lessonId);
  const prevLesson = lessons[index - 1];
  const nextLesson = lessons[index + 1];

  function toPrev() {
    dispatch(prevLesson);
  }

  function toNext() {
    dispatch(nextLesson);
  }

  return (
    <div className={styles.Container}>
      <h1>{lesson.name}</h1>
      <Component className={styles.Content} />
      <div>
        <button disabled={!prevLesson} onClick={toPrev}>
          Prev
        </button>
        <button disabled={!nextLesson} onClick={toNext}>
          Next
        </button>
      </div>
    </div>
  );
}
