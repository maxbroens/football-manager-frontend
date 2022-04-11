import React from 'react'
import {Route, Switch} from "react-router";
import LoginPage from "./users/LoginPage";
import MainPage from "./main/MainPage";
import Profile from "./users/Profile";
import ClubsOverview from "./team/ClubsOverview";
import TeamOverview from "./team/TeamOverview";

export default function MainCenter() {

  return (
      <div className="mainCenter">
        <Switch>
          <Route exact path={["/"]} component={LoginPage}/>
          <Route exact path={["/main"]} component={MainPage}/>
          <Route exact path={["/profile"]} component={Profile}/>
          <Route exact path={["/clubs"]} component={ClubsOverview}/>
          <Route exact path={["/team"]} component={TeamOverview}/>
        </Switch>
      </div>
  )
}
