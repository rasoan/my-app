import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Email from '@material-ui/icons/Email';
import {makeStyles} from '@material-ui/core/styles';
import {setAvatarAuthPanelAC} from "../../redux/actions/creators/auth-creator";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("xs")]: {
            fontSize: 16
        },
    },
    iconRoot: {
        [theme.breakpoints.up("xs")]: {
            display: 'none',
        },
        [theme.breakpoints.up("sm")]: {
            display: 'block',
        },
    },
    exit: {
        color: '#3f51b5',
        textTransform: 'none',
        textAlign: 'center',
        width: '100%',
    },
    login: {
        color: '#3f51b5',
        textTransform: 'none',
        textAlign: 'center',
        width: '100%',
    },
    auth: {
        color: '#3f51b5',
        textTransform: 'none',
        textAlign: 'center',
        width: '100%',
    },
    avatar: {
        marginRight: '5px',
    },
    mainButton: {
        width: 'min-content',
        margin: '0 10px 0 auto',
        "&:hover": {
            textDecoration: 'none',
        }
    }
}));

const AuthorizationPanel = (props) => {
    const {isAuth, authorizationInfo, logOut, srcAvatarAuthPanel} = props;
    const classes = useStyles(props);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
        {isAuth && <>
            <Button className={classes.mainButton} onClick={handleClick}>
                {srcAvatarAuthPanel && <Avatar className={`${classes.iconRoot} ${classes.avatar}`} alt="User" src={srcAvatarAuthPanel}/>}
                <Typography className={`${classes.root} ${classes.login}`}
                            variantMapping={Button}>{authorizationInfo.login}</Typography>
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
                        <ListItemIcon className={classes.iconRoot}>
                            <PermIdentity/>
                        </ListItemIcon>
                        <ListItemText primary={"Айди: " + authorizationInfo.userId}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon className={classes.iconRoot}>
                            <Email/>
                        </ListItemIcon>
                        <ListItemText primary={"Почта: " + authorizationInfo.email}/>
                    </ListItem>
                </List>
                <MenuItem onClick={() => {
                    handleClose();
                    logOut();
                }}>
                    <Typography className={classes.exit}>Выйти</Typography>
                </MenuItem>
            </Menu>
        </>}
        {!isAuth && <>
            <Button className={classes.mainButton}
                    component={NavLink}
                    to="/authorization">
                <PermIdentity display="flex" className={`${classes.root} ${classes.iconRoot} ${classes.avatar}`}/>
                <Typography className={classes.root + ' ' + classes.auth}>Авторизация</Typography>
            </Button>
        </>}
    </>);
};

AuthorizationPanel.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    authorizationInfo: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
    photos: PropTypes.object,
}

export default AuthorizationPanel;