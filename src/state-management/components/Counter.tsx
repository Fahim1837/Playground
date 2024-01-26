import { useReducer } from "react"
import counterReducer from "../reducers/counter-reducer"

function Counter() {
    const [value, dispatch] = useReducer (counterReducer, 0) 
    return (
        <>
            <h1 className="m-4">Counter: {value}</h1>
            <button className="btn btn-primary mx-2" onClick={() => dispatch({type: 'INCREMENT'})}>Count Up</button>
            <button className="btn btn-primary" onClick={() => dispatch({type: 'RESET'})}>Reset </button>
        </>
        )
}

export default Counter