import React from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";

const Status = (props) => {
  const {controlPanels, activateEditMode, editMode, 
         deActivateEditModeEnterOrEsc, onStatusChange, 
         deActivateEditMode, statusText} = props;
         
  let statusTextStyle = controlPanels ? style.statusText: "";
  
  return <div className={style.statusTextContainer}>
           {editMode && <input className={style.inputStatusText}
                               onFocus={(event) => event.target.select()}
                               onKeyDown={(e) => deActivateEditModeEnterOrEsc(e)}
                               onBlur={deActivateEditMode}
                               onChange={(e) => onStatusChange(e.target.value)} 
                               type="text"
                               autoFocus={true}
                               value={statusText} />}
           {!editMode && <span className={statusTextStyle} 
                               onClick={controlPanels ? activateEditMode: ()=>{}}>{statusText}</span>}            
         </div>
};

Status.propTypes = {
  controlPanels: PropTypes.bool,
  activateEditMode: PropTypes.func,
  editMode: PropTypes.bool,
  deActivateEditModeEnterOrEsc: PropTypes.func,
  onStatusChange: PropTypes.func,
  deActivateEditMode: PropTypes.func,
  statusText: PropTypes.string,
}

export default Status;