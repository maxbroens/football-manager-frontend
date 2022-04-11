import React from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux"
import PlayersOverview from "./PlayersOverview";
import {Paper} from "@material-ui/core";
import FieldPlayer from "./FieldPlayer";
import SubsPlayer from "./SubsPlayer";

export default function TeamOverview() {
  const user = useSelector(state => state.auth.user);
  const team = useSelector(state => state.team);

  if (!user) {
    return <Redirect to="/"/>;
  }

  function PlayersList(props) {
    const {list, cname} = props;
    const v = list.map((pl) =>
        <FieldPlayer key={pl.id} team={team} player={pl}/>
    );

    return (
        <div className={cname}>{v}</div>
    );
  }

  function SubstitutesList(props) {
    const {list} = props;
    const v = list.substitutes.map((pl) =>
        <div className="subs-player" key={pl.id}>
          <SubsPlayer key={pl.id} playerName={pl.firstName} club={pl.club}/>
        </div>
    );

    return (
        <div className="subs">{v}</div>
    );
  }

  if (team) {
    return (
        <>
          <div className="tactics">
            <Paper elevation={10} className="tactics-settings">
              <div className="tactics-settings-header">Instellingen</div>
            </Paper>
            <div>
              <div className="teamOverview-header">Opstelling</div>
              <div className="teamOverview">
                <div className="teamOverviewLine"><PlayersList list={team.strikers} cname="attack"/></div>
                <div className="teamOverviewLine"><PlayersList list={team.midfielders} cname="midfield"/></div>
                <div className="teamOverviewLine"><PlayersList list={team.defenders} cname="defence"/></div>
                <div className="teamOverviewLine"><PlayersList list={team.goalkeepers} cname="goalkeeper"/></div>
              </div>
            </div>
            <Paper elevation={4} className="tactics-substitutes">
              <div className="tactics-substitutes-header">Wissels</div>
              <SubstitutesList list={team}/>
            </Paper>
            <PlayersOverview/>
          </div>

        </>
    );
  } else {
    return (
        <>
          <div>loading</div>
        </>
    );
  }
}