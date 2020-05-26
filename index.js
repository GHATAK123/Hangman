const wordE1=document.getElementById("word");
const wrongLettersE1=document.getElementById("wrong-letters");
const playAgainBtn=document.getElementById("plat-button");
const popup=document.getElementById("popup-container");
const notification=document.getElementById("notification-container");
const finalMessage=document.getElementById("final-message");
const finalMessageRevealWord=document.getElementById("final-message-reveal-word");

const figureParts=document.querySelectorAll(".figure-part");
const words=["application","programming","interface","wizard"];

let selectedWord=words[Math.floor(Math.random()*words.length)];

let playable=true;

const correctLetters=[];
const wrongLetters=[];

function displayWord() {
  wordE1.innerHTML=`
   ${selectedWord.split('').map(letter=> {
     return `<span class="letter">
     ${correctLetters.includes(letter)?letter:''}
     </span>`
   }).join('')}
  `;

  const innerWord=wordE1.innerText.replace(/[\n]/g,'');
  if(innerWord===selectedWord)
  {
    finalMessage.innerText="Congratulation ! you Won! ";
    popup.style.display="flex";
    playable=false;


  }
  

}

// add event Listener for key press
window.addEventListener('keydown',e=>{
  if(playable){
    if(e.keyCode>=65 && e.keyCode<=90)
    {
      const letter=e.key.toLowerCase();
      if(selectedWord.includes(letter))
      {
        if(!correctLetters.includes(letter))
        {
          correctLetters.push(letter);
          displayWord();
        }
        else{
          showNotification();
        }


      }

    }
  }
});

displayWord();

