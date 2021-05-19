import React, {useState, useEffect} from "react";
import Status from "./Status";
import {compose} from "redux";
import { connect } from "react-redux";
import {updateNewStatusText} from "../../../middlewares/profile";
import {getOwnerPageControlPanelSelector} from "../../../selectors/app-selectors";

const StatusContainer = ({defaultStatusText, statusGlobalState, updateNewStatusText, ownerPageControlPanel}) => {
  const [editMode, setEditMode] = useState(false);
  const [statusCopy, setStatusCopy] = useState(statusGlobalState);
  const [status, setStatus] = useState(statusGlobalState);

  const activateEditMode = () => {
    setEditMode(true);
  }
  
  const deActivateEditMode = () => {
    setEditMode(false);
    let statusTemporaryVariable = status !== "" ? status: defaultStatusText;
    updateNewStatusText(statusTemporaryVariable);
    if (status === "") {
      setStatus(defaultStatusText);
      setStatusCopy(defaultStatusText);
    }
  }

  const onStatusChange = (statusInputText) => {
    setStatus(statusInputText);
  }

  const deActivateEditModeEnterOrEsc = (e) => {
    if (e.keyCode === 13) { // если клавиша Enter
      setEditMode(false);
      let statusTemporaryVariable = status !== "" ? status: defaultStatusText;
      updateNewStatusText(statusTemporaryVariable);
      if (status === "") {
        setStatus(defaultStatusText);
        setStatusCopy(defaultStatusText);
      }
    }

    if (e.keyCode === 27) { // если клавиша esc
      setEditMode(false);
      setStatus(statusCopy);
    }
  }

  useEffect(() => {
    setStatus(statusGlobalState);
    setStatusCopy(statusGlobalState);
  }, [statusGlobalState]);

  return <Status editMode={editMode}
                 activateEditMode={activateEditMode} 
                 deActivateEditMode={deActivateEditMode}
                 deActivateEditModeEnterOrEsc={deActivateEditModeEnterOrEsc}
                 onStatusChange={onStatusChange} 
                 statusText={status}
                 ownerPageControlPanel={ownerPageControlPanel}/>
}

let mapStateToProps = (state) => ({
  statusGlobalState: state.profilePage.statusText,
  defaultStatusText: state.profilePage.defaultStatusText,
  ownerPageControlPanel: getOwnerPageControlPanelSelector(state),
});

export default compose(
                       connect(mapStateToProps, {updateNewStatusText})
                      )(StatusContainer);