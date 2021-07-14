import React, {useState} from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import ProfileDescription from "./ProfileDescription";
import ProfilePicture from "./ProfilePicture";
import Posts from "./Posts";
import ButtonFollowUnfollow from "../ButtonFollowUnfollow";
import ButtonStartCommunication from "../ButtonStartCommunication";
import Box from "@material-ui/core/Box";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        height: 'min-content',
    },
    profileContainer: {
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap"
        },
        [theme.breakpoints.up('md')]: {
            flexWrap: "noWrap"
        },
        [theme.breakpoints.up('lg')]: {
            flexWrap: "noWrap"
        },
    },
    setEditModeButton: {
        margin: "10px 0 0",
        fontWeight: "normal",
    }
}));

const Profile = (props) => {
    const {
        profile, follow, unfollow,
        startCommunication, questPageControlPanel, isAuth, saveProfile, ownerPageControlPanel
    } = props;
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);

    const onSubmitProfileInfo = async (formData) => {
        await saveProfile(formData);
        setEditMode(false);
    }

    if (!profile) return <></>;

    return (<>
        <Grid container
              display={"flex"}
              className={classes.profileContainer}>
            {!editMode &&
            <Box p={2}
                 my={2}
                 className={classes.root}>
                <ProfilePicture/>
                {ownerPageControlPanel &&
                <Button className={classes.setEditModeButton}
                        fullWidth
                        onClick={() => setEditMode(true)}
                >
                    Редактировать
                </Button>}
            </Box>}
            <ProfileDescription editMode={editMode}
                                onSubmitProfileInfo={onSubmitProfileInfo}
                                setEditMode={setEditMode}/>
        </Grid>
        {questPageControlPanel && <ButtonFollowUnfollow follow={follow}
                                                        unfollow={unfollow}
                                                        friend={""}
                                                        userId={profile.userId}/>}
        {questPageControlPanel && <ButtonStartCommunication startCommunication={startCommunication}
                                                            userId={profile.userId}/>}
        {!editMode && <Posts profile={profile}/>}
    </>);
};

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    follow: PropTypes.func.isRequired,
    unfollow: PropTypes.func.isRequired,
    startCommunication: PropTypes.func.isRequired,
    controlPanels: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired,
}

export default Profile;