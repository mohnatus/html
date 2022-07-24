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
    name: 'Знакомство с HTML',
    id: modules.HTML_INTRO,
    lessons: [
        {
            name: 'Знакомство с HTML',
            id: lessons.HTML_INTRO
        },
        {
            name: 'Редактор кода',
            id: lessons.CODE_EDITOR
        },
        {
            name: 'Теги, изменяющие стиль текста',
            id: lessons.TEXT_STYLE_TAGS
        },
        {
            name: 'Абзацы и перенос строки',
            id: lessons.LINE_BREAKS
        },
        {
            name: 'Заголовки',
            id: lessons.HEADERS
        },
        {
            name: 'Списки',
            id: lessons.LISTS
        },
        {
            name: 'Атрибуты тегов',
            id: lessons.TAGS_ATTRIBUTES
        },
        {
            name: 'Ссылки',
            id: lessons.LINKS
        },
        {
            name: 'Абсолютные и относительные адреса',
            id: lessons.ADDRESSES
        },
        {
            name: 'Изображения',
            id: lessons.IMAGES
        },
        {
            name: 'Видео',
            id: lessons.VIDEO
        },
    ]
  }
];
