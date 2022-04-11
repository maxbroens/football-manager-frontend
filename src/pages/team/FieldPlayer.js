import React, {useEffect, useState} from "react";
import Button from "../../components/controls/Button";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import CloseIcon from "@material-ui/icons/Close";
import playerSubstituteService, {getEnabledButtons} from "../../services/playerSubstituteService";
import {useSelector} from "react-redux";

export default function FieldPlayer(props) {
  const {team, player} = props;
  const STRIKER = "STRIKER";
  const MIDFIELDER = "MIDFIELDER";
  const DEFENDER = "DEFENDER";
  const GOALKEEPER = "GOALKEEPER";
  const SUBSTITUTE = "SUBSTITUTE";
  const FIELDPLAYER = "FIELDPLAYER";
  const [enabledButtons, setEnabledButtons] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = useSelector(state => state.auth.user);

  const handleSubstitute = (team, player) => {
    const props = {team: team, player: player, isFieldPlayer: true};
    setEnabledButtons(playerSubstituteService.selectPlayer(props));
  };

  useEffect(() => {
    if (enabledButtons === null) {
      async function getEnabledBtns() {
        return getEnabledButtons();
      }

      getEnabledBtns().then((result) => {
        setEnabledButtons(result);
        setLoading(false);
      });
    }
  }, [enabledButtons])

  const getDisabled = (pos) => {
    let disabled = true;
    if (pos === STRIKER) {
      disabled = !enabledButtons.strikers;
    }
    if (pos === MIDFIELDER) {
      disabled = !enabledButtons.midfielders;
    }
    if (pos === DEFENDER) {
      disabled = !enabledButtons.defenders;
    }
    if (pos === GOALKEEPER) {
      disabled = !enabledButtons.goalkeepers;
    }
    return disabled;
  }

  if (!loading) {
    return (
        <div className="fieldPlayer">
          <div className="jersey"><img alt={player.club.name} src={"jerseys/" + player.club.icon}/></div>
          <div className="bottomBar">
            <Button startIcon={<AutorenewIcon/>} size="small" style={{
              left: '0px',
            }} onClick={() => handleSubstitute(team, player)} disabled={getDisabled(player.playerPosition)}/>
            <div className="playerName">{player.firstName}</div>

            <Button startIcon={<CloseIcon/>} size="small" style={{
              backgroundColor: '#1e4909',
              right: '0px',
            }}/></div>
        </div>
    );
  } else {
    return (
        <>
          <div>loading</div>
        </>
    );
  }
}