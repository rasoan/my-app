import React from "react";
import AuthorizationPanel from "./AuthorizationPanel";
import {connect} from "react-redux";
import {compose} from "redux";
import {logOut, authMe} from "../../redux/auth-reducer";


const AuthorizationPanelContainer = ({isAuth, authorizationInfo, profilePage, logOut}) => {
    return (<AuthorizationPanel  logOutClick={logOut}
                                 isAuth={isAuth} 
                                 authorizationInfo={authorizationInfo}
                                 profile={profilePage} />)

};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizationInfo: {  
                          userId: state.auth.userId,
                          email: state.auth.email,
                          login: state.auth.login,
                        },
});

export default compose(
                       connect(mapStateToProps,{logOut, authMe}),
                      )(AuthorizationPanelContainer);