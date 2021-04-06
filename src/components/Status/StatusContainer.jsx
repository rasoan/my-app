import React, {useState} from "react";
import style from "./Status.module.scss";
import Status from "./Status";
import {compose} from "redux";
import { connect } from "react-redux";
import {updateNewStatusText} from "../../redux/profile-reducer";

const StatusContainer = ({defaultStatusText, updateNewStatusText}) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(defaultStatusText);
  //const [statusTextCopy, setStatusTextCopy] = useState(null)
  const activateEditMode = () => {
    setEditMode(true);
  }
  const deActivateEditMode = () => {
    setEditMode(false);
    updateNewStatusText(status);
  }

  const onStatusChange = (statusInputText) => {
    setStatus(statusInputText);
  }

  const deActivateEditModeEnterOrEsc = (e) => {
    if (e.keyCode === 13) { // если клавиша Enter
      setEditMode(false);
      //let statusText = this.state.statusText !== "" ? this.state.statusText: this.props.defaultStatusText;
      updateNewStatusText(status);
    }

    if (e.keyCode === 27) { // если клавиша esc
     // this.setState({editMode: false, statusText: this.state.statusTextCopy,});
      setEditMode(false);
      updateNewStatusText(status); // заглушка
    }
  }

  return <Status editMode={editMode}
                 activateEditMode={activateEditMode} 
                 deActivateEditMode={deActivateEditMode}
                 deActivateEditModeEnterOrEsc={deActivateEditModeEnterOrEsc}
                 onStatusChange={onStatusChange} 
                 statusText={status} 
                 lookingAtMyProfile={true}/>
}

let mapStateToProps = (state) => ({
  statusText: state.profilePage.statusText,
  defaultStatusText: state.profilePage.defaultStatusText,
  lookingAtMyProfile: state.profilePage.lookingAtMyProfile,
});

export default compose(
                       connect(mapStateToProps, {updateNewStatusText})
                      )(StatusContainer);