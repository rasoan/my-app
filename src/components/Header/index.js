import Header from './Header.jsx';
import {toggleNav} from "../../redux/app-reducer.js";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({toggleNav: state.app.toggleNav});
const actionCreators = ({toggleNav});

export default connect(mapStateToProps, actionCreators)(Header);