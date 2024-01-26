import { Dispatch } from "react"
import { AuthAction } from "../reducers/auth-reducer"
import React from "react"

interface AuthContexttype {
    user: string
    dispatch: Dispatch <AuthAction>
}

const AuthContext = React.createContext({} as AuthContexttype)

export default AuthContext