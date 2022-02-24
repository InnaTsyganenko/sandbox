import React from 'react';

function UnnecessaryTypeAttributes() {

  return (
    <div className="add-theory-block">
      <h2>НЕНУЖНЫЕ АТРИБУТЫ TYPE</h2>
      <p>В HTML5 не нужно добавлять атрибут type для элементов &lt;script&gt; и &lt;style&gt;. Нет никакого смысла писать избыточные атрибуты.</p>
      <p>Поскольку все браузеры ожидают, что скриптами будет JavaScript, а стилями CSS, вам это совсем не нужно:</p>
      <pre>{`<!-- Не копируйте этот код! Он неправильный! -->
<link type="text/css" rel="stylesheet" href="styles.css">
<script type="text/javascript" src="scripts"></script>

Вместо этого просто напишите:
<link rel="stylesheet" href="styles.css">
<script src="scripts"></script>`}
      </pre>
    </div>
  );
}

export default UnnecessaryTypeAttributes;
