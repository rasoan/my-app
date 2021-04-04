import React from "react";
import Navigation from './Navigation';
import {getProfile, lookingMyProfile} from '../../redux/profile-reducer';
import {compose} from "redux";
import {connect} from "react-redux";


class NavigationContainer extends React.Component {
  clickProfileLink= () => {
    if(!this.props.isAuth) {
      console.log("Надо отправить на логинизацию, пользователь анонимный!")
    }
  }

  render() {
    if(!this.props.isAuth) {
      console.log("Надо запретить редактировать статус и так далее, пользователь анонимный.")
    }
    return <Navigation clickProfileLink={this.clickProfileLink} />;
  }
};


let mapStateToProps = (state) => (
  {
    redrawToProfileComponent: state.profilePage.redrawToProfileComponent,
    isAuth: state.auth.isAuth,
  }
)
export default compose(
                       connect(mapStateToProps, {getProfile, lookingMyProfile})
                      )(NavigationContainer);
