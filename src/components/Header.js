import {AppBar, Badge, Grid, IconButton, makeStyles, Toolbar,} from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import {Link, Redirect} from "react-router-dom";
import Button from "./controls/Button";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../actions/auth";
import {history} from "../helpers/history";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff"
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
    '&:hover': {
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px'
    }
  },
});

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  function openProfilePage() {
    history.push("/profile");
    window.location.reload();
  }

  function logOut() {
    dispatch(logout())
        .then(() => {
          history.push("/");
          window.location.reload();
        })
  }

  return (
      <>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item sm></Grid>
              <Grid item>
                <IconButton>
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsNoneIcon fontSize="small"/>
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={3} color="primary">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                  </Badge>
                </IconButton>
                <Link to={"/"}>Home</Link>
                {user && (<Button text="User" onClick={openProfilePage}/>)}
                {user && (<Button text="Logout" onClick={logOut}/>)}

              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
  );
}
