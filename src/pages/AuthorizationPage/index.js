import {connect} from "react-redux";
import AuthorizationPage from "./AuthorizationPage";
import {getIsAuthSelector, getUserIdSelector} from "../../selectors/auth-selectors";

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthSelector(state),
    }
}
const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(AuthorizationPage);
