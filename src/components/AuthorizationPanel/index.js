import AuthorizationPanel from "./AuthorizationPanel";
import {connect} from "react-redux";
import {logOut, authMe} from "../../middlewares/auth";
import {getAvatarAuthPanel} from "../../selectors/auth-selectors";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    srcAvatarAuthPanel: getAvatarAuthPanel(state),
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