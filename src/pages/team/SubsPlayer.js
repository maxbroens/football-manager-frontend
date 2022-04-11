import React from "react";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import CloseIcon from '@material-ui/icons/Close';

import Button from "../../components/controls/Button";

export default function SubsPlayer(props) {

  const {playerName, club, nickName, playerPosition} = props;

  return (
      <div className="fieldPlayer">
        <div className="jersey"><img alt={club.name} src={"jerseys/" + club.icon}/></div>
        <div className="bottomBar">
          <Button startIcon={<AutorenewIcon/>} size="small" style={{
            left: '0px',
          }}/>
          <div className="playerName">{playerName}</div>

          <Button startIcon={<CloseIcon/>} size="small" style={{
            backgroundColor: '#1e4909',
            right: '0px',
          }}/></div>
      </div>
  );
}