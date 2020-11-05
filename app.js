const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

// 

const greetings = [
    "I'm good you little piece of love",
    'Doing good home boi',
    'Go to sleep'
]

const weather = [
    'Weather is fine', 
    'You need a tan'
]
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
        let newColor = transcript2
        console.log(newColor)
        document.body.style.backgroundColor = newColor;
     }

     btn.addEventListener('click', () => {
        recognition.start()
     })

     
     function readOutLoud(message){
         const speech = new SpeechSynthesisUtterance()
         
         speech.text = 'Say that again'

        if(message.includes('how are you')){
            const finalText = greetings[Math.floor(Math.random()* greetings.length)]
            speech.text = finalText
        }
        
        speech.volume = 1
        speech.rate = 1
        speech.pitch = 1
        window.speechSynthesis.speak(speech)
        
     }
     

}catch(e) {

}