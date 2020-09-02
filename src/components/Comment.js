import React from "react";
import { useDispatch } from "react-redux";
import { delComment } from "../redux/action";

export default ({ comment }) => {

  const dispatch = useDispatch();
  // const del = useSelector((state) => state.comments)

  
  const onClickHandler = (event) => {
    console.log(comment.id);
    console.log(comment);
    // console.log(del);
    dispatch(delComment(comment.id));
    // delComment(false)
  }

  // }

  // this.setState({comment: 'Привет'});
  // this.setState(function(state, props) {
  //   return {
  //     counter: state.counter + props.increment
  //   };
  // });

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
