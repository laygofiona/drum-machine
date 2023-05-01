window.addEventListener('keydown', (event) => {
    switch(event.key){
      case 'q':
        playAudio('Heater1', 'Q');
        break;
      case 'w':
        playAudio('Heater2', 'W');
        break;
      case 'e':
        playAudio('Heater3', 'E');
        break; 
      case 'a':
        playAudio('Heater4', 'A');
        break;
      case 's':
        playAudio('Clap', 'S');
        break;
      case 'd':
        playAudio('Open-HH', 'D');
        break;
      case 'z':
        playAudio("Kick-n'-hat", "Z");
        break;
      case 'x':
        playAudio("Kick", "X");
        break;
      case 'c':
        playAudio("Closed-HH", 'C');
        break;
      default:
        console.log("key out of range");
    }
  })

  {/*<div className="row p-2">
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Heater1" givenIDKey="Q" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Heater2" givenIDKey="W" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Heater3" givenIDKey="E" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
      </div>
      <div className='row p-2'>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Heater4" givenIDKey="A" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Clap" givenIDKey="S" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Open-HH" givenIDKey="D" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
      </div>
      <div className='row p-2'>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Kick-n'-Hat" givenIDKey="Z" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Kick" givenIDKey="X" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
        <DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID="Closed-HH" givenIDKey="C" givenIDSRC="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
      </div>*/}

      currentDrumPadKe={document.getElementsByTagName("audio")}
      {console.log(document.getElementsByTagName("audio"))}  