import { CREATE_COMMENT, DEL_COMMENT, DOWNLOAD_COMMENTS } from "../types";

let initialState;

if (localStorage.getItem("comments") !== null) {
  let lsDB = localStorage.getItem("comments");
  initialState = JSON.parse(lsDB);
} else {
  initialState = {
    comments: [],
  };
}

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: state.comments.concat([action.payload]) };

    case DEL_COMMENT:
      return {
        comments: state.comments.filter((item) => item.id !== action.payload),
      };

    case DOWNLOAD_COMMENTS:
      return { ...state, comments: state.comments.concat(action.payload) };

    default:
      return state;
  }
};
