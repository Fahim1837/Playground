interface LoginAction {
    type: 'IN'
    username: string
}

interface LogoutAction {
    type: 'OUT'
}

export type AuthAction = LoginAction | LogoutAction

const authReducer = (state: string, action: AuthAction) => {
    switch (action.type) {
        case 'IN':  return state = action.username
        case 'OUT': return state = ''
    }
}

export default authReducer