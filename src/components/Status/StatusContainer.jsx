import React from "react";
import style from "./Status.module.scss";
import Status from "./Status";
import {compose} from "redux";
import { connect } from "react-redux";
import {onStatusChange, useDefaultStatusText} from "../../redux/profile-reducer";

class StatusContainer extends React.Component {
  state = {
    editMode: false,
    textInput: null,
  }

  componentDidMount() {
    if (!this.props.statusText) {
      this.props.useDefaultStatusText();
    }
  }

  activateEditMode = () => {
    this.setState({
                   editMode: true,
                   textInput: this.props.statusText,
                  });
  }
  deActivateEditMode = () => {
    this.setState({editMode: false,});

    if (this.props.statusText === "") {
      this.props.useDefaultStatusText();
    }
  }
  deActivateEditModeEnterDown = (e) => {
    if (e.keyCode === 13) {
      this.setState({editMode: false,});
      if (this.props.statusText === "") {
        this.props.useDefaultStatusText();
      }
    }

    if (e.keyCode === 27) {
      this.setState({editMode: false,});
      this.props.onStatusChange(this.state.textInput);
    }
  }

  render() {
    return <Status editMode={this.state.editMode}
                   activateEditMode={this.activateEditMode} 
                   deActivateEditMode={this.deActivateEditMode}
                   deActivateEditModeEnterDown={this.deActivateEditModeEnterDown}
                   onStatusChange={this.props.onStatusChange} 
                   statusText={this.props.statusText} 
                   lookingAtMyProfile={this.props.lookingAtMyProfile}/>
  };
}

let mapStateToProps = (state) => ({
  statusText: state.profilePage.statusText,
  lookingAtMyProfile: state.profilePage.lookingAtMyProfile,
});

export default compose(
                       connect(mapStateToProps, {onStatusChange, useDefaultStatusText})
                      )(StatusContainer);