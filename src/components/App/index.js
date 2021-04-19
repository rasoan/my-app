import {connect} from "react-redux";
import {authMe} from "../../redux/auth-reducer";
import {initializeTheApplication} from "../../redux/app-reducer";
import App from "./App";

const mapStateToProps = (state) => {
    return {
      initialize: state.app.initializeTheApplication,
    }
}

const actionCreators = {
    authMe,
    initializeTheApplication
};

export default connect(mapStateToProps, actionCreators)(App);