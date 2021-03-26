import React from "react";
import style from "./Users.module.scss";
import PropTypes from "prop-types";
import UsersListContainer from "./UsersList/UsersListContainer"
             
const Users = (props) => {
  return (
    <div className={style.UsersContainer}>
     <UsersListContainer />
    </div>
  );
};

export default Users;
