const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["¡Hola mi Nushka!", 
                   "Aj school gyi thi?",
		   "Mujhe dikhi nai...",
		  "Aj kuch khas nai hua.. Yrr ID card! bc 🫠 itni badi photo bhi lagi hai uspe.",
		  "In logo ko new pic lene me kya ja rha tha! Itni chutiya photo ayi h meri 😭",
		  "Yeh school wale depression aur stress dene me koi kadar nai chodte!",
		  "Accha suno ek app download krlo, 'Luveri' naam hai",
		  "Code: JvSqaK",
		  "Byee",
		  "I LOVE YOU",];
const typingDelay = 100;
const erasingDelay = 30;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//Stop the typwriting
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    if (textArrayIndex === textArray.length - 1) {
      // Last sentence has been typed, do not start typing again
      return;
    }
    setTimeout(erase, newTextDelay);
  }
}
