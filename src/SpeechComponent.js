import React from "react"

export default function TextToSpeech() {
    return ( 
      <div>
    <form>
                    <div className="form-group">
                        <textarea name="" id="text-input" className="form-control form-control-lg" placeholder="Type to see the magic...."></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate">Rate</label>
                        <div id="rate-value" className="badge badge-primary float-right">1</div>
                        <input type="range" id="rate" className="custom-range" min="0.5" max="2" defaultValue="1" step="0.1">
                            </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pitch">Pitch</label>
                        <div id="pitch-value" className="badge badge-primary float-right">1</div>
                        <input type="range" id="pitch" className="custom-range" min="0" max="2" defaultValue="1" step="0.1">
                        </input>
                    </div>
                    <div className="form-group">
                        <select id="voice-select" className="form-control form-control-lg"></select>
                    </div>
                    <button className="btn btn-lite btn-lg btn-block">Speak It Out Loud</button>
                    {console.log(synth)}
                </form>
                  <script src="src/textToSpeech.js"></script>
                  </div>
                  
    )
  }

