import React from 'react'
import {Dialog, DialogContent, DialogTitle, makeStyles} from "@material-ui/core";
import Button from "./controls/Button";

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: "absolute",
        top: theme.spacing(5)
    }
}));

export default function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props;

    const classes = useStyles();
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}}>
            <DialogTitle>
                <div style={{display: 'flex'}}>
                    <div style={{flexGrow:1}}>{title}</div>
                    <Button onClick={() => setOpenPopup(false)} color="secondary" text="X" size="small" />
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

        </Dialog>
    );
};