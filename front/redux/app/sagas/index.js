import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import {
    GET_TODOS_ASYNC,
    receiveTodos
} from "../actions";
import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3000";

export function fetchTodosApi() {
  return fetch(API_URL + '/todos')
           .then(response => response.json() );
}

export function* getTodosAsync() {
  const todos = yield call(fetchTodosApi);
  yield put( receiveTodos(todos) );
}

export default function* rootSaga() {
  yield* takeEvery(GET_TODOS_ASYNC, getTodosAsync);
}

