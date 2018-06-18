import { fork } from 'redux-saga/effects';

import authSagaWatch from './authSaga'
import currencySagaWatch from './currency'


export default function* () {
    yield fork(authSagaWatch)
    yield fork(currencySagaWatch)
}