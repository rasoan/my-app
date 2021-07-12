import React from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import Status from "../Status";
import {Box, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
    },
    setEditModeButton: {
        margin: "10px 0",
        backgroundColor: "#edeef0",
        color: "black",
        fontWeight: "normal",
        '&:hover': {
            backgroundColor: "#dfe1e4",
        }
    },
    fullName: {
        marginBottom: 4,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    listItemContainer: {
        width: "100%"
    },
    collapsibleButtonLinks: {
        display: "flex",
        justifyContent: "space-between",
        '&:hover': {
            backgroundColor: theme.backgroundColors.mainBackgroundColor,
        }
    }
}));

const ProfileDescriptionViewMode = (props) => {
    const {profile} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (<>
            <Box p={2} m={2} width={540} height={"min-content"} className={classes.root}>
                <Box mb={2}>
                    <Typography className={classes.fullName} variant={"h5"}
                                component={"p"}>{profile.fullName}</Typography>
                    <Status/>
                </Box>
                <List disablePadding>
                    {profile.lookingForAJob && <ListItem>
                        <Typography><b>Работа: </b>{profile.lookingForAJobDescription}</Typography>
                    </ListItem>}
                    <ListItem>
                        <Typography><b>О себе:</b> {profile.aboutMe}</Typography>
                    </ListItem>
                        <Divider/>
                    <ListItem style={{display: "block"}}>
                        <Button onClick={handleClick}
                                fullWidth
                                className={classes.collapsibleButtonLinks}>
                            <Box display={"flex"}>
                                <InsertLinkIcon style={{marginRight: 10}}/>
                                <Typography>Мои социальные сети:</Typography>
                            </Box>
                            {open ? <ExpandLess/> : <ExpandMore/>}
                        </Button>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List style={{paddingBottom: 0}}>
                                {profile?.contacts && Object.keys(profile.contacts).map((key, i) => {
                                    return (<>
                                        {profile.contacts[key] && <ListItem key={i + key}>
                                            <ListItemText>
                                                <Typography><b>{key}: </b>{profile.contacts[key]}</Typography>
                                            </ListItemText>
                                        </ListItem>}
                                    </>)
                                })}
                            </List>
                            <Divider/>
                        </Collapse>
                    </ListItem>
                </List>
            </Box>
        </>
    );
}

ProfileDescriptionViewMode.propTypes = {
    profile: PropTypes.object,
    toggleSetEditMode: PropTypes.func,
    ownerPageControlPanel: PropTypes.bool,
}

export default ProfileDescriptionViewMode;