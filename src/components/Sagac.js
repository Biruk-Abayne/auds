import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getFetchSuccess,
  postReqSucsses,
  updateSong,
} from "../features/audiosSlice";
import axios from "axios";

function* audFetchfn() {
  const audiosc = yield call(() => axios.get("http://localhost:3001/mzr"));
  const audiojs = yield audiosc.data;
  const audiojsl = audiojs.slice(0, 12);

  yield put(getFetchSuccess(audiojs));
}

function* postAudiofn(action) {
  const response = yield call(() =>
    axios.post("http://localhost:3001/mzr", action.payload)
  );
  const newPayload = {
    id: "12",
    url: "https://api.slingacademy.com/public/sample-photos/17.jpeg",
    mr: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    title: "Pass effect part",
  };
  yield put(postReqSucsses(newPayload));
}

function* updateSongSaga(action) {
  try {
    const { id, url, mr, title } = action.payload;
    const response = yield call(axios.put, `http://localhost:3001/mzr/${id}`, {
      url,
      mr,
      title,
    });
    yield put(updateSong(response.data));
  } catch (error) {
    console.error("Failed to update the song:", error);
  }
}

function* audSaga() {
  yield takeEvery("audios/getFetch", audFetchfn);
  yield takeEvery("audios/postProc", postAudiofn);
  yield takeEvery(updateSong.type, updateSongSaga);
}

export default audSaga;
