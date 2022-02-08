import React from 'react';

function DatesandTimes() {

  return (
    <section className="conspect">
      <h1>Work with dates in JS</h1>
      <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" rel="noopener noreferrer">Дата</a></p>
      <p>Получить текущую дату:</p>
      <pre>{'console.log(new Date(););'}</pre>
      <p>Добавить время к текущей дате:</p>
      <pre>{`const dateNow = new Date();
  const dateFrom = new Date();
  const dateTo = new Date();

  dateFrom.setDate(dateNow.getDate() + getRandomInteger(-2, 2));
  dateFrom.setHours(dateNow.getHours() + getRandomInteger(1, 24));
  dateFrom.setMinutes(dateNow.getMinutes() + getRandomInteger(5, 60));
  dateTo.setDate(dateFrom.getDate() + getRandomInteger(0, 2));
  dateTo.setHours(dateFrom.getHours() + getRandomInteger(1, 24));
  dateTo.setMinutes(dateFrom.getMinutes() + getRandomInteger(0, 60));
  const duration = (dateTo - dateFrom) / 60000; // делим на 60000 чтобы получить из миллисекунд минуты`}
      </pre>
      <p className="hl-9">Устанавливаемые значения д.б. в допустимом диапазон (в сутках 24 часа). Иначе получим неправильные результаты.</p>
      <p className="hl-8"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options" target="_blank" rel="noopener noreferrer">С помощью options можно получить нужный формат даты:</a></p>
      <pre>{`const options = { month: 'short'};
  const formatShortMonth = (date) => new Intl.DateTimeFormat('en-US', options).format(date); //  FEB`}
      </pre>
      <a href="https://dev-gang.ru/article/kak-konvertirovat-sekundy-v-minuty-i-czasy-s-pomosczu-vanilla-js-hut21w8ww2/" target="_blank" rel="noopener noreferrer">Как конвертировать секунды в минуты и часы с помощью vanilla JS </a>
    </section>
  );
}
export default DatesandTimes;
