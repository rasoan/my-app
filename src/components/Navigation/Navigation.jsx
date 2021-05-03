import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.scss";
import PATH from "../../constants/path";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },

    // necessary for content to be below app bar
    toolbar: {
        ...theme.mixins.toolbar,
        marginTop: '10px',
        minHeight: '0 !important',
        height: '0 !important',
    },
    toolbarMobile: {
        marginTop: '80px',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerPaperLarge: {
        position: "static",
    },
    drawerPaperMobile: {},
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navigationPanelZindex: {
        zIndex: '1 !important',
    },
    navLink: {
        padding: '5px 0',
        width: '100%',
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    listItem: {
      padding: 0,
    },
}));

const MyDrawer = (props) => {
    const {classes, classToolbar, clickProfileLink} = props;

    return (
        <div>
            <div className={classToolbar}/>
            <List>
                <ListItem button className={classes.listItem}>
                    <Link    component={NavLink}
                             className={classes.navLink}
                             onClick={clickProfileLink}
                             to={PATH.PROFILE}>
                        Profile
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                             activeClass={classes.navLink}
                             className={classes.navLink}
                             to={PATH.DIALOGS}>
                        Dialogs
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                             activeClass={classes.navLink}
                             className={classes.navLink}
                             to={PATH.NEWS}>
                        News
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                             activeClass={classes.navLink}
                             className={classes.navLink}
                             to={PATH.MUSIC}>
                        Music
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                             activeClass={classes.navLink}
                             className={classes.navLink}
                             to={PATH.USERS}>
                        Users
                    </Link>
                </ListItem>

            </List>
            <Divider/>
            <List>
                <ListItem button>
                    <Link component={NavLink}
                             activeClass={classes.navLink}
                             className={classes.navLink}
                             to={PATH.SETTINGS}>
                        Settings
                    </Link>
                </ListItem>
            </List>
        </div>);
}

const Navigation = (props) => {
    const {clickProfileLink, navigationPanelVisibility, toggleNav} = props;
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();


    const container = window !== undefined ? () => window().document.body : undefined;

    return (<div className={classes.navigationPanelZindex}>
        <div className={classes.root}>
            <CssBaseline/>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={navigationPanelVisibility}
                        classes={{
                            paper: classes.drawerPaper,
                            root: classes.navigationPanelZindex,
                            modal: classes.navigationPanelZindex,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                            onEscapeKeyDown: toggleNav,
                            onBackdropClick: toggleNav,
                        }}
                    >
                        <MyDrawer classes={classes} classToolbar={`${classes.toolbar}  ${classes.toolbarMobile}`}/>
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: `${classes.drawerPaper} ${classes.drawerPaperLarge}`,
                        }}
                        variant="permanent"
                        open={navigationPanelVisibility}
                    >
                        <MyDrawer classes={classes}
                                  classToolbar={classes.toolbar}
                                  clickProfileLink={clickProfileLink}/>
                    </Drawer>
                </Hidden>
            </nav>

        </div>
    </div>);
}

Navigation.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    clickProfileLink: PropTypes.func.isRequired,
};

export default Navigation;