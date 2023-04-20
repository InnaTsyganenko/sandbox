const onButtonClick = (username) => {
  return (evt) => {
    alert('Hello, ' + username);
    /*
    ECMAscript 2015 добавил ещё 1 кавычки - {}, здесь происходит обращение к переменной. Можно сделать и так и это будет одинаково:
    // console.log('Hello, ${username}');
    */
  }
}

const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', onButtonClick('Nika'));

/*

*/