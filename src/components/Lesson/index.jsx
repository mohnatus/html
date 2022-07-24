import { useAppContext } from "app/context";
import { lessonComponents } from "./lessons";

import styles from "./style.module.scss";

export function Lesson() {
  const lessonId = useAppContext();
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
