import React, {useEffect} from 'react';
import Users from "../../components/Users";
import PreloaderLinear from "../../components/Preloaders/PreloaderLinear";

const UsersPage = (props) => {
    const {getCountUsers, getUsersCardsSC,
           pagesSize, isFetchingGetUsersCount} = props;

    useEffect(() => {
        getCountUsers();
        getUsersCardsSC(1, pagesSize);
    }, [getUsersCardsSC, pagesSize, getCountUsers]);

    return (<>
        {isFetchingGetUsersCount ? <PreloaderLinear />: <Users />}
    </>)
}

export default UsersPage;