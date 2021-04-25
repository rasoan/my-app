import React from "react";
import PropTypes from "prop-types";
import style from "./ButtonAuthorization.module.scss";
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
import { Link } from '@material-ui/core';

const ButtonAuthorization = (props) => {
    const {onClickF = () => null, srcImg, text, isAuth} = props;
    return <>
        {isAuth && <Button variant="contained"
                           color="primary"
                           onClick={onClickF}>
            <img className={style.authorizationImg} alt={"authorization"} src={srcImg} width={100} height={100}/>
            <p className={style.authorizationText}>{text}</p>
        </Button>}

        {!isAuth && <NavLink onClick={onClickF}
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