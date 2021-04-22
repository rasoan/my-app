import React from "react";
import PropTypes from "prop-types";
import Posts from "./Posts";
import {addPost} from '../../../redux/profile-reducer.js';
import {connect} from "react-redux";

const PostsContainer = (props) => {
  const {posts, addPost} = props;
    return <Posts posts={posts}
                  addPost={addPost} />

}

PostsContainer.propTypes = {
  posts: PropTypes.array,
  addPost: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
          posts: state.profilePage.posts,
         }
}

const actionCreators = {addPost};

export default connect(mapStateToProps, actionCreators)(PostsContainer);