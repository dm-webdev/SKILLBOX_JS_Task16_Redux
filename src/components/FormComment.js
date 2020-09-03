import React from "react";
import { connect } from "react-redux";
import { createComment, showAlert } from "../redux/action";
import { Alert } from "./app/Alert";

class FormComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    if (!(this.state.name.trim() && this.state.body.trim())) {
      return this.props.showAlert("Fields should be filled");
    }

    const newComment = {
      id: Date.now().toString(),
      name: this.state.name,
      email: new Date().toLocaleString(),
      body: this.state.body,
    };

    this.props.createComment(newComment);

    this.setState({
      name: "",
      body: "",
    });
  };

  changeInputHandler = (event) => {
    console.log(event.target.name + "-" + event.target.value);
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

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
            name="name"
            value={this.state.name}
            onChange={this.changeInputHandler}
          />
          <small id="fullNameHelp" className="form-text text-muted ">
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
        {this.props.alert === null ? "" : <Alert text={this.props.alert} />}{" "}
      </form>
    );
  }
}

const mapDispatchToProps = {
  createComment,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComment);
