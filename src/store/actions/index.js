import {
  GET_TRANSLATION,
  LOADING_TRANSLATION,
  ERROR_TRANSLATING,
} from "../actions";

export const getMoneyTranslation = (payload) => {
  return {
    type: GET_TRANSLATION,
    payload,
  };
};

// an action that describes the loading sequence
// while fetching from the API
export const loadingTranslation = () => {
  return {
    type: LOADING_TRANSLATION,
  };
};

// an action that describes the error that occurs/occured
// while trying to fetching from the API
export const erroTranslating = (payload) => {
  return {
    type: ERROR_TRANSLATING,
    payload,
  };
};
