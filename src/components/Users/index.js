import React from "react";
import PropTypes from "prop-types";
import style from "./Users.module.scss";
import UsersList from "./UsersList";
import { connect } from "react-redux";

const Users = (props) => {
  const {isAuth} = props;

    if (!isAuth) {
      console.log("Пользователь анонимный, надо запретить добавлять в друзья и так далее")
    }
    return (
      <div className={style.UsersContainer}>
        <UsersList />
      </div>
    );
}

Users.propTypes = {
  isAuth: PropTypes.bool,
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, null)(Users);