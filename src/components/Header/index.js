import Header from './Header.jsx';
import {toggleNav} from "../../middlewares/app";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({toggleNav: state.app.toggleNav});
const actionCreators = ({toggleNav});

export default connect(mapStateToProps, actionCreators)(Header);