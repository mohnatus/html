import * as lessons from "./lessons";
import * as modules from "./modules";

export const course = [
  {
    name: "Что такое сайт",
    id: modules.HOW_SITE_WORKS,
    lessons: [
      {
        name: "Что такое сайт",
        id: lessons.HOW_SITE_WORKS,
      },
      {
        name: "Локальный сервер",
        id: lessons.LOCAL_SERVER,
      },
    ],
  },
  {
    name: "Знакомство с HTML",
    id: modules.HTML_INTRO,
    lessons: [
      {
        name: "Знакомство с HTML",
        id: lessons.HTML_INTRO,
      },
      {
        name: "Редактор кода",
        id: lessons.CODE_EDITOR,
      },
      {
        name: "Теги, изменяющие стиль текста",
        id: lessons.TEXT_STYLE_TAGS,
      },
      {
        name: "Абзацы и перенос строки",
        id: lessons.LINE_BREAKS,
      },
      {
        name: "Заголовки",
        id: lessons.HEADERS,
      },
      {
        name: "Списки",
        id: lessons.LISTS,
      },
      {
        name: "Атрибуты тегов",
        id: lessons.TAGS_ATTRIBUTES,
      },
      {
        name: "Ссылки",
        id: lessons.LINKS,
      },
      {
        name: "Абсолютные и относительные адреса",
        id: lessons.ADDRESSES,
      },
      {
        name: "Изображения",
        id: lessons.IMAGES,
      },
      {
        name: "Видео",
        id: lessons.VIDEO,
      },
    ],
  },
  {
    name: "История и правила HTML",
    id: modules.HTML_RULES,
    lessons: [
      {
        name: "Развитие HTML",
        id: lessons.HTML_HISTORY,
      },
      {
        name: "Стандарты и браузеры",
        id: lessons.STANDARTS,
      },
      {
        name: "Инструменты разработчика",
        id: lessons.DEV_TOOLS,
      },
      {
        name: "Структура страницы",
        id: lessons.PAGE_STRUCTURE,
      },
      {
        name: "Служебные теги",
        id: lessons.SERVICE_TAGS,
      },
      {
        name: "DOCTYPE",
        id: lessons.DOCTYPE,
      },
      {
        name: "Валидация разметки",
        id: lessons.MARKUP_VALIDATION,
      },
    ],
  },
  {
    name: "Больше тегов",
    id: modules.MORE_TAGS,
    lessons: [
      {
        name: "Источники правды",
        id: lessons.SOURCES,
      },
      {
        name: "Плагины для редактора",
        id: lessons.EDITOR_PLUGINS,
      },
      {
        name: "Таблицы",
        id: lessons.TABLES,
      },
      {
        name: "Атрибуты таблиц",
        id: lessons.TABLE_ATTRIBUTES,
      },
      {
        name: "Цитаты",
        id: lessons.QUOTES,
      },
      {
        name: "Блочные и строчные теги",
        id: lessons.BLOCK_AND_INLINE,
      },
      {
        name: "Глобальные атрибуты",
        id: lessons.GLOBAL_ATTRIBUTES,
      },
    ],
  },
  {
    name: "Семантика и доступность",
    id: modules.SEMANTICS,
    lessons: [
      {
        name: "Семантика тегов",
        id: lessons.SEMANTICS,
      },
      {
        name: "Семантические блочные теги",
        id: lessons.SEMANTIC_BLOCKS,
      },
      {
        name: "Семантика и доступность",
        id: lessons.ACCESSIBILITY,
      },
      {
        name: "Семантическое оформление медиа-контента",
        id: lessons.SEMANTIC_MEDIA,
      },
      {
        name: "ARIA",
        id: lessons.ARIA,
      },
    ],
  },
  {
    name: "Интерактивные элементы",
    id: modules.INTERACTIVE_ELEMENTS,
    lessons: [
      {
        name: "Интерактив на веб-страницах",
        id: lessons.INTERACTIVE,
      },
      {
        name: "Кнопки",
        id: lessons.BUTTONS,
      },
      {
        name: "Поля ввода",
        id: lessons.INPUTS,
      },
      {
        name: "Принцип работы форм",
        id: lessons.FORM_PRINCIPLE,
      },
      {
        name: "Формы",
        id: lessons.FORM,
      },

      {
        name: "Многострочные поля",
        id: lessons.TEXTAREAS,
      },
      {
        name: "Чекбоксы",
        id: lessons.CHECKBOXES,
      },
      {
        name: "Группы чекбоксов",
        id: lessons.CHECKBOXES_GROUPS,
      },
      {
        name: "Радио-кнопки",
        id: lessons.RADIO_BUTTONS,
      },
      {
        name: "Селекты",
        id: lessons.SELECTS,
      },
      {
        name: "Автокомплит",
        id: lessons.DATALIST,
      },
      {
        name: "Оформление форм",
        id: lessons.FORM_DECORATION,
      },
    ],
  },
  {
    name: "Дополнительно",
    id: modules.OPTIONALLY,
    lessons: [
      {
        name: "Форматированный текст",
        id: lessons.FORMATTED_TEXT,
      },
      {
        name: "Обзор тегов",
        id: lessons.TAGS_LIST,
      },
      {
        name: "Специальные символы",
        id: lessons.SPECIAL_CHARACTERS,
      },
    ],
  },
];
