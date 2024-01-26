import { ReactNode, useReducer } from "react"
import authReducer from "../reducers/auth-reducer"
import AuthContext from "../contexts/auth-context"

interface Props {
    children: ReactNode
}
function AuthProviders({children}: Props) {
  const [user, dispatch ] = useReducer (authReducer, '')

  return (
    <AuthContext.Provider value={{user, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders