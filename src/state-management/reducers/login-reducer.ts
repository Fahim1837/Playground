interface LoginAction {
    type: 'IN'
    username: string
}

interface LogoutAction {
    type: 'OUT'
}

type Action = LoginAction | LogoutAction

const loginReducer = (state: string, action: Action) => {
    switch (action.type) {
        case 'IN':  return state = action.username
        case 'OUT': return state = ''
        return state
    }
}

export default loginReducer