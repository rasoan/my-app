import UsersPage from "./UsersPage";
import {
    getDefaultAvatarSrc,
    getIsAuth,
    getIsFetchingFollowOrUnfollowIdList, getIsFetchingGetUsersCards, getIsFetchingGetUsersCount,
    getPagesSize,
    getTotalUsersCount,
    getUsers
} from "../../selectors/users-selectors";
import {getCountUsers, getUsersCardsSC} from "../../redux/users-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        pagesSize: getPagesSize(state),
        isFetchingGetUsersCount: getIsFetchingGetUsersCount(state),
    }
}

const actionCreators = {
    getCountUsers,
    getUsersCardsSC
}

export default connect(mapStateToProps, actionCreators)(UsersPage);