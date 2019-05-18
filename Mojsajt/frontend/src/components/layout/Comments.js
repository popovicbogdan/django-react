import React, { Component } from "react";
import { getComments } from "../../actions/comments";
import { connect } from "react-redux";

export class Comments extends Component {
  componentDidMount() {
    // this.props.getComments();
    console.log("COMMENT-PROPS", this.props);
  }

  render() {
    const { comments, post_id } = this.props;
    const commentsfilter = comments.filter(comment => comment.post == post_id);
    let commentList = commentsfilter.length ? (
      commentsfilter.map(comment => {
        return (
          <div className="container" key={comment.id}>
            <div className="card bg-light mb-3">
              <div className="card-body">
                <h3 className="card-title">{comment.name}</h3>
                <p className="card-text">{comment.text}</p>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">NO comments</div>
    );

    return (
      <div className="container">
        <h3>comments</h3>
        {commentList}
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.post_id;
//   return {
//     comments: state.comments.comments.filter(comment => comment.post == id)
//   };
// };
// export default connect(
// mapStateToProps
// { getComments }
export default Comments;
