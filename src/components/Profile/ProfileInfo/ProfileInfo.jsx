import React from "react";
import style from "./ProfileInfo.module.scss";


const ProfileInfo = () => {
  return (
    <div className={style.ProfileInfoContainer}>
      <img
          className={style.image}
          src="https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg"
        ></img>
    </div>
  );
};

export default ProfileInfo;