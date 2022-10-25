import React from 'react';

function AboutCrossoriginAndCors() {

  return (
    <section className="conspect">
      <h1>Атрибут crossorigin</h1>
      <p>crossorigin - Этот атрибут определяет, используется ли CORS при загрузке изображения. Изображения, загруженные с помощью CORS, могут использоваться в элементах , не ограничивая функциональность последних (англ. tainted canvas).</p>
      <p>У этого атрибута есть 2 допустимых значения:</p>
      <ol>
        <li>
          <p><b>anonymous</b> - В этом случае перед загрузкой изображения выполняется cross-origin запрос (т.е., используется Origin: HTTP header). Однако, при этом не передаются параметры доступа (ни cookie, ни сертификат X.509, ни логин/пароль для базовой аутентификации по HTTP). В ответе сервера должен присутствовать заголовок Access-Control-Allow-Origin: HTTP header, иначе использование изображения в ограничивается.</p>
        </li>
        <li>
          <p><b>use-credentials</b> - Перед загрузкой изображения выполняется cross-origin запрос (Origin: HTTP header) с указанием параметров доступа (в виде cookie, сертификата или пары логин/пароль). В ответе сервера должен присутствовать заголовок Access-Control-Allow-Origin: HTTP header, иначе использование изображения в ограничивается. Если данный атрибут не задан, CORS при загрузке изображения не используется (нет заголовка Origin: HTTP header), и использование изображения в ограничивается всегда. При неверном значении атрибута (например, при опечатке), используется значение anonymous. Для дополнительной информации обратитесь к статье CORS settings attributes.</p>
        </li>
      </ol>
      <p>crossorigin нужен, когда ты хочешь подгрузить изображение с чужого сайта для использования его в элементе canvas, что позволяет делать с изображением различные манипуляции. Например библиотека, для создания скришотов в браузере, html2canvas не сможет захватить картинки на странице если они лежат на другом сайте, вот тут и может помочь этот атрибут, но ресурс на котором лежат изображения должен передавать и ними заголовок Access-Control-Allow-Origin.</p>
      <p><a href="https://habr.com/ru/company/macloud/blog/553826/" target="_blank" rel="noopener noreferrer">CORS для чайников: история возникновения, как устроен и оптимальные методы работы</a></p>
    </section>
  );
}
export default AboutCrossoriginAndCors;
