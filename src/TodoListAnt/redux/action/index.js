import { ADD_TASK, CHANGE_PASS, CHECK_TASK, DELE_TASK, EDIT_TASK, LOGIN_USER, LOGOUT_USER, SPINNING, UPDATE_TASK, WATCH_CHANGE_PASS, WATCH_LOGIN } from "../constant"

//Basic action
export const spinning = payload => ({
    type: SPINNING,
    payload,
})


export const addTask = payload => ({
    type: ADD_TASK,
    payload,
})

export const checkedTask = payload => ({
    type: CHECK_TASK,
    payload,
})

export const deleTask = payload => ({
    type: DELE_TASK,
    payload,
})

export const editTask = payload => ({
    type: EDIT_TASK,
    payload,
})

export const updateTask = payload => ({
    type: UPDATE_TASK,
    payload,
})





//call api action
export const login = payload => ({
    type: LOGIN_USER,
    payload
})

export const logout = () => ({
    type: LOGOUT_USER,
})

export const changePass = payload => ({
    type: CHANGE_PASS,
    payload
})




//saga action
export const loginSaga = data => ({
    type: WATCH_LOGIN,
    data,
})

export const changePassSaga = data => ({
    type: WATCH_CHANGE_PASS,
    data,
})