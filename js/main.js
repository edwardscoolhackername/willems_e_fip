(() => {
  const button = document.querySelector('#burgerbutton'),
        burgercon = document.querySelector('#burgercontainer');

  function showmenu() {
    button.classList.toggle("expanded");
    burgercon.classList.toggle("slideToggle");
  }


  button.addEventListener("click", showmenu);
})();
