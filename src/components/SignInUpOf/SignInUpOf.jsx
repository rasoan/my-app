import React from "react";
import style from "./SignInUpOf.module.scss";
import {NavLink} from 'react-router-dom';

const SignInUpOf = (props) => {
  return  <NavLink onClick={props.onClickFunc}
                   activeClassName={""}
                   className={""} 
                   to={props.navlinkTo}>
            <img src={props.imgSrc} width={100} height={100} />
            <p>{props.text}</p>
          </NavLink>

};

export default SignInUpOf;