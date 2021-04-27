import React from "react";
import PropTypes from "prop-types";
import style from "./AuthorizationPanel.module.scss";
import ButtonAuthorization from '../ButtonAuthorization';
import {SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from '../../constants/Authorization';
import MUButton from "../Button";
import {NavLink} from 'react-router-dom';
import {
    Avatar,
    Menu,
    MenuItem,
    Link,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Email from '@material-ui/icons/Email';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    exit: {
        justifyContent: 'center',
    },
    buttonAvatar: {
        marginRight: '10px',
    },
    login: {
        color: '#3f51b5',
        textTransform: 'none',
    }
}));

const AuthorizationPanel = (props) => {
    const {isAuth, authorizationInfo, logOut, photos} = props;
    const classes = useStyles(props);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<div className={style.authorizationPanelWrapper}>
        {isAuth && <div className={style.authorizationPanel}>
            <Button  onClick={handleClick}>
                <Avatar className={classes.buttonAvatar} alt="User" src={photos && photos.small}/>
                <Typography className={classes.login} variantMapping={Button}>{authorizationInfo.login}</Typography>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PermIdentity/>
                        </ListItemIcon>
                        <ListItemText primary={"Айди: " + authorizationInfo.userId}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Email/>
                        </ListItemIcon>
                        <ListItemText primary={"Почта: " + authorizationInfo.email}/>
                    </ListItem>
                </List>
                <MenuItem className={classes.exit}
                          onClick={() => {
                              handleClose();
                              logOut();
                          }}>
                    Выйти
                </MenuItem>
            </Menu>
        </div>}
        {!isAuth && <div className={style.authorizationPanel}>
            <Link component={NavLink}
                  to="/authorization"
                  variant={"button"}>
                Авторизация
            </Link>
        </div>}
    </div>);
};

AuthorizationPanel.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    authorizationInfo: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
    photos: PropTypes.object,
}

export default AuthorizationPanel;