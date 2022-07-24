import { useAppContext } from "../app/context";
import * as lessons from "../data/lessons";

import { HowSiteWorks } from "./lessons/HowSiteWorks";
import { LocalServer } from "./lessons/LocalServer";

const lessonComponents = {
  [lessons.HOW_SITE_WORKS]: HowSiteWorks,
  [lessons.LOCAL_SERVER]: LocalServer,
};

export function Lesson() {
  const lessonId = useAppContext();
  const Component = lessonComponents[lessonId];

  if (!Component) {
    return <div>Unknown lesson</div>;
  }

  return <Component />;
}
