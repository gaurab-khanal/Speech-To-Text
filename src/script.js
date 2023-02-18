let text = document.getElementById('text');
let text_value = text.value;
let mic = document.getElementById('mic');
let p = document.querySelector('p');

//Set a new SpeechRecognition Object/ Initilize
let sp = window.webkitSpeechRecognition || window.speechRecognition;
let spRec = new sp();
spRec.continuous = true;
spRec.interimResult = true;





//Speech To Text Starts


// Set language of speech Recognition
spRec.lang = 'en-US';


// When mouse is clicked::
mic.addEventListener('mousedown',(event)=>{
    p.innerHTML= "Listeining...";
    spRec.start();
});

spRec.onresult = res =>{
  let Text = Array.from(res.results).map(r=>r[0]).map(txt=>txt.transcript).join("");
  text.innerHTML = Text;
}


//When mouse is up::
mic.addEventListener('mouseup',()=>{
  p.innerHTML = "Hi"
  spRec.stop();
  text_value = text.value;
})

// Speech To Text Ends



