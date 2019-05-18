import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments } from "../../actions/comments";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

export class Post extends Component {
  componentDidMount() {
    this.props.getComments();
    console.log("POST-PROPS", this.props);
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">{this.props.post.title}</h1>
          <p className="lead">{this.props.post.text}</p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
        </div>
        <Comments post_id={this.props.post.id} comments={this.props.comments} />
        <CommentForm post_id={this.props.post.id} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    post: state.posts.posts.find(post => post.id == id),
    comments: state.comments.comments
  };
};

export default connect(
  mapStateToProps,
  { getComments }
)(Post);
