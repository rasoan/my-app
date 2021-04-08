import React, {useState} from "react";
import style from "./ProfilePicture.module.scss";
const fileInputRef = React.createRef();

const ProfilePicture = ({photos}) => {
  const [fileInput, setFileInput] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    setFileInput(fileInputRef.current.files[0]);
  }

  return (
    <div className={style.ProfileInfoContainer}>
      <img className={style.image} src={photos.large} />
      <form onSubmit={onSubmit}>
        <input type="file" placeholder="Загрузить файл" ref={fileInputRef} />
        <button type="submit">Загрузить файл</button>
      </form>
        
    </div>
  );
};

export default ProfilePicture;

