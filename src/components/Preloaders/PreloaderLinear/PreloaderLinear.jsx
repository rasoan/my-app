import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 2,
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const PreloaderLinear = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress color="primary" />
        </div>
    );
}

export default PreloaderLinear;