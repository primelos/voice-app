const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

try{
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
     const recognition = new SpeechRecognition()

     recognition.onstart = function(){
        console.log('voice is activated, you can speak to microphoneee');
     }
     recognition.onresult = function(e){
        // console.log(e);
        const current = e.resultIndex
        const transcript2 = e.results[current][0].transcript
        content.textContent = transcript2
        readOutLoud(transcript2)
     }

     btn.addEventListener('click', () => {
        recognition.start()
     })

     
     function readOutLoud(message){
        const speech = new SpeechSynthesisUtterance()
        speech.text =message
        speech.volume = 1
        speech.rate = 2
        speech.pitch = 2
        window.speechSynthesis.speak(speech)
     }
}catch(e) {

}