document.addEventListener('DOMContentLoaded', function () {

  const mainMenu = document.getElementById('mainMenu');
  
  let windowHeight = document.documentElement.clientHeight;
  let windowWidth = document.documentElement.clientWidth;

  mainMenu.style.top = windowHeight / 2 + 'px';
  mainMenu.style.left = windowWidth / 2 + 'px';

  window.addEventListener('resize', function () {
    let windowHeight = document.documentElement.clientHeight;
    let windowWidth = document.documentElement.clientWidth;

    mainMenu.style.top = windowHeight / 2 + 'px';
    mainMenu.style.left = windowWidth / 2 + 'px';
  });

  mainMenu.addEventListener('click', function () {
    let a = document.createElement('a');
    a.href = 'main.html';
    a.click();
  });


  if (localStorage.getItem('field_1') == 1) {
    const level1 = document.getElementById('level1');
    if (level1.classList.contains('disable')) level1.classList.remove('disable');
    level1.addEventListener('click', function () {
      let a = document.createElement('a');
      a.href = 'level1.html';
      a.click();
    });
  }

  if (localStorage.getItem('field_2') == 1) {
    const level2 = document.getElementById('level2');
    if (level2.classList.contains('disable')) level2.classList.remove('disable');
    level2.addEventListener('click', function () {
      let a = document.createElement('a');
      a.href = 'level2.html';
      a.click();
    });
  }

  if (localStorage.getItem('field_3') == 1) {
    const level3 = document.getElementById('level3');
    if (level3.classList.contains('disable')) level3.classList.remove('disable');
    level3.addEventListener('click', function () {
      let a = document.createElement('a');
      a.href = 'level3.html';
      a.click();
    });
  }

  if (localStorage.getItem('field_4') == 1) {
    const level4 = document.getElementById('level4');
    if (level4.classList.contains('disable')) level4.classList.remove('disable');
    level4.addEventListener('click', function () {
      let a = document.createElement('a');
      a.href = 'level4.html';
      a.click();
    });
  }

  if (localStorage.getItem('field_5') == 1) {
    const level5 = document.getElementById('level5');
    if (level5.classList.contains('disable')) level5.classList.remove('disable');
    level5.addEventListener('click', function () {
      let a = document.createElement('a');
      a.href = 'level5.html';
      a.click();
    });
  }
});