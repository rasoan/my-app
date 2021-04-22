import React from "react";
import style from "./Users.module.scss";
import PropTypes from "prop-types";
import UsersListContainer from "./UsersList/UsersListContainer";
import { connect } from "react-redux";

const Users = (props) => {
  const {isAuth} = props;

    if (!isAuth) {
      console.log("Пользователь анонимный, надо запретить добавлять в друзья и так далее")
    }
    return (
      <div className={style.UsersContainer}>
        <UsersListContainer />
      </div>
    );
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, null)(Users);
