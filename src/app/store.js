import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../features/statusSlice";
import audiosReducer from "../features/audiosSlice";

import createSagaMiddleware from "redux-saga";
import audSaga from "../components/Sagac";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    status: statusReducer,
    audios: audiosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(audSaga);
