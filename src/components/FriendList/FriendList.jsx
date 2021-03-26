import React from "react";
import style from "./FriendList.module.scss";
import PropTypes from "prop-types";
import Friend from "./Friend/Friend";

const FriendList = (props) => {
  let styleContainer = props.friendList.length ? style.container: "";
  let friends = props.friendList.map((friend) => <Friend navlinkTo={"/" + friend.id} 
                                                         srcPhoto={friend.photos.small}
                                                         name={friend.name} />);
  return ( <div className={styleContainer}>
            {friends}
           </div>
         );
}

FriendList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default FriendList;