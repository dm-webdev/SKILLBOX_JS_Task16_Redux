import React from "react";
import FormComment from "./FormComment";
import Comments from "./Comments";

export default () => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/600/d32776"
        className="card-img-top"
        alt="pictures"
        style={{ width: 18 + "rem", display: "block", margin: "0 auto" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">Goods title</h5>
        <p className="card-text mb4">
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>

        <div className="row pt-4">
          <div className="col">
            <h5>Leave a comment</h5>

            <FormComment />

          </div>

          <div className="col">
            <h5>Comments</h5>

            <Comments />
            
          </div>
        </div>
      </div>
    </div>
  );
};
