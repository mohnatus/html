import { useActiveLessonContext } from "app/useActiveLessonContext";
import { lessonComponents } from "./lessons";
import styles from "./style.module.scss";

export function Lesson() {
  const lessonId = useActiveLessonContext();
  const Component = lessonComponents[lessonId];

  if (!Component) {
    return null;
  }

  return (
    <div className={styles.Container}>
      <Component className={styles.Content} />
    </div>
  );
}
