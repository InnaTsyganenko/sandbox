<section class="brands">
  <div class="container">
    <h2 class="brands-title">Представляем продукцию <b>мировых</b> брендов</h2>
    <ul class="brands-list">
      <?php $brands = ['ehm', 'cubic', 'tehnodom', 'dg'];
        foreach($brands as $value): ?>
        <li class="brands-<?= $value ?>"></li>
      <?php endforeach; ?>
    </ul>
  </div>
</section>

<section class="features">
  <div class="container">
    <h2 class="features-title">Что <b>выделяет</b> нас среди конкурентов?</h2>
    <ul class="features-list">
      <li class="feature-unique">Уникальные товары не&nbsp;имеют аналогов</li>
      <li class="feature-organic">Используем только природные материалы</li>
      <li class="feature-protected">Устойчивы к кошачьим зубам и когтям</li>
    </ul>
  </div>
</section>
