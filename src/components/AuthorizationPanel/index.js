import React from "react";
import AuthorizationPanel from "./AuthorizationPanel";
import {connect} from "react-redux";
import {compose} from "redux";
import {logOut, authMe} from "../../redux/auth-reducer";
import {getProfile} from "../../redux/profile-reducer";

const AuthorizationPanelContainer = (props) => {

  const logOutClick = async () => {
    console.log("выйти из системы");
    
    await props.logOut();
    
  }
  

    return (<AuthorizationPanel  signInImg={props.signInImg}
                                 signUpImg={props.signUpImg}
                                 logOutImg={props.logOutImg}
                                 logOutClick={logOutClick}
                                 isAuth={props.isAuth} 
                                 authorizationInfo={props.authorizationInfo}
                                 profile={props.profilePage} />)

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
