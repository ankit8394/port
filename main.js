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


//for animation of content load
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".container-fluid");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
                  observer.unobserve(entry.target); // Stop observing once shown
              }
          });
      },
      {
          threshold: 0.1, // Trigger when 10% of the element is visible
      }
  );

  containers.forEach((container) => observer.observe(container));
});

//for redirect on homepage
