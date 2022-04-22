import { ADD_TASK, CHANGE_PASS, CHECK_TASK, DELE_TASK, EDIT_TASK, LOGIN_USER, LOGOUT_USER, UPDATE_TASK } from "../constant"
import server from "../../server"

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



export const login = data => (
    dispatch => (
        server.getUser()
            .then(res => {
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        userDatas: res.data,
                        data,
                    },
                })
            })
            .catch(err => {
                console.log(err);
            })
    )
)

export const logout = () => ({
    type: LOGOUT_USER,
})

export const changePass = data => (
    dispatch => (
        server.getUser()
            .then(res => {
                dispatch({
                    type: CHANGE_PASS,
                    payload: {
                        listDatas: res.data,
                        infoUser: data,
                    },
                })
            })
            .catch(err => {
                console.log(err);
            })
    )
)