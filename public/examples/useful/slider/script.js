/**
 * SimpleAdaptiveSlider by Itchief v2.0.0 (https://github.com/itchief/ui-components/tree/master/simple-adaptive-slider)
 * Copyright 2020 - 2021 Alexander Maltsev
 * Licensed under MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 */

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '26px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';
  alertContainer.style.color = 'white';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new SimpleAdaptiveSlider('.slider', {
    // чтобы сделать без зацикливания добавить сюда свойство 'loop: false',
    // чтобы сделать автоматическую прокрутку нужно задать  'autoplay: true' и задать interval (миллисекунды),
    swipe: true,
  });
});

(function() {
  if (typeof window.CustomEvent === 'function' ) {return false;}
  function CustomEvent(event, params) {
    params = params || {bubbles: false, cancelable: false, detail: null};
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return e;
  }
  window.CustomEvent = CustomEvent;
})();

// базовые классы и селекторы
const WRAPPER_SELECTOR = '.slider__wrapper';
const ITEMS_SELECTOR = '.slider__items';
const ITEM_SELECTOR = '.slider__item';
const ITEM_CLASS_ACTIVE = 'slider__item_active';
const CONTROL_SELECTOR = '.slider__control';
const CONTROL_CLASS_SHOW = 'slider__control_show';
// индикаторы
const INDICATOR_WRAPPER_ELEMENT = 'ol';
const INDICATOR_WRAPPER_CLASS = 'slider__indicators';
const INDICATOR_ITEM_ELEMENT = 'li';
const INDICATOR_ITEM_CLASS = 'slider__indicator';
const INDICATOR_ITEM_CLASS_ACTIVE = 'slider__indicator_active';
// порог для переключения слайда (40%)
const SWIPE_THRESHOLD = 20;
// класс для отключения transition
const TRANSITION_NONE = 'transition-none';

function SimpleAdaptiveSlider(selector, config) {
  // .slider
  this._root = document.querySelector(selector);
  // .slider__wrapper
  this._wrapper = this._root.querySelector(WRAPPER_SELECTOR);
  // .slider__items
  this._items = this._root.querySelector(ITEMS_SELECTOR);
  // .slider__item
  this._itemList = this._root.querySelectorAll(ITEM_SELECTOR);
  // текущий индекс
  this._currentIndex = 0;
  // экстремальные значения слайдов
  this._minOrder = 0;
  this._maxOrder = 0;
  this._itemWithMinOrder = null;
  this._itemWithMaxOrder = null;
  this._minTranslate = 0;
  this._maxTranslate = 0;
  // направление смены слайдов (по умолчанию)
  this._direction = 'next';
  // флаг, который показывает, что идёт процесс уравновешивания слайдов
  this._balancingItemsFlag = false;
  // текущее значение трансформации
  this._transform = 0;
  // swipe параметры
  this._hasSwipeState = false;
  this._swipeStartPosX = 0;
  // id таймера
  this._intervalId = null;
  // конфигурация слайдера (по умолчанию)
  this._config = {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  };
  // изменяем конфигурацию слайдера в соответствии с переданными настройками
  for (const key in config) {
    if (Object.prototype.hasOwnProperty.call(this._config, key)) {
      this._config[key] = config[key];
    }
  }
  // добавляем к слайдам data-атрибуты
  for (let i = 0, length = this._itemList.length; i < length; i++) {
    this._itemList[i].dataset.order = i;
    this._itemList[i].dataset.index = i;
    this._itemList[i].dataset.translate = 0;
  }
  // перемещаем последний слайд перед первым
  if (this._config.loop) {
    const count = this._itemList.length - 1;
    const translate = -this._itemList.length * 100;
    this._itemList[count].dataset.order = -1;
    this._itemList[count].dataset.translate = -this._itemList.length * 100;
    const transformValue = 'translateX('.concat(translate, '%)');
    this._itemList[count].style.transform = transformValue;
  }
  // добавляем индикаторы к слайдеру
  this._addIndicators();
  // обновляем экстремальные значения переменных
  this._refreshExtremeValues();
  // помечаем активные элементы
  this._setActiveClass();
  // назначаем обработчики
  this._addEventListener();
  // запускаем автоматическую смену слайдов
  this._autoplay();
}

// set active class
SimpleAdaptiveSlider.prototype._setActiveClass = function() {
  // slides
  let i;
  let length;
  let item;
  let index;
  for (i = 0, length = this._itemList.length; i < length; i++) {
    item = this._itemList[i];
    index = parseInt(item.dataset.index, 10);
    if (this._currentIndex === index) {
      item.classList.add(ITEM_CLASS_ACTIVE);
    } else {
      item.classList.remove(ITEM_CLASS_ACTIVE);
    }
  }
  // indicators
  const indicators = this._root.querySelectorAll(`.${INDICATOR_ITEM_CLASS}`);
  if (indicators.length) {
    for (i = 0, length = indicators.length; i < length; i++) {
      item = indicators[i];
      index = parseInt(item.dataset.slideTo, 10);
      if (this._currentIndex === index) {
        item.classList.add(INDICATOR_ITEM_CLASS_ACTIVE);
      } else {
        item.classList.remove(INDICATOR_ITEM_CLASS_ACTIVE);
      }
    }
  }
  // controls
  const controls = this._root.querySelectorAll(CONTROL_SELECTOR);
  if (!controls.length) {
    return;
  }
  if (this._config.loop) {
    for (i = 0, length = controls.length; i < length; i++) {
      controls[i].classList.add(CONTROL_CLASS_SHOW);
    }
  } else {
    if (this._currentIndex === 0) {
      controls[0].classList.remove(CONTROL_CLASS_SHOW);
      controls[1].classList.add(CONTROL_CLASS_SHOW);
    } else if (this._currentIndex === this._itemList.length - 1) {
      controls[0].classList.add(CONTROL_CLASS_SHOW);
      controls[1].classList.remove(CONTROL_CLASS_SHOW);
    } else {
      controls[0].classList.add(CONTROL_CLASS_SHOW);
      controls[1].classList.add(CONTROL_CLASS_SHOW);
    }
  }
};

// смена слайдов
SimpleAdaptiveSlider.prototype._move = function() {
  if (this._direction === 'none') {
    this._items.classList.remove(TRANSITION_NONE);
    this._items.style.transform = 'translateX('.concat(this._transform, '%)');
    return;
  }
  if (!this._config.loop) {
    const condition = this._currentIndex + 1 >= this._itemList.length;
    if (condition && this._direction === 'next') {
      this._autoplay('stop');
      return;
    }
    if (this._currentIndex <= 0 && this._direction === 'prev') {
      return;
    }
  }
  const step = this._direction === 'next' ? -100 : 100;
  const transform = this._transform + step;
  if (this._direction === 'next') {
    if (++this._currentIndex > this._itemList.length - 1) {
      this._currentIndex -= this._itemList.length;
    }
  } else {
    if (--this._currentIndex < 0) {
      this._currentIndex += this._itemList.length;
    }
  }
  this._transform = transform;
  this._items.style.transform = 'translateX('.concat(transform, '%)');
  this._setActiveClass();
};

// функция для перемещения к слайду по индексу
SimpleAdaptiveSlider.prototype._moveTo = function(index) {
  const currentIndex = this._currentIndex;
  this._direction = index > currentIndex ? 'next' : 'prev';
  for (let i = 0; i < Math.abs(index - currentIndex); i++) {
    this._move();
  }
};

// метод для автоматической смены слайдов
SimpleAdaptiveSlider.prototype._autoplay = function(action) {
  if (!this._config.autoplay) {
    return;
  }
  if (action === 'stop') {
    clearInterval(this._intervalId);
    this._intervalId = null;
    return;
  }
  if (this._intervalId === null) {
    this._intervalId = setInterval(() => {
      this._direction = 'next';
      this._move();
    },
    this._config.interval,
    ).bind(this);
  }
};

// добавление индикаторов
SimpleAdaptiveSlider.prototype._addIndicators = function() {
  if (this._root.querySelector(`.${INDICATOR_WRAPPER_CLASS}`)) {
    return;
  }
  const wrapper = document.createElement(INDICATOR_WRAPPER_ELEMENT);
  wrapper.className = INDICATOR_WRAPPER_CLASS;
  for (let i = 0, length = this._itemList.length; i < length; i++) {
    const item = document.createElement(INDICATOR_ITEM_ELEMENT);
    item.className = INDICATOR_ITEM_CLASS;
    item.dataset.slideTo = i;
    wrapper.appendChild(item);
  }
  this._root.appendChild(wrapper);
};

// refresh extreme values
SimpleAdaptiveSlider.prototype._refreshExtremeValues = function() {
  const itemList = this._itemList;
  this._minOrder = parseInt(itemList[0].dataset.order, 10);
  this._maxOrder = this._minOrder;
  this._itemWithMinOrder = itemList[0];
  this._itemWithMaxOrder = this._itemWithMinOrder;
  this._minTranslate = parseInt(itemList[0].dataset.translate, 10);
  this._maxTranslate = this._minTranslate;
  for (let i = 0, length = itemList.length; i < length; i++) {
    const item = itemList[i];
    const order = parseInt(item.dataset.order, 10);
    if (order < this._minOrder) {
      this._minOrder = order;
      this._itemWithMinOrder = item;
      this._minTranslate = parseInt(item.dataset.translate, 10);
    } else if (order > this._maxOrder) {
      this._maxOrder = order;
      this._itemWithMaxOrder = item;
      this._maxTranslate = parseInt(item.dataset.translate, 10);
    }
  }
};

// balancing items
SimpleAdaptiveSlider.prototype._balancingItems = function() {
  if (!this._balancingItemsFlag) {
    return;
  }
  const wrapper = this._wrapper;
  const wrapperRect = wrapper.getBoundingClientRect();
  const halfWidthItem = wrapperRect.width / 2;
  const count = this._itemList.length;
  let translate;
  let clientRect;
  if (this._direction === 'next') {
    const wrapperLeft = wrapperRect.left;
    const min = this._itemWithMinOrder;
    translate = this._minTranslate;
    clientRect = min.getBoundingClientRect();
    if (clientRect.right < wrapperLeft - halfWidthItem) {
      min.dataset.order = this._minOrder + count;
      translate += count * 100;
      min.dataset.translate = translate;
      min.style.transform = 'translateX('.concat(translate, '%)');
      this._refreshExtremeValues();
    }
  } else if (this._direction === 'prev') {
    const wrapperRight = wrapperRect.right;
    const max = this._itemWithMaxOrder;
    translate = this._maxTranslate;
    clientRect = max.getBoundingClientRect();
    if (clientRect.left > wrapperRight + halfWidthItem) {
      max.dataset.order = this._maxOrder - count;
      translate -= count * 100;
      max.dataset.translate = translate;
      max.style.transform = 'translateX('.concat(translate, '%)');
      this._refreshExtremeValues();
    }
  }
  requestAnimationFrame(this._balancingItems.bind(this));
};

// adding listeners
SimpleAdaptiveSlider.prototype._addEventListener = function() {
  const items = this._items;
  function onClick(e) {
    const target = e.target;
    this._autoplay('stop');
    if (target.classList.contains('slider__control')) {
      e.preventDefault();
      this._direction = target.dataset.slide;
      this._move();
    } else if (target.dataset.slideTo) {
      e.preventDefault();
      const index = parseInt(target.dataset.slideTo, 10);
      this._moveTo(index);
    }
    if (this._config.loop) {
      this._autoplay();
    }
  }
  function onTransitionStart() {
    this._balancingItemsFlag = true;
    window.requestAnimationFrame(this._balancingItems.bind(this));
  }
  function onTransitionEnd() {
    this._balancingItemsFlag = false;
    this._root.dispatchEvent(new CustomEvent('slider.transition.end',
      {bubbles: true}));
  }
  function onMouseEnter() {
    this._autoplay('stop');
  }
  function onMouseLeave() {
    if (this._config.loop) {
      this._autoplay();
    }
  }
  function onSwipeStart(e) {
    this._autoplay('stop');
    const event = e.type.search('touch') === 0 ? e.touches[0] : e;
    this._swipeStartPosX = event.clientX;
    this._swipeStartPosY = event.clientY;
    this._hasSwipeState = true;
    this._hasSwiping = false;
  }
  function onSwipeMove(e) {
    if (!this._hasSwipeState) {
      return;
    }
    const event = e.type.search('touch') === 0 ? e.touches[0] : e;
    let diffPosX = this._swipeStartPosX - event.clientX;
    const diffPosY = this._swipeStartPosY - event.clientY;
    if (!this._hasSwiping) {
      if (Math.abs(diffPosY) > Math.abs(diffPosX)) {
        this._hasSwipeState = false;
        return;
      }
      this._hasSwiping = true;
    }
    e.preventDefault();
    if (!this._config.loop) {
      if (this._currentIndex + 1 >= this._itemList.length && diffPosX >= 0) {
        diffPosX = diffPosX / 4;
      }
      if (this._currentIndex <= 0 && diffPosX <= 0) {
        diffPosX = diffPosX / 4;
      }
    }
    const value = (diffPosX / this._wrapper.getBoundingClientRect().width) * 100;
    const translateX = this._transform - value;
    this._items.classList.add(TRANSITION_NONE);
    this._items.style.transform = 'translateX('.concat(translateX, '%)');
  }
  function onSwipeEnd(e) {
    if (!this._hasSwipeState) {
      return;
    }
    const event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
    let diffPosX = this._swipeStartPosX - event.clientX;
    if (!this._config.loop) {
      if (this._currentIndex + 1 >= this._itemList.length && diffPosX >= 0) {
        diffPosX = diffPosX / 4;
      }
      if (this._currentIndex <= 0 && diffPosX <= 0) {
        diffPosX = diffPosX / 4;
      }
    }
    const value = (diffPosX / this._wrapper.getBoundingClientRect().width) * 100;
    this._items.classList.remove(TRANSITION_NONE);
    if (value > SWIPE_THRESHOLD) {
      this._direction = 'next';
      this._move();
    } else if (value < -SWIPE_THRESHOLD) {
      this._direction = 'prev';
      this._move();
    } else {
      this._direction = 'none';
      this._move();
    }
    this._hasSwipeState = false;
    if (this._config.loop) {
      this._autoplay();
    }
  }
  function onDragStart(e) {
    e.preventDefault();
  }
  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this._autoplay('stop');
    } else if (document.visibilityState === 'visible') {
      if (this._config.loop) {
        this._autoplay();
      }
    }
  }
  // click
  this._root.addEventListener('click', onClick.bind(this));
  // transitionstart and transitionend
  if (this._config.loop) {
    items.addEventListener('transitionstart', onTransitionStart.bind(this));
    items.addEventListener('transitionend', onTransitionEnd.bind(this));
  }
  // mouseenter and mouseleave
  if (this._config.autoplay) {
    this._root.addEventListener('mouseenter', onMouseEnter.bind(this));
    this._root.addEventListener('mouseleave', onMouseLeave.bind(this));
  }
  // swipe
  if (this._config.swipe) {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function() {
          return supportsPassive = true;
        },
      });
      window.addEventListener('testPassiveListener', null, opts);
    } catch (err) {showAlert(`Error:${err}`);}
    this._root.addEventListener('touchstart', onSwipeStart.bind(this),
      supportsPassive ? {passive: false} : false);
    this._root.addEventListener('touchmove', onSwipeMove.bind(this),
      supportsPassive ? {passive: false} : false);
    this._root.addEventListener('mousedown', onSwipeStart.bind(this));
    this._root.addEventListener('mousemove', onSwipeMove.bind(this));
    document.addEventListener('touchend', onSwipeEnd.bind(this));
    document.addEventListener('mouseup', onSwipeEnd.bind(this));
  }
  this._root.addEventListener('dragstart', onDragStart.bind(this));
  // при изменении активности вкладки
  document.addEventListener('visibilitychange', onVisibilityChange.bind(this));
};

// перейти к следующему слайду
SimpleAdaptiveSlider.prototype.next = function() {
  this._direction = 'next';
  this._move();
};

// перейти к предыдущему слайду
SimpleAdaptiveSlider.prototype.prev = function() {
  this._direction = 'prev';
  this._move();
};

// управление автоматической сменой слайдов
SimpleAdaptiveSlider.prototype.autoplay = function(action) {
  this._autoplay('stop');
};
