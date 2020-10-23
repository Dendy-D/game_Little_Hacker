document.addEventListener('mousedown', function (event) {
  event.preventDefault();
});

const textPress = document.getElementById('textPress');
const buttonClick = document.getElementById('buttonClick');
const gameStart = document.getElementById('gameStart');


if (gameStart != null) gameStart.addEventListener('click', function () {
  buttonClick.play();

  setTimeout(() => {
    document.getElementById('wrap').hidden = true;

    document.getElementById('filter').hidden = false;
    document.getElementById('welcomeText').hidden = false;

    const typed = new Typed('#welcomeTextCon', {
      typeSpeed: 57,
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
    }, 63000);

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
createLink('level1', 'level1.html');

// task for level_1
const input1 = document.getElementById('input_level_1');
input1.focus();

const password = 'dgh425d637';

input1.addEventListener('keydown', function (event) {
  if (event.code != "Enter") return;

  if (input1.value == password) {
    input1.value = '';
  } else {
    input1.value = '';
    createError();
  }
})

function createError() {
  let div = document.createElement('div');
  div.classList.add('Error');
  div.innerHTML = 'Данные не корректны';
  document.body.append(div);
  setTimeout(() => div.remove(), 3000);
}