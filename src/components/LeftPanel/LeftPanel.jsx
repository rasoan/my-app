import React from "react";
import style from "./LeftPanel.module.scss";
import NavigationContainer from "../Navigation";

const LeftPanel = () => {
  return ( <div className={style.leftPanelWrapper}>
             <NavigationContainer />
          </div>
         )};

export default LeftPanel;