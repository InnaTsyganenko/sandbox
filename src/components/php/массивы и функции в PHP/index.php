<?php
require('products_db.php');

$products = get_products();

function sort_by_price($product_1, $product_2) {
  if ($product_1['price'] > $product_2['price']) {
    $result = 1;
  }

  if ($product_1['price'] < $product_2['price']) {
    $result = -1;
  }

  if ($product_1['price'] === $product_2['price']) {
    $result = 0;
  }

  return $result;
}

uasort($products, 'sort_by_price');
$cheap_products = array_slice($products, 0, 5, true);

function filter_new($product) {
  return $product['is_new'];
}

$new_products = array_filter($products, 'filter_new');
$promo_products = $cheap_products + $new_products;
$random_ids = array_rand($promo_products, 3);
shuffle($random_ids);
// Добавьте код сюда

require('components/header.php');
require('components/promo.php');
require('components/company_info.php');
require('components/footer.php');
