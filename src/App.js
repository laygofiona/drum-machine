import './App.css';
import { useState, useEffect } from 'react';

const drumPadCollection = [
  {
    key: "Q",
    id: "Heater 1",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "W",
    id: "Heater 2",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    key: "E",
    id: "Heater 3",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    key: "A",
    id: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    key: "S",
    id: "Clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "D",
    id: "Open HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "Z",
    id: "Kick n' hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "X",
    id: "Kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "C",
    id: "Closed HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]


const DrumPadElement = (props) => {

  const playAudio = () => {
    props.setCurrentDrumPadFunc(props.givenID);
    document.getElementById(props.givenIDKey).play();
  }
  
  return(
    <div className='col-4'>
      <button onClick={playAudio} className='drum-pad btn btn-light' id={props.givenID} style={{width: 90, height: 85}}>
        <audio src={props.givenIDSRC} className='clip' id={props.givenIDKey}></audio>
        {props.givenIDKey}
      </button>
    </div>
  )
}

const DrumPad = (props) => {

  const mapOverDrumPad = (starting, last) => {
    let arr = [];
    for(let i = starting; i <= last; i++) {
      arr.push(<DrumPadElement setCurrentDrumPadFunc={props.drumPadFunc} givenID={drumPadCollection[i].id} givenIDKey={drumPadCollection[i].key} givenIDSRC={drumPadCollection[i].source} />);
    }
    return arr;
  }
  
  return (
    <div className='container rounded border border-1' style={{backgroundColor: '#1f1e1e', height: '100%'}}>
      <div className="row pt-4 px-2">
        {mapOverDrumPad(0, 2)}
      </div>
      <div className='row pt-4 px-2'>
        {mapOverDrumPad(3, 5)}
      </div>
      <div className='row pt-4 px-2'>
        {mapOverDrumPad(6, 8)}
      </div>
    </div>
  )
}

const Controls = (props) => {
  const [volume, setVolume] = useState(80);

  const changeVolume = (event) => {
    setVolume(event.target.value);
  };

  useEffect(() => {
    for (let i = 0; i < props.currentDrumPadKey.length; i ++) {
      props.currentDrumPadKey[i].volume = volume/100;
      console.log(volume);
    }
  }, [volume])

  return (
    <div id="display" className='d-flex align-items-center flex-column justify-content-center'>
      <div className='shadow p-2 mb-3 border rounded w-100' style={{backgroundColor: '#858383'}}>
        <h4 className='text-center'>{props.currentDrumPadTxt}</h4>
      </div>
      <div className='p-1 rounded border border-2 shadow p-3 mb-5'style={{backgroundColor: '#1f1e1e'}}>
        <input type="range" id="volume-control" min="0" max="100" value={volume} onChange={changeVolume} className="form-range"/>
      </div>
    </div>
  )
}

const App = () => {
  const [currentDrumPad, setCurrentDrumPad] = useState("");

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      let id = event.key.toLocaleUpperCase();
      if(id === 'Q' || id === 'W' || id === 'E' || id === 'A' || id === 'S' || id === 'D' || id === 'Z' || id === 'X' || id === 'C'){
        setCurrentDrumPad(document.getElementById(id).parentElement.getAttribute("id"));
        document.getElementById(id).play();
      } 
    })
  }, [])


  return (
    <div className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
      <div id="drum-machine" className='container-fluid border border-3 rounded' style={{width: 600, height: 350, backgroundColor: '#383535'}}>
        <div className='row' style={{height: '100%'}}>
          <div className='col-8'>
            <DrumPad drumPadFunc={setCurrentDrumPad}/>
          </div>
          <div className='col-4 d-flex align-items-center justify-content-center'>
            <Controls currentDrumPadTxt={currentDrumPad} currentDrumPadKey={document.getElementsByTagName("audio")}/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
