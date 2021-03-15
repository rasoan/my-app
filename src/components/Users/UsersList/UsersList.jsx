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
    

    return (<div>
               <ListPageNumbers pages={pages}
                                currentPage={currentPage} 
                                setCurrentPage={props.setCurrentPage}
                                pagesSize={props.pagesSize} 
                                setUsers={props.setUsers} />
               {props.users.map((user) => <UserItem navlinkTo={"/" + user.id}
                                                    id={user.id} 
                                                    photo={user.photos.small}
                                                    name={user.name}
                                                    followed={user.followed} 
                                                    addOrDeleteFriend={props.addOrDeleteFriend} />)}
           </div>);        
}


UsersList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default UsersList;