import React, { useState } from 'react'
import './App.css';

function App() {
    let [counter, setCounter] = useState(0);
    const increment=()=>{
        setCounter(++counter);
    }
    const decrement=()=>{
        setCounter(--counter);
    }
    return (
        <div className={"wrap"}>
            <h2>{counter}</h2>
            <div className="buttons">
                <div>
                    <button onClick={increment}>Inc</button>
                </div>
                <div>
                    <button onClick={decrement}>Dec</button>
                </div>
            </div>
        </div>

    );
}
export default App;
