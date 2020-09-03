import React from "react";
import { useDispatch } from "react-redux";
import { delComment } from "../redux/action";

export default ({ comment }) => {
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    dispatch(delComment(comment.id));
  };

  return (
    <div
      className="card-body text-left mb-2"
      style={{
        border: "1px solid #ced4da",
        borderRadius: ".25rem",
      }}
    >
      <h5 className="card-title">{comment.name}</h5>
      <hr />
      <p
        style={{
          fontSize: "0.8rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="pl-4 pr-4">{comment.email}</span>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onClickHandler}
        >
          delete
        </button>
      </p>

      <p className="card-text">{comment.body}</p>
    </div>
  );
};
