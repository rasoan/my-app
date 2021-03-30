import React from "react";
import style from "./Status.module.scss";
import Status from "./Status";
import {compose} from "redux";
import { connect } from "react-redux";
import {updateNewStatusText} from "../../redux/profile-reducer";

class StatusContainer extends React.Component {
  state = {
    editMode: false,
    statusText: this.props.statusText,
    statusTextCopy: null,
  }

  componentDidMount() {
    
  }

  onStatusChange = (statusText) => {
    this.setState({statusText,});
  }

  activateEditMode = () => {
    this.setState({
                   editMode: true,
                   statusTextCopy: this.state.statusText,
                  });
  }
  deActivateEditMode = () => {
    this.setState({editMode: false,});
    if (this.state.statusText === "") {
      this.setState({statusText: this.props.defaultStatusText,});
      this.props.updateNewStatusText(this.props.defaultStatusText);
    }
    else {
      this.props.updateNewStatusText(this.state.statusText);
    }
  }
  deActivateEditModeEnterOrEsc = (e) => {
    if (e.keyCode === 13) { // если клавиша Enter
      if (this.state.statusText === "") {
        this.setState({
                       editMode: false,
                       statusText: this.props.defaultStatusText,
                      });
        this.props.updateNewStatusText(this.props.defaultStatusText);
      }
      else {
        this.setState({editMode: false,});
        this.props.updateNewStatusText(this.state.statusText);
      }
    }

    if (e.keyCode === 27) { // если клавиша esc
      this.setState({
        editMode: false,
        statusText: this.state.statusTextCopy,
       });
    }
  }

  render() {
    return <Status editMode={this.state.editMode}
                   activateEditMode={this.activateEditMode} 
                   deActivateEditMode={this.deActivateEditMode}
                   deActivateEditModeEnterOrEsc={this.deActivateEditModeEnterOrEsc}
                   onStatusChange={this.onStatusChange} 
                   statusText={this.state.statusText} 
                   lookingAtMyProfile={this.props.lookingAtMyProfile}/>
  };
}

let mapStateToProps = (state) => ({
  statusText: state.profilePage.statusText,
  defaultStatusText: state.profilePage.defaultStatusText,
  lookingAtMyProfile: state.profilePage.lookingAtMyProfile,
});

export default compose(
                       connect(mapStateToProps, {updateNewStatusText})
                      )(StatusContainer);