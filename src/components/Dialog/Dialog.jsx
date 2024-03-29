import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {DialogContent} from "@material-ui/core";

const MyDialog = ({toggleDialog, isOpenDialog, dialogTittle, dialogContent}) => {

    return (
        <Dialog onClose={ () => toggleDialog(false)} aria-labelledby="simple-dialog-title" open={isOpenDialog}>
            <DialogTitle id="simple-dialog-title" align={"center"}>
                {dialogTittle}
            </DialogTitle>
            <DialogContent dividers>
              {dialogContent}
            </DialogContent>
            <button onClick={() => toggleDialog(false)} />
        </Dialog>
    );
}


export default MyDialog;