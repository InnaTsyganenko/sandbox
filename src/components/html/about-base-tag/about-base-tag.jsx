import React from 'react';

function AboutBaseTag() {

  return (
    <div className="add-theory-block">
      <p>Про относительные ссылки: <code>&lt;base&gt;</code>. Мы подходим к разметке элементов, которые либо сами ссылаются на место на сервере (изображения и, возможно, видео), либо представляют собой ссылку на другие страницы и сайты. Если ссылки в большинстве случаев ведут на одну и ту же локацию, то можно упростить работу с ними.</p>
      <p>Тег <code>&lt;base&gt;</code> нужен для того, чтобы показать браузеру адрес, от которого будут строиться относительные ссылки на странице. Например, если указать в <code>&lt;base&gt;</code> адрес https://htmlacademy.ru/skills/, то можно будет класть изображения для страницы в папку https://htmlacademy.ru/skills/ и на странице писать короткий адрес, например, image.jpg. Это упрощает чтение кода, поскольку делает ссылки короткими и очень конкретными, и позволяет работать с файлохранилищами со внешними адресами.</p>
      <p>Тег <code>&lt;base&gt;</code> вставляется в <code>&lt;head&gt;</code>, этот тег может быть только один для страницы, если их больше — они будут проигнорированы. У тега <code>&lt;base&gt;</code> есть атрибуты href и target. href содержит информацию об адресе, а target — цель всех относительных ссылок на странице. Подробнее про работу и значение этих атрибутов — в главе <a className="text-link" href="img_and_href.htm">«Ссылки и изображения»</a>.</p>
      <p>Таким образом метаинформация немного разрастается:</p>
      <pre>{`<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Заголовок страницы</title>
  <base href="https://www.htmlacademy-assets.com/assets/">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <img src="keks-image.png">
</body>`}
      </pre>
    </div>
  );
}

export default AboutBaseTag;
