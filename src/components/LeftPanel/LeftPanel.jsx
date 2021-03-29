import React from "react";
import style from "./LeftPanel.module.scss";
import NavigationContainer from "../Navigation/NavigationContainer";
import FriendListContainer from "../FriendList/FriendListContainer";

const LeftPanel = () => {
  return ( <div className={style.leftPanelWrapper}>
             <NavigationContainer />
             <FriendListContainer />
          </div>
         )};

export default LeftPanel;