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
import {userType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    users: Array<userType>
    pagesSize: number
    totalUsersCount: number
    isFetchingFollowOrUnfollowIdList: boolean
    isFetchingGetUsersCards: Array<number>
    isFetchingGetUsersCount: number
    isAuth: boolean
    defaultAvatarSrc: string
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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

type ActionCreatorsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    startCommunication: (id: number) => void
    getCountUsers: () => void
    getUsersCardsSC: (currentPage: number, pagesSize: number) => void
}
const actionCreators = {
    follow,
    unfollow,
    startCommunication,
    getCountUsers,
    getUsersCardsSC
}

// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<MapStateToPropsType, ActionCreatorsType, null, AppStateType>(
    mapStateToProps,
    actionCreators)(UsersList);