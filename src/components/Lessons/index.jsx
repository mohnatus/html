import {
  useActiveLessonContext,
  useActiveLessonDispatchContext,
} from "app/useActiveLessonContext";
import { courseModules, courseLessons } from "data/course";
import styles from "./style.module.scss";

export function ModuleLesson({ lesson, index }) {
  const dispatch = useActiveLessonDispatchContext();
  const activeLesson = useActiveLessonContext();

  const classes = [
    styles.Lesson,
    activeLesson === lesson && styles.Active,
  ].filter(Boolean);

  return (
    <div
      className={classes.join(" ")}
      title={lesson.name}
      onClick={() => dispatch(lesson)}
    >
      {index}
    </div>
  );
}

export function ModuleBlock({ module, index }) {
  return (
    <div className={styles.Module} title={module.name}>
      <div className={styles.ModuleName}>
        {index + 1}. {module.name}
      </div>
      <div className={styles.ModuleLessons}>
        {module.lessons.map((l) => (
          <ModuleLesson lesson={l} key={l} />
        ))}
      </div>
    </div>
  );
}

export function Lessons() {
  return (
    <div className={styles.Container}>
      {courseModules.map((m, mIndex) => (
        <ModuleBlock module={m} index={mIndex} key={m.id} />
      ))}
    </div>
  );
}
