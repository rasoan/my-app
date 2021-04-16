import React from "react";
import style from "./Header.module.scss";
import AuthorizationPanel from "../AuthorizationPanel";

const Header = () => {
  return (
    <header>
      <div className={style.HeaderContainer}>
        <AuthorizationPanel />
      </div>
    </header>
  );
};

export default Header;
