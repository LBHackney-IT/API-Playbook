import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech({ children }) {
    const [textToRead, setTextToRead] = useState('');
    const [isHovering, setHovering] = useState(false);
    const { speak, cancel, speaking, supported } = useSpeechSynthesis();
    let paused = false;

    useEffect(() => {
        const getNodeText = node => {
            if (['string', 'number'].includes(typeof node)) return node
            if (node instanceof Array) return node.map(getNodeText).join('')
            if (typeof node === 'object' && node) return getNodeText(node.props.children)
        }

        setTextToRead(getNodeText(children));
    }, []);

    const testText = new SpeechSynthesisUtterance('testing this nonsense stuff')

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
        
        testText.volume = 1
        testText.rate = 1
        testText.pitch = 1
        console.log(testText)
        if (paused) {
            paused = false
            return window.speechSynthesis.resume()
        } else { return window.speechSynthesis.speak(testText) }
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
                {/* <button 
                    className="text-to-speech-buttons"
                    onClick={window.speechSynthesis.pause()}
                >
                    Pause
                </button> */}
                <button 
                    className="text-to-speech-buttons"
                    onClick={cancel}
                >
                    Cancel
                </button>
                {children}
            </div>
        );
    }
    else {
        return (<> </>);
    }
}