import React from 'react';

function CreateReactApp() {

  return (
    <section className="conspect">
      <h1>Создаём приложение React</h1>
      <h3>Подготовка</h3>
      <p>Если у вас нет своего проекта на React, можно без лишних хлопот создать новый с помощью create-react-app.</p>
      <pre>{`npm i -g create-react-app
create-react-app theme-switch
cd theme-switch
npm start`}
      </pre>
      <ol>
        <li>Установите create-react-app глобально, выполнив команду npm i -g create-react-app.</li>
        <li>После установки создайте проект командой create-react-app vscode-tutorial.</li>
      </ol>
      <p>В результате у вас должна появиться новая папка с React-приложением.</p>
      <pre>{`
// import React from "react";
// import ReactDOM from "react-dom";
// Подключим React и попробуем создать и отрисовать с его помощью первый элемент.
// Для начала попробуем создать элемент с помощью метода createElement.
// Первым аргументом необходимо передать имя элемента (тег), затем объект с
атрибутами, а третьим аргументом — содержимое.
// Вложенные элементы можно передать четвёртым аргументом.

const element = React.createElement('p', {
style: {
  color: 'red'
}},
'Hello world.',
);

ReactDOM.render(
element,
document.getElementById('root')
);
      `}
      </pre>
      <p>Создавать таким способом элементы неудобно. Есть способ лучше — JSX. При использовании JSX, создание нового элемента сводится к написанию тегов, как в HTML. Только на самом деле это не теги. При сборке приложения JSX будет преобразован к тому виду, который мы разбирали на прошлом шаге.
      </p>
      <pre>{`// import React from "react";
// import ReactDOM from "react-dom";

function formatName(user) {
return user.firstName + ' ' + user.lastName;
}

const user = {
firstName: 'Рыжий',
lastName: 'Кекс'
};

const element = (
<h1>
  Hello, {formatName(user)}!
</h1>
);

ReactDOM.render(
element,
document.getElementById('root')
);
// Внутри элементов мы можем писать обычный JavaScript. Для этого нужно обернуть
его в фигурные скобки.`}
      </pre>
      <p>Создадим компонент, объединив несколько элементов. Компонент может принимать любое количество свойств. Если имя свойства совпадает с атрибутом, то значение будет подставлено в соответствующий атрибут.
      </p>
      <pre>{`/*
* components/app/app.jsx
*/
// import React from "react";
// import ReactDOM from "react-dom";

// Имена разработанных компонентов начинаются с прописной буквы.
// Данные в компоненты передаются через свойства (props) и только так.
// Для получения доступа к свйоствам внутри компонента мы должны обратититься к
параметру props.
// Это обычный JavaScript-объект. Каждый ключ — это отдельное свойство.

const App = (props) => {
return <div>
<p>Hello, {props.name ? props.name : 'Stranger'}</p>
</div>;
};

/**
* index.js
*/
ReactDOM.render(
<App
  name={'Keks'}
/>,
document.getElementById('root')
);`}
      </pre>
      <p>Условная отрисовка. При описании компонентов мы можем пользоваться условиями и другими подходами, которые применяли без React. Наш компонент в зависимости от условий будет отрисовывать разные элементы. Мы можем упростить условие, поместив его внутрь фигурных скобок компонента и воспользовавшись тернарным оператором.</p>
      <pre>{`// import React from "react";
// import ReactDOM from "react-dom";

const App = (props) => {
  if (props.name) {
    return <div>
      <p>Hello, {props.name}</p>
    </div>;
  }

  return <div>
    <p>Hello, Stranger.</p>
  </div>;
};

/**
  * index.js
  */
ReactDOM.render(
  <App
    name={'Keks'}
  />,
  document.getElementById('root')
);

/**
* components/app/app.jsx
*/

/* В компонентах мы можем использовать деструктуризацию. Тем самым, сделав код
компонента чище. Если компонент обладает небольшим количеством свойств, то
деструктуризацию удобно применять прямо в параметре.*/


const App = (props) => {
const {name = 'Stranger'} = props;

return <div>
  <p>Hello, {name}.</p>
</div>
};

const AnotherComponent = ({name}) => {
return <div>{name}</div>;
};

/**
* index.js
*/
ReactDOM.render(
<App
  name={&apos;Keks&apos;}
/>,
document.getElementById('root')
);`}
      </pre>
      <p>Вместо наследования, в React применяется подход, который называется композиция. Компоненты можно помещать друг в друга: App содержит в себе Message.</p>
      <pre>{`// import React from "react";
// import ReactDOM from "react-dom";

/**
* components/message/message.jsx
*/
const Message = (props) => {
const {name = 'Stranger'} = props;

return <div>
  <p>Hello, {name}.</p>
</div>;
};

/**
* components/app/app.jsx
*/
const App = (props) => {
const {name} = props;

return <div>
  <h1>React Application</h1>
  <Message
    name={name}
  />
</div>;
};

/**
* index.js
*/
ReactDOM.render(
<App
  name={'Keks'}
/>,
document.getElementById('root')
);
      `}
      </pre>
      <p>Мы можем поместить внутрь несколько компонентов. Вложенность неограничена.</p>
      <pre>{`// import React from "react";
// import ReactDOM from "react-dom";

/**
* components/message/message.jsx
*/
const Message = (props) => {
const {name = 'Stranger'} = props;

return <React.Fragment>
  <p>Hello, {name}.</p>
</React.Fragment>;
};

/**
* components/app/app.jsx
*/
const App = (props) => {
const {name} = props;

return <div>
  <h1>React Application</h1>
  <Message
    name={name}
  />
  <Message
    name={'Vasya'}
  />
</div>;
};

/**
* index.js
*/
ReactDOM.render(
<App
  name={'Keks'}
/>,
document.getElementById('root')
);`}
      </pre>
      <p>Компонентов может быть ещё больше! Компоненты можно создавать из массива. Но посмотрите, что-то не так. React ругается. Про какие-то key пишет.</p>
      <pre>{`
        // import React from "react";
// import ReactDOM from "react-dom";

/**
* components/message/message.jsx
*/
const Message = (props) => {
const {name = 'Stranger'} = props;

return <React.Fragment>
  <p>Hello, {name}.</p>
</React.Fragment>;
};

/**
* components/app/app.jsx
*/
const App = (props) => {
const {names} = props;

return <div>
  <h1>React Application</h1>
  {names.map((name) => <Message name={name} />)}
</div>;
};

/**
* index.js
*/
ReactDOM.render(
<App
  names={['Keks', 'Vasya', 'Petya']}
/>,
document.getElementById('root')
);`}
      </pre>
      <p>key — это особое свойство. Его всегда следует передавать при создании списков. Ключи помогают React понять, какие элементы были изменены, добавлены или удалены. Не следует в качестве ключей применять индексы элементов. Используйте уникальные идентификаторы, где это возможно.</p>
      <pre>{`// import React from "react";
// import ReactDOM from "react-dom";

/**
* components/message/message.jsx
*/
const Message = (props) => {
const {name = 'Stranger'} = props;

return <React.Fragment>
  <p>Hello, {name}.</p>
</React.Fragment>;
};

/**
* components/app/app.jsx
*/
const App = (props) => {
const {names} = props;

return <React.Fragment>
  <h1>React Application</h1>
  {names.map((name, i) => <Message key={name + i} name={name} />)}
</React.Fragment>;
};

/**
* index.js
*/
ReactDOM.render(
<App
  names={['Keks', 'Vasya', 'Petya']}
/>,
document.getElementById('root')
);
`}
      </pre>
      <p>Мы также можем передавать компонентам дочерние компоненты. Точно также как это делаем в HTML. Например, мы можем поместить h1 (заголовок) в App. Получить доступ к этим элементам можно с помощью специального свойства — children.</p>
      <p><a href="https://habr.com/ru/post/329996/" target="_blank" rel="noopener noreferrer">Создаём приложение с React Router v4</a></p>
    </section>
  );
}
export default CreateReactApp;
