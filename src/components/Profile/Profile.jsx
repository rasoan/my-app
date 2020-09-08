import React from "react";
import style from "./Profile.module.scss";
import Post from "../Post";
import TextInput from "../TextInput";
import ButtonAddPost from "../ButtonAddPost";
import ProfileInfo from '../ProfileInfo';

const Profile = () => {
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo imgSrc="https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg"/>
      <h3>My posts</h3>
      <TextInput />
      <ButtonAddPost />
      <Post
        className={style.message}
        content="hello"
        imgSrc="https://archilab.online/images/1/123.jpg"
        countLikes="2"
      />
      <Post
        className={style.message}
        content="oy sheet"
        imgSrc="https://archilab.online/images/1/123.jpg"
        countLikes="4"
      />
      <Post
        className={style.message}
        content="bay"
        imgSrc="https://archilab.online/images/1/123.jpg"
        countLikes="5"
      />
      <Post
        className={style.message}
        content="noise"
        imgSrc="https://archilab.online/images/1/123.jpg"
        countLikes="1"
      />
    </div>
  );
};

export default Profile;
