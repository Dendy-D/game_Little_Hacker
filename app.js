
document.addEventListener('mousedown', function (event) {
  event.preventDefault();
});


const textPress = document.getElementById('textPress');
const buttonClick = document.getElementById('buttonClick');
const gameStart = document.getElementById('gameStart');
const levels = document.getElementById('downloads');
const information = document.getElementById('information');

const downloads = document.getElementById('downloads');

window.addEventListener('load', function () {
  if (downloads != null) downloads.addEventListener('click', function () {
    buttonClick.play();
    setInterval(() => {
      let a = document.createElement('a');
      a.href = 'levels.html';
      a.click();
    }, 500);
  });

  if (information != null) information.addEventListener('click', function () {
    buttonClick.play();
    setInterval(() => {
      let a = document.createElement('a');
      a.href = 'information.html';
      a.click();
    }, 500);
  });
});

if (gameStart != null) gameStart.addEventListener('click', function () {
  buttonClick.play();

  localStorage.setItem('field_1', 0);
  localStorage.setItem('field_2', 0);
  localStorage.setItem('field_3', 0);
  localStorage.setItem('field_4', 0);
  localStorage.setItem('field_5', 0);

  setTimeout(() => {
    document.getElementById('wrap').hidden = true;

    document.getElementById('filter').hidden = false;
    document.getElementById('welcomeText').hidden = false;

    const typed = new Typed('#welcomeTextCon', {
      typeSpeed: 58,
      // startDelay: 1000,
      strings: [`Где тебя носит Твою Ма..`, `Приветствую тебя агент.
    Я слышал, что ты неплохо разбираешься в WEb-разработке. Мне нужна твоя помощь.
    Кратко посвящу тебя в курс дела. Я буду давать тебе задания. Ты должен будешь
    искать уязвимости в системе. И любой ценой обходить всю защиту которая там стоит.
    Когда ты выполнишь одно из заданий, тебе сразу же будет доступно следующее.
    Сначала задания будут не очень сложные, но с каждым уровнем они будут сложнее и сложнее.
    В конечном счете, чтоб пройти на следующий уровень, тебе придется неслабо попотеть.
    Я думаю что ты справишься. Ну если честно выбора у тебя особо и нет. Первое тестовое
    задание я тебе уже прислал`],
    });

    textPress.play();


    setTimeout(() => {
      textPress.pause();
      document.getElementById('welcomeTextCon').innerHTML = '';
      document.getElementById('filter').hidden = true;
      document.getElementById('welcomeText').hidden = true;

      let a = document.createElement('a');
      a.href = 'levels.html';
      a.click();
    }, 64000);

  }, 500);

});

const createLink = (id, href) => {
  const elem = document.getElementById(id);
  if (elem != null) elem.addEventListener('click', function () {
    let a = document.createElement('a');
    a.href = href;
    a.click();
  });
};

createLink('level0', 'level0.html');


const menu_icon = document.getElementById('menu_icon');
if (menu_icon) menu_icon.addEventListener('click', function () {
  let a = document.createElement('a');
  a.href = 'levels.html';
  a.click();
})

function createError() {
  let div = document.createElement('div');
  div.classList.add('Error');
  div.innerHTML = 'Данные не корректны';
  document.body.append(div);
  setTimeout(() => div.remove(), 3000);
  let errorVoice = document.getElementById('error');
  errorVoice.play();
}

function createCompliment() {
  let div = document.createElement('div');
  div.classList.add('Correct');
  div.innerHTML = `Успешный ввод пароля. Доступ на ресурс открыт`;
  document.body.append(div);
  setTimeout(() => div.remove(), 7000);
  let correct = document.getElementById('correct');
  correct.play();
}

// task for level_0
{
  const input0 = document.getElementById('input_level_0');
  if (input0) input0.focus();

  const password = 'dgh425d637';

  if (input0) input0.addEventListener('keydown', function (event) {
    if (event.code != "Enter") return;

    if (input0.value == password) {
      localStorage.setItem('field_0', 1);
      createCompliment();
      input0.value = '';
      const arrowRight = document.getElementById('arrowRight');
      arrowRight.hidden = false;
      arrowRight.addEventListener('click', function () {
        let nextLevel = document.getElementById('nextLevel');
        nextLevel.play();
        setTimeout(() => {
          let a = document.createElement('a');
          a.href = 'level1.html';
          a.click();
        }, 1000);
      });
    } else {
      input0.value = '';
      createError();
    }
  });

}


//task for level_1
{

  const input1 = document.getElementById('input_level_1');
  if (input1) input1.focus();
  if (input1) input1.onclick = () => input1.focus();

  if (input1) input1.addEventListener('keydown', function (event) {
    if (event.code != "Enter") return;

    if (input1.value == 'dhpo4h3849sv') {
      localStorage.setItem('field_1', 1);
      createCompliment();
      input1.value = '';
      const arrowRight = document.getElementById('arrowRight');
      arrowRight.hidden = false;
      arrowRight.addEventListener('click', function () {
        let nextLevel = document.getElementById('nextLevel');
        nextLevel.play();
        setTimeout(() => {
          let a = document.createElement('a');
          a.href = 'level2.html';
          a.click();
        }, 1000);
      });
    } else {
      input1.value = '';
      createError();
    }
  });

}

//task for level_2
{

  const input2 = document.getElementById('input_level_2');
  if (input2) input2.focus();
  // if (input2) input2.onclick = () => input2.focus();

  if (input2) input2.addEventListener('keydown', function (event) {
    if (event.code != "Enter") return;

    if (input2.value == 'df5r84h282hhd') {
      localStorage.setItem('field_2', 1);
      createCompliment();
      input2.value = '';
      const arrowRight = document.getElementById('arrowRight');
      arrowRight.hidden = false;
      arrowRight.addEventListener('click', function () {
        let nextLevel = document.getElementById('nextLevel');
        nextLevel.play();
        setTimeout(() => {
          let a = document.createElement('a');
          a.href = 'level3.html';
          a.click();
        }, 1000);
      });
    } else {
      input2.value = '';
      createError();
    }
  });

}

//task for level_3
{

  const input3 = document.getElementById('input_level_3');
  if (input3) input3.focus();
  // if (input2) input2.onclick = () => input2.focus();

  if (input3) input3.addEventListener('keydown', function (event) {
    if (event.code != "Enter") return;

    if (input3.value == 'jlk606saf3hcs') {
      localStorage.setItem('field_3', 1);
      createCompliment();
      input3.value = '';
      const arrowRight = document.getElementById('arrowRight');
      arrowRight.hidden = false;
      arrowRight.addEventListener('click', function () {
        let nextLevel = document.getElementById('nextLevel');
        nextLevel.play();
        setTimeout(() => {
          let a = document.createElement('a');
          a.href = 'level4.html';
          a.click();
        }, 1000);
      });
    } else {
      input3.value = '';
      createError();
    }
  });

}

//task for level_4
{

  const input4 = document.getElementById('input_level_4');
  if (input4) input4.focus();
  // if (input2) input2.onclick = () => input2.focus();

  if (input4) input4.addEventListener('keydown', function (event) {
    if (event.code != "Enter") return;

    if (input4.value == 'yotiy8304045x3c3') {
      localStorage.setItem('field_4', 1);
      createCompliment();
      input4.value = '';
      const arrowRight = document.getElementById('arrowRight');
      arrowRight.hidden = false;
      arrowRight.addEventListener('click', function () {
        let nextLevel = document.getElementById('nextLevel');
        nextLevel.play();
        setTimeout(() => {
          let a = document.createElement('a');
          a.href = 'level5.html';
          a.click();
        }, 1000);
      });
    } else {
      input4.value = '';
      createError();
    }
  });

}

//task for level_5
{

  const input5 = document.getElementById('input_level_5');
  if (input5) input5.focus();
  // if (input2) input2.onclick = () => input2.focus();

  if (input5) input5.addEventListener('keydown', function (event) {
    if (event.code != "Enter") return;

    if (input5.value == '333') {
      localStorage.setItem('field_5', 1);
      createCompliment();
      input5.value = '';
      const arrowRight = document.getElementById('arrowRight');
      arrowRight.hidden = false;
      arrowRight.addEventListener('click', function () {
        let nextLevel = document.getElementById('nextLevel');
        nextLevel.play();
        setTimeout(() => {
          let a = document.createElement('a');
          a.href = 'level6.html';
          a.click();
        }, 1000);
      });
    } else {
      input5.value = '';
      createError();
    }
  });

}