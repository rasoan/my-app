import AuthorizationPanel from "./AuthorizationPanel";
import {connect} from "react-redux";
import {logOut, authMe} from "../../middlewares/auth";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    photos: state.profilePage.profile.photos,
    authorizationInfo: {  
                        userId: state.auth.userId,
                        email: state.auth.email,
                        login: state.auth.login,
                        },
});

const actionCreators = {
  logOut,
  authMe
};

export default connect(mapStateToProps, actionCreators)(AuthorizationPanel);