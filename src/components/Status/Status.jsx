import React from "react";
import style from "./Status.module.scss";


const Status = (props) => {
  let activateEditMode = props.lookingAtMyProfile ? props.activateEditMode: ()=>{};
  let statusTextStyle = props.lookingAtMyProfile ? style.statusText: "";
  
  return <div className={style.statusTextContainer}>
           {props.editMode && <input className={style.inputStatusText}
                                     onFocus={(event) => event.target.select()}
                                     onKeyDown={(e) => props.deActivateEditModeEnterOrEsc(e)}
                                     onBlur={props.deActivateEditMode}
                                     onChange={(e) => props.onStatusChange(e.target.value)} 
                                     type="text"
                                     autoFocus={true}
                                     value={props.statusText} />}
           {!props.editMode && <span className={statusTextStyle} 
                                       onClick={activateEditMode}>{props.statusText}</span>}
                               
         </div>
};

export default Status;
