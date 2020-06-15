import * as actionTypes from "actionTypes";
import produce from "immer";
import { handleActions } from "redux-actions";
import { Action, Phrase, PhrasesStoreState } from "types";

const initialState: PhrasesStoreState = {
  phrases: [],
  sort: {
    order: "ASC",
    sortBy: "createdAt",
  },
};

const phrasesReducer = handleActions<PhrasesStoreState, any>(
  {
    [actionTypes.ADD_PHRASE]: (state, action: Action<Phrase>) =>
      produce(state, (draftState) => {
        draftState.phrases.push(action.payload);
      }),

    [actionTypes.REMOVE_PHRASE]: (state, action: Action<string>) =>
      produce(state, (draftState) => {
        const phraseIndexToRemove = draftState.phrases.findIndex(
          (phrase) => phrase.id === action.payload
        );

        draftState.phrases.splice(phraseIndexToRemove, 1);
      }),
  },
  initialState
);

export default phrasesReducer;
