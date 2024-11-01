const typingText = document.getElementById('typing-text');
const sentences = ["Front-End Developer.","Web Developer.","UI/UX Designer."];
let index = 0;
let currentSentence = 0;
let isTypingForward = true;

function typeText() {
  const sentence = sentences[currentSentence];
  if (isTypingForward) {
    typingText.innerHTML = sentence.substring(0, index++) + "<span>|</span>";
    if (index > sentence.length + 1) {
      isTypingForward = false;
      setTimeout(typeText, 500);
    } else {
      setTimeout(typeText, 90);
    }
  } else {
    typingText.innerHTML = sentence.substring(0, index--) + "<span>|</span>";
    if (index === -1) {
      currentSentence = (currentSentence + 1) % sentences.length;
      isTypingForward = true;
      setTimeout(typeText, 500);
    } else {
      setTimeout(typeText, 90);
    }
  }
}
typeText();

//navbar
$(document).ready(function() {
  // Toggle menu and change icon when the menu button is clicked
  $("#mobile").click(function() {
      $(".menu").toggle(1000); // Toggle menu visibility

      // Toggle icon between 'fa-bars' and 'fa-x'
      let icon = $("#menu-icon");
      if (icon.hasClass("fa-bars")) {
          icon.removeClass("fa-bars").addClass("fa-x");
      } else {
          icon.removeClass("fa-x").addClass("fa-bars");
      }
  });

  // Hide menu when a menu link is clicked (only on small screens)
  $(".menu a").click(function() {
      if ($(window).width() <= 426) {
          $(".menu").hide(1000);
          // Reset icon to 'fa-bars' after closing the menu
          $("#menu-icon").removeClass("fa-x").addClass("fa-bars");
      }
  });
});

// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Initialize ScrollReveal with basic settings
  ScrollReveal({
    distance: "50px",
    duration: 2000,
    delay: 200,
  });

  // Reveal elements based on their origin
  ScrollReveal().reveal(" #name h1, #name h3, #typing-text, .resume", { origin: "left" });
  ScrollReveal().reveal(".intro, .social-media", { origin: "bottom", interval: 200 });

  ScrollReveal().reveal("#about h1, #about-box2", { origin: "right" });
  ScrollReveal().reveal(".about-img", { origin: "left" });

  ScrollReveal().reveal("#skills h1", { origin: "top" });
  ScrollReveal().reveal(".div-img", { origin: "bottom", interval: 100 });

  ScrollReveal().reveal("#projects h1", { origin: "top" });
  ScrollReveal().reveal(".projects-box", { origin: "bottom", interval: 200 });

  ScrollReveal().reveal(".contact h1", { origin: "top" });
  ScrollReveal().reveal(".social-media, .contact-form", { origin: "bottom", interval: 200 });

  
});

