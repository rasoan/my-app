import React from "react";
import style from "./UsersList.module.scss";
import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem"
import { render } from "@testing-library/react";
import * as axios from "axios";

class UsersList extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
          this.props.setUsers(response.data.items);
    });
  }

  render() {
    let countPage = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);
    let pages = [];
    for(let i = 1; i <= countPage; i++) {
      pages.push(i);
    }
    let currentPage = this.props.currentPage;


    return (<div>
               {pages.map(pageNumber => {
                 return <span className={currentPage === pageNumber && style.currentPage} >{pageNumber}</span>
                })
               }
               {this.props.users.map((user) => <UserItem navlinkTo={"/" + user.id}
                                                  id={user.id} 
                                                  photo={user.photos.small}
                                                  name={user.name}
                                                  followed={user.followed} 
                                                  addOrDeleteFriend={this.props.addOrDeleteFriend}
                                                />)}
           </div>
           );
        
  }
}


UsersList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default UsersList;