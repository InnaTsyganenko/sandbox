import React from 'react';

function DemoPatternObserver() {

  return (
    <section className="conspect">
      <h1>Паттерн Observer (Наблюдатель)</h1>
      <p>Паттерн Observer (Наблюдатель) реализует связь один ко многим. То есть сколь угодно сущностей могут подписаться на уведомления (наблюдать), и Observer будет их уведомлять. Начнём с того, что объявим объект Observable. В свойство-массив _observers будем записывать колбэки наблюдателей. Записывать колбэки наблюдателей будем с помощью метода add, удалять из списка — с помощью remove, а уведомлять всех с помощью notify. Реализуем методы. Каждый, кто хочется подписаться, должен передать методу add колбэк. Чтобы перестать наблюдать, каждый подписчик должен передать в метод remove тот же колбэк. И, наконец, реализуем метод уведомления наблюдателей — notify. Смысл его прост: раз все наблюдатели передают свои колбэки, достаточно их вызвать в цикле.</p>
      <pre>{`const Observable = {
  _observers: [],
  add(callback) {
    this._observers.push(callback);
  },
  remove(callback) {
    this._observers = this._observers
      .filter(
        (callbackInStock) => callbackInStock !== callback,
      );
  },
  notify() {
    this._observers.forEach((callback) => callback());
  },
};`}
      </pre>
      <p>Давайте опробуем нашего наблюдателя в работе. В качестве реакции, если наблюдатель что-то заметит, будет тост вызов функции toast, которая показывает сообщение. Функцию мы генерируем вспомогательным модулем toast.js. Его устройство нас совершенно не интересует. Действием, на которое нужно среагировать, будет нажатие на кнопку «Уведомить всех». Сгенерируем функцию-тост, которая будет показывать сообщение «Вам пришло письмо!» Передадим её колбэком в Observable. Теперь кликните кнопку, чтобы уведомить всех. Сгенерируем ещё один тост колбэк. Также передадим его наблюдателю. Проблема сейчас только одна — колбэки генерируются на лету, и мы не можем их так просто удалить. Ведь при удалении создастся новый колбэк, который не будет равен колбэку хранящемуся в массиве. Похожая проблема у нас была с addEventListener, который тоже использует паттерн Observer «под капотом», поэтому мы знаем решение... Запишем ссылку на колбэки в переменную и отдадим нашему наблюдателю. Теперь можно отписать колбэк в любую минуту. И если сейчас нажать на кнопку, придёт уведомление только о новых сообщениях в чате.</p>
      <pre>{`import {makeToast} from './toast.js';

const Observable = {
  _observers: [],
  add(callback) {
    this._observers.push(callback);
  },
  remove(callback) {
    this._observers = this._observers
      .filter(
        (callbackInStock) => callbackInStock !== callback,
      );
  },
  notify() {
    this._observers.forEach((callback) => callback());
  },
};

const toastForNewEmail = makeToast('Вам пришло письмо!');
const toastForNewChatMessage = makeToast('Новое сообщение в чате');

Observable.add(toastForNewEmail);
Observable.add(toastForNewChatMessage);

Observable.remove(toastForNewEmail);

document
  .querySelector('button')
  .addEventListener('click', () => Observable.notify());
`}
      </pre>
    </section>
  );
}
export default DemoPatternObserver;
