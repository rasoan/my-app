import React from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import {Input, makeStyles, TextField, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    textField: {
        '& textarea': {
            lineHeight: 1.5,
            padding: "0 12px 0 12px",
        },
        '& *': {
            '&::after': {
                borderColor: "black",
            },
            '&::before': {
                borderColor: "black",
            },
        }
    },
    statusTextViewModeContainer: {
        display: "flex",
        justifyContent: "center",
        padding: "6px 0 6px",
    },
    statusTextViewModeContainerHoverEffect: {
        '&:hover': {
            cursor: "pointer",
            backgroundColor: "#edeef0",
        },
    },
    statusTextViewMode: {
        wordWrap: "break-word",
        width: "96%",
    }
});

const Status = (props) => {
    const {
        ownerPageControlPanel, activateEditMode, editMode,
        deActivateEditModeEnterOrEsc, onStatusChange,
        deActivateEditMode, statusText
    } = props;
    const classes = useStyles();

    let statusTextStyle = ownerPageControlPanel ? style.statusText : "";
    return <>
        {editMode && <TextField
            className={classes.textField}
            onFocus={(event) => event.target.select()}
            onKeyDown={(e) => deActivateEditModeEnterOrEsc(e)}
            onBlur={deActivateEditMode}
            onChange={(e) => onStatusChange(e.target.value)}
            multiline
            fullWidth
            inputProps={{maxLength: 300}}
            autoFocus={true}
            value={statusText}/>}

        {!editMode &&
        <Box className={`${classes.statusTextViewModeContainer} ${ownerPageControlPanel && classes.statusTextViewModeContainerHoverEffect}`}
             onClick={ownerPageControlPanel ? activateEditMode : () => {
             }}>
            <Typography className={classes.statusTextViewMode} component={"span"}>{statusText}</Typography>
        </Box>}
        {!editMode && <Divider/>}
    </>
};

Status.propTypes = {
    controlPanels: PropTypes.bool,
    activateEditMode: PropTypes.func,
    editMode: PropTypes.bool,
    deActivateEditModeEnterOrEsc: PropTypes.func,
    onStatusChange: PropTypes.func,
    deActivateEditMode: PropTypes.func,
    statusText: PropTypes.string,
}

export default Status;