import { takeEvery, put } from 'redux-saga/effects';
import { WATCH_CHANGE_PASS, WATCH_LOGIN } from '../constant';
import { changePass, login, spinning } from '../action';
import server from '../../server';

function* loginUser(action) {
    var datas;

    yield put(spinning(true))

    yield server.getUser()
                .then(res => {
                    datas = res.data;
                })
                .catch(err => {
                    console.log(err);
                })
    yield put(login({
        userDatas: datas,
        data: action.data,
    }))

    yield put(spinning(false))

}

function* changePassUser(action) {
    var changePassData;

    yield put(spinning(true))

    yield server.getUser()
                .then(res => {
                    changePassData = res.data;
                })
                .catch(err => {
                    console.log(err);
                })

    yield put(changePass({
        listDatas: changePassData,
        infoUser: action.data,
    }))

    yield put(spinning(false))
}

export function* watchLogin() {
    yield takeEvery(WATCH_LOGIN, loginUser);
}

export function* watchChangePass() {
    yield takeEvery(WATCH_CHANGE_PASS, changePassUser)
}