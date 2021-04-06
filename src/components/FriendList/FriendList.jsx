import React from "react";
import style from "./FriendList.module.scss";
import PropTypes from "prop-types";
import Friend from "./Friend/Friend";

const FriendList = ({friendList, clickProfileUser}) => {
  let styleContainer = friendList.length ? style.container: "";
  let friends = friendList.map((friend) => <Friend id={friend.id} 
                                                   srcPhoto={friend.photos.small}
                                                   name={friend.name} 
                                                   clickProfileUser={clickProfileUser} />);
  return ( <div className={styleContainer}>
            {friends}
           </div>
         );
}

FriendList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default FriendList;