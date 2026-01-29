import { createSelector, createSlice } from '@reduxjs/toolkit';
import { MAX_PROGRESS_FOR_CARD } from '../constants/data';

const initialState = {
  cards: [],
  filteredAreas: [],
  isMasteredHide: false,
};

const flashCardsSlice = createSlice({
  name: 'flash-cards',
  initialState,
  reducers: {
    saveCards: (state, { payload }) => {
      state.cards = payload;
    },
    filterCards: (state, { payload }) => {
      if (state.filteredAreas.includes(payload)) {
        const indexArea = state.filteredAreas.indexOf(payload);

        state.filteredAreas.splice(indexArea, 1);
      } else {
        state.filteredAreas.push(payload);
      }
    },
    hideMastered: (state) => {
      state.isMasteredHide = !state.isMasteredHide;
    },
  },
});

export const { saveCards, filterCards, hideMastered } = flashCardsSlice.actions;
export default flashCardsSlice.reducer;

export const isCheckedArea = function (area) {
  return (state) => {
    return state.flashCards.filteredAreas.includes(area);
  };
};
export const isMasteredHide = function (state) {
  return state.flashCards.isMasteredHide;
};

export const getVisibleCards = createSelector(
  [
    (state) => state.flashCards.cards,
    (state) => state.flashCards.filteredAreas,
    (state) => state.flashCards.isMasteredHide,
  ],
  (cards, areas, isHide) => {
    return cards.filter((card) => {
      const areaOk = areas.length === 0 || areas.includes(card.area);
      const masteredOk = !isHide || card.progress !== MAX_PROGRESS_FOR_CARD;

      return areaOk && masteredOk;
    });
  },
);
