var $buttons = document.createElement('p'),
      $button = document.createElement('button'),
      $play = $button.cloneNode(),
      $pause = $button.cloneNode(),
      paused = false,
      to_speak;
	
	if ( 'speechSynthesis' in window ) {

    window.addEventListener('beforeunload',function(){ window.speechSynthesis.cancel(); });
    
	  // content to speak
    to_speak = new SpeechSynthesisUtterance(
      document.querySelector('.markdown').textContent
    );
    
    // set the rate a little faster than 1x
    to_speak.rate = 1;
	
    // Event Handlers
    function play() {
      if ( paused ) {
        paused = false;
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.speak( to_speak );
      }
    }
    function pause() {
      paused = true;
      window.speechSynthesis.pause();
    }
    
    // Play Button
    $play.innerText = 'Play';
    $play.addEventListener( 'click', play, false );
    $buttons.appendChild( $play );
    
    // Pause Button
    $pause.innerText = 'Pause';
    $pause.addEventListener( 'click', pause, false );
	  $buttons.appendChild( $pause );

	} else {
	  
	  // Sad panda
	  $buttons.innerText = 'Unfortunately your browser doesn’t support this feature.';
	  
	}

	document.body.appendChild( $buttons );