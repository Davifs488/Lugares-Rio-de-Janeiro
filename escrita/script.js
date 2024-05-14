document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Sejam",
    "Bem Vidos",
    "Ao meu site !",
    "Sou um desenvolvedor ",
    "Web Javascript",
    "Você podes me contratar",
  ];
  let index = 0;
  let currentWord = "";
  let letterIndex = 0;
  const typingEffectElement = document.getElementById("typing-effect");

  function type() {
    if (index < words.length) {
      if (letterIndex < words[index].length) {
        currentWord += words[index].charAt(letterIndex);
        typingEffectElement.innerText = currentWord;
        letterIndex++;
        setTimeout(type, 200); // Adjust typing speed here
      } else {
        typingEffectElement.innerText = currentWord;
        currentWord = "";
        letterIndex = 0;
        index++;
        setTimeout(type, 2000); // Adjust delay between words here
      }
    } else {
      index = 0;
      setTimeout(type, 0); // Restart typing loop
    }
  }

  type();
});
