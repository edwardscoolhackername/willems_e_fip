(() => {
  const button = document.querySelector('#burgerbutton'),
        burgercon = document.querySelector('#burgercontainer'),
        quantity = document.querySelectorAll('.forminput'),
        overlaybox = document.querySelector('.beeroverlay'),
        overlayimage = document.querySelector('.overlaypic'),
        overlaylabel = document.querySelector('.overlaylabel'),
        overlaydes = document.querySelector('.beerdescrip'),
        close = document.querySelector('.closebutton'),
        beerpic = document.querySelectorAll('.beerlink'),
        shoplinks = document.querySelectorAll('.shopclick'),
        shopbox = document.querySelector('.shopoverlay'),
        shoplabel = document.querySelector('.shopoverlaylabel'),
        shopdescrip = document.querySelector('.shopoverlaydescrip');

  const send = document.querySelector('.sendbutton'),
        okay = document.querySelector('.okay'),
        okaybox = document.querySelector('.thanksbox');


  const beerdata = [
    [`original`, `Original Formula Powder`, `The perfect blend of spices and a light cereal grain that come together to provide a fresh easy drinking ale. Its subtle signature fragrance of oak and musk will leave your entire body feeling refreshed.`],
    [`tingle`, `Tingle Formula Powder`, `Often referred to as “air conditioning for the soul”, Bálla’s Tingle Formula is known for its distinctly light flavour, refreshing aroma, and special pale colour. This light beer’s cool tingle feeling is guaranteed to start your evening with smooth, well-balanced flavour.`],
    [`fragrance`, `Fragrance-Free Formula Powder`, `Crafted with the finest ingredients that leave your entire body feeling fresh and comfortable in a method that reduces the alcohol but not the flavour. A delicate balance of crisp spices and herb notes in the freshest of non-alcoholic beers.`],
    [`spray`, `Original Formula Spray`, `The perfect blend of subtle spices and herb notes delivered in a light spray that leaves you feeling fresh, comfortable, and smelling great.`]
  ];


  function saythanks() {
    okaybox.classList.remove('hidden');
  }
  function sayokay() {
    okaybox.classList.add('hidden');
  }

  function showmenu() {
    button.classList.toggle("expanded");
    burgercon.classList.toggle("slideToggle");
  }
// https://codepen.io/NinaLena/pen/jmqwxb for quantity tutorial //
// haven't gotten it to work though //
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

  function toggleoverlay() {
    let targetbeer = this.dataset.beer;

    overlaybox.classList.add('thereitis');
    beerinfo(targetbeer);
  }
  function beerinfo(targetIndex) {
    overlayimage.src = `images/${beerdata[targetIndex][0]}_500.jpg`;
    overlaylabel.textContent = beerdata[targetIndex][1];
    overlaydes.textContent = beerdata[targetIndex][2];
  }
  function closebox() {
    overlaybox.classList.remove('thereitis');
  }

  function shopopen() {
    let targetbeer = this.dataset.beer;

    shopbox.classList.remove('hidden');
    shopinfo(targetbeer);
  }
  function shopinfo(targetIndex) {
    shoplabel.textContent = beerdata[targetIndex][1];
    shopdescrip.textContent = beerdata[targetIndex][2];
  }
  function closeshop() {
    shopbox.classList.add('hidden');
  }

  button.addEventListener("click", showmenu);
  beerpic.forEach(pic => pic.addEventListener("click", toggleoverlay));
  send.addEventListener("click", saythanks);
  okay.addEventListener("click", sayokay);
  close.addEventListener("click", closebox);
  shoplinks.forEach(link => link.addEventListener("click", shopopen));
  close.addEventListener("click", closeshop);

})();
