import React from 'react';

function JSX() {

  return (
    <section className="conspect">
      <h1>JSX</h1>
      <p>JSX - синтаксис React, язык описания компонентов в React. Расширение синтаксиса Javascript. HTML + JS === JSX</p>

      <h2>Различия JSX и HTML</h2>
      <p>Второе большое отличие кроется в именовании «атрибутов». Мы не случайно взяли слово «атрибут» в кавычки. Ведь на самом деле речь идёт о пропсах. Пользуемся правилами, которые применяем в JS при обращении к свойстам элементов: camelCase и альтернативные названия для атрибутов. Например: for меняется на htmlFor, class меняется на className, tabindex на tabIndex, xlink:href на xlinkHref и так далее.</p>

      <pre>{`// import React from "react";
// import ReactDOM from "react-dom";
// Начнём с самого главного различия: в JSX каждый «тег» должен быть закрыт.
// Если вы попытаетесь оставить незакрытым тег, то получите ошибку.
// В JSX мы можем использовать произвольные выражения. Для этого их нужно обернуть в фигурные скобки.
// Очень частый паттерн заключается в применении метода 'map' у массива.
Если он вернёт JSX, то эти элементы будут отрисованы.

const App = () => (
  <div>
    <label htmlFor="username">Как тебя зовут?</label>
    <input className="username-field" id="username" />
    <button tabIndex="0">Отправить</button>
    <button>{"Какой-то текст"}</button>
  <ul>
    {
      [
        <li>Первый элемент списка</li>,
        <li>Тест2</li>
      ].map((item) => item)
    }
  </ul>
  </div>
)



ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// Значения false, null, undefined и true не отрисовываются.
Поэтому удобно использовать оператор && для условного рендеринга.
// В примере userName будет отрисован только если значением 'showUserName' будет true.
// С пропом style отдельная история.
Если в HTML это просто строка, то в JSX — это объект.
// Ключ определяет соответствующее CSS-свойство.
Имена ключей описываются в формате camelCase.

  <h1
    style={{
      color: 'green',
      fontSize: '100px',
      textTransform: 'uppercase'
    }}
  >
    Hello World
  </h1>

const App = () => {
  const userName = 'Keks';
  const showUserName = true;

  return <div>
    <h1>Hello, {showUserName && userName}</h1>
  </div>
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//  JSX безопасен по умолчанию. Если попытаться отрендерить строку с HTML тегами,
то ничего страшного не произойдёт. Теги будут экранированы.

const getMarkup = () => {
  return '<p>Это просто текст</p>'
}

const App = () => {
  return <div>
    <h1>Hello World</h1>
    {getMarkup()}
  </div>
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Однако, если потребуется (это очень плохая идея и редкая необходимость),
то можно пойти на риск и принудительно отключить экранирование.
// Обратите внимание: это опасная операция, которая может привести к появлению XSS-уязвимостей.

const App = () => {
  return <div dangerouslySetInnerHTML={{ __html: getMarkup()}}>
  </div>
};

// Обратите внимание: JSX элементы не могут «висеть в воздухе» без родителя.
Поэтому, если нам требуется вывести несколько элементов, то у них должен быть
какой-то родитель.
// В данном примере таковым является div. Однако, применять дополнительный тег невсегда целесообразно.

const App = () => {
  return <div>
    <h1>Hello!</h1>
    <p>Просто текст</p>
  </div>
};

// Для решения этой задачи React предлагает использовать фрагменты — React.Fragment.
// И последнее. Если проп не получает значения, то подразумевается, что его значение true.

const App = () => {
  return <React.Fragment>
    <h1>Hello!</h1>
    <p>Просто текст</p>
    <h1>Hello!</h1>
    <form>
      <input type="text" required />      // выведет пустой input
    </form>
  </React.Fragment>
};`}
      </pre>
      <h2>Как использовать console.log в jsx</h2>
      <pre>{`render() {
  return (
    <div>
      <h1>List of todos</h1>
      { console.log(this.props.todos) }
    </div>
  );
}

or

render() {
  console.log(this.props.todos);
  return (
    <div>
      <h1>List of todos</h1>
    </div>
  );
}

A fancy solution:

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

Then use it:

render() {
  return (
    <div>
      <h1>List of todos</h1>
      <ConsoleLog>{ this.props.todos }</ConsoleLog>
    </div>
  );
}`}
      </pre>
    </section>
  );
}
export default JSX;
