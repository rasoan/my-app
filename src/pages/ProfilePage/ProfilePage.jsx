import React, {useEffect} from "react";
import Profile from "../../components/Profile";
import PreloaderLinear from '../../components/Preloaders/PreloaderLinear';

const ProfilePage = (props) => {
    const {getProfile, getStatus, checkUserOrOwner, match,
           myId, refreshRequests, isFetching} = props;

    useEffect(() => {
        getProfile(match.params.userId);
        getStatus(match.params.userId);
        checkUserOrOwner(match.params.userId);
    }, [myId, refreshRequests, getProfile, getStatus, checkUserOrOwner, match.params.userId]);

    return (
        <>
        {isFetching ? <PreloaderLinear />: <Profile />}
        </>
    )
}
export default ProfilePage;