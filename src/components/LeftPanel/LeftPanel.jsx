import React from "react";
import style from "./LeftPanel.module.scss";
import Navigation from "../Navigation";
import FriendList from "../FriendList";
import PropTypes from "prop-types";

const LeftPanel = (props) => {
  return (
    <div className={style.leftPanelWrapper}>
      <Navigation />
      <FriendList friendList={props.friendList}/>
    </div>
  );
};

LeftPanel.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default LeftPanel;
