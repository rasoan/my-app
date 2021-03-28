import React from "react";
import style from "./Users.module.scss";
import PropTypes from "prop-types";
import UsersListContainer from "./UsersList/UsersListContainer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
             
const Users = (props) => {
  return (
    <div className={style.UsersContainer}>
     <UsersListContainer />
    </div>
  );
};

export default compose(
                       withAuthRedirect
                      )(Users);
