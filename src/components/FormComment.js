import React from "react";
import { connect } from "react-redux";

import { createComment } from "../redux/action"

class FormComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: ""
    };
  }


  submitHandler = (event) => {
    event.preventDefault();

    const newComment = {
      id: Date.now().toString(),
      name: this.state.name,
      email: new Date().toLocaleString(),
      body: this.state.body
    }

    console.log(newComment);
    console.log(this.props)
    
    // console.log(this.state.createComment.createComment());
    this.props.createComment(newComment);

    this.setState({
      name: "",
      body: ""
    });
  }




  changeInputHandler = event => {
    console.log(event.target.name + "-" + event.target.value);
    event.persist()
    this.setState( prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }



  render() {
    return (
      <form
        className="text-left p-2"
        style={{
          border: "1px solid #ced4da",
          borderRadius: ".25rem",
        }}
        onSubmit={this.submitHandler}
      >
        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            aria-describedby="fullNameHelp"
            autoFocus
            // required
            name="name"
            value={this.state.name}
            onChange={this.changeInputHandler}
            
          />
          <small id="fullNameHelp" className="form-text text-muted">
            Enter your name
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="textComment">Comment</label>
          <input
            type="text"
            className="form-control"
            id="textComment"
            aria-describedby="textCommentHelp"
            // required
            name="body"
            value={this.state.body}
            onChange={this.changeInputHandler}
          />
          <small id="textCommentHelp" className="form-text text-muted">
            Write your comment
          </small>
        </div>

        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </form>
    );
  }
};

const mapDispatchToProps = {
  createComment
};

export default connect(null, mapDispatchToProps)(FormComment);
