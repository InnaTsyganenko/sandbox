import React from 'react';

function Emmet() {

  return (
    <section className="conspect">
      <h1>Шпаргалка по Emmet</h1>
      <h2>Abbreviations Syntax</h2>
      <p>Можно использовать имена элементов, такие как div или p, для создания HTML-тегов.</p>
      <p>Можно использовать оператор <code>&gt;</code> для вложения элементов друг в друга: div<code>&gt;</code>ul<code>&gt;</code>li</p>
      <p>Используйте оператор +, чтобы разместить элементы рядом друг с другом на одном уровне: div+p+bq</p>
      <p>С помощью оператора ^ вы можете подняться на один уровень вверх по дереву и изменить контекст, в котором должны появиться следующие элементы:</p>
      <pre>{`div+div>p>span+em^bq
...outputs to
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>`}
      </pre>
      <p>Вы можете использовать столько операторов ^, сколько захотите, каждый оператор переместится на один уровень вверх: div+div<code>&gt;</code>p<code>&gt;</code>span+em^^^bq</p>
      <pre>{`...will output to
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>`}
      </pre>
      <p>С помощью оператора * вы можете определить, сколько раз должен выводиться элемент:</p>
      <pre>{`ul>li*5
...outputs to
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>`}
      </pre>
      <p>Круглые скобки используются опытными пользователями Emmets для группировки поддеревьев в сложные сокращения:</p>
      <pre>{`div>(header>ul>li*2>a)+footer>p
...expands to
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>`}
      </pre>
      <p>Вы можете вкладывать группы друг в друга и объединять их с помощью оператора умножения *:</p>
      <pre>{`(div>dl>(dt+dd)*3)+footer>p
...produces
<div>
  <dl>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>
<footer>
<p></p>
</footer>`}
      </pre>
      <h2>ID and CLASS</h2>
      <pre>{`div#header+div.page+div#footer.class1.class2.class3
...will output

<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>`}
      </pre>
      <p>Вы можете использовать нотацию [attr] (как в CSS) для добавления настраиваемых атрибутов к вашему элементу:</p>
      <pre>{`td[title="Hello world!" colspan]
...outputs

<td title="Hello world!" colspan=""></td>`}
      </pre>
      <p>Поместите оператор $ внутри имени элемента, имени атрибута или значения атрибута, чтобы вывести текущее количество повторяющихся элементов:</p>
      <pre>{`ul>li.item$*5
...outputs to

<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>`}
      </pre>
      <p>Вы можете использовать несколько $ подряд, чтобы дополнить число нулями:</p>
      <pre>{`ul>li.item$$$*5
...outputs to

<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
  <li class="item004"></li>
  <li class="item005"></li>
</ul>`}
      </pre>
      <p>Вы можете использовать фигурные скобки для добавления текста к элементу:</p>
      <pre>{`a{Click me}
...will produce

<a href="">Click me</a>`}
      </pre>
    </section>

  );
}
export default Emmet;
