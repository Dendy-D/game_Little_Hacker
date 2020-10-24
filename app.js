
document.addEventListener('mousedown', function (event) {
  event.preventDefault();
});

// const levelsTree = {
//   le
// }

const textPress = document.getElementById('textPress');
const buttonClick = document.getElementById('buttonClick');
const gameStart = document.getElementById('gameStart');

const downloads = document.getElementById('downloads');

// document.addEventListener('DOMContentLoaded', function () {

// })


if (gameStart != null) gameStart.addEventListener('click', function () {
  buttonClick.play();

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

createLink('downloads', 'levels.html');
createLink('level0', 'level0.html');
// createLink('level1', 'level1.html');

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
      level1 = document.getElementById('level1');
      if (level1) level1.classList.remove('disable');
      if (level1) console.log(level1);
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
      console.log(1);
    } else {
      input0.value = '';
      createError();
    }
  })

}


//task for level_1
{

  // const input0

}
