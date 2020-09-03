import { CREATE_COMMENT, DEL_COMMENT, SHOW_ALERT, HIDE_ALERT } from "./types";

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment,
  }
};

export function delComment(removedId) {
  return {
    type: DEL_COMMENT,
    payload: removedId,
  }
};

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function showAlert(text) {
  return dispatch =>  {
    dispatch({
      type:SHOW_ALERT,
      payload: text,
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3500)    
  }
};