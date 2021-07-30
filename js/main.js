(() => {
  const button = document.querySelector('#burgerbutton'),
        burgercon = document.querySelector('#burgercontainer'),
        quantity = document.querySelectorAll('.forminput');

  function showmenu() {
    button.classList.toggle("expanded");
    burgercon.classList.toggle("slideToggle");
  }

  function up(max) {
    quantity.value = parseInt(quantity.value) + 1;
    if (quantity.value >= parseInt(max)) {
        quantity.value = max;
    }
}
function down(min) {
    quantity.value = parseInt(quantity.value) - 1;
    if (quantity.value <= parseInt(min)) {
        quantity.value = min;
    }
}

  button.addEventListener("click", showmenu);
})();
