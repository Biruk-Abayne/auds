import { createSlice } from "@reduxjs/toolkit";

const audSlice = createSlice({
  name: "audios",
  initialState: {
    isLoading: false,
    audios: [],
  },
  reducers: {
    getFetch: (state) => {
      state.isLoading = true;
    },
    getFetchSuccess: (state, action) => {
      state.audios = action.payload;
    },
    getFetchError: (state) => {
      state.isLoading = false;
    },
  },
});
export const { getFetch, getFetchSuccess, getFetchError } = audSlice.actions;

export default audSlice.reducer;
