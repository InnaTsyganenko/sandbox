<?php
function get_products() {
  return [
    '1' => [
      'title' => 'Подвесная кровать Асусмер',
      'img_url' => 'img/item-asusmer.jpg',
      'price' => 10000,
      'discount' => 1000,
      'is_new' => true,
      'is_last' => false
    ],
    '2' => [
      'title' => 'Кресло Бадета',
      'img_url' => 'img/item-badeta.jpg',
      'price' => 3500,
      'discount' => 0,
      'is_new' => false,
      'is_last' => false
    ],
    '3' => [
      'title' => 'Стикеры Блемпере',
      'img_url' => 'img/item-blempere.jpg',
      'price' => 500,
      'discount' => 0,
      'is_new' => false,
      'is_last' => true
    ],
    '4' => [
      'title' => 'Лампа Блетуб',
      'img_url' => 'img/item-bletub.jpg',
      'price' => 4000,
      'discount' => 0,
      'is_new' => true,
      'is_last' => true
    ],
    '5' => [
      'title' => 'Органайзер Бреирбери',
      'img_url' => 'img/item-breirberi.jpg',
      'price' => 5000,
      'discount' => 3000,
      'is_new' => true,
      'is_last' => true
    ],
    '6' => [
      'title' => 'Лампа Мсеюлида',
      'img_url' => 'img/item-mseyulida.jpg',
      'price' => 4000,
      'discount' => 500,
      'is_new' => true,
      'is_last' => false
    ],
    '7' => [
      'title' => 'Диван Рмаериби',
      'img_url' => 'img/item-rmaeribi.jpg',
      'price' => 15000,
      'discount' => 4500,
      'is_new' => true,
      'is_last' => true
    ],
    '8' => [
      'title' => 'Рабочий стол Ннулм',
      'img_url' => 'img/item-nnulm.jpg',
      'price' => 5000,
      'discount' => 0,
      'is_new' => true,
      'is_last' => false
    ],
    '9' => [
      'title' => 'Набор мебели Тре',
      'img_url' => 'img/item-tre.jpg',
      'price' => 20000,
      'discount' => 3000,
      'is_new' => true,
      'is_last' => true
    ],
    '10' => [
      'title' => 'Люстра как у бабушки',
      'img_url' => 'img/item-default-old-lamp.jpg',
      'price' => 7000,
      'discount' => 2000,
      'is_new' => false,
      'is_last' => true
    ],
    '11' => [
      'title' => 'Лампа Дo',
      'img_url' => 'img/item-do.jpg',
      'price' => 3500,
      'discount' => 500,
      'is_new' => true,
      'is_last' => false
    ],
    '12' => [
      'title' => 'Панно Туета',
      'img_url' => 'img/item-tueta.jpg',
      'price' => 5000,
      'discount' => 20,
      'is_new' => true,
      'is_last' => true
    ],
    '13' => [
      'title' => 'Подушка Нмяо',
      'img_url' => 'img/item-nmyao.jpg',
      'price' => 1500,
      'discount' => 0,
      'is_new' => false,
      'is_last' => false
    ],
    '14' => [
      'title' => 'Лампа Кел',
      'img_url' => 'img/item-kel.jpg',
      'price' => 3000,
      'discount' => 20,
      'is_new' => true,
      'is_last' => false
    ],
    '15' => [
      'title' => 'Подушка Омасе',
      'img_url' => 'img/item-omase.jpg',
      'price' => 2000,
      'discount' => 100,
      'is_new' => true,
      'is_last' => true
    ],
    '16' => [
      'title' => 'Корзина Орму',
      'img_url' => 'img/item-ormu.jpg',
      'price' => 2200,
      'discount' => 20,
      'is_new' => true,
      'is_last' => false
    ],
    '17' => [
      'title' => 'Скрепки Пинас',
      'img_url' => 'img/item-pinas.jpg',
      'price' => 100,
      'discount' => 0,
      'is_new' => true,
      'is_last' => true
    ],
    '18' => [
      'title' => 'Компакт-кассета Преум',
      'img_url' => 'img/item-preum.jpg',
      'price' => 200,
      'discount' => 20,
      'is_new' => true,
      'is_last' => false
    ],
    '19' => [
      'title' => 'Сувенир Рмоб',
      'img_url' => 'img/item-rmob.jpg',
      'price' => 1500,
      'discount' => 20,
      'is_new' => false,
      'is_last' => false
    ],
    '20' => [
      'title' => 'Люстра Ткуоко',
      'img_url' => 'img/item-tkuoko.jpg',
      'price' => 2100,
      'discount' => 1000,
      'is_new' => false,
      'is_last' => false
    ],
    '21' => [
      'title' => 'Органайзер Бреирбери',
      'img_url' => 'img/item-breirberi.jpg',
      'price' => 5000,
      'discount' => 20,
      'is_new' => true,
      'is_last' => false
    ],
    '22' => [
      'title' => 'Кресла Бриатуо',
      'img_url' => 'img/item-briatuo.jpg',
      'price' => 7000,
      'discount' => 5500,
      'is_new' =>  false,
      'is_last' => true
    ]
  ];
}

function get_product_attribute($id, $attr) {
  $products = get_products();
  $result = $products[$id][$attr] ?? null;
  return $result;
}
function get_product_price($id) {
  return get_product_attribute($id, 'price');
}
function get_product_title($id) {
  return get_product_attribute($id, 'title');
}
function get_img_url($id) {
  return get_product_attribute($id, 'img_url');
}
function get_product_discount($id) {
  return get_product_attribute($id, 'discount');
}
function get_product_is_new($id) {
  return get_product_attribute($id, 'is_new');
}
function get_product_is_last($id) {
  return get_product_attribute($id, 'is_last');
}
