import React, {useEffect} from "react";
import Profile from "../../components/Profile";
import PreloaderLinear from '../../components/Preloaders/PreloaderLinear';

const ProfilePage = (props) => {
    const {
        getProfile, getStatus, checkOwnerOrQuest, match,
        myId, isFetching
    } = props;

    useEffect(() => {
        getProfile(match.params.userId);
        getStatus(match.params.userId);
        checkOwnerOrQuest(match.params.userId);
    }, [myId, getProfile, getStatus, checkOwnerOrQuest, match]);

    return (
        <>
            {isFetching ? <PreloaderLinear/> : <Profile/>}
        </>
    )
}
export default ProfilePage;