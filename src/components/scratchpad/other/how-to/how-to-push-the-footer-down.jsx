import React from 'react';

function HowToPushTheFooterDown() {

  return (
    <section className="conspect">
      <h2>Как прибить футер к низу</h2>
      <pre>{`html,
body {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
}`}
      </pre>
    </section>

  );
}
export default HowToPushTheFooterDown;
