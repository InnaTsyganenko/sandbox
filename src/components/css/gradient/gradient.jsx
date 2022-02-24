import React from 'react';

function Gradient() {

  const NorthBearContainer = {
    width: '600px',
    position: 'relative',
    zIndex: '0',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#003f86',
  };

  const Avrora = {
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    left: '0',
    width: '600px',
    height: '400px',
    backgroundImage: 'linear-gradient(to bottom, #063365, #29b593, #4ecad2, #13a0f0, #6d4bf6, #731cb7, #003f86)',
  };

  const SquareTopLeft = {
    backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%)',
    float: 'left',
    width: '50%',
    height: '150px',
  };

  const SquareTopRight = {
    backgroundImage: 'linear-gradient(225deg, rgba(255, 255, 255, 0.3) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 75%, transparent 75%)',
    float: 'left',
    width: '50%',
    height: '150px',
  };

  const SquareBottomRight = {
    backgroundImage: 'linear-gradient(315deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%)',
    float: 'left',
    width: '50%',
    height: '150px',
  };

  const SquareBottomLeft = {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.5) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 75%, transparent 75%)',
    float: 'left',
    width: '50%',
    height: '150px',
  };

  const Squares = {
    width: '300px',
    height: '300px',
    backgroundColor: '#8e44ad',
  };

  const SimpleGray = {
    backgroundImage: 'linear-gradient(#ffffff, #dddddd)',
    color: '#333333',
    margin: '20px',
    padding: '20px 40px',
    borderRadius: '5px',
    border: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 3px #aaaaaa',
    textShadow: '0 -1px 1px rgba(0, 0, 0, 0.4)',
    fontSize: '24px',
  };

  const StrongBrown = {
    backgroundImage: 'linear-gradient(#cc0630 0%, #8f0222 75%, #6d0019 100%)',
    color: '#ffffff',
    margin: '20px 0',
    padding: '20px 40px',
    borderRadius: '5px',
    border: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 3px #aaaaaa',
    textShadow: '0 -1px 1px rgba(0, 0, 0, 0.4)',
    fontSize: '24px',
  };

  const GlossyBlue = {
    backgroundImage: 'linear-gradient(#b8e1fc 0%, #90bcea 35%, #90bff0 50%, #6ba8e5 51%, #bdf3fd 100%)',
    color: '#ffffff',
    margin: '20px',
    padding: '20px 40px',
    borderRadius: '5px',
    border: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 3px #aaaaaa',
    textShadow: '0 -1px 1px rgba(0, 0, 0, 0.4)',
    fontSize: '24px',
  };

  const Pattern = {
    width: '600px',
    height: '300px',
    backgroundColor: '#333333',
    backgroundImage: `
      linear-gradient(135deg, white 25%, transparent 25%),
      linear-gradient(225deg, white 25%, transparent 25%),
      linear-gradient(45deg, white 25%, transparent 25%),
      linear-gradient(315deg, white 25%, transparent 25%)`,
    backgroundPosition: `
      25px 0,
      25px 0,
      0 0,
      0 0`,
    backgroundSize: '50px 50px',
    backgroundRepeat: 'repeat',
  };

  const Shurikens = {
    width: '600px',
    height: '300px',
    backgroundColor: '#faf0e6',
    backgroundImage: `
      linear-gradient(135deg, #555 25px, transparent 25px),
      linear-gradient(45deg, #555 25px, transparent 25px),
      linear-gradient(315deg, #555 25px, transparent 25px),
      linear-gradient(225deg, #555 25px, transparent 25px),
      linear-gradient(315deg, #000 25px, transparent 25px),
      linear-gradient(135deg, #000 25px, transparent 25px)`,
    backgroundPosition: `
      35px -45px,
      -45px 70px,
      70px -80px,
      -80px 35px,
      70px 70px,
      35px 35px`,
    backgroundSize: '115px 115px',
    backgroundRepeat: 'repeat',
  };

  return (
    <section className="conspect">
      <h1>Градиенты в CSS</h1>
      <p><a href="https://projects.verou.me/css3patterns/" target="_blank" rel="noopener noreferrer">CSS3 Patterns Gallery</a></p>
      <h2>Linear gradient</h2>
      <p>В математике градиент — это функция, показывающая направление наискорейшего возрастания некоторой величины, значение которой меняется от одной точки пространства к другой. Если применить градиент к цвету, то получится плавный переход от одного цвета к другому.</p>
      <p>Градиенты описываются внутри CSS-свойства background-image. Простейший градиент можно описать таким образом:</p>
      <p><code>background-image: linear-gradient(yellow, green);</code></p>
      <p>Сам градиент создаётся функцией linear-gradient, в параметрах которой указываются направление градиента и набор цветов. Направление можно не указывать, тогда будет использовано значение по умолчанию — сверху вниз. Цветов может быть любое количество. Для этого цвета просто перечисляются через запятую.</p>
      <p>Красивый пример равномерного многоцветного градиента:</p>
      <div style={NorthBearContainer}>
        <img src="/img/bear.svg" alt="Северный пейзаж" width="" height="" />
        <div style={Avrora}></div>
      </div>

      <h2>Направление градиента</h2>
      <p>Направления градиента задаются с помощью ключевых слов: top, bottom, left, right.</p>
      <p>Направление градиента располагается перед списком цветов и включает в себя частицу to. Она была добавлена в синтаксис для улучшения читабельности и наглядности:</p>
      <p><span className="hl-3">background-image: linear-gradient(to right, yellow, green);</span></p>
      <p>И сразу понятно, что это: «Жёлто-зелёный градиент слева направо».</p>

      <h2>Градиенты по диагоналям</h2>
      <p>Комбинируя top, bottom и left, right градиенты можно направлять по диагонали.</p>

      <h2>Градиенты под углом</h2>
      <p>Направление в градусах задаётся с помощью единицы измерения deg. Можно задавать положительные и  отрицательные углы.</p>
      <p>0deg соответствует 12 часам, а отсчёт угла идет по часовой стрелке. В случае, если угол задан отрицательным значением, например, -90deg, то он отсчитывается против часовой стрелки.</p>
      <img src="/img/scale-deg.png" alt="Шкала градусов" width="400" height="370" />

      <h2>Диагонали против градусов</h2>
      <p>Градиенты, заданные с помощью градусов, не зависят от формы контейнера, а диагональные градиенты зависят. Диагональные градиенты всегда остаются привязанными к своим углам.</p>
      <p>Конечно, если контейнеры квадратные, то отличий не видно. Но что будет, если вытянуть их по высоте?</p>

      <h2>Пропорции цветов и колорстопы</h2>
      <p>По умолчанию цвета в градиентах распределяются равномерно, в одинаковых пропорциях, но этим поведением можно управлять.</p>
      <p>Колорстоп указывает положение цвета в градиенте, его можно задавать в процентах, пикселях и других единицах.</p>
      <p><span className="hl-6">Колорстоп задаёт то место, где будет располагаться центральная (самая насыщенная) часть цвета.</span></p>
      <img src="/img/colorstops.png" alt="Наглядые примеры работы колорстопов" width="600" height="400"></img>

      <h2>Резкие переходы цветов</h2>
      <p>Если задать для соседних цветов одну и ту же позицию, то получится резкий переход цветов.</p>

      <h3>Цветовые переходы в px</h3>
      <p>Цветовые переходы градиента можно также задавать в пикселях. Работают они по аналогии с процентными переходами. Отличие заключается в том, что процентные переходы зависят от размера элемента, а переходы в пикселях — нет.</p>

      <h2>Полупрозрачные градиенты</h2>
      <pre>{`rgba(255, 255, 255, 1) — обычный белый цвет.
rgba(255, 255, 255, 0.5) — наполовину прозрачный белый.
rgba(255, 255, 255, 0) — полностью прозрачный цвет.`}
      </pre>
      <p>Также прозрачный цвет можно задать с помощью ключевого слова transparent.</p>
      <p>Прозрачные и полупрозрачные цвета используют и в градиентах для создания интересных эффектов:</p>
      <div style={Squares}>
        <div style={SquareTopLeft}></div>
        <div style={SquareTopRight}></div>
        <div style={SquareBottomLeft}></div>
        <div style={SquareBottomRight}></div>
      </div>

      <h2>Повторяющийся линейный градиент</h2>
      <p>Помимо обычных градиентов существуют и повторяющиеся. Их синтаксис полностью совпадает с синтаксисом обычных, только вместо linear-gradient пишется repeating-linear-gradient. Повторяющийся градиент хорош для создания полосатых фонов или фонов-орнаментов средствами CSS.</p>
      <p>Есть несколько тонкостей, которые нужно знать про повторяющиеся градиенты:</p>
      <ul>
        <li>Размер фрагмента определяется по последнему колорстопу. Чтобы повторение было видно, последний колорстоп должен быть меньше, чем размер элемента с градиентом.</li>
        <li>Если первый и последний цвета градиента различаются, то будут видны резкие границы между повторяющимися фрагментами. Чтобы от них избавиться, нужно задавать одинаковый первый и последний цвета.</li>
        <li>Колорстопы в повторяющихся градиентах обычно задают в пикселях, но можно использовать и проценты.</li>
        <li>Кстати, вместо повторяющихся градиентов можно использовать обычные градиенты в сочетании со свойствами background-size и background-repeat. Но повторяющиеся градиенты удобнее и требуют меньше кода.</li>
      </ul>
      <p>CSS-градиенты — это особые фоновые изображения, и на них действуют все свойства для управления фонами: background-position, background-size, background-repeat.</p>
      <p>В отличие от обычных изображений градиенты не имеют «собственного» размера, и их размер равен размеру элемента, в фоне которого они расположены. Мы можем задать размер для градиента с помощью свойства background-size.</p>
      <p>Задав размер для градиентов в фоне, мы получим фрагмент орнамента, повторением которого сможем управлять с помощью background-repeat.</p>
      <p>Вернёмся к множественным фонам. Вы можете не только задавать несколько фоновых изображений, но и управлять размерами, расположением и повторением каждого из них по отдельности. Такая запись:</p>
      <p><span className="hl-3">background-size: 100px 200px;</span></p>
      <p>Задаст всем фоновым изображениям один и тот же размер. А такая запись:</p>
      <pre>{`background-size:
  100px 200px,
  200px 300px,
  300px 400px;`}
      </pre>
      <p>Задаст всем фоновым изображениям разные размеры. Чтобы задавать разные значения свойств для множественных фонов, вам нужно просто перечислять эти значения через запятую в том же порядке, в каком вы записали изображения.</p>
      <p>Симпатичные кнопки:</p>
      <button style={SimpleGray}>Come</button>
      <button style={StrongBrown}>See</button>
      <button style={GlossyBlue}>Win</button>
      <p>Пример сложного повторяющегося фона:</p>
      <div style={Pattern}></div>
      <p>Сюрикены:</p>
      <div style={Shurikens}></div>

      <h2>Radial Gradient</h2>
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient()" target="_blank" rel="noopener noreferrer">MDN</a></p>
      <pre>{'background-image: radial-gradient(circle at center, red 0, yellow, green 100%)'}</pre>
      <div className="radial-gradient-1"></div>
      <p>Радиальный градиент указывается путем указания центра градиента (где будет эллипс 0%), а также размера и формы  конечной формы  (эллипса 100%).</p>
      <p>Может быть либо circle либо ellipse(default).</p>
      <pre>{'background-image: radial-gradient(closest-side, #B34E7E 0, #FFF8B8, #01B3ED 100%);'}</pre>
      <div className="radial-gradient-2"></div>
      <pre>{'background-image: radial-gradient(closest-corner, #B34E7E 0, #FFF8B8, #01B3ED 100%);'}</pre>
      <div className="radial-gradient-3"></div>
      <pre>{'background-image: radial-gradient(farthest-side, #B34E7E 0, #FFF8B8, #01B3ED 100%);'}</pre>
      <div className="radial-gradient-4"></div>
      <pre>{'background-image: radial-gradient(farthest-corner, #B34E7E 0, #FFF8B8, #01B3ED 100%);'}</pre>
      <div className="radial-gradient-5"></div>
      <pre>{'background-image: radial-gradient(farthest-corner at 40px 40px, #f35 0%, #43e 100%);'}</pre>
      <div className="radial-gradient-6"></div>
      <pre>{'background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);'}</pre>
      <div className="radial-gradient-7"></div>
    </section>
  );
}
export default Gradient;
