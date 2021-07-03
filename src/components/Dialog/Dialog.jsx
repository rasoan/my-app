import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const MyDialog = (props) => {
    const {toggleDialog, isOpenDialog} = props;

    return (
        <Dialog onClose={() => toggleDialog(false)} aria-labelledby="simple-dialog-title" open={isOpenDialog}>
            <DialogTitle id="simple-dialog-title">Оба, дарова</DialogTitle>
            Привет мир
        </Dialog>
    );
}

MyDialog.propTypes = {
    toggleDialog: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default MyDialog;