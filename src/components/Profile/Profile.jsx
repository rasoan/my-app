import React from "react";
import style from "./Profile.module.scss";
import Post from "../Post";
import TextInput from "../TextInput";
import ButtonAddPost from "../ButtonAddPost";

const Profile = () => {
  return (
    <div>
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
