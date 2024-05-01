import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../features/statusSlice";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    status: statusReducer,
    middleware: [saga],
  },
});
