import React from 'react';

function AboutRedux() {

  return (
    <section className="conspect">
      <h1>Redux</h1>
      <p>mapStateToProps() для чтения состояния и mapDispatchToProps() для передачи события.</p>

      <h2>Про payload:</h2>
      <p><b>Payload (полезная нагрузка)</b> - это неофициальное, принятое сообществом ( де-факто ) соглашение об именовании свойства, содержащего фактические данные в объекте действия Redux. Это фактические данные, которые передаются по сети.</p>
      <p></p>
    </section>
  );
}
export default AboutRedux;
