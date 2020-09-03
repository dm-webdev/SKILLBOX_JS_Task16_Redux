import { CREATE_COMMENT, DEL_COMMENT, SHOW_ALERT, HIDE_ALERT, DOWNLOAD_COMMENTS, SHOW_SPINNER, HIDE_SPINNER } from "./types";

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
};

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

export function showSpinner() {
  return {
    type: SHOW_SPINNER,
  }
};

export function hideSpinner() {
  return {
    type: HIDE_SPINNER,
  }
};


export function downloadComments() {
  return async (dispatch) => {

    dispatch(showSpinner())
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=3");    
    const json = await response.json();
    setTimeout(() => {
      dispatch({
        type: DOWNLOAD_COMMENTS,
        payload: json,
      })
      dispatch(hideSpinner())
    }, 2000)
    
    
  }
}