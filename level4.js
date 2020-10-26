document.addEventListener('DOMContentLoaded', function () {
  const inputLevel4 = document.getElementById('input_level_4');
  const password = document.getElementById('password');

  inputLevel4.addEventListener('keydown', function firstClick() {
    inputLevel4.value += '4cb4cxb4';
  });

  document.oncontextmenu = function () { return false };

});