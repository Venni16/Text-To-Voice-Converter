let text = document.getElementById("text")
let voicebtn = document.getElementById("speechbtn")

function TextToSpeech(txt){
    let speech = new SpeechSynthesisUtterance(txt)

    speechSynthesis.speak(speech)
}

voicebtn.addEventListener("click",()=>{
    if(text.value !==""){
        TextToSpeech(text.value);
    }
})