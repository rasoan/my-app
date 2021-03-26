import React from "react";
import { connect } from "react-redux";
import LoginAndRegistration from "../LoginAndRegistration/LoginAndRegistration";
import {authMe} from "../../../redux/auth-reducer";
class LoginAndRegistrationContainer extends React.Component {
  componentDidMount() {
    this.props.authMe()
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

export default connect(mapStateToProps, {authMe})(LoginAndRegistrationContainer);