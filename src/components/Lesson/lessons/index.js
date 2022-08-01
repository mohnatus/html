import * as lessons from "data/lessons";

import HowSiteWorks from "./HowSiteWorks";
import LocalServer from "./LocalServer";

import HTMLIntro from "./HTMLIntro";
import CodeEditor from "./CodeEditor";
import TextStyleTags from "./TextStyleTags";
import LineBreaks from "./LineBreaks";
import Headers from "./Headers";
import Lists from "./Lists";
import TagsAttributes from "./TagsAttributes";
import Links from "./Links";
import Addresses from "./Addresses";
import Images from "./Images";
import Video from "./Video";

import HTMLHistory from "./HTMLHistory";
import DevTools from "./DevTools";
import PageStructure from "./PageStructure";
import ServiceTags from "./ServiceTags";
import Doctype from "./Doctype";
import MarkupValidation from "./MarkupValidation";

import Sources from "./Sources";
import EditorPlugins from "./EditorPlugins";
import Tables from "./Tables";
import TableAttributes from "./TableAttributes";
import Quotes from "./Quotes";
import BlockAndInline from "./BlockAndInline";
import GlobalAttributes from "./GlobalAttributes";

import Semantics from "./Semantics";
import SemanticBlocks from "./SemanticBlocks";
import Accessibility from "./Accessibility";
import SemanticMedia from "./SemanticMedia";
import Aria from "./Aria";

import Interactive from "./Interactive";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import FormPrinciple from "./FormPrinciple";
import Forms from "./Forms";
import Textareas from "./Textareas";
import Checkboxes from "./Checkboxes";
import CheckboxesGroups from "./CheckboxesGroups";
import RadioButtons from "./RadioButtons";
import Selects from "./Selects";
import Datalist from "./Datalist";
import FormDecoration from "./FormDecoration";

import FormattedText from "./FormattedText";
import TagsList from "./TagsList";
import SpecialCharacters from "./SpecialCharacters";

export const lessonComponents = {
  [lessons.HOW_SITE_WORKS]: HowSiteWorks,
  [lessons.LOCAL_SERVER]: LocalServer,

  [lessons.HTML_INTRO]: HTMLIntro,
  [lessons.CODE_EDITOR]: CodeEditor,
  [lessons.TEXT_STYLE_TAGS]: TextStyleTags,
  [lessons.LINE_BREAKS]: LineBreaks,
  [lessons.HEADERS]: Headers,
  [lessons.LISTS]: Lists,
  [lessons.TAGS_ATTRIBUTES]: TagsAttributes,
  [lessons.LINKS]: Links,
  [lessons.ADDRESSES]: Addresses,
  [lessons.IMAGES]: Images,
  [lessons.VIDEO]: Video,

  [lessons.HTML_HISTORY]: HTMLHistory,
  [lessons.DEV_TOOLS]: DevTools,
  [lessons.PAGE_STRUCTURE]: PageStructure,
  [lessons.SERVICE_TAGS]: ServiceTags,
  [lessons.DOCTYPE]: Doctype,
  [lessons.MARKUP_VALIDATION]: MarkupValidation,

  [lessons.SOURCES]: Sources,
  [lessons.EDITOR_PLUGINS]: EditorPlugins,
  [lessons.TABLES]: Tables,
  [lessons.TABLE_ATTRIBUTES]: TableAttributes,
  [lessons.QUOTES]: Quotes,
  [lessons.BLOCK_AND_INLINE]: BlockAndInline,
  [lessons.GLOBAL_ATTRIBUTES]: GlobalAttributes,

  [lessons.SEMANTICS]: Semantics,
  [lessons.SEMANTIC_BLOCKS]: SemanticBlocks,
  [lessons.ACCESSIBILITY]: Accessibility,
  [lessons.SEMANTIC_MEDIA]: SemanticMedia,
  [lessons.ARIA]: Aria,

  [lessons.INTERACTIVE]: Interactive,
  [lessons.BUTTONS]: Buttons,
  [lessons.INPUTS]: Inputs,
  [lessons.FORM_PRINCIPLE]: FormPrinciple,
  [lessons.FORMS]: Forms,
  [lessons.TEXTAREAS]: Textareas,
  [lessons.CHECKBOXES]: Checkboxes,
  [lessons.CHECKBOXES_GROUPS]: CheckboxesGroups,
  [lessons.RADIO_BUTTONS]: RadioButtons,
  [lessons.SELECTS]: Selects,
  [lessons.DATALIST]: Datalist,
  [lessons.FORM_DECORATION]: FormDecoration,

  [lessons.FORMATTED_TEXT]: FormattedText,
  [lessons.TAGS_LIST]: TagsList,
  [lessons.SPECIAL_CHARACTERS]: SpecialCharacters,
};
