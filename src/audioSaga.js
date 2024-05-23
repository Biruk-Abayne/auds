import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getaudiosSuccess } from "./audioState";
function* AudioFetching() {
  const audioss = yield call(() =>
    fetch(
      "https://api.slingacademy.com/v1/sample-data/users?offset=10&limit=20"
    )
  );
  const formattedAudios = yield audioss.json();
  const formattedslice = formattedAudios.slice(0, 10);
  yield put(getaudiosSuccess(formattedslice));
}

function* audioSaga() {
  yield takeEvery("audios/getaudiosFetch", AudioFetching);
}
export default audioSaga;
