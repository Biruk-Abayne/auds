import { call, put, takeEvery } from "redux-saga/effects";
import { getFetchSuccess } from "../features/audiosSlice";

function* audFetchfn() {
  const audiosc = yield call(() => fetch("http://localhost:3001/mzr"));
  const audiojs = yield audiosc.json();
  const audiojssl = audiojs.slice(0, 12);
  yield put(getFetchSuccess(audiojssl));
}
function* audSaga() {
  yield takeEvery("audios/getFetch", audFetchfn);
}
export default audSaga;
