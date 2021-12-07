const page = document.querySelector('.page');
console.log(document.querySelector('.theme-button'));
const themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
  console.log('hello!');
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
