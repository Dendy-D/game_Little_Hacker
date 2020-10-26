document.addEventListener('DOMContentLoaded', function () {
  class Parent {
    constructor(value) {
      this.value = value;
    }
  }
  let password = new Parent('df5r84h282hhd');

  const hiddenPassword = document.getElementById('hiddenPassword');
  Object.setPrototypeOf(hiddenPassword, password);
});