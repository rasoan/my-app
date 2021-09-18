import UsersList from "./UsersList";
import {connect} from "react-redux";
import {unfollow, follow, getCountUsers, getUsersCardsSC} from '../../../middlewares/users';
import {startCommunication} from "../../../middlewares/dialogs";
import {
    getUsers,
    getPagesSize,
    getTotalUsersCount,
    getIsFetchingFollowOrUnfollowIdList,
    getIsAuth,
    getDefaultAvatarSrc,
    getIsFetchingGetUsersCards,
    getIsFetchingGetUsersCount
} from "../../../selectors/users-selectors";

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pagesSize: getPagesSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetchingFollowOrUnfollowIdList: getIsFetchingFollowOrUnfollowIdList(state),
        isFetchingGetUsersCards: getIsFetchingGetUsersCards(state),
        isFetchingGetUsersCount: getIsFetchingGetUsersCount(state),
        isAuth: getIsAuth(state),
        defaultAvatarSrc: getDefaultAvatarSrc(state),
    }
}

const actionCreators = {
    follow,
    unfollow,
    startCommunication,
    getCountUsers,
    getUsersCardsSC
}

export default connect(mapStateToProps, actionCreators)(UsersList);