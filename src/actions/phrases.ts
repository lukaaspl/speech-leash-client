import { createAction } from "redux-actions";
import * as actionTypes from "actionTypes";
import { Phrase } from "types";

export const addPhrase = createAction<Phrase>(actionTypes.ADD_PHRASE);
export const removePhrase = createAction<string>(actionTypes.REMOVE_PHRASE);
