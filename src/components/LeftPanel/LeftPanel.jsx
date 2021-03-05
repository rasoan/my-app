import React from "react";
import style from "./LeftPanel.module.scss";
import Navigation from "../Navigation";
import FriendList from "../FriendList";
import PropTypes from "prop-types";
import StoreContext from "../../StoreContext";

const LeftPanel = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let friendList = store.getState().sidebarPage.friendList;
          return <div className={style.leftPanelWrapper}>
            <Navigation />
            <FriendList friendList={friendList}/>
          </div>
        }
      }
      </StoreContext.Consumer>);
};

LeftPanel.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default LeftPanel;
