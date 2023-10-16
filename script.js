const btn = document.querySelector('.button');
const star = document.querySelector('.fa-star');
const clickCountDisplay = document.querySelector('#click-count');
let clickCount = 0; // inicializace počtu kliknutí

btn.addEventListener('click', () => {
  star.classList.replace('fa-regular', 'fa-solid');
  clickCount++; // zvýšení počtu kliknutí o 1
  clickCountDisplay.innerText = clickCount; // aktualizace zobrazeného textu
});

/* // univerzální funkce pro přepínání tříd
function toggleClass(element, classToToggle, toggleToClass) {
  if (element.classList.contains(classToToggle)) {
    element.classList.remove(classToToggle);
    element.classList.add(toggleToClass);
  } else {
    element.classList.remove(toggleToClass);
    element.classList.add(classToToggle);
  }
}

// použití fukce na tlačítko hvězdy pouze pro vypnutí/zapnutí
btn.addEventListener('click', () => {
  toggleClass(star, 'fa-regular', 'fa-solid');
}); */
