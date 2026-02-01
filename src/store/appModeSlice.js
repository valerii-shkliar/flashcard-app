import { createSlice } from '@reduxjs/toolkit';
import { MODE } from '../constants/data';

const initialState = {
  activeMode: MODE.STUDY,
};

const appModeSlice = createSlice({
  name: 'app-mode',
  initialState,
  reducers: {
    setActiveMode: (state, { payload }) => {
      state.activeMode = payload;
    },
  },
});

export const { setActiveMode } = appModeSlice.actions;
export default appModeSlice.reducer;

export const getActiveMode = function (state) {
  return state.appMode.activeMode;
};
