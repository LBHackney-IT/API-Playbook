// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector(".markdown");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");
const body = document.querySelector("body");

// Init voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  // Loop through voices and create an option for each one
  voices.forEach(voice => {
    // Create option element
    const option = document.createElement("option");
    // Fill option with voice and language
    option.textContent = voice.name + "(" + voice.lang + ")";

    // Set needed option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//Speech function
const speak = () => {
  //Check if allready speaking
  if (synth.speaking) {
    console.error("Already speaking...");
    return;
  }

  //Check if the textarea is not empty
  if (textInput.value !== "") {
    //Add background image when speaking
    body.style.background = "#141414 url(img/wave.gif)";
    body.style.backgroundRepeat = "repeat-x";
    body.style.backgroundSize = "100% 100%";

    //Get the text to speak
    const speakText = new SpeechSynthesisUtterance(textInput.value);
    //Speak end
    speakText.onend = e => {
      console.log("Done speaking");
      body.style.background = "#141414";
    };
    //Speak error
    speakText.onerror = e => {
      console.log("Something went wrong");
    };
    //Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      "data-name"
    );
    //Loop through voice
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    //set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    //Speak
    synth.speak(speakText);
  }
};

//Event Listener
//submitting the text form
textForm.addEventListener("submit", e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

//changing the rate value change
rate.addEventListener("change", e => (rateValue.textContent = rate.value));

//changing the pitch value change
pitch.addEventListener("change", e => (pitchValue.textContent = pitch.value));

//voice select change
voiceSelect.addEventListener("change", e => speak());