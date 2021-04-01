import React from "react";
import style from "./AuthorizationItem.module.scss";
import {NavLink} from 'react-router-dom';

const AuthorizationItem = (props) => {
    return (<NavLink onClick={props.onClickF}
                     activeClassName={""}
                     className={style.authorizationItem} 
                     to={"/authorization"}>
               <img className={style.authorizationImg} alt={"authorization"} src={props.srcImg} width={100} height={100} />
               <p className={style.authorizationText}>{props.text}</p>
             </NavLink>);
};

export default AuthorizationItem;