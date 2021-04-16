import React from "react";
import style from "./AuthorizationItem.module.scss";
import {NavLink} from 'react-router-dom';

const AuthorizationItem = ({onClickF, srcImg, text}) => {
    return (<NavLink onClick={onClickF}
                     activeClassName={""}
                     className={style.authorizationItem} 
                     to={"/authorization"}>
               <img className={style.authorizationImg} alt={"authorization"} src={srcImg} width={100} height={100} />
               <p className={style.authorizationText}>{text}</p>
             </NavLink>);
};

export default AuthorizationItem;