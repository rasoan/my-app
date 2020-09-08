import React from "react";
import style from "./ProfileInfo.module.scss";
import PropTypes from "prop-types";

const ProfileInfo = (props) => {
  return (
    <div className={style.ProfileInfoContainer}>
      <img
          className={style.image}
          src={props.imgSrc}
        ></img>
    </div>
  );
};

ProfileInfo.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default ProfileInfo;
