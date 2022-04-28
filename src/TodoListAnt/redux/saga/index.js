import { all } from 'redux-saga/effects';
import { watchChangePass, watchLogin } from './saga';

export default function* rootSaga() {
    yield all([watchLogin(),
               watchChangePass(),]);
}