import { useAppContext, useAppDispatchContext } from "app/context";
import { course } from "data/course";

import styles from "./style.module.scss";

export function ModuleLesson({ lesson, index }) {
  const dispatch = useAppDispatchContext();
  const activeLesson = useAppContext();

  const classes = [
    styles.Lesson,
    activeLesson === lesson.id && styles.Active,
  ].filter(Boolean);

  return (
    <div
      className={classes.join(" ")}
      title={lesson.name}
      onClick={() => dispatch(lesson.id)}
    >
      {index}
    </div>
  );
}

export function ModuleBlock({ module, moduleIndex }) {
  return (
    <div className={styles.Module}>
      {module.lessons.map((l, lIndex) => (
        <ModuleLesson lesson={l} index={moduleIndex + lIndex + 1} key={l.id} />
      ))}
    </div>
  );
}

export function Lessons() {
  return (
    <div className={styles.Container}>
      {course.map((m, mIndex) => (
        <ModuleBlock module={m} moduleIndex={mIndex} key={m.id} />
      ))}
    </div>
  );
}
