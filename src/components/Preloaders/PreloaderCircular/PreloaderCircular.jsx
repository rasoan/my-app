import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const PreloaderCircular = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="primary" />
        </div>
    );
}

export default PreloaderCircular;