import { createAction } from "redux-actions";

export const GET_TODOS_ASYNC = "GET_TODOS_ASYNC";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const getTodosAsync = createAction(GET_TODOS_ASYNC);
export const receiveTodos = createAction(RECEIVE_TODOS, (todos) => ({todos: todos}) );
