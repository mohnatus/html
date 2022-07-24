import { useAppContext } from "app/context";
import * as lessons from "data/lessons";

import { HowSiteWorks } from "./lessons/HowSiteWorks";
import { LocalServer } from "./lessons/LocalServer";

import  styles from './style.module.scss';

const lessonComponents = {
  [lessons.HOW_SITE_WORKS]: HowSiteWorks,
  [lessons.LOCAL_SERVER]: LocalServer,
};

export function Lesson() {
  const lessonId = useAppContext();
  const Component = lessonComponents[lessonId];

  if (!Component) {
    return null;
  }

  return <div className={styles.Container}>
    <Component className={styles.Content} />
  </div>;
}
