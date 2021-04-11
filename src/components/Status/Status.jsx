import React from "react";
import style from "./Status.module.scss";

const Status = ({controlPanels, activateEditMode, editMode, deActivateEditModeEnterOrEsc, onStatusChange, deActivateEditMode, statusText}) => {
  activateEditMode = controlPanels ? activateEditMode: ()=>{};
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
                               onClick={activateEditMode}>{statusText}</span>}            
         </div>
};

export default Status;