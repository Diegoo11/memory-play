import './EndGame.css'
import React from "react";

function EndGame (props) {
    return (
        <div className="endgame">
            <div className='endBox'>
                <div>
                    GAME OVER
                </div>
                <div>
                    Gracias por jugar
                </div>
                <button onClick={props.play} className="play">Play again!</button>
            </div>
        </div>
    )
}

export default EndGame