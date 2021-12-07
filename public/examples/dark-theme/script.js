const checkbox = document.getElementById('themer');
const invertor = document.getElementById('inverter');

checkbox.addEventListener('change', function () {
  // Triggers repaint in most browsers:
  invertor.setAttribute('media', this.checked ? 'screen' : 'none');
  // Forces repaint in Chrome:
  invertor.textContent = invertor.textContent.trim();
});
