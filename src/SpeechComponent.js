import React from "react"

export default function TextToSpeech() {
    
    if ( 'speechSynthesis' in window )
        {
        const textInput = document.querySelector('.markdown').textContent
        var to_speak = new SpeechSynthesisUtterance(textInput);
        // window.speechSynthesis.speak(to_speak);
        }

        
    
    return ( 

        <div>
        <button>Play</button>
        <button>Pause</button>
    </div>
                  
    )
  }

