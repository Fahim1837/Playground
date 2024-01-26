import { useContext } from "react"
import AuthContext from "../contexts/auth-context"

 function LoginStatus() {
    const {user, dispatch} = useContext(AuthContext)    
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