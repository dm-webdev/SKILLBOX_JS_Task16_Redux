import { CREATE_COMMENT, DEL_COMMENT } from "./types";

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment,
  }
}

export function delComment(delId) {
  return {
    type: DEL_COMMENT,
    payload: delId,
  }
}