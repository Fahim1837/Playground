import useAuthStore from "../stores/auth-store"

 function LoginStatus() {
    const {user, login, logout} = useAuthStore() 
    if (user)
    return (
        <>
        <p>{user}</p>
        <a href="#" onClick={() => logout()}>Logout</a>
        </>
    )
    else
    return (
        
        <a href="#" onClick={() => login('Fahim Ahmed')}>Login</a>
)
}
export default LoginStatus