import React from "react";
import style from "./UsersList.module.scss";
import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem"

const UsersList = (props) => {
  
  let users = props.users.map((user) => <UserItem navlinkTo={"/" + user.id}
                                                  id={user.id} 
                                                  imgSrc={user.imgSrc}
                                                  name={user.name}
                                                  friend={user.friend} 
                                                  addOrDeleteFriend={props.addOrDeleteFriend}
                                                  town={user.town}
                                                  country={user.country} />);
  return ( <div>
            {users}
           </div>
         );
}


UsersList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default UsersList;