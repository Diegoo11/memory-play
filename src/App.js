import React, { useState, useEffect, memo } from "react";
import uniqid from "uniqid";
import img1 from "./img/img1.webp"
import img2 from "./img/img2.webp"
import img3 from "./img/img3.png"
import img4 from "./img/img4.jpeg"
import img5 from "./img/img5.png"
import img6 from "./img/img6.webp"
import img7 from "./img/img7.png"
import img8 from "./img/img8.png"
import img9 from "./img/img9.webp"
import img10 from "./img/img10.png"
import img11 from "./img/img11.png"
import img12 from "./img/img12.png"
import img13 from "./img/img13.png"
import img14 from "./img/img14.png"
import img15 from "./img/img15.png"
import img16 from "./img/img16.png"
import img17 from "./img/img17.png"
import img18 from "./img/img18.png"
import img19 from "./img/img19.png"
import img20 from "./img/img20.png"
import img21 from "./img/img21.png"
import './App.css'
import EndGame from "./EndGame";


function App(props) {
  const [cards, setCards] = useState({
    poke: [
      {
        number: 1,
        key: uniqid(),
        src: img1,
        cursor: false
      },
      {
        number: 2,
        key: uniqid(),
        src: img2,
        cursor: false
      },
      {
        number: 3,
        key: uniqid(),
        src: img3,
        cursor: false
      },
      {
        number: 4,
        key: uniqid(),
        src: img4,
        cursor: false
      },
      {
        number: 5,
        key: uniqid(),
        src: img5,
        cursor: false
      },{
        number: 6,
        key: uniqid(),
        src: img6,
        cursor: false
      },{
        number: 7,
        key: uniqid(),
        src: img7,
        cursor: false
      },{
        number: 8,
        key: uniqid(),
        src: img8,
        cursor: false
      },{
        number: 9,
        key: uniqid(),
        src: img9,
        cursor: false
      },{
        number: 10,
        key: uniqid(),
        src: img10,
        cursor: false
      },{
        number: 11,
        key: uniqid(),
        src: img11,
        cursor: false
      },{
        number: 12,
        key: uniqid(),
        src: img12,
        cursor: false
      },{
        number: 13,
        key: uniqid(),
        src: img13,
        cursor: false
      },{
        number: 14,
        key: uniqid(),
        src: img14,
        cursor: false
      },{
        number: 15,
        key: uniqid(),
        src: img15,
        cursor: false
      },{
        number: 16,
        key: uniqid(),
        src: img16,
        cursor: false
      },{
        number: 17,
        key: uniqid(),
        src: img17,
        cursor: false
      },{
        number: 18,
        key: uniqid(),
        src: img18,
        cursor: false
      },{
        number: 19,
        key: uniqid(),
        src: img19,
        cursor: false
      },{
        number: 20,
        key: uniqid(),
        src: img20,
        cursor: false
      },{
        number: 21,
        key: uniqid(),
        src: img21,
        cursor: false
      },
    ],
    puntuje: 0,
  })

  const [memory, setMemory] = useState([])

  const [max, setmax] = useState(0)

  const [visible, setvisible] = useState(false)

  useEffect(() => {

  })

  const divClick = (e) => {
    console.log(e.nativeEvent.srcElement.id)
    shuffleArray()
    incremented()
    if(!(memory.some((y) => y === e.nativeEvent.srcElement.id))){
      addMemory(e.nativeEvent.srcElement.id)
    } else {
      alert('perdiste '+ cards.puntuje)
      reset()
    }
  }

  const shuffleArray = () => {
    const shuffleAfter = cards.poke.sort(() => Math.random()-0.5)
    setCards({poke: shuffleAfter, puntuje: cards.puntuje})
  }

  const incremented = () => {
    console.log('incremented')
    setCards({puntuje: cards.puntuje + 1, poke: cards.poke})
  }

  const addMemory = (z) => {
    setMemory(memory.concat([z]))
    console.log(memory)
  }

  const reset = () => {
    if(max<cards.puntuje){
      setmax(cards.puntuje)
    }
    setCards({puntuje: 0, poke: cards.poke})
    setMemory([])
    setvisible(true)
  }

  const play = () => {
    setvisible(false)
  }


  return(
    <>
      <div id="x">
        {cards.poke.map((x) => {
          return <button key={x.key} className="card" onClick={divClick}><img src={x.src} id={x.key}/></button>
        })}
      </div>
      <div className="score">
        <span> Puntaje: {cards.puntuje} </span><br/>
        <span> Puntaje-max: {max}</span>
      </div>
      {visible && <EndGame play={play}/>}
    </>
  )
}

export default App;
