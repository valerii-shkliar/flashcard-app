import { createSlice } from '@reduxjs/toolkit';
import { STUDY_MODE } from '../constants/data';

const initialState = {
  activeMode: STUDY_MODE,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setActiveMode: (state, { payload }) => {
      state.activeMode = payload;
    },
  },
});

export const { setActiveMode } = mainSlice.actions;
export default mainSlice.reducer;

export const getActiveMode = function (state) {
  return state.main.activeMode;
};
