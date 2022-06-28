import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech({ children }) {
    const [textToRead, setTextToRead] = useState('');
    const [isHovering, setHovering] = useState(false);
    const { speak, cancel, speaking, supported } = useSpeechSynthesis();

    useEffect(() => {
        const getNodeText = node => {
            if (['string', 'number'].includes(typeof node)) return node
            if (node instanceof Array) return node.map(getNodeText).join('')
            if (typeof node === 'object' && node) return getNodeText(node.props.children)
        }

        setTextToRead(getNodeText(children));
    }, []);

    if (supported && textToRead) {
        return (
            <div class={(isHovering || speaking) && "focussed-section"}>
                <button 
                    class="text-to-speech-buttons"
                    onClick={() => speak({ text: textToRead })} 
                    onMouseOver={() => setHovering(true)}
                    onMouseOut={() => setHovering(false)}
                >
                    Listen to this section
                </button>
                <button 
                    class="text-to-speech-buttons"
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