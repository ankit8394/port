const typingText = document.getElementById('typing-text');
const sentences = ["Front-End Developer.","Web Developer.","UI/UX Designer."];
let index = 0;
let currentSentence = 0;
let isTypingForward = true;

function typeText() {
  const sentence = sentences[currentSentence];
  if (isTypingForward) {
    typingText.innerHTML = sentence.substring(0, index++) + "<span style='color:#fff;ma-left:-10px; font-weight: 700;'>|</span>";
    if (index > sentence.length + 1) {
      isTypingForward = false;
      setTimeout(typeText, 500);
    } else {
      setTimeout(typeText, 90);
    }
  } else {
    typingText.innerHTML = sentence.substring(0, index--) + "<span style='color:#fff;padding-left:-10px; font-weight: 700;'>|</span>";
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
$(document).ready(function(){
  $("#mobile").click(function(){
    $(".menu").toggle(1500);
  });
});