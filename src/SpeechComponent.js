import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech({ children }) {
    const [textToRead, setTextToRead] = useState('');
    const [isHovering, setHovering] = useState(false);
    const [isPaused, setPaused] = useState(false);
    const { speak, cancel, speaking, supported } = useSpeechSynthesis();

    useEffect(() => {
        const getNodeText = node => {
            if (['string', 'number'].includes(typeof node)) return node
            if (node instanceof Array) return node.map(getNodeText).join('')
            if (typeof node === 'object' && node) return getNodeText(node.props.children)
        }

        setTextToRead(getNodeText(children));
    }, []);

    const testText = new SpeechSynthesisUtterance(textToRead)

    // function play() {
    //     if ( paused ) {
    //       paused = false;
    //       window.speechSynthesis.resume();
    //     } else {
    //       window.speechSynthesis.speak( to_speak );
    //     }
    //   }
    //   function pause() {
    //     paused = true;
    //     window.speechSynthesis.pause();
    //   }

    const playTest = () => {
        console.log(typeof(textToRead))
        console.log(typeof(testText))
        testText.volume = 1
        testText.rate = 1
        testText.pitch = 1
        console.log(testText)
        console.log(isPaused)
        if (isPaused) {
            setPaused(false);
            return window.speechSynthesis.resume()
        } 
        else { return window.speechSynthesis.speak(testText) }
    }

    const pauseTest = () => {
        console.log(isPaused)
        setPaused(true)
        console.log(isPaused)
        return window.speechSynthesis.pause()
    }

    if (supported && textToRead) {
        return (
            <div className={(isHovering || speaking) ? "focussed-section" : undefined}>
                <button 
                    className="text-to-speech-buttons"
                    onClick={() => playTest()} 
                    onMouseOver={() => setHovering(true)}
                    onMouseOut={() => setHovering(false)}
                >
                    Listen to this section
                </button>
                <button 
                    className="text-to-speech-buttons"
                    onClick={() => pauseTest()}
                >
                    Pause
                </button>
                {/* <button 
                    className="text-to-speech-buttons"
                    onClick={cancel}
                >
                    Cancel
                </button> */}
                {children}
            </div>
        );
    }
    else {
        return (<> </>);
    }
}