import React from "react";
import style from "./Profile.module.scss";
import Post from "../Post";
import TextInput from "../TextInput";
import ButtonAddPost from "../ButtonAddPost";
import ProfileInfo from '../ProfileInfo';
import PropTypes from "prop-types";

let newPostElement = React.createRef();





const Profile = (props) => {
  //console.log(props);

  let addPost = () => {
    let text = props.profilePage.newPostText;
    props.dispatch({ type: 'ADD-POST', message: text});
  }
  
  
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo imgSrc="https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg"/>
      <h3>My posts</h3>
      <TextInput dispatch={props.dispatch} newPostElement={newPostElement} newPostText={props.profilePage.newPostText} />
      <ButtonAddPost addPost={ addPost }/>
      {props.profilePage.posts.map( post => <Post content={post.content} imgSrc={post.imgSrc} countLikes={post.countLikes} /> )}
    </div>
  );
};


Profile.propTypes = {
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  countLikes: PropTypes.string,
};
export default Profile;
