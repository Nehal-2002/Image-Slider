import './App.css';
import Images from './components/images'
import { useState } from 'react';

function decIdx(setIndex,idx){
  if(idx===0){
    setIndex(2)
    return
  }
  setIndex(idx-1)
}

function incIdx(setIndex,idx){
  if(idx===2){
    setIndex(0)
    return
  }
  setIndex(idx+1)
}

function App() {
  const[imgIdx,setIdx] = useState(0);
  return (
    <div className="image-slider">
      <button className="right-button" onClick={()=> decIdx(setIdx,imgIdx)}><span>&lt;</span></button>
      <Images imageIndex={imgIdx}/>
      <button className="left-button" onClick={()=> incIdx(setIdx,imgIdx)}><span>&gt;</span></button>
    </div>
  );
}
export default App;

// onClick={incIdx(imgIdx)}