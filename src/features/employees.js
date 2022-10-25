//import { selectUser, selectAuthToken } from "../utils/selectors";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const employeesAdd = createAction("employees/add");

export const addEmployee = (store, payload) => {
  store.dispatch(employeesAdd(payload));
  return true;
};

export default createReducer(initialState, (builder) =>
  builder.addCase(employeesAdd, (draft, action) => {
    draft.list.push({ ...action.payload, id: draft.list.length });
    return;
  })
);
