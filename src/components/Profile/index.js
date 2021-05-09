import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, lookingMyProfile, notLookingMyProfile, getStatus} from "../../redux/profile-reducer";
import {follow, unfollow} from "../../redux/users-reducer"
import {checkUserOrOwner} from "../../redux/app-reducer";
import {startCommunication} from "../../redux/dialogs-reducer"
import {withRouter} from "react-router";
import {compose} from "redux";

const ProfileContainer = (props) => {
    const {
        myId, match, profile, getProfile, getStatus,
        checkUserOrOwner, follow, unfollow,
        startCommunication, controlPanels,
        refreshRequests, isAuth} = props;



    return (<Profile {...props} profile={profile}
                     follow={follow}
                     unfollow={unfollow}
                     startCommunication={startCommunication}
                     controlPanels={controlPanels}
                     isAuth={isAuth}/>);
};

ProfileContainer.propTypes = {
    myId: PropTypes.number,
    match: PropTypes.object,
    profile: PropTypes.object,
    getProfile: PropTypes.func,
    getStatus: PropTypes.func,
    checkUserOrOwner: PropTypes.func,
    follow: PropTypes.func,
    unfollow: PropTypes.func,
    startCommunication: PropTypes.func,
    controlPanels: PropTypes.bool,
    isAuth: PropTypes.bool,
    refreshPage: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myId: state.auth.userId,
    logoutFetching: state.auth.logoutFetching,
    controlPanels: state.app.controlPanels,
    isAuth: state.auth.isAuth,
    refreshRequests: state.app.refreshRequests,
});

const actionCreators = {
    getProfile,
    lookingMyProfile,
    notLookingMyProfile,
    getStatus,
    checkUserOrOwner,
    follow,
    unfollow,
    startCommunication,
}

export default compose(connect(mapStateToProps, actionCreators), withRouter)(ProfileContainer);