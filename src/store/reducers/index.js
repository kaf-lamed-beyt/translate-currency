import {
  GET_TRANSLATION,
  LOADING_TRANSLATION,
  ERROR_TRANSLATING,
} from "../types";

const initialState = {
  translation: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSLATION:
      return {
        ...state,
        translation: action.payload,
        loading: true,
      };
    case LOADING_TRANSLATION:
      return {
        loading: true,
      };
    case ERROR_TRANSLATING:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};

export default rootReducer;
