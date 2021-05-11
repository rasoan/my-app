import {connect} from "react-redux";
import {authMe} from "../../middlewares/auth";
import {initializeTheApplication} from "../../middlewares/app";
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