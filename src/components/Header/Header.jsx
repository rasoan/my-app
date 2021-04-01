import React from "react";
import style from "./Header.module.scss";
import AuthorizationPanelContainer from "../Authorization/AuthorizationPanel/AuthorizationPanelContainer";

const Header = () => {
  return (
    <header>
      <div className={style.HeaderContainer}>
        <AuthorizationPanelContainer />
      </div>
    </header>
  );
};

export default Header;
