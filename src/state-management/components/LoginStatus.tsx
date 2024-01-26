import useAuth from "../hooks/useAuth"

 function LoginStatus() {
    const {user, dispatch} = useAuth () 
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