
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); 
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      alert(`Thank you ${name}, we’ll get back to you shortly!`);
      form.reset();
    });
  }
});


  
  
