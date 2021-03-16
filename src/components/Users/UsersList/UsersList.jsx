import React from "react";
import style from "./UsersList.module.scss";
import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import ListPageNumbers from "../../ListPageNumbers/ListPageNumbers";



let UsersList = (props) => {
  let countPage = Math.ceil(props.totalUsersCount / props.pagesSize);
  let pages = [];
  for(let i = 1; i <= countPage; i++) {
    pages.push(i);
  }
  let currentPage = props.currentPage;
    

    return (<>
               {props.isFetching ? 
               <img width="200" height="200"
                    src="https://lh3.googleusercontent.com/proxy/g8qGLsI0d4PkrJInOzXa8-K7BPPa6VT7Wdf2zO0-3vcWhf5x2h84CHOJE3tXYeRIa3_bRNP_Bz8LdMVTMFw1BeF3-zv26VATPUBboU6eS1w6s9NtzcrX2PGE5JbKPY52zxaD6Eca05Yx69hR"/> : null}
               {!props.isFetching && <ListPageNumbers pages={pages}
                                currentPage={currentPage} 
                                setCurrentPage={props.setCurrentPage}
                                pagesSize={props.pagesSize} 
                                setUsers={props.setUsers} 
                                toggleIsFetching={props.toggleIsFetching}/>}
               {!props.isFetching && props.users.map((user) => <UserItem navlinkTo={"/" + user.id}
                                                    id={user.id} 
                                                    photo={user.photos.small}
                                                    name={user.name}
                                                    followed={user.followed} 
                                                    addOrDeleteFriend={props.addOrDeleteFriend} />)}
           </>);        
}


UsersList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default UsersList;