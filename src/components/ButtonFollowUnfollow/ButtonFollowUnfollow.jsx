import React from "react";
import style from "./ButtonFollowUnfollow.module.scss";
//import PropTypes from "prop-types";
import classNames from 'classnames';


const ButtonFollowUnfollow = ({friend = false, follow, unfollow, userId}) => {
  const text = friend ? "Удалить из друзей": "Добавить в друзья";
  const styleButton = classNames({ [style.friend]: friend }, { [style.notFriend]: !friend });
  const onClickButton = friend ? unfollow: follow;
  return (<div>
           <button onClick={() => onClickButton(userId)} className={styleButton}>{text}</button>
         </div>);
};

// buttonFollowUnfollow.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default ButtonFollowUnfollow;
