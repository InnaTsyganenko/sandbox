const filterValueToScale = {
  'smallest': 0.25,
  'small': 0.5,
  'normal': 1,
  'big': 1.5,
};

const form = document.querySelector('#picture-scale');
const pic = document.querySelector('img');

// Чтобы понять как задать размер картинки,
// не нужно писать много условий, достаточно
// обратиться к словарю и прочитать оттуда
// какой масштаб соответствует выбранному фильтру

form.onchange = () => {
  const value = filterValueToScale[form['scale'].value];
  pic.style.transform = `scale(${value})`;
};
