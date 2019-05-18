import React, { Component } from "react";
import { getPosts } from "../../actions/posts";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Home extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };
  componentDidMount() {
    this.props.getPosts();

    console.log(this.props);
  }
  render() {
    return (
      <div className="container">
        <h1 id="title">Welcome to Home Page</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              {this.props.posts.map(post => (
                <div className="card text-white bg-primary mb-3" key={post.id}>
                  <div className="card-body">
                    <Link to={"/" + post.id}>
                      <h4 className="card-title">{post.title}</h4>
                    </Link>
                    <p className="card-text">{post.text}</p>
                    <p>
                      <small>Last updated 24.feb.2019</small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.posts
});
export default connect(
  mapStateToProps,
  { getPosts }
)(Home);
