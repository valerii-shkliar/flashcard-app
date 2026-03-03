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
    createCard: (state, { payload }) => {
      state.cards.unshift(payload);
    },

    updateCard: (state, { payload }) => {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (payload.id === card.id) {
            return {
              ...card,
              ...payload,
            };
          }
          return card;
        }),
      };
    },
    deleteCard: (state, { payload }) => {
      state.cards = state.cards.filter((card) => {
        return card.id !== payload;
      });
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

    shuffleCards: (state) => {
      const arr = state.cards;

      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    },
  },
});

export const {
  saveCards,
  filterCards,
  hideMastered,
  createCard,
  deleteCard,
  updateCard,
  shuffleCards,
} = flashCardsSlice.actions;
export default flashCardsSlice.reducer;

export const getAmountCards = function (state) {
  return state.flashCards.cards.length;
};

export const getAmountMasteredCards = function (state) {
  return state.flashCards.cards.filter((card) => card.progress === MAX_PROGRESS_FOR_CARD).length;
};

export const getAmountCardsInProgress = function (state) {
  return state.flashCards.cards.filter(
    (card) => card.progress > 0 && card.progress < MAX_PROGRESS_FOR_CARD,
  ).length;
};

export const getAmountCardsNotStarted = function (state) {
  return state.flashCards.cards.filter((card) => card.progress === 0).length;
};

export const isCheckedArea = function (area) {
  return (state) => {
    return state.flashCards.filteredAreas.includes(area);
  };
};
export const isMasteredHide = function (state) {
  return state.flashCards.isMasteredHide;
};
export const isFilteredSelector = function (state) {
  return state.flashCards.filteredAreas.length > 0 || state.flashCards.isMasteredHide;
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
