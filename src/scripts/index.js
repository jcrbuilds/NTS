// var saveEditBtn = document.getElementById('save-edit-button')

// function saveEdit() {

// }

// Slides Script

var slideIndex = -1;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.height = "0";
    slides[i].style.transition = "opacity 1s ease-out";
    slides[i].style.opacity = "0";
  }

  slideIndex++;
  
  if (slideIndex > 2) {slideIndex = 0}

  if (slideIndex == 0){slides[0].style.height = "0"} 
  else{slides[slideIndex - 1].style.height = "0"}

  slides[slideIndex].style.height = "auto";
  slides[slideIndex].style.opacity = "1";
  
  setTimeout(showSlides, 10000);
}

