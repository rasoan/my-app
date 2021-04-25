import React from "react";
import PropTypes from "prop-types";
import style from "./ButtonAuthorization.module.scss";
import {NavLink} from 'react-router-dom';

const ButtonAuthorization = (props) => {
    const {onClickF = () => null, srcImg, text, isAuth} = props;
    return <>
        {isAuth && <button onClick={onClickF}
                           activeClassName={""}
                           className={style.authorizationItem}>
            <img className={style.authorizationImg} alt={"authorization"} src={srcImg} width={100} height={100}/>
            <p className={style.authorizationText}>{text}</p>
        </button>}
        {!isAuth && <NavLink onClick={onClickF}
                             activeClassName={""}
                             className={style.authorizationItem}
                             to={"/authorization"}>
            <img className={style.authorizationImg} alt={"authorization"} src={srcImg} width={100} height={100}/>
            <p className={style.authorizationText}>{text}</p>
        </NavLink>}
    </>;
};

ButtonAuthorization.propTypes = {
    srcImg: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

ButtonAuthorization.defaultProps = {
    onClickF: () => null,
};

export default ButtonAuthorization;