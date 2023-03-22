// this will change the bg color of header while scrolling

/*window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.pageYOffset > 0) {
    header.classList.add('bg-red-500');
    header.classList.remove('bg-transparent');
  } else {
    header.classList.add('bg-transparent');
    header.classList.remove('bg-red-500');
  }
});*/




// this will change the bg color of header while scrolling


function scrollFunction() {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;
  
  // Select the header element
  const header = document.getElementById("header");

  // Check if the user has scrolled more than 0 pixels
  if (scrollPosition > 0) {
    // Add the bg-white class to the header
    header.classList.add("bg-white");
  } else {
    // Remove the bg-white class from the header
    header.classList.remove("bg-white");
  }
}

// Execute the scrollFunction on scroll
window.onscroll = function() {
  scrollFunction();
};





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


 
