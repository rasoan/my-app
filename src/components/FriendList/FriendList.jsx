import React from "react";
import style from "./FriendList.module.scss";
import PropTypes from "prop-types";
import Friend from "./Friend/Friend";

const FriendList = (props) => {
  let friends = props.friendList.map((friend) => <Friend navlinkTo={"/" + friend.id} 
                                                         imgSrc={friend.imgSrc}
                                                         name={friend.name} />);
  return ( <div className={style.container}>
            {friends}
           </div>
         );
}


FriendList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default FriendList;