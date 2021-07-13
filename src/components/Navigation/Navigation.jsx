import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import PATH from "../../constants/path";
import {ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import {LocalLibrary, MusicNote, PeopleOutline, Person, Send, Settings} from "@material-ui/icons";


const drawerWidth = 200;

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
        marginTop: '20px',
        minHeight: '0 !important',
        height: '0 !important',
    },
    toolbarMobile: {
        marginTop: '90px',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#edeef0 !important',
        border: "none",
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
        display: "flex",
        alignItems: "center",
        padding: '8px 0',
        width: '100%',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    listItem: {
        padding: 0,
        '& span, & svg': {
            fontSize: "0.8rem",
        }
    },
    listItemIcon: {
        minWidth: 35,
        color: "#3f51b5",
    },
    divider: {
        width: "60%",
    }
}));


const MyDrawer = (props) => {
    const {classes, classToolbar, clickProfileLink} = props;

    return (
        <div>
            <div className={classToolbar}/>
            <List>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                          className={classes.navLink}
                          onClick={clickProfileLink}
                          to={PATH.PROFILE}>
                        <ListItemIcon className={classes.listItemIcon}><Person/></ListItemIcon>
                        <ListItemText primary={"Профайл"}/>
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                          className={classes.navLink}
                          to={PATH.DIALOGS}>
                        <ListItemIcon className={classes.listItemIcon}><Send/></ListItemIcon>
                        <ListItemText primary={"Сообщения"}/>
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                          className={classes.navLink}
                          to={PATH.NEWS}>
                        <ListItemIcon className={classes.listItemIcon}><LocalLibrary/></ListItemIcon>
                        <ListItemText primary={"Новости"}/>
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                          className={classes.navLink}
                          to={PATH.MUSIC}>
                        <ListItemIcon className={classes.listItemIcon}><MusicNote/></ListItemIcon>
                        <ListItemText primary={"Музыка"}/>
                    </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                          className={classes.navLink}
                          to={PATH.USERS}>
                        <ListItemIcon className={classes.listItemIcon}><PeopleOutline/></ListItemIcon>
                        <ListItemText primary={"Людины"}/>
                    </Link>
                </ListItem>
            </List>
            <Divider variant={"middle"} className={classes.divider}/>
            <List>
                <ListItem button className={classes.listItem}>
                    <Link component={NavLink}
                          className={classes.navLink}
                          to={PATH.SETTINGS}>
                        <ListItemIcon className={classes.listItemIcon}><Settings/></ListItemIcon>
                        <ListItemText primary={"Настройки"}/>
                    </Link>
                </ListItem>
            </List>
        </div>);
}

const Navigation = (props) => {
    const {clickProfileLink, navigationPanel, toggleNavigationPanel} = props;
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();


    const container = window !== undefined ? () => window().document.body : undefined;

    return (<div className={classes.navigationPanelZindex}>
        <div className={classes.root}>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={navigationPanel}
                        classes={{
                            paper: classes.drawerPaper,
                            root: classes.navigationPanelZindex,
                            modal: classes.navigationPanelZindex,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                            onEscapeKeyDown: toggleNavigationPanel,
                            onBackdropClick: toggleNavigationPanel,
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
                        open={navigationPanel}
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