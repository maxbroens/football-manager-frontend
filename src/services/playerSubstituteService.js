const KEYS = {
  subs: "subs",
  enabledSelection: "enabledSelection",
};

export async function getEnabledButtons() {
  let enabledSelection = JSON.parse(localStorage.getItem(KEYS.enabledSelection));
  if (enabledSelection == null) {
    enabledSelection = {
      strikers: true,
      midfielders: true,
      defenders: true,
      goalkeepers: true,
      substitutes: true,
      fieldPlayers: true,
    };
    localStorage.setItem(KEYS.enabledSelection, JSON.stringify(enabledSelection));
  }

  return enabledSelection;
}

export function selectPlayer(props) {
  const {team, player, isFieldPlayer} = props;
  const currentSelection = localStorage.getItem(KEYS.subs);
  const STRIKER = "STRIKER";
  const MIDFIELDER = "MIDFIELDER";
  const DEFENDER = "DEFENDER";
  const GOALKEEPER = "GOALKEEPER";
  const SUBSTITUTE = "SUBSTITUTE";
  const FIELDPLAYER = "FIELDPLAYER";

  const initial = {
    player1: "",
    player1Pos: "",
    player2: "",
    player2Pos: "",
  };

  const getAllowed = (currentSelection, team, player) => {
    let result = {};

    const isAllowed = (isFieldPlayer, playerPosition, posAsString) => {
      const maxStrikers = 3;
      const maxMidfielders = 5;
      const maxDefenders = 5;
      const maxGoalKeepers = 1;

      if (isFieldPlayer) {
        if (posAsString === FIELDPLAYER) {
          return true;
        }
      }

      //is substitute
      else {
        //if player pos == posAsString, then allowed
        if (posAsString === SUBSTITUTE || playerPosition === posAsString) {
          return true;
        }

        //else, pos != posAsString then validate numberOfSelected
        else {
          if (playerPosition === STRIKER) {
            return team.strikers.length < maxStrikers;
          } else if (playerPosition === MIDFIELDER) {
            return team.midfielders.length < maxMidfielders;
          } else if (playerPosition === DEFENDER) {
            return team.defenders.length < maxDefenders;
          } else if (playerPosition === GOALKEEPER) {
            return team.goalkeepers.length < maxGoalKeepers;
          }
        }
      }
    }

    if (currentSelection == null) {
      result = {
        strikers: isAllowed(isFieldPlayer, player.playerPosition, STRIKER),
        midfielders: isAllowed(isFieldPlayer, player.playerPosition, MIDFIELDER),
        defenders: isAllowed(isFieldPlayer, player.playerPosition, DEFENDER),
        goalkeepers: isAllowed(isFieldPlayer, player.playerPosition, GOALKEEPER),
        substitutes: isAllowed(isFieldPlayer, player.playerPosition, SUBSTITUTE),
        fieldPlayers: isAllowed(isFieldPlayer, player.playerPosition, FIELDPLAYER),
      };

      localStorage.setItem(KEYS.enabledSelection, JSON.stringify(result));
    }

    return result;
  }

  if (currentSelection == null) {
    console.log(player);
    // const allowed = getAllowed(currentSelection, team, player, isFieldPlayer);

    initial.player1 = player;
    initial.player1isFieldPlayer = isFieldPlayer;
    localStorage.setItem(KEYS.subs, JSON.stringify(initial));

    return initial;
  }

  return getAllowed(currentSelection, team, player, isFieldPlayer);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  selectPlayer, getEnabledButtons
};