import React from "react";
import AuthorizationPanel from "./AuthorizationPanel";
import {connect} from "react-redux";
import {compose} from "redux";
import {logOut, authMe} from "../../../redux/auth-reducer";

class AuthorizationPanelContainer extends React.Component {
  signInOnClick = () => {
    console.log("открыть страницу входа в систему")
  }
  signUpOnClick = () => {
    console.log("открыть страницу регистрации")
  }
  logOutClick = () => {
    console.log("выйти из системы");
    this.props.logOut();
  }

  componentDidMount() {
    this.props.authMe();
  }
  
  render() {
    return (<AuthorizationPanel  signInImg={this.props.signInImg}
                                 signUpImg={this.props.signUpImg}
                                 logOutImg={this.props.logOutImg}
                                 signInOnClick={this.signInOnClick}
                                 signUpOnClick={this.signUpOnClick}
                                 logOutClick={this.logOutClick}
                                 isAuth={this.props.isAuth} 
                                 authorizationInfo={this.props.authorizationInfo}
                                 profile={this.props.profilePage} />)
  }
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizationInfo: {  
                          userId: state.auth.userId,
                          email: state.auth.email,
                          login: state.auth.login,
                        },
    signInImg: state.auth.signInImg,
    signUpImg: state.auth.signUpImg,
    logOutImg: state.auth.logOutImg,
});

export default compose(
                       connect(mapStateToProps,{logOut, authMe}),
                      )(AuthorizationPanelContainer);
