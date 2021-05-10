import React, {useEffect} from "react";
import Profile from "../../components/Profile";
import PreloaderLinear from '../../components/Preloaders/PreloaderLinear';

const ProfilePage = (props) => {
    const {getProfile, getStatus, checkUserOrOwner, match,
           myId, isFetching} = props;

    useEffect(() => {
        getProfile(match.params.userId);
        getStatus(match.params.userId);
        checkUserOrOwner(match.params.userId);
    }, [myId, getProfile, getStatus, checkUserOrOwner, match]);

    return (
        <>
        {isFetching ? <PreloaderLinear />: <Profile />}
        </>
    )
}
export default ProfilePage;