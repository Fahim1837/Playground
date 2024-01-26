import { useReducer } from "react"
import loginReducer from "../reducers/login-reducer"

 function LoginStatus() {
    const [user, dispatch ] = useReducer (loginReducer, '')
    
    if (user)
    return (
        <>
        <p>{user}</p>
        <a href="#" onClick={() => dispatch({type:'OUT'})}>Logout</a>
        </>
    )
    else
    return (
        
        <a href="#" onClick={() => dispatch({type:'IN', username:'Fahim Ahmed'} )}>Login</a>
)
}
export default LoginStatus