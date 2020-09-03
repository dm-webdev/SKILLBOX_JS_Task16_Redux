import { SHOW_ALERT, HIDE_ALERT, SHOW_SPINNER, HIDE_SPINNER } from "../types";

const initialState = {
  alert: null,
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: action.payload };

    case HIDE_ALERT:
      return { ...state, alert: null };

    case SHOW_SPINNER:
      return { ...state, loading: true };

    case HIDE_SPINNER:
      return { ...state, loading: false };

    default:
      return state;
  }
};
