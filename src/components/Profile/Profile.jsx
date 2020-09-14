import React from "react";
import style from "./Profile.module.scss";
import Post from "../Post";
import TextInput from "../TextInput";
import ButtonAddPost from "../ButtonAddPost";
import ProfileInfo from '../ProfileInfo';
import PropTypes from "prop-types";

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
}



const Profile = (props) => {
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo imgSrc="https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg"/>
      <h3>My posts</h3>
      <TextInput newPostElement={newPostElement}/>
      <ButtonAddPost addPost={ addPost }/>
      {props.posts.map( post => <Post className={style.message} content={post.content} imgSrc={post.imgSrc} countLikes={post.countLikes} /> )}
    </div>
  );
};


Profile.propTypes = {
  message: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  countLikes: PropTypes.string.isRequired,
};
export default Profile;
