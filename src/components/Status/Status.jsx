import React from "react";
import style from "./Status.module.scss";

const Status = ({lookingAtMyProfile, activateEditMode, editMode, deActivateEditModeEnterOrEsc, onStatusChange, deActivateEditMode, statusText}) => {
  activateEditMode = lookingAtMyProfile ? activateEditMode: ()=>{};
  let statusTextStyle = lookingAtMyProfile ? style.statusText: "";
  
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