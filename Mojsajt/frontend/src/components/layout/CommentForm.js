import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/comments";

export class CommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      text: "",
      post: this.props.post_id
    };
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    console.log(this.props);
  }
  addComment(e) {
    e.preventDefault();
    this.props.addComment(this.state);
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    const { name, text, post } = this.state;
    const comment = { name, text, post };
    console.log(comment);
    console.log("PROPS====", this.props);
    this.addComment();
  };
  render() {
    const { name, text } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.addComment}>
          <legend>Write a Comment</legend>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea
              className="form-control"
              onChange={this.handleChange}
              name="text"
              value={text}
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
