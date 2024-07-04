import React from "react"
import "./trucoCounter.css"

type TrucoCounterProps = {
  name: string;
};

const TrucoCounter = (props: TrucoCounterProps) => {
    const [playerPoints, setPlayerPoints] = React.useState(0)
    const [counter, setCounter] = React.useState(0)

    const handleButtonIncrement = (value: number) => {
        setCounter(counter + value)
        if (counter + value >= 12) {
            alert(`Time ${props.name} Ganhou!`)
            setCounter(0)
            setPlayerPoints(playerPoints + 1)
        }
    }

    const handleButtonDecrement = (value: number) => {
        setCounter(counter - value)
        if (counter - value <= 0) {
            setCounter(0)
        }
    }
    return (
        <div className="container">
            <div className="player-info">
                <h1>Time {props.name}: {playerPoints}</h1>
                <h1>Pontos: {counter}</h1>
            </div>
            <div className="button-increment">
                <button onClick={() => handleButtonIncrement(1)}>+1</button>
                <button onClick={() => handleButtonIncrement(3)}>+3</button>
            </div>
            <div className="button-decrement">
                <button onClick={() => handleButtonDecrement(1)}>-1</button>
                <button onClick={() => handleButtonDecrement(3)}>-3</button>
            </div>
            <div className="button-reset">
                <button onClick={() => setPlayerPoints(0)}>Resetar Total</button>
            </div>
        </div>
    )
}

export { TrucoCounter }