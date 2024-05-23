import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const audSlice = createSlice({
  name: "audios",
  initialState: {
    isLoading: false,
    audios: [],
    currentSongUrl:
      "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",

    currentSongImg: "",
    currentSong: {},
    bwidth: 0,
    currentSongTime: 0,
    isPlaying: false,

    currentSongIndex: 1,
  },
  reducers: {
    getFetch: (state) => {
      state.isLoading = true;
    },
    setCurrentSongTime: (state, action) => {
      state.currentSongTime = action.payload;
    },

    setAudios: (state, action) => {
      state.audios = action.payload;
    },
    letsSkipnex: (state, action) => {
      state.skipnex = action.payload;
    },

    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    setSkipNext: (state, action) => {
      state.currentSongIndex =
        (state.currentSongIndex + 1) % state.audios.length;
    },
    setSkipBack: (state, action) => {
      state.currentSongIndex =
        (state.currentSongIndex - 1) % state.audios.length;
    },
    setbwidth: (state, action) => {
      state.bwidth = action.payload;
    },
    setCurrentSongUrl: (state, action) => {
      state.currentSongUrl = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.audios = action.payload;
    },

    getFetchSuccess: (state, action) => {
      state.audios = action.payload;
    },
    getFetchError: (state) => {
      state.isLoading = false;
    },
    setCurrentSongImg: (state, action) => {
      state.currentSongImg = action.payload;
    },
    postProc: (state) => {
      state.isLoading = true;
    },
    postReqSucsses: (state, action) => {
      state.audios.push({ ...action.payload });
      state.isLoading = false;
    },
    letCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    updateSong: (state, action) => {
      state.audios = state.audios.map((song) => {
        if (song.id === action.payload.id) {
          return {
            ...song,
            mr: action.payload.mr,
            url: action.payload.url,
            title: action.payload.title,
          };
        }
        return song;
      });
    },
  },
});
export const {
  updateSong,
  letCurrentSong,
  setIsPlaying,
  postAudio,
  getFetch,
  getFetchSuccess,
  setCurrentSongImg,
  getFetchError,
  setSkipNext,
  setCurrentSongIndex,
  setCurrentSongUrl,
  letsSkipnex,
  setSkipBack,
  setAudios,
  postReqSucsses,
  setbwidth,
  postProc,
  setCurrentSongTime,
} = audSlice.actions;

export default audSlice.reducer;
