import Header from './Header.jsx';
import {toggleNav, toggleNavigationPanel} from "../../middlewares/app";
import {connect} from "react-redux";
import {getToggleNavigationControlPanelSelector} from "../../selectors/app-selectors";

const mapStateToProps = (state) => ({navigationPanel: getToggleNavigationControlPanelSelector(state)});
const actionCreators = ({toggleNavigationPanel});

export default connect(mapStateToProps, actionCreators)(Header);