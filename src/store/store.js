import { configureStore } from '@reduxjs/toolkit';
import appModeReducer from './appModeSlice';
import flashCardsReducer from './flashCardsSlice';

const store = configureStore({
  reducer: {
    appMode: appModeReducer,
    flashCards: flashCardsReducer,
  },
});

export default store;
