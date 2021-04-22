import React from "react";
import PropTypes from "prop-types"
import style from "./ButtonFollowUnfollow.module.scss";
import classNames from 'classnames';


const ButtonFollowUnfollow = (props) => {
  const {friend, follow, unfollow, userId} = props;

  const text = friend ? "Удалить из друзей": "Добавить в друзья";
  const styleButton = classNames({ [style.friend]: friend }, { [style.notFriend]: !friend });
  const onClickButton = friend ? unfollow: follow;
  return (<button onClick={() => onClickButton(userId)} className={styleButton}>
            {text}
          </button>);
};

ButtonFollowUnfollow.propTypes = {
  userId: PropTypes.string,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
};

ButtonFollowUnfollow.defaultProps = {
  friend: false,
}

export default ButtonFollowUnfollow;