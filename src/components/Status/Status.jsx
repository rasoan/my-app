import React from "react";
import style from "./Status.module.scss";
let newStatusElement = React.createRef();

const Status = (props) => {
  let activateEditMode = props.lookingAtMyProfile ? props.activateEditMode.bind(this): ()=>{};
  let statusTextStyle = props.lookingAtMyProfile ? style.statusText: "";

  return <div className={style.statusTextContainer}>
           {props.editMode && <input className={style.inputStatusText}
                                     ref={newStatusElement}
                                     onFocus={(event) => event.target.select()}
                                     onKeyDown={(e) => props.deActivateEditModeEnterDown(e)}
                                     onBlur={props.deActivateEditMode}
                                     onChange={() => props.onStatusChange(newStatusElement.current.value)} 
                                     type="text"
                                     autoFocus={true}
                                     value={props.statusText} />}
           {!props.editMode && <span className={statusTextStyle} 
                                       onClick={activateEditMode}>{props.statusText}</span>}
                               
         </div>
};

export default Status;
