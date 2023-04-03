const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hi Nushka! yar mera time table follow nai ho paya, matlab lag bhag ho paya...", 
                   "Lekin koi na first day tha! Dhire dhire consistency ban jayegi.", 
                   "Aur yeh website??", 
                   "Me yeh bakchodi din bhar karta hu to socha kuch esa sa bana du....", 
                   "Vese ", 
                   "TUM KITNI PYAARI HO 😍!! man karta hai bas tumhe hi dekhta rahu, kitni cute si ho XD", 
                   "ACCHA mere ghar ane ka jugad kar lena us din ese hi bol diya tha 'plan cancel' huh? 😒 Mujhse milna nai chahti rude nai to!",
                   "Aur shayad tumko chehra dikha du...", 
                   "Pata nai mera batsurat sa chehra dekh ke kya milega tumhe",
                   "School me jid karna shayad dikha du varna ghar ana padega OKE",  
                   "Mujhe intejar hai ki hum log kab ek sath rahenge, tumhe apne se ek pal ke liye bhi dur nai jane dunga! GALAT LADKE SE PALA PADA HAI.", 
                   "Bas.... humari health!", 
                   "Bas vo na dhokha de, kaheki ee doctor ki dawai kam nai kar rhi mereko aur checkups aur tests karane hai lekin mom dad nai manenge uske liye.", 
                   "tumhare bhi parents mahan hi hai 😩... tumko bhi doctor ko dikhane me procarsitnate karne lag jate h", 
                   "chalo depressing bate ho gyi, mere khyaal se meri tabiyat is 'OKE'", 
                   "Aur ek chij kehena tha ", 
                   "I LOVE YOU"];
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
