import React from "react";
import { connect } from "react-redux";
import LoginAndRegistration from "../LoginAndRegistration/LoginAndRegistration";
import {setUserData} from "../../../redux/auth-reducer";
import * as axios from "axios";

class LoginAndRegistrationContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        this.props.setUserData(id, email, login);
      }
    });

  }
  render() {
    return <LoginAndRegistration {...this.props} />
  }
};

let mapStateToProps = (state) => {
  return {
          isAuth: state.auth.isAuth,
          login: state.auth.login,
         }
}

export default connect(mapStateToProps, {setUserData})(LoginAndRegistrationContainer);
