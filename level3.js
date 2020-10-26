document.addEventListener('DOMContentLoaded', function () {
  const inputLevel3 = document.getElementById('input_level_3');
  setInterval(() => {
    inputLevel3.setAttribute('disabled', 'disabled')
  }, 1);

});