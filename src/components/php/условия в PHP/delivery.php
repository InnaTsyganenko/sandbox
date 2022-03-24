<?php
require('products_db.php');
require('components/header.php');

$id = $_GET['product_id'];
$title = get_product_title($id);
$img_url = get_img_url($id);
$price = get_product_price($id);
$discount = get_product_discount($id);
$is_new = get_product_is_new($id);
$final_price = $price;

if ($discount > 0) {
  $final_price = $price - $discount;
}

if ($is_new && $final_price < 2000) {
  $delivery_cost = $final_price;
} else {
  $delivery_cost = $final_price / 20;
}


require('components/delivery_info.php');
require('components/footer.php');