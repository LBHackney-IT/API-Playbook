import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech({ children }) {
    const [textToRead, setTextToRead] = useState('');
    const [isHovering, setHovering] = useState(false);
    const [isPaused, setPaused] = useState(false);
    const { speaking, supported } = useSpeechSynthesis();

    useEffect(() => {
        const getNodeText = node => {
            if (['string', 'number'].includes(typeof node)) return node
            if (node instanceof Array) return node.map(getNodeText).join('')
            if (typeof node === 'object' && node) return getNodeText(node.props.children)
        }

        setTextToRead(getNodeText(children));
    }, []);

    const textUtterance = typeof window !== 'undefined' && new SpeechSynthesisUtterance(textToRead)

    const playTextUtterance = () => {
        textUtterance.volume = 1
        textUtterance.rate = 1
        textUtterance.pitch = 1
        if (isPaused) {
            setPaused(false);
            return window.speechSynthesis.resume()
        } 
        else { return window.speechSynthesis.speak(textUtterance) }
    }

    const pauseTextUtterance = () => {
        setPaused(true)
        return window.speechSynthesis.pause()
    }

    const stopTextUtterance = () => {
        setPaused(false)
        return window.speechSynthesis.cancel()
    }

    if (supported && textToRead) {
        return (
            <div>
                <p className="text-to-speech-intro">We have added a new Text-to-Speech feature that allows you to listen to 
                    the content of this page read aloud. Click on 'Listen to this page' to try it out.
                </p>
                <div className={(isHovering || speaking) ? "focussed-section" : undefined}>
                    
                    <button 
                        className="text-to-speech-buttons"
                        onClick={() => playTextUtterance()} 
                        onMouseOver={() => setHovering(true)}
                        onMouseOut={() => setHovering(false)}
                    >
                        Listen to this page
                    </button>
                    <button 
                        className="text-to-speech-buttons"
                        onClick={() => pauseTextUtterance()}
                    >
                        Pause
                    </button>
                    <button 
                        className="text-to-speech-buttons"
                        onClick={() => stopTextUtterance()}
                    >
                        Stop
                    </button>
                    {children}
                </div>
            </div>
        );
    }
    else {
        return (<> </>);
    }
}