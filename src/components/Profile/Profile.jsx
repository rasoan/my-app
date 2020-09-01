import React from "react";
import style from "./Profile.module.scss";
import Post from "../Post";
import TextInput from '../TextInput';
import ButtonAddPost from '../ButtonAddPost';

const Profile = () => {
  return (
    <div>
      <TextInput />
      <ButtonAddPost />
      <Post 
      content="hello" 
      imgSrc="https://archilab.online/images/1/123.jpg" 
      countLikes="10" />
      <Post 
      content="hello" 
      imgSrc="https://archilab.online/images/1/123.jpg" 
      countLikes="10" />
      <Post 
      content="hello" 
      imgSrc="https://archilab.online/images/1/123.jpg" 
      countLikes="10" />
      <Post 
      content="hello" 
      imgSrc="https://archilab.online/images/1/123.jpg" 
      countLikes="10" />
    </div>
  );
};

export default Profile;
