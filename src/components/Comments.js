import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

const Comments = ({ comments }) => {
  console.log(comments.length);
  return (
    <div>
      <button type="button" className="btn btn-outline-info mb-3">
        upload comments
      </button>

      {comments.comments.length === 0 ? (
        <p className="alert alert-warning">
          There are currently no comments. You can download them by clicking on
          the button "upload comments".
        </p>
      ) : (
        ""
      )}

      {comments.comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, null)(Comments);
