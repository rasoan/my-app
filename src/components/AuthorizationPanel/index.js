import AuthorizationPanel from "./AuthorizationPanel";
import {connect} from "react-redux";
import {logOut, authMe} from "../../redux/auth-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
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