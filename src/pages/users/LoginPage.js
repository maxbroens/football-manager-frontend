import React from "react";
import Login from "../../components/Login";
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
      <Paper className={classes.pageContent}>
        <Login/>
      </Paper>
  );
}
