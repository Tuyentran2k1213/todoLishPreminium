import { ADD_TASK, CHECK_TASK, DELE_TASK, EDIT_TASK, UPDATE_TASK, LOGIN_USER, LOGOUT_USER, CHANGE_PASS } from "../constant";
import localUser from '../../LocalUser';
import { message, Modal } from 'antd';
import server from "../../server";

const initialState = {
    tasks: [
        {
            title: 'task 1',
            content: 'gfdsgsrgfsd',
            done: false,
            time: '2022-04-20 10:59:16',
        },
        {
            title: 'task 2',
            content: 'lorem isulum hdjfbs',
            done: false,
            time: '2022-04-20 10:59:16'
        },
        {
            title: 'task 3',
            content: 'gfdsgsdsadfsdfsdrgfsd',
            done: true,
            time: '2022-04-20 10:59:16',
        },
        {
            title: 'task 4',
            content: 'gfdsgfdsfsdfsrgfsd',
            done: true,
            time: '2022-04-20 10:59:16',
        },
    ],
    chooseTask: null,
    userLog: localUser.getUser(),
}

const taskReducer = (state=initialState, action) => {
    var newState;

    switch(action.type){
        case ADD_TASK:
            if(state.userLog){
                newState = {...state, tasks: [...state.tasks, action.payload]};
                message.success('Complete add add');
            } else {
                Modal.error({
                    title: `Can't Add !!!`,
                    content: `You must be login to use this function`,
                })
                newState = { ...state }
            }
            break;
        case CHECK_TASK:
            if(state.userLog){
                const newTask = state.tasks;
            newTask[action.payload].done = true;
            newState = {...state, tasks: [...newTask]};
            message.success('Task checked');
            } else {
                Modal.error({
                    title: `Can't Check !!!`,
                    content: `You must be login to use this function`,
                })
                newState = { ...state }
            }
            break;
        case DELE_TASK:
            if(state.userLog){
                const newTasks = state.tasks;
            newTasks.splice(action.payload, 1);
            newState = {...state, tasks: [...newTasks]};
            message.success('Already deleted task');
            } else {
                Modal.error({
                    title: `Can't Delete !!!`,
                    content: `You must be login to use this function`,
                })
                newState = { ...state }
            }
            break;
        case EDIT_TASK:
            if(state.userLog){
                const taskEdit = {...state.tasks[action.payload]};
                newState = {...state, chooseTask: {...taskEdit}};
            } else {
                Modal.error({
                    title: `Can't edit !!!`,
                    content: `You must be login to use this function`,
                })
                newState = { ...state }
            }
            break;
        case UPDATE_TASK:
                const theTasks = [...state.tasks];
                const theTask = theTasks.findIndex(task => {
                return (
                    task.title === state.chooseTask.title && task.content === state.chooseTask.content && task.done === state.chooseTask.done && task.time === state.chooseTask.time
                )
            });
            theTasks[theTask] = {...theTasks[theTask], ...action.payload};
            newState = {...state, tasks: [...theTasks], chooseTask: null,};
            message.success('Update successful');  
            break;
        case LOGIN_USER:
            const { userDatas, data } = action.payload;
            console.log(userDatas);
            console.log(data);

            const user = userDatas.filter(userData => (
                userData.password === data.password && userData.account === data.account
            ));

            if(user.length === 0){
                alert('Your password or your user account maybe wrong, please try again')
                newState = { ...state };
            } else {
                localUser.setUser(user[0]);
                newState = { ...state, userLog: user[0] };
            }
            break;
        case LOGOUT_USER:
            localUser.removeUser();
            newState = { ...state, userLog: null };
            break;
        case CHANGE_PASS:
            const { listDatas, infoUser } = action.payload;
            const changeMail = listDatas.find(list => infoUser.email === list.email);
            if(changeMail){
                server.changeUser(changeMail.id, {...changeMail, password: infoUser.password})
                .then(res => {
                    message.success('Password changed');
                })
                .catch(err => {
                    console.log(err);
                    message.success(`Can't change your password`);
                })
            } else {
                message.error(`Can't find your account`);
            }
                newState = { ...state };
            break;
        default:
            newState = { ...state };
    }
    return newState;
}

export default taskReducer;