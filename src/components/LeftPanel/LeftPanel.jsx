import React from "react";
import style from "./LeftPanel.module.scss";
import Navigation from "../Navigation";
import FriendListContainer from "../FriendList/FriendListContainer";

const LeftPanel = () => {
  return ( <div className={style.leftPanelWrapper}>
             <Navigation />
             <FriendListContainer />
          </div>
         )};

export default LeftPanel;