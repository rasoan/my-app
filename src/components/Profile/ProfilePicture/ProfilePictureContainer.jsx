import React from "react";
import ProfilePicture from "./ProfilePicture";
import {connect} from "react-redux";
import {} from "../../../redux/profile-reducer";
import { withRouter } from "react-router";
import {compose} from "redux";

const ProfilePictureContainer = ({photos}) => {
  
  return <ProfilePicture photos={photos} />;
};



let mapStateToProps = (state) => (
    {
      photos: state.profilePage.profile.photos,
      isFetching: state.profilePage.isFetching,
    }
  )
  
  export default compose(
                         connect(mapStateToProps,{}),
                        )(ProfilePictureContainer);