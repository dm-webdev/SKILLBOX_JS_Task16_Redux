import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { useDispatch } from "react-redux"; 
import { downloadComments } from "../redux/action";
import { Spinner } from './app/Spinner'

const Comments = ({ comments, loading }) => {

  const dispatch = useDispatch();
  
  const onClickHandler = (event) => {
    dispatch(downloadComments());
  }

  console.log(loading);

  return (
    <div>
      {loading ? <Spinner /> : ""}     

      <button
        type="button"
        className="btn btn-outline-info mb-3 d-block mr-auto ml-auto"
        onClick={onClickHandler}
      >
        download comments
      </button>

      {comments.comments.length === 0 ? (
        <p className="alert alert-warning">
          There are currently no comments. You can download them by clicking on the button "download comments".
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
    loading: state.app.loading,
  };
};

export default connect(mapStateToProps, null)(Comments);
