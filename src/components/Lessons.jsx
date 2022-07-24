import { useAppContext, useAppDispatchContext } from "../app/context";
import { course } from "../data/course";

export function ModuleLesson({ lesson, index }) {
  const dispatch = useAppDispatchContext();
  const activeLesson = useAppContext();

  return (
    <div title={lesson.name} onClick={() => dispatch(lesson.id)}>
      {index}
    </div>
  );
}

export function ModuleBlock({ module, moduleIndex }) {
  return (
    <div className="module-block">
      {module.lessons.map((l, lIndex) => (
        <ModuleLesson lesson={l} index={moduleIndex + lIndex + 1} key={l.id} />
      ))}
    </div>
  );
}

export function Lessons() {
  return (
    <div>
      {course.map((m, mIndex) => (
        <ModuleBlock module={m} moduleIndex={mIndex} key={m.id} />
      ))}
    </div>
  );
}
