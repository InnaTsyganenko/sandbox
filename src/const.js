import React from 'react';

export const AppRoute = {
  ROOT: '/',
  HTML: '/html',
  CSS: '/css',
  JS: '/js',
  TYPESCRIPT: '/typescript',
  REACT: '/react',
  PHP: '/php',
  OTHER: '/other',
};

export const ContentsHtml = [
  {
    name:'Основы HTML',
    state: 'basic-html',
  },
  {
    name:'Структура HTML-документа',
    state: 'structure-html',
  },
  {
    name:'Семантическая разметка',
    state: 'semantic-markup',
  },
  {
    name:'Разметка текста',
    state: 'text-markup',
  },
  {
    name:'Как работать со стандартом',
    state: 'html-standard',
  },
  {
    name:'О валидаторе html',
    state: 'validator',
  },
  {
    name: 'Ссылки',
    state:'links',
  },
  {
    name: 'Изображения',
    state:'images',
  },
  {
    name: 'Favicon',
    state:'favicon',
  },
  {
    name: 'SVG - scalable vector graphics',
    state:'svg',
  },
  {
    name: 'Таблицы в HTML',
    state:'tables',
  },
  {
    name: 'Формы в HTML',
    state:'forms',
  },
  {
    name: 'Form validation',
    state:'form-validation',
  },
  {
    name: 'Атрибут id',
    state:'attribute-id',
  },
  {
    name: 'Атрибут crossorigin и политика CORS',
    state:'about-crossorigin-and-cors',
  },
  {
    name: 'Атрибут contentEditable',
    state:'attribute-content-editable',
  },
];

export const ContentsCss = [
  {
    name:'Основы CSS',
    state: 'basic-css',
  },
  {
    name: 'Селекторы в CSS',
    state:'selectors',
  },
  {
    name: 'Flow, grids and layout',
    state:'flow-grids-layout',
  },
  {
    name: 'Grids and Microgrids',
    state: 'grids-and-microgrids',
  },
  {
    name: 'Positioning',
    state: 'positioning',
  },
  {
    name: 'Building a site layout',
    state: 'building-site-layout',
  },
  {
    name: 'Adaptive Layout',
    state: 'adaptive-layout',
  },
  {
    name: 'Media queries',
    state: 'media-queries',
  },
  {
    name: 'Grid',
    state: 'grid',
  },
  {
    name: 'Flexbox',
    state: 'flexbox',
  },
  {
    name: 'Flex layout algorithm',
    state: 'flex-markup-algorithm',
  },
  {
    name: 'Methods for constructing grids on flexboxes',
    state: 'methods-for-constructing-grids-on-flexboxes',
  },
  {
    name: 'Fonts',
    state: 'fonts',
  },
  {
    name: 'Text',
    state: 'text',
  },
  {
    name: 'Layout of text content of pages',
    state: 'layout-text',
  },
  {
    name: 'Typography',
    state: 'typography',
  },
  {
    name: 'Gradient',
    state: 'gradient',
  },
  {
    name: 'Backgrounds and Frames',
    state: 'bg-and-frames',
  },
  {
    name: 'Animations in CSS',
    state: 'animations',
  },
  {
    name: '2D Transformations in CSS',
    state: '2d-transformations',
  },
  {
    name: 'CSS Filters',
    state: 'css-filters',
  },
  {
    name: 'CSS Table',
    state: 'css-table',
  },
  {
    name: 'Shadows',
    state: 'shadows',
  },
  {
    name: 'Inheritance and Cascading в CSS',
    state: 'inheritance-and-cascading',
  },
  {
    name: 'Custom properties',
    state: 'custom-properties',
  },
  {
    name: 'Css counter',
    state: 'css-counter',
  },
  {
    name: 'Less',
    state: 'less',
  },
  {
    name: 'Terms',
    state: 'terms',
  },
  {
    name: 'Get data from Photoshop',
    state: 'photoshop',
  },
  {
    name: 'Get data from Figma',
    state: 'figma',
  },
  {
    name: 'Styling Checkbox and Radio',
    state: 'styling-checkbox-and-radio',
  },
  {
    name: 'Styling Select',
    state: 'styling-select',
  },
];

export const ContentsJS = [
  {
    name: 'Основы JS',
    state: 'basic-js',
  },
  {
    name: 'Variables',
    state: 'variables',
  },
  {
    name: 'Instructions And Operations',
    state: 'instruction-and-operations',
  },
  {
    name: 'Operators if and switch',
    state: 'operators-if-and-switch',
  },
  {
    name: 'Operators spread and rest',
    state: 'operators-spread-and-rest',
  },
  {
    name: 'Operator delete',
    state: 'operator-delete',
  },
  {
    name: 'Data types in JS',
    state: 'data-types-in-js',
  },
  {
    name: 'Function',
    state: 'function',
  },
  {
    name: 'Areas Of Visibility',
    state: 'areas-of-visibility',
  },
  {
    name: 'Events',
    state: 'events',
  },
  {
    name: 'String',
    state: 'string',
  },
  {
    name: 'Dates and times',
    state: 'dates',
  },
  {
    name: 'Forms in JS',
    state: 'forms-in-js',
  },
  {
    name: 'Style in JS',
    state: 'style-in-js',
  },
  {
    name: 'Scrolling',
    state: 'scrolling',
  },
  {
    name: 'Drag & Drop',
    state: 'drag-and-drop',
  },
  {
    name: 'Work with video',
    state: 'work-with-video',
  },
  {
    name: 'Document Object Model',
    state: 'document-object-model',
  },
  {
    name: 'Manipulation with DOM',
    state: 'manipulation-with-dom',
  },
  {
    name: 'Methods',
    state: 'methods',
  },
  {
    name: 'Properties',
    state: 'properties',
  },
  {
    name: 'Ecma-script modules',
    state: 'ecma-script-modules',
  },
  {
    name: 'Arrow function',
    state: 'arrow-function',
  },
  {
    name: 'Data Structures',
    state: 'data-structures',
  },
  {
    name: 'Objects',
    state: 'objects',
  },
  {
    name: 'Arrays',
    state: 'arrays',
  },
  {
    name: 'ООП и Javascript',
    state: 'oop',
  },
  {
    name: <div><abbr data-title="Single-Page Application">SPA</abbr> and <abbr data-title="Model View Presenter">MVP</abbr></div>,
    state: 'spa-and-mvp',
  },
  {
    name: 'Ajax & SPA',
    state: 'ajax-and-spa',
  },
  {
    name: 'Architecture of front end applications',
    state: 'architecture-of-front-end-applications',
  },
  {
    name: 'Mock',
    state: 'mock',
  },
  {
    name: 'Demo to MVP',
    state: 'demo-to-mvp',
  },
  {
    name: 'Demo enumerating object keys',
    state: 'demo-enumerating-object-keys',
  },
  {
    name: 'Demo Whats New In Es2015 Objects',
    state: 'demo-whats-new-in-es2015-objects',
  },
  {
    name: 'Demo Data Binding',
    state: 'demo-data-binding',
  },
  {
    name: 'Demo Pattern Observer',
    state: 'demo-pattern-observer',
  },
  {
    name: 'Cases',
    state: 'cases',
  },
];

export const ContentsOther = [
  {
    title:'Site Checklist',
    state: 'site-checklist',
  },
  {
    title:'Node.js, npm, сборщики модулей',
    state: 'node-npm-bundlers',
  },
  {
    title:'GitHub and git',
    state: 'git',
  },
  {
    title:'Gulp',
    state: 'gulp',
  },
  {
    title:'БЭМ (Блок, Элемент, Модификатор)',
    state: 'bem',
  },
  {
    title:'Как делать дела',
    state: 'to-do-scheduling',
  },
  {
    title:'Three Key Software Principles',
    state: 'three-key-software-principles',
  },
  {
    title:'Pattern Adapter',
    state: 'pattern-adapter',
  },
  {
    title:'Site Checklist',
    state: 'world-wide-web',
  },
  {
    title:'The World Wide Web, API and other...',
    state: 'world-wide-web',
  },
  {
    title:'Работа с сетью',
    state: 'networking',
  },
  {
    title:'Метод прогрессивного улучшения',
    state: 'progressive-enhancement',
  },
  {
    title:'Accessibility',
    state: 'accessibility',
  },
  {
    title:'Devtools Chrome',
    state: 'devtools-chrome',
  },
  {
    title:'VSCode',
    state: 'vscode',
  },
  {
    title:'Шпаргалка по Emmet',
    state: 'emmet',
  },
];

export const ContentsHowToOther = [
  {
    title:'Кастомные чекбоксы правильно',
    state: 'how-to-make-custom-checkboxes-correctly',
  },
  {
    title:'How To Publish a Website',
    state: 'how-to-website-publication',
  },
  {
    title:'How To Insert the Ruble Sign',
    state: 'how-to-insert-the-ruble-sign',
  },
  {
    title:'How to Push the Footer Down',
    state: 'how-to-push-the-footer-down',
  },
  {
    title:'How to Center Element',
    state: 'how-to-center-element',
  },
  {
    title:'How to Set Text Highlight Color',
    state: 'how-to-set-text-highlight-color',
  },
  {
    title:'How to Style Tag <abbr>',
    state: 'how-to-style-tag-abbr',
  },
  {
    title:'How to Hide',
    state: 'how-to-hide',
  },
  {
    title:'How to make dark theme',
    state: 'how-to-make-dark-theme',
  },
  {
    title:'How to setup eslint',
    state: 'how-to-setup-eslint',
  },
];

export const ContentsReact = [
  {
    title:'Основы React',
    state: 'basic-react',
  },
  {
    title:'JSX',
    state: 'jsx',
  },
  {
    title:'Создание приложения на React',
    state: 'create-react-app',
  },
  {
    title:'History API',
    state: 'history-api',
  },
  {
    title:'Hooks',
    state: 'hooks',
  },
  {
    title:'React Patterns',
    state: 'react-patterns',
  },
  {
    title:'React Router',
    state: 'react-router',
  },
  {
    title:'React DOM',
    state: 'react-dom',
  },
  {
    title:'React Router Native',
    state: 'react-router-native',
  },
  {
    title:'About Redux',
    state: 'redux',
  },
  {
    title:'Work with form',
    state: 'work-with-form',
  },
  {
    title:'Мемоизация',
    state: 'memo',
  },
];

export const ContentsPHP = [
  {
    title:'Основы PHP',
    state: 'basic-php',
  },
];
