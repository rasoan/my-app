import React from "react";
import style from "./LeftPanel.module.scss";
import Navigation from "../Navigation";
import FriendList from "../FriendList";
import PropTypes from "prop-types";

const LeftPanel = (props) => {
  
  let friendList = props.state.sidebarPage.friendList;
 
  return (
    <div className={style.leftPanelWrapper}>
      <Navigation />
      <FriendList friendList={friendList}/>
    </div>
  );
};

LeftPanel.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default LeftPanel;
