import PlayersService from "./players.service";

const KEYS = {
  players: "players",
};

export async function getAllPlayers() {

  if (localStorage.getItem(KEYS.players) == null) {
    const result = await PlayersService.getAllPlayers();
    localStorage.setItem(KEYS.players, JSON.stringify(result.data));
    return result.data;

  } else {
    return JSON.parse(localStorage.getItem(KEYS.players));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllPlayers,
};