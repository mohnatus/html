import * as lessons from "./lessons";
import * as modules from "./modules";

export const courseModules = [
  {
    name: "Что такое сайт",
    id: modules.HOW_SITE_WORKS,
    lessons: [lessons.HOW_SITE_WORKS, lessons.LOCAL_SERVER],
  },
  {
    name: "Знакомство с HTML",
    id: modules.HTML_INTRO,
    lessons: [
      lessons.HTML_INTRO,
      lessons.CODE_EDITOR,
      lessons.TEXT_STYLE_TAGS,
      lessons.LINE_BREAKS,
      lessons.HEADERS,
      lessons.LISTS,
      lessons.TAGS_ATTRIBUTES,
      lessons.LINKS,
      lessons.ADDRESSES,
      lessons.IMAGES,
      lessons.VIDEO,
    ],
  },
  {
    name: "История и правила HTML",
    id: modules.HTML_RULES,
    lessons: [
      lessons.HTML_HISTORY,
      lessons.DEV_TOOLS,
      lessons.PAGE_STRUCTURE,
      lessons.SERVICE_TAGS,
      lessons.DOCTYPE,
      lessons.MARKUP_VALIDATION,
    ],
  },
  {
    name: "Больше тегов",
    id: modules.MORE_TAGS,
    lessons: [
      lessons.SOURCES,
      lessons.EDITOR_PLUGINS,
      lessons.TABLES,
      lessons.TABLE_ATTRIBUTES,
      lessons.QUOTES,
      lessons.BLOCK_AND_INLINE,
      lessons.GLOBAL_ATTRIBUTES,
    ],
  },
  {
    name: "Семантика и доступность",
    id: modules.SEMANTICS,
    lessons: [
      lessons.SEMANTICS,
      lessons.SEMANTIC_BLOCKS,
      lessons.ACCESSIBILITY,
      lessons.SEMANTIC_MEDIA,
      lessons.ARIA,
    ],
  },
  {
    name: "Интерактивные элементы",
    id: modules.INTERACTIVE_ELEMENTS,
    lessons: [
      lessons.INTERACTIVE,
      lessons.BUTTONS,
      lessons.INPUTS,
      lessons.FORM_PRINCIPLE,
      lessons.FORMS,
      lessons.TEXTAREAS,
      lessons.CHECKBOXES,
      lessons.CHECKBOXES_GROUPS,
      lessons.RADIO_BUTTONS,
      lessons.SELECTS,
      lessons.DATALIST,
      lessons.FORM_DECORATION,
    ],
  },
  {
    name: "Дополнительно",
    id: modules.OPTIONALLY,
    lessons: [
      lessons.FORMATTED_TEXT,
      lessons.META_TAGS,
      lessons.TAGS_LIST,
      lessons.SPECIAL_CHARACTERS,
    ],
  },
];

export const courseLessons = {
  [lessons.HOW_SITE_WORKS]: {
    name: "Что такое сайт",
    id: lessons.HOW_SITE_WORKS,
  },
  [lessons.LOCAL_SERVER]: {
    name: "Локальный сервер",
    id: lessons.LOCAL_SERVER,
  },
  [lessons.HTML_INTRO]: {
    name: "Знакомство с HTML",
    id: lessons.HTML_INTRO,
    tags: ["b"],
  },
  [lessons.CODE_EDITOR]: {
    name: "Редактор кода",
    id: lessons.CODE_EDITOR,
  },
  [lessons.TEXT_STYLE_TAGS]: {
    name: "Теги, изменяющие стиль текста",
    id: lessons.TEXT_STYLE_TAGS,
    tags: ["i", "u", "del", "small", "sub", "sup", "code"],
  },
  [lessons.LINE_BREAKS]: {
    name: "Абзацы и перенос строки",
    id: lessons.LINE_BREAKS,
    tags: ["p", "br"],
  },
  [lessons.HEADERS]: {
    name: "Заголовки",
    id: lessons.HEADERS,
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },
  [lessons.LISTS]: {
    name: "Списки",
    id: lessons.LISTS,
    tags: ["ol", "ul", "li"],
  },
  [lessons.TAGS_ATTRIBUTES]: {
    name: "Атрибуты тегов",
    id: lessons.TAGS_ATTRIBUTES,
  },
  [lessons.LINKS]: {
    name: "Ссылки",
    id: lessons.LINKS,
    tags: ["a"],
  },
  [lessons.ADDRESSES]: {
    name: "Абсолютные и относительные адреса",
    id: lessons.ADDRESSES,
  },
  [lessons.IMAGES]: {
    name: "Изображения",
    id: lessons.IMAGES,
    tags: ["img"],
  },
  [lessons.VIDEO]: {
    name: "Видео",
    id: lessons.IMAGES,
    tags: ["video"],
  },
  [lessons.HTML_HISTORY]: {
    name: "Развитие HTML",
    id: lessons.HTML_HISTORY,
  },
  [lessons.DEV_TOOLS]: {
    name: "Инструменты разработчика",
    id: lessons.DEV_TOOLS,
  },
  [lessons.PAGE_STRUCTURE]: {
    name: "Структура страницы",
    id: lessons.PAGE_STRUCTURE,
    tags: ["html", "body", "head"],
  },
  [lessons.SERVICE_TAGS]: {
    name: "Служебные теги",
    id: lessons.SERVICE_TAGS,
    tags: ["title", "meta"],
  },
  [lessons.DOCTYPE]: {
    name: "DOCTYPE",
    id: lessons.DOCTYPE,
    tags: ["doctype"],
  },
  [lessons.MARKUP_VALIDATION]: {
    name: "Валидация разметки",
    id: lessons.MARKUP_VALIDATION,
  },
  [lessons.SOURCES]: {
    name: "Источники правды",
    id: lessons.SOURCES,
  },
  [lessons.EDITOR_PLUGINS]: {
    name: "Плагины для редактора",
    id: lessons.EDITOR_PLUGINS,
  },
  [lessons.TABLES]: {
    name: "Таблицы",
    id: lessons.TABLES,
    tags: ["table", "tbody", "thead", "tfoot", "tr", "td", "th", "caption"],
  },
  [lessons.TABLE_ATTRIBUTES]: {
    name: "Атрибуты таблиц",
    id: lessons.TABLE_ATTRIBUTES,
  },
  [lessons.QUOTES]: {
    name: "Цитаты",
    id: lessons.QUOTES,
    tags: ["q", "blockquote", "cite"],
  },
  [lessons.BLOCK_AND_INLINE]: {
    name: "Блочные и строчные теги",
    id: lessons.BLOCK_AND_INLINE,
    tags: ["div", "span"],
  },
  [lessons.GLOBAL_ATTRIBUTES]: {
    name: "Глобальные атрибуты",
    id: lessons.GLOBAL_ATTRIBUTES,
  },
  [lessons.SEMANTICS]: {
    name: "Семантика тегов",
    id: lessons.SEMANTICS,
    tags: ["strong", "em"],
  },
  [lessons.SEMANTIC_BLOCKS]: {
    name: "Семантические блочные теги",
    id: lessons.SEMANTIC_BLOCKS,
    tags: ["header", "footer", "article", "section", "aside", "nav", "main"],
  },
  [lessons.ACCESSIBILITY]: {
    name: "Семантика и доступность",
    id: lessons.ACCESSIBILITY,
  },
  [lessons.SEMANTIC_MEDIA]: {
    name: "Семантическое оформление медиа-контента",
    id: lessons.SEMANTIC_MEDIA,
    tags: ["figure", "figcaption"],
  },
  [lessons.ARIA]: {
    name: "ARIA",
    id: lessons.ARIA,
  },
  [lessons.INTERACTIVE]: {
    name: "Интерактив на веб-страницах",
    id: lessons.INTERACTIVE,
  },
  [lessons.BUTTONS]: {
    name: "Кнопки",
    id: lessons.BUTTONS,
    tags: ["button", "input"],
  },
  [lessons.INPUTS]: {
    name: "Поля ввода",
    id: lessons.INPUTS,
  },
  [lessons.FORM_PRINCIPLE]: {
    name: "Принцип работы форм",
    id: lessons.FORM_PRINCIPLE,
  },
  [lessons.FORMS]: {
    name: "Формы",
    id: lessons.FORMS,
    tags: ["form"],
  },

  [lessons.TEXTAREAS]: {
    name: "Многострочные поля",
    id: lessons.TEXTAREAS,
    tags: ["textarea"],
  },
  [lessons.CHECKBOXES]: {
    name: "Чекбоксы",
    id: lessons.CHECKBOXES,
  },
  [lessons.CHECKBOXES_GROUPS]: {
    name: "Группы чекбоксов",
    id: lessons.CHECKBOXES_GROUPS,
  },
  [lessons.RADIO_BUTTONS]: {
    name: "Радио-кнопки",
    id: lessons.RADIO_BUTTONS,
  },
  [lessons.SELECTS]: {
    name: "Селекты",
    id: lessons.SELECTS,
    tags: ["select"],
  },
  [lessons.DATALIST]: {
    name: "Автокомплит",
    id: lessons.DATALIST,
    tags: ["datalist"],
  },
  [lessons.FORM_DECORATION]: {
    name: "Оформление форм",
    id: lessons.FORM_DECORATION,
    tags: ["label", "legend", "fieldset"],
  },

  [lessons.FORMATTED_TEXT]: {
    name: "Форматированный текст",
    id: lessons.FORMATTED_TEXT,
  },
  [lessons.META_TAGS]: {
    name: "Мета-теги",
    id: lessons.META_TAGS,
  },
  [lessons.TAGS_LIST]: {
    name: "Обзор тегов",
    id: lessons.TAGS_LIST,
  },
  [lessons.SPECIAL_CHARACTERS]: {
    name: "Специальные символы",
    id: lessons.SPECIAL_CHARACTERS,
  },
};
