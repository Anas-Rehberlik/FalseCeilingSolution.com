

// to create image slide show in about us section

const images = [
  'images/About1.jpg',
  'images/About2.jpg',
  'images/About3.jpg',
  'images/About4.jpg',
  'images/About5.jpg'
];       //even if we dont use this array than still slideshow will work because the image link is given in html 

let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.addEventListener('DOMContentLoaded', (event) => {
  showSlides();

  const imagesElements = document.querySelectorAll('.slideshow-img');
  for (let i = 0; i < imagesElements.length; i++) {
    imagesElements[i].src = images[i];
  }
});


 
// document.addEventListener("DOMContentLoaded", function() {
//   // your JavaScript code goes here
// });



// for dropdown menu

// for menu icon toggle

// to remove menu when user click on navigation like hime , about us, etc

document.addEventListener("DOMContentLoaded", function() {
  // your JavaScript code goes here
  const button = document.querySelector('[data-collapse-toggle]');
  const menu = document.querySelector('#mobile-menu-2');
  const navLinks = document.querySelectorAll('#mobile-menu-2 a');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  button.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      button.setAttribute('aria-expanded', 'false');
      menu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
});

