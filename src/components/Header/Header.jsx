import React from "react";
import style from "./Header.module.scss";
import LoginAndRegistrationContainer from "./LoginAndRegistration/LoginAndRegistrationContainer";

const Header = () => {
  return (
    <header>
      <div className={style.HeaderContainer}>
        <LoginAndRegistrationContainer />
      </div>
    </header>
  );
};

export default Header;
