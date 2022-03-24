<?php
require('products_db.php');
require('components/header.php');

$id = $_GET['product_id'];
$title = get_product_title($id);
$img_url = get_img_url($id);
$price = 10000;
$discount = 5000;
$is_new = true;
$is_last = true;
$product_class = 'item';

if ($discount > 0) {
  $price_with_discount = $price - $discount ;
}

if ($is_new) {
  $product_class = $product_class . ' item-new';
}

if ($discount > 1400 || $is_last) {
  $product_class = $product_class . ' item-hot';
};

require('components/product_info.php');
require('components/footer.php');