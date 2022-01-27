import React from 'react';

function DemoToMVP() {

  return (
    <section className="conspect">
      <h1>От функций к MVP на примере списка задач</h1>
      <p>Проще всего познакомиться с архитектурным паттерном MVP (Model-View-Presenter) на практическом примере. Мы неоднократно говорили: одну и туже задачу можно решить разными способами. Продемонстрируем это на примере создания небольшого приложения — «Список задач». Функциональность приложения — минимальная. Пользователь добавляет новые задачи (кнопка «Добавить»), а затем меняет статус на «выполнена». Также предусмотрим функцию для удаления всех задач.</p>
      <p>Подготовим template с шаблоном и подключим одну внешнюю зависимость. Для задач мы будем генерировать идентификатор, чтобы отличать одну задачу от другой. Сгенерировать новый идентификатор поможет отдельный пакет nanoid.</p>
      <p>Затем определим стартовый список задач — тестовые данные. Каждая задача — это объект с тремя полями: id (уникальный идентификатор задачи), title (название задачи) и isDone (признак выполнения задачи). Определим массив tasks и наполним его двумя задачами.</p>
      <p>Следующим шагом находим в DOM все необходимые элементы, с которыми будем взаимодействовать: кнопки, контейнер с задачами и так далее.</p>
      <p>Следующим шагом опишем вспомогательные функции. По условию задачи известно, что требуется удалять задачи, добавлять новые и помечать задачи как выполненные. Все эти функции будут работать только с данными — массивом tasks. Получается, что это вполне универсальные функции, которые никак не связаны с DOM.</p>
      <p>Напишем функцию addNewTask (добавляет новую задачу), clearTasks (очищает список задач) и completeTask (помечает задачу как выполненную).</p>
      <p>Поскольку в списке задач уже есть несколько готовых задач, то можно попробовать их отрисовать в DOM. Для этого опишем отдельную функцию render. Внутри этой функции проделаем знакомый порядок действий: склонируем шаблон, и заполним его данными из массива tasks. После этого вызовем функцию render и убедимся, что список задач отрисовывается корректно.</p>
      <p>Подпишемся на событие change и при его наступлении выполним два действия: воспользуемся функцией completeTask для установки пометки выполненной задачи и render. После изменения пометки выполнения задачи мы заново отрисуем весь список задач.</p>
      <p>Займёмся остальными обработчиками событий: для кнопок «Добавить» и «Очистить». С ними всё относительно просто: подписываемся на событие click и при наступлении события вызываем соответствующую функцию для работы с данными. При нажатии на кнопку «Добавить», выполним проверку: если пользователь ничего не ввёл в поле ввода, то выходим из функции. В противном случае, выполним addNewTask и аргументом передадим текст, введённый в поле ввода. Затем отрисуем список и очистим содержимое поле ввода. Для удобства вызовем метод focus, чтобы была возможность сразу вводить текст.</p>
      <p>С обработчиком кнопки «Очистить» всё несколько проще: нам требуется лишь очистить список задач в массиве (для этого у нас есть функция clearTasks), а затем отрисовать список.</p>
      <p>Мы запрограммировали все функции, которые планировали и приложение работает. Нам не пришлось для этого писать много кода. Уложились примерно в 90 строчек кода. Неплохо. Давайте теперь внимательно посмотрим на этот код. Его не так много, но уже видны первые проблемы:</p>
      <ul>
        <li>Если начнём расширять функциональность работы с задачами (например, добавить фильтры), то начнут появляться дополнительные функции. В этом нет ничего плохого, но все эти функции будут разрознены.</li>
        <li>Все функции, отвечающие за отрисовку, расположены в одном модуле, что тоже не очень хорошо. Кода немного, но хотелось бы его разделить. Пусть функции, которые работают с данными, будут отдельно, а функции, которые отвечают за отрисовку и обработчики событий располагаются в другом месте.</li>
      </ul>
      <p>Начнём с рефакторинга функций, которые отвечают за работу с данными. Напомним, в нашем случае это addNewTask, clearTasks и completeTask. Создадим отдельный модуль и назовём его task-model.js. Наименование мы выбрали неслучайно. Модель — это данные для отображения. Сделаем отдельный модуль и разместим в нём все необходимые функции.</p>
      <p>Поскольку все функции работают с одним и тем же массивом данных, нужно предусмотреть ситуацию, когда потребуется создавать несколько моделей. Для этого в новом модуле создадим функцию createModel и все функции разместим в ней. Эта функция будет возвращать объект с методами.</p>
      <p>Чтобы наш код окончательно заработал, необходимо вернуться в main.js и поправить обращение к функциям для работы с данными.</p>
      <p>Код для работы с данными переехал в отдельный модуль — в модель (task-model.js). Теперь посмотрим на код (main.js), который отвечает за заполнение шаблона. Он не сильно большой, но содержит много деталей, которые относятся к определённому шаблону. Если потребуется сделать дополнительный шаблон для оформления задачи (например, для какого-то отдельного типа события), то придётся как-то выкручиваться: определять новый template, создавать отдельную функцию для заполнения нового шаблона и так далее.</p>
      <p>А почему бы тоже не вынести всё, что касается шаблона, в отдельный модуль и не назвать его task-view.js. Или, говоря другими словами, нам нужен модуль, который будет отвечать за отображение данных, так сказать — представление (View). Представление будет знать, как заполнять шаблон, и, если нам потребуется отдельный шаблон, мы просто создадим ещё одно представление.</p>
      <p>Для начала избавимся от тега template. Он нам больше не потребуется. Разметку будем хранить в отдельном модуле. Затем создадим новый модуль task-view.js и опишем в нём код, который будет отвечать за заполнение шаблона. После этого подключим его в main.js и обновим функцию render. Теперь в ней остался только общий код. Ничего не мешает нам в будущем заменить одно представление на другое.</p>
      <p>Мы определили модель (данные для отображения, логика), представление (отображение данных), и глядя на main.js, уже можно сказать, что модуль стал проще в понимании. По факту он содержит общий код — вызывает соответствующие функции из других модулей. Кажется, что задача полностью выполнена. Однако, мы можем пойти немного дальше.</p>
      <p>А что, если собрать код, который взаимодействуют с моделью и представлением в отдельный модуль. Сделать модуль, который подобно дирижёру будет управлять взаимосвязью между моделью и представлением. В терминалогии MVP такой модуль принято называть — презентер (Presenter). Создадим отдельный модуль и перенесём в него ещё немного кода из main.js.</p>
      <p>Презентер вобрал в себя весь код для работы с моделью и представлением. Из main.js мы только работаем с task-presenter и напрямую никак не вызываем методы модели или представления.</p>
      <p>Ура! Мы пришли к простейшей реализации паттерна MVP. Конечно, мы всё сильно упростили. Но сейчас важно другое. Мы смогли решить задачу другим способом, разделив ответственность между отдельными элементами приложения. На этом курсе мы рассмотрим продвинутую реализацию паттерна MVP и воспользуемся объектно-ориентированным подходом.</p>
      <p>Мы полностью решили задачу, но сделали это не совсем оптимальным способом. Каждый раз при вызове, например, createView мы получаем копии всех функции, которые создаются внутри этой функции. Это только первый минус, есть и другие. А может быть есть способ решения проще? Да, есть. Всё что мы сделали мы можем реализовать при помощи объектно-ориентированного программирования. Это отдельная большая тема, которую мы будем разбирать, начиная с третьего модуля. А пока давайте взглянем, как можно немного улучшить код за счёт встроенных в JavaScript возможностей. Обновим код модулей с реализацией MVP и вместо лишних обёрток для функций воспользуемся функциями-конструкторами.</p>
      <pre>{`********* main.js ***********

      import {nanoid} from './vendor/nanoid';

      import TaskModel from './models/task-model';
      import TaskPresenter from './presenters/task-presenter';

      const mainElement = document.querySelector('.main');
      const newTaskElement = mainElement.querySelector('.new-task');
      const addTaskButtonElement = mainElement.querySelector('.add-task-button');
      const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
      const tasksListElement = mainElement.querySelector('.tasks');

      const taskModel = new TaskModel([
        {
          id: nanoid(),
          title: 'Вынести мусор',
          isDone: false,
        },
        {
          id: nanoid(),
          title: 'Защитить интенсив на соточку',
          isDone: true,
        },
      ]);

      const taskPresenter = new TaskPresenter(tasksListElement, taskModel);

      const addTaskButtonHandler = () => {
        const {value: newTaskTitle} = newTaskElement;
        newTaskElement.value = '';
        newTaskElement.focus();
        taskPresenter.addTask(newTaskTitle);
      };

      const clearTaskButtonHandler = () => {
        taskPresenter.clearTasks();
      };

      addTaskButtonElement.addEventListener('click', addTaskButtonHandler);
      clearTaskButtonElement.addEventListener('click', clearTaskButtonHandler);

      taskPresenter.render();

      **************** models/tasks-model.js ***************

      import {nanoid} from '../vendor/nanoid';

const TaskModel = function (initialTasks = []) {
  this._tasks = [...initialTasks];
};

TaskModel.prototype.add = function (title) {
  this._tasks.push({
    id: nanoid(),
    title,
    isDone: false,
  });
};

TaskModel.prototype.clear = function () {
  this._tasks = [];
};

TaskModel.prototype.complete = function (id) {
  const existTask = this._tasks.find((task) => task.id === id);
  existTask.isDone = !existTask.isDone;
};

TaskModel.prototype.getItems = function () {
  return this._tasks;
};

export default TaskModel;


**************** views/task-view.js *******************

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

const TaskView = function (task) {
  this._element = null;
  this._callback = {};
  this._task = task;
};

TaskView.prototype.getTemplate = function () {
  const {id, title, isDone} = this._task;
  return
      <li class="task {isDone ? 'task--complete' : ''}">
        <label for="{id}">{title}
          <input id="{id}" type="checkbox" {isDone ? 'checked' : ''} />
        </label>
      </li>;
};

TaskView.prototype.getElement = function () {
  if (!this._element) {
    this._element = createElement(this.getTemplate());
  }

  return this._element;
};

TaskView.prototype.removeElement = function () {
  const taskElement = this.getElement();

  taskElement.querySelector('input')
    .removeEventListener('click', this._callback.completeButtonClick);

  this._element = null;
  this._callback = {};
};

TaskView.prototype.bindListeners = function (completeButtonHandler) {
  const taskElement = this.getElement();
  taskElement.querySelector('input')
    .addEventListener('click', completeButtonHandler);

  this._callback.completeButtonClick = completeButtonHandler;
};

export default TaskView;


************* presenters/task-presenter.js **************

import TaskView from '../views/task-view';

const TaskPresenter = function (element, model) {
  this._element = element;
  this._model = model;
};

TaskPresenter.prototype.render = function () {
  const newFragment = document.createDocumentFragment();
  this._element.innerHTML = '';

  this._model.getItems().forEach((task) => {

    const taskView = new TaskView(task);
    const newElement = taskView.getElement();
    taskView.bindListeners(({target}) => {
      this._model.complete(target.id);
      taskView.removeElement();
      this.render();
    });

    newFragment.appendChild(newElement);
  });

  this._element.appendChild(newFragment);
};

TaskPresenter.prototype.addTask = function (title) {
  if (title.trim() === '') {
    return;
  }

  this._model.add(title);
  this.render();
};

TaskPresenter.prototype.clearTasks = function () {
  this._model.clear();
  this.render();
};

export default TaskPresenter;
`}
      </pre>

      <p>Вернёмся к нашему списку задач, который мы реализовали в прошлом разделе. Мы разбили весь код, но для этого нам потребовалось применить неоднозначный приём (на самом деле он часто применяется) в виде дополнительных обёрток над функциями. А может быть есть способ проще? Да, есть. Всё, что мы сделали, мы можем реализовать при помощи объектно-ориентированного программирования. Это отдельная большая тема, которую мы будем разбирать, начиная с третьего модуля. А пока давайте взглянем, как можно немного улучшить код за счёт встроенных в JavaScript возможностей. Обновим код модулей с реализацией MVP и вместо лишних обёрток для функций воспользуемся функциями-конструкторами. Не переживайте, если сейчас этот код выглядит странным. Это демонстрация, более подробно про этот подход вы узнаете в третьем разделе.</p>
      <pre>{`import {nanoid} from './vendor/nanoid';

import TaskModel from './models/task-model';
import TaskPresenter from './presenters/task-presenter';

const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const taskModel = new TaskModel([
  {
    id: nanoid(),
    title: 'Вынести мусор',
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'Защитить интенсив на соточку',
    isDone: true,
  },
]);

const taskPresenter = new TaskPresenter(tasksListElement, taskModel);

const addTaskButtonHandler = () => {
  const {value: newTaskTitle} = newTaskElement;
  newTaskElement.value = '';
  newTaskElement.focus();
  taskPresenter.addTask(newTaskTitle);
};

const clearTaskButtonHandler = () => {
  taskPresenter.clearTasks();
};

addTaskButtonElement.addEventListener('click', addTaskButtonHandler);
clearTaskButtonElement.addEventListener('click', clearTaskButtonHandler);

taskPresenter.render();`}
      </pre>
      <p>Переведём код TaskModel, TaskView и TaskPresenter на классы. Сделать это несложно. Всё что было описано внутри функций-конструкторов, мы переместим в конструктор класса. А методы, которые были описаны в prototype перенесём в тело класса. Код методов не меняется. Публичный интерфейс тоже.</p>
      <pre>{`****** main.js *******
      


      import {nanoid} from './vendor/nanoid';

import TaskModel from './models/task-model';
import TaskPresenter from './presenters/task-presenter';

const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const taskModel = new TaskModel([
  {
    id: nanoid(),
    title: 'Вынести мусор',
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'Защитить интенсив на соточку',
    isDone: true,
  },
]);

const taskPresenter = new TaskPresenter(tasksListElement, taskModel);

const addTaskButtonHandler = () => {
  const {value: newTaskTitle} = newTaskElement;
  newTaskElement.value = '';
  newTaskElement.focus();
  taskPresenter.addTask(newTaskTitle);
};

const clearTaskButtonHandler = () => {
  taskPresenter.clearTasks();
};

addTaskButtonElement.addEventListener('click', addTaskButtonHandler);
clearTaskButtonElement.addEventListener('click', clearTaskButtonHandler);

taskPresenter.render();


******** task-model *********
      import {nanoid} from '../vendor/nanoid';

class TaskModel {
  #tasks = [];

  constructor (initialTasks = []) {
    this.#tasks = [...initialTasks];
  }

  get items() {
    return this.#tasks;
  }

  add(title) {
    this.#tasks.push({
      id: nanoid(),
      title,
      isDone: false,
    });
  }

  clear() {
    this.#tasks = [];
  }

  complete(id) {
    const existTask = this.#tasks.find((task) => task.id === id);
    existTask.isDone = !existTask.isDone;
  }
}

export default TaskModel;


********** task-view **********
const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

class TaskView {
  #element = null;
  #callback = {};
  #task;

  constructor(task) {
    this.#task = task;
  }

  get template() {
    const {id, title, isDone} = this.#task;
    return
      <li class="task {isDone ? 'task--complete' : ''}">
        <label for="{id}">{title}
          <input id="{id}" type="checkbox" {isDone ? 'checked' : ''} />
        </label>
      </li>;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    const taskElement = this.element;

    taskElement.querySelector('input')
      .removeEventListener('click', this.#callback.completeButtonClick);

    this.#element = null;
    this.#callback = {};

  }

  bindListeners(completeButtonHandler) {
    const taskElement = this.element;
    taskElement.querySelector('input')
      .addEventListener('click', completeButtonHandler);

    this.#callback.completeButtonClick = completeButtonHandler;
  }
}

export default TaskView;

********* task-presenter **********
import TaskView from '../views/task-view';

class TaskPresenter {
  #element;
  #model;

  constructor(element, model) {
    this.#element = element;
    this.#model = model;
  }

  render() {
    const newFragment = document.createDocumentFragment();
    this.#element.innerHTML = '';

    this.#model.items.forEach((task) => {

      const taskView = new TaskView(task);
      const newElement = taskView.element;
      taskView.bindListeners(({target}) => {
        this.#model.complete(target.id);
        taskView.removeElement();
        this.render();
      });

      newFragment.appendChild(newElement);
    });

    this.#element.appendChild(newFragment);
  }

  addTask(title) {
    if (title.trim() === '') {
      return;
    }

    this.#model.add(title);
    this.render();
  }

  clearTasks() {
    this.#model.clear();
    this.render();
  }
}

export default TaskPresenter;`}
      </pre>
    </section>
  );
}
export default DemoToMVP;
