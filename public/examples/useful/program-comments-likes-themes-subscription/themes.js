const page = document.querySelector('.page');
const themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
